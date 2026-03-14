// ── Vote Service: Cast Votes, Calculate Results ──
import { rtdb } from './firebase';
import { ref, get, update, onValue, off } from 'firebase/database';
import { MATCH_STATUS, STAR_CHANGES } from '../utils/constants';
import { updateUserStars } from './userService';

/**
 * Cast a vote
 */
export async function castVote(matchId, userId, team) {
  const matchRef = ref(rtdb, `matches/${matchId}`);
  const snap = await get(matchRef);
  if (!snap.exists()) throw new Error('Match not found');

  const match = snap.val();
  if (match.status !== MATCH_STATUS.VOTING) throw new Error('Voting is not active');

  const previousVote = match.votes?.[userId];
  const voteUpdate = { [`votes/${userId}`]: team };

  // Update vote counts
  const counts = { ...match.voteCount };

  if (previousVote) {
    counts[previousVote] = Math.max(0, (counts[previousVote] || 0) - 1);
    counts.pending = (counts.pending || 0); // stays same since switching
  } else {
    counts.pending = Math.max(0, (counts.pending || 0) - 1);
  }
  counts[team] = (counts[team] || 0) + 1;

  voteUpdate.voteCount = counts;
  await update(matchRef, voteUpdate);

  // Check if all voted
  const totalPlayers = [
    ...(match.teams?.blue?.players || []),
    ...(match.teams?.red?.players || []),
  ];

  const updatedVotes = { ...(match.votes || {}), [userId]: team };
  const allVoted = totalPlayers.every(pid => updatedVotes[pid]);

  if (allVoted) {
    await calculateResults(matchId);
  }

  return { allVoted, counts };
}

/**
 * Calculate match results and update stars.
 * sport is read directly from the match record in RTDB so we never
 * have to pass it manually — it was written there by matchService.
 */
export async function calculateResults(matchId) {
  const matchRef = ref(rtdb, `matches/${matchId}`);
  const snap = await get(matchRef);
  if (!snap.exists()) return null;

  const match = snap.val();
  if (match.status === MATCH_STATUS.COMPLETED) return match.result;

  // ── Sport is stored on the match — use it to route star updates ──
  const sport = match.sport || 'basketball'; // safe fallback

  // ── Only ranked matches award/deduct stars and record W/L ──
  const isRanked = (match.gameMode || 'ranked') === 'ranked';

  const votes = match.votes || {};
  const blueVotes = Object.values(votes).filter(v => v === 'blue').length;
  const redVotes  = Object.values(votes).filter(v => v === 'red').length;

  let winner = null;
  if (blueVotes > redVotes) winner = 'blue';
  else if (redVotes > blueVotes) winner = 'red';
  // else deadlock → no winner

  const bluePlayers = match.teams?.blue?.players || [];
  const redPlayers  = match.teams?.red?.players  || [];
  const allPlayers  = [...bluePlayers, ...redPlayers];

  // Calculate star deltas for each player
  const starDeltas = {};

  for (const pid of allPlayers) {
    if (!isRanked) {
      // Non-ranked: no stars awarded, no penalty, no W/L recorded
      starDeltas[pid] = 0;
      continue;
    }

    const playerTeam = bluePlayers.includes(pid) ? 'blue' : 'red';
    const playerVote = votes[pid];
    const didVote    = !!playerVote;

    if (!winner) {
      starDeltas[pid] = 0;
    } else if (playerTeam === winner) {
      starDeltas[pid] = didVote ? STAR_CHANGES.WIN : STAR_CHANGES.NON_VOTER_WIN;
    } else {
      starDeltas[pid] = didVote ? STAR_CHANGES.LOSS : STAR_CHANGES.NON_VOTER_LOSS;
    }
  }

  // Update result in match
  await update(matchRef, {
    status: MATCH_STATUS.COMPLETED,
    result: {
      winner,
      blueVotes,
      redVotes,
      starDeltas,
      sport,          // store sport in result for ResultScreen context
      deadlock: !winner,
      completedAt: Date.now(),
    },
  });

  // Update each player's stars in Firestore — ranked only
  const updatePromises = isRanked
    ? Object.entries(starDeltas).map(([pid, delta]) => {
        if (delta !== 0) return updateUserStars(pid, delta, sport);
        return Promise.resolve();
      })
    : [];

  await Promise.allSettled(updatePromises);

  return { winner, blueVotes, redVotes, starDeltas, sport };
}

/**
 * Subscribe to vote updates for a match
 */
export function subscribeVotes(matchId, callback) {
  const votesRef = ref(rtdb, `matches/${matchId}`);
  onValue(votesRef, (snap) => {
    if (snap.exists()) {
      const data = snap.val();
      callback({
        votes:        data.votes        || {},
        voteCount:    data.voteCount    || {},
        status:       data.status,
        result:       data.result,
        voteExpiresAt: data.voteExpiresAt,
      });
    }
  });
  return () => off(votesRef);
}
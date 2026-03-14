// ── Match Service: Matchmaking, Accept/Decline, Court Assignment ──
import { rtdb, db } from './firebase';
import { ref, set, get, update, remove, onValue, off, runTransaction } from 'firebase/database';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { nanoid } from 'nanoid';
import { MATCH_STATUS, TIMERS, LOBBY_STATUS } from '../utils/constants';
import { getTeamSize } from '../utils/formatLogic';

/**
 * Start matchmaking — find compatible lobbies and create match
 * Simplified MVP: looks for another lobby in queue with same sport/location/format
 */
export async function findMatch(lobbyCode, format) {
  const lobbyRef = ref(rtdb, `lobbies/${lobbyCode}`);
  const lobbySnap = await get(lobbyRef);
  if (!lobbySnap.exists()) throw new Error('Lobby not found');

  const myLobby = lobbySnap.val();
  const teamSize = getTeamSize(format);

  // Set lobby to queued
  await update(lobbyRef, {
    status: LOBBY_STATUS.QUEUED,
    selectedFormat: format,
  });

  // Search for other queued lobbies with same criteria
  const lobbiesRef = ref(rtdb, 'lobbies');
  const allLobbiesSnap = await get(lobbiesRef);

  if (!allLobbiesSnap.exists()) return null;

  const allLobbies = allLobbiesSnap.val();
  const myPlayerIds = Object.keys(myLobby.players || {});

  // Find lobbies that can fill our team or form the opposing team
  const compatibleLobbies = [];

  for (const [code, lobby] of Object.entries(allLobbies)) {
    if (code === lobbyCode) continue;
    if (lobby.status !== LOBBY_STATUS.QUEUED) continue;
    if (lobby.sport !== myLobby.sport) continue;
    if (lobby.location !== myLobby.location) continue;
    if (lobby.selectedFormat !== format) continue;

    compatibleLobbies.push({ code, ...lobby });
  }

  if (compatibleLobbies.length === 0) return null; // Stay in queue

  // Simple MVP matchmaking: try to form two teams
  const myTeamLobbies = [{ code: lobbyCode, ...myLobby }];
  let myTeamSize = myPlayerIds.length;

  const opponentLobbies = [];
  let opponentSize = 0;

  // First, fill my team if needed
  for (const lobby of compatibleLobbies) {
    const lobbySize = lobby.playerCount || Object.keys(lobby.players || {}).length;

    if (myTeamSize < teamSize && myTeamSize + lobbySize <= teamSize) {
      myTeamLobbies.push(lobby);
      myTeamSize += lobbySize;
    } else if (opponentSize + lobbySize <= teamSize) {
      opponentLobbies.push(lobby);
      opponentSize += lobbySize;
    }

    if (myTeamSize >= teamSize && opponentSize >= teamSize) break;
  }

  // Check if we have enough players for both teams
  if (myTeamSize < teamSize || opponentSize < teamSize) return null;

  // Create the match
  const matchId = `match_${nanoid(8)}`;
  const teamA = [];
  const teamB = [];
  const teamALobbies = [];
  const teamBLobbies = [];

  for (const lobby of myTeamLobbies) {
    teamALobbies.push(lobby.code);
    for (const pid of Object.keys(lobby.players || {})) {
      teamA.push(pid);
    }
  }
  for (const lobby of opponentLobbies) {
    teamBLobbies.push(lobby.code);
    for (const pid of Object.keys(lobby.players || {})) {
      teamB.push(pid);
    }
  }

  // Build player info map
  const allPlayers = {};
  for (const lobby of [...myTeamLobbies, ...opponentLobbies]) {
    for (const [pid, pdata] of Object.entries(lobby.players || {})) {
      allPlayers[pid] = pdata;
    }
  }

  // Get a court from Firestore
  const courtId = await assignCourt(myLobby.sport, myLobby.location);

  const matchData = {
    matchId,
    sport: myLobby.sport,
    format,
    gameMode: myLobby.gameMode || 'ranked',
    location: myLobby.location,
    courtId,
    status: MATCH_STATUS.PENDING_ACCEPT,
    expiresAt: Date.now() + TIMERS.MATCH_ACCEPT * 1000,
    teams: {
      blue: { players: teamA, lobbies: teamALobbies },
      red: { players: teamB, lobbies: teamBLobbies },
    },
    players: allPlayers,
    acceptances: {},
    votes: {},
    voteCount: { blue: 0, red: 0, pending: teamA.length + teamB.length },
    result: null,
    createdAt: Date.now(),
  };

  await set(ref(rtdb, `matches/${matchId}`), matchData);

  // Update all lobbies to matched
  for (const lobby of [...myTeamLobbies, ...opponentLobbies]) {
    await update(ref(rtdb, `lobbies/${lobby.code}`), {
      status: LOBBY_STATUS.MATCHED,
      matchId,
    });
  }

  return matchData;
}

/**
 * Accept a match
 */
export async function acceptMatch(matchId, userId) {
  await update(ref(rtdb, `matches/${matchId}/acceptances`), {
    [userId]: true,
  });

  // Check if all accepted
  const snap = await get(ref(rtdb, `matches/${matchId}`));
  if (!snap.exists()) return false;

  const match = snap.val();
  const totalPlayers = [...(match.teams.blue.players || []), ...(match.teams.red.players || [])];
  const acceptances = match.acceptances || {};
  const allAccepted = totalPlayers.every(pid => acceptances[pid]);

  if (allAccepted) {
    await update(ref(rtdb, `matches/${matchId}`), {
      status: MATCH_STATUS.IN_PROGRESS,
    });
  }

  return allAccepted;
}

/**
 * Decline a match
 * NOTE: Using batched updates to prevent Firebase listener storm
 */
export async function declineMatch(matchId, userId) {
  // Mark user as declined
  await update(ref(rtdb, `matches/${matchId}/acceptances`), {
    [userId]: false,
  });

  // Get match data
  const snap = await get(ref(rtdb, `matches/${matchId}`));
  if (!snap.exists()) return;

  const match = snap.val();
  const allLobbyCodes = [
    ...(match.teams.blue.lobbies || []),
    ...(match.teams.red.lobbies || []),
  ];

  // CRITICAL FIX: Update match status FIRST, then update lobbies in a single batch
  // This prevents the listener storm
  await update(ref(rtdb, `matches/${matchId}`), {
    status: 'cancelled',
  });

  // Update all lobbies in parallel to minimize listener triggers
  const lobbyUpdates = allLobbyCodes.map(code => 
    update(ref(rtdb, `lobbies/${code}`), {
      status: LOBBY_STATUS.WAITING,
      matchId: null,
      selectedFormat: null,
    })
  );

  await Promise.all(lobbyUpdates);
}

/**
 * End match and transition to voting phase
 * Called when a host clicks "Match Over"
 */
export async function endMatch(matchId) {
  await update(ref(rtdb, `matches/${matchId}`), {
    status: MATCH_STATUS.VOTING,
    voteExpiresAt: Date.now() + TIMERS.VOTE_DURATION * 1000,
  });
}

/**
 * Transition match to voting phase (legacy - kept for compatibility)
 */
export async function startVoting(matchId) {
  await endMatch(matchId);
}

/**
 * Subscribe to match updates
 */
export function subscribeMatch(matchId, callback) {
  const matchRef = ref(rtdb, `matches/${matchId}`);
  onValue(matchRef, (snap) => {
    callback(snap.exists() ? snap.val() : null);
  });
  return () => off(matchRef);
}

/**
 * Get match data once
 */
export async function getMatch(matchId) {
  const snap = await get(ref(rtdb, `matches/${matchId}`));
  return snap.exists() ? snap.val() : null;
}

/**
 * Assign a court from Firestore locations
 */
async function assignCourt(sport, location) {
  try {
    const courtsRef = collection(db, 'courts');
    const q = query(courtsRef, where('sport', '==', sport));
    const snap = await getDocs(q);
    if (!snap.empty) {
      const courts = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      // Pick random available court
      const court = courts[Math.floor(Math.random() * courts.length)];
      const courtNumber = court.active_courts?.[Math.floor(Math.random() * court.active_courts.length)] || 1;
      return `${court.id}#${courtNumber}`;
    }
  } catch (err) {
    console.warn('Court assignment failed, using default:', err);
  }
  return 'default_court#1';
}
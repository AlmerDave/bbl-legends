import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useMatchStore from '../stores/useMatchStore';
import useUserStore from '../stores/useUserStore';
import { AVATAR_URLS, STAR_CHANGES } from '../utils/constants';
import { clearSession } from './HomeScreen';

export default function ResultScreen() {
  const [searchParams] = useSearchParams();
  const matchId = searchParams.get('id');
  const navigate = useNavigate();
  const userId = useUserStore((s) => s.userId);
  const match = useMatchStore();
  const isRanked = (match.gameMode || 'ranked') === 'ranked';
  const [countdown, setCountdown] = useState(90);

  // ── Clear session on mount — match completed successfully ────────────────────
  useEffect(() => {
    clearSession();
  }, []);

  // Auto-redirect countdown
  useEffect(() => {
    if (countdown <= 0) {
      handleReturn();
      return;
    }
    const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [countdown]);

  const handleReturn = () => {
    useMatchStore.getState().clearMatch();
    
    const bluePlayers = match.teams?.blue?.players || [];
    const redPlayers = match.teams?.red?.players || [];
    
    let userLobbyCode = null;
    
    if (bluePlayers.includes(userId)) {
      userLobbyCode = match.teams?.blue?.lobbies?.[0];
    } else if (redPlayers.includes(userId)) {
      userLobbyCode = match.teams?.red?.lobbies?.[0];
    }
    
    if (userLobbyCode) {
      navigate(`/lobby/${userLobbyCode}`);
    } else {
      navigate('/home');
    }
  };

  const result = match.result || {};
  const winnerTeam = result.winner;
  const isDeadlock = winnerTeam === 'deadlock';

  const winnerLabel = winnerTeam === 'blue' ? 'BLUE TEAM' : winnerTeam === 'red' ? 'RED TEAM' : 'NOBODY';
  const headerText = isDeadlock ? 'MATCH VOIDED - DEADLOCK!' : `MATCH COMPLETE - ${winnerLabel} WINS!`;

  const voteCount = match.voteCount || { blue: 0, red: 0, pending: 0 };

  const getStarChange = (playerId) => {
    const playerVote = match.votes?.[playerId];
    const isOnWinnerTeam =
      (winnerTeam === 'blue' && match.teams?.blue?.players?.includes(playerId)) ||
      (winnerTeam === 'red' && match.teams?.red?.players?.includes(playerId));

    if (isDeadlock) return 0;

    if (!playerVote) {
      return isOnWinnerTeam ? STAR_CHANGES.NON_VOTER_WIN : STAR_CHANGES.NON_VOTER_LOSS;
    }

    return isOnWinnerTeam ? STAR_CHANGES.WIN : STAR_CHANGES.LOSS;
  };

  const getVoteLabel = (playerId) => {
    const vote = match.votes?.[playerId];
    if (!vote) return 'Vote Pending...';
    return vote === 'blue' ? 'Voted: Blue Team' : 'Voted: Red Team';
  };

  const buildPlayerResults = () => {
    const allPlayerIds = [
      ...(match.teams?.blue?.players || []),
      ...(match.teams?.red?.players || []),
    ];
    return allPlayerIds.map((pid) => {
      const data = match.players?.[pid] || {};
      const starChange = getStarChange(pid);
      const vote = match.votes?.[pid];
      const isOnBlue = match.teams?.blue?.players?.includes(pid);
      return {
        id: pid,
        name: data.name || data.username || 'Player',
        avatar: data.avatar || 0,
        vote,
        voteLabel: getVoteLabel(pid),
        starChange,
        teamKey: isOnBlue ? 'blue' : 'red',
        isWinner: !isDeadlock && (
          (winnerTeam === 'blue' && isOnBlue) ||
          (winnerTeam === 'red' && !isOnBlue)
        ),
        isNonVoter: !vote,
      };
    });
  };

  const players = buildPlayerResults();

  const getStarChangeDisplay = (change) => {
    if (change > 0) return { text: `+${change}`, color: 'text-emerald-600 dark:text-emerald-400', animation: 'animate-bounce' };
    if (change < 0) {
      const severity = change <= -2 ? 'severe' : 'normal';
      return {
        text: `${change}`,
        color: severity === 'severe' ? 'text-rose-800 dark:text-rose-600 font-extrabold' : 'text-rose-600 dark:text-rose-400',
        animation: 'animate-pulse',
      };
    }
    return { text: '0', color: 'text-slate-500 dark:text-slate-400', animation: '' };
  };

  const getPlayerCardStyle = (player) => {
    if (player.isNonVoter) return 'bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-800 grayscale';
    if (player.isWinner) return 'bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800/50';
    return 'bg-rose-50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-800/50 opacity-90';
  };

  const getAvatarBorder = (player) => {
    if (player.isNonVoter) return 'border-slate-400';
    if (player.isWinner) return 'border-emerald-500';
    return player.starChange <= -2 ? 'border-rose-800' : 'border-rose-500/50';
  };

  const getVoteLabelColor = (player) => {
    if (player.isNonVoter) return 'text-slate-500 dark:text-slate-400';
    if (player.isWinner) return 'text-emerald-600 dark:text-emerald-400';
    return 'text-rose-600 dark:text-rose-400';
  };

  const getVoteIcon = (player) => {
    if (player.isNonVoter) return 'timer';
    return 'how_to_vote';
  };

  const bluePoints = voteCount.blue || 0;
  const redPoints = voteCount.red || 0;
  const winnerPoints = winnerTeam === 'blue' ? bluePoints : redPoints;
  const loserPoints = winnerTeam === 'blue' ? redPoints : bluePoints;

  return (
    <div className="relative flex h-screen w-full max-w-[480px] mx-auto flex-col overflow-hidden border-x border-slate-200 dark:border-slate-800 shadow-2xl">
      {/* Header */}
      <div className="flex items-center bg-primary p-4 pb-4 justify-between shadow-lg">
        <div
          onClick={handleReturn}
          className="text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-white/10 cursor-pointer"
        >
          <span className="material-symbols-outlined">close</span>
        </div>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center px-2">
          {headerText}
        </h2>
        <div className="size-10" />
      </div>

      {/* Scoreboard */}
      <div className="flex flex-wrap gap-3 p-4 bg-[#f8f6f6] dark:bg-[#221610] border-b border-slate-200 dark:border-slate-800">
        <div className="flex min-w-[100px] flex-1 flex-col gap-1 rounded-xl p-4 bg-emerald-500/10 border border-emerald-500/20 text-center">
          <p className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            {winnerTeam === 'blue' ? 'Blue Team' : 'Red Team'}
          </p>
          <p className="text-slate-900 dark:text-white text-3xl font-bold leading-tight">{winnerPoints}</p>
          {isRanked && <p className="text-emerald-600 dark:text-emerald-400 text-sm font-bold">+{winnerPoints} pts</p>}
        </div>
        <div className="flex min-w-[100px] flex-1 flex-col gap-1 rounded-xl p-4 bg-rose-500/10 border border-rose-500/20 text-center">
          <p className="text-rose-600 dark:text-rose-400 text-xs font-bold uppercase tracking-wider">
            {winnerTeam === 'blue' ? 'Red Team' : 'Blue Team'}
          </p>
          <p className="text-slate-900 dark:text-white text-3xl font-bold leading-tight">{loserPoints}</p>
          {isRanked && <p className="text-rose-600 dark:text-rose-400 text-sm font-bold">-{loserPoints} pts</p>}
        </div>
        <div className="flex min-w-[100px] flex-1 flex-col gap-1 rounded-xl p-4 bg-slate-500/10 border border-slate-500/20 text-center">
          <p className="text-slate-600 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">Pending</p>
          <p className="text-slate-900 dark:text-white text-3xl font-bold leading-tight">{voteCount.pending || 0}</p>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-bold">0</p>
        </div>
      </div>

      {/* Casual match notice */}
      {!isRanked && (
        <div className="px-4 pt-3 pb-1">
          <div className="flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3">
            <span className="material-symbols-outlined text-slate-500 dark:text-slate-400 text-base">sports_basketball</span>
            <p className="text-slate-600 dark:text-slate-400 text-xs font-bold uppercase tracking-widest">
              Casual Match — No Stars Awarded
            </p>
          </div>
        </div>
      )}

      {/* Section Header */}
      <div className="px-4 pt-6 pb-2">
        <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight">Player Performance & Votes</h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm">Detailed match breakdown</p>
      </div>

      {/* Players List */}
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-3 pb-32">
        {players.map((player) => {
          const starDisplay = getStarChangeDisplay(player.starChange);
          return (
            <div
              key={player.id}
              className={`flex items-center gap-4 border rounded-xl p-3 ${getPlayerCardStyle(player)}`}
            >
              <div className="relative">
                <div
                  className={`bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-14 border-2 ${getAvatarBorder(player)}`}
                  style={{ backgroundImage: `url("${AVATAR_URLS[player.avatar] || AVATAR_URLS[0]}")` }}
                />
              </div>
              <div className="flex flex-col flex-1">
                <p className="text-slate-900 dark:text-white text-base font-bold leading-none">
                  {player.name}
                  {player.id === userId && <span className="text-primary text-xs ml-1">(You)</span>}
                </p>
                <div className="flex items-center gap-1 mt-1">
                  <span className={`material-symbols-outlined text-xs ${getVoteLabelColor(player)}`}>
                    {getVoteIcon(player)}
                  </span>
                  <p className={`text-xs font-medium ${getVoteLabelColor(player)}`}>
                    {player.voteLabel}
                  </p>
                </div>
              </div>
              {isRanked && (
                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-1">
                    <p className={`text-2xl font-black ${starDisplay.color} ${starDisplay.animation}`}>
                      {starDisplay.text}
                    </p>
                    <span className="material-symbols-outlined text-primary text-lg">star</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Footer */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-[#f8f6f6] dark:bg-[#221610] border-t border-slate-200 dark:border-slate-800 max-w-[480px] mx-auto">
        <div className="flex flex-col gap-3">
          <div className="flex justify-center items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-primary text-sm animate-pulse">refresh</span>
            <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">
              Returning to lobby in <span className="text-primary font-bold">{countdown}...</span>
            </p>
          </div>
          <button
            onClick={handleReturn}
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined">logout</span>
            RETURN TO LOBBY NOW
          </button>
        </div>
      </div>
    </div>
  );
}
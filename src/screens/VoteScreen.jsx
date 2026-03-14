import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useMatchStore from '../stores/useMatchStore';
import useUserStore from '../stores/useUserStore';
import useVoteListener from '../hooks/useVoteListener';
import { castVote } from '../services/voteService';
import { AVATAR_URLS, TIMERS } from '../utils/constants';
import toast from 'react-hot-toast';

export default function VoteScreen() {
  const [searchParams] = useSearchParams();
  const matchId = searchParams.get('id');
  const navigate = useNavigate();
  const userId = useUserStore((s) => s.userId);
  const match = useMatchStore();
  const [myVote, setMyVote] = useState(null);
  const [timeLeft, setTimeLeft] = useState(TIMERS.VOTE_DURATION);

  useVoteListener(matchId);

  // Track my own vote from match state
  useEffect(() => {
    if (match.votes && match.votes[userId]) {
      setMyVote(match.votes[userId]);
    }
  }, [match.votes, userId]);

  // Countdown timer
  useEffect(() => {
    if (!match.voteExpiresAt) return;
    const interval = setInterval(() => {
      const remaining = Math.max(0, Math.floor((match.voteExpiresAt - Date.now()) / 1000));
      setTimeLeft(remaining);
      if (remaining <= 0) {
        clearInterval(interval);
        // Navigate to results when timer expires
        navigate(`/results?id=${matchId}`);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [match.voteExpiresAt, matchId, navigate]);

  // Navigate to results when match is completed
  useEffect(() => {
    if (match.status === 'completed') {
      navigate(`/results?id=${matchId}`);
    }
  }, [match.status, matchId, navigate]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  // Determine which team the current user is on
  const myTeam = match.teams?.blue?.players?.includes(userId) ? 'blue' : 'red';
  const enemyTeam = myTeam === 'blue' ? 'red' : 'blue';

  const handleVote = async (votedFor) => {
    // votedFor: 'my_team' or 'enemy_team' → convert to 'blue' / 'red'
    const voteValue = votedFor === 'my_team' ? myTeam : enemyTeam;
    try {
      await castVote(matchId, userId, voteValue);
      setMyVote(voteValue);
      toast.success(votedFor === 'my_team' ? 'Voted: My Team Won!' : 'Voted: Enemy Team Won');
    } catch (err) {
      toast.error('Failed to submit vote');
      console.error(err);
    }
  };

  // Calculate vote counts
  const voteCount = match.voteCount || { blue: 0, red: 0, pending: 0 };

  // Get all players with their data
  const getTeamPlayers = (teamKey) => {
    const playerIds = match.teams?.[teamKey]?.players || [];
    return playerIds.map((pid) => ({
      id: pid,
      ...(match.players?.[pid] || {}),
      vote: match.votes?.[pid] || null,
    }));
  };

  const blueTeamPlayers = getTeamPlayers('blue');
  const redTeamPlayers = getTeamPlayers('red');

  const getVoteIcon = (playerVote) => {
    if (!playerVote) {
      return <span className="material-symbols-outlined text-slate-400 animate-pulse">schedule</span>;
    }
    return <span className="material-symbols-outlined text-green-500 font-bold">check_circle</span>;
  };

  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden max-w-md mx-auto border-x border-primary/10 bg-[#f8f6f6] dark:bg-[#221610]">
      {/* Header */}
      <header className="flex items-center p-4 justify-between bg-white/50 dark:bg-black/20 backdrop-blur-sm sticky top-0 z-10">
        <div
          onClick={() => navigate(-1)}
          className="text-primary flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-primary/10 cursor-pointer"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </div>
        <h1 className="text-slate-900 dark:text-slate-100 text-lg font-extrabold leading-tight tracking-tight flex-1 text-center pr-10 uppercase italic">
          MATCH RESULTS - Who won?
        </h1>
      </header>

      {/* Scrollable Content */}
      <div className="flex flex-col flex-1 overflow-y-auto pb-44">
        {/* Timer + Vote Tally */}
        <div className="px-4 py-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="material-symbols-outlined text-primary text-sm">timer</span>
            <span className="text-primary font-bold tracking-widest uppercase text-sm">
              {formatTime(timeLeft)} remaining
            </span>
          </div>

          {/* Vote Tally Boxes */}
          <div className="flex items-center justify-between gap-1 bg-white dark:bg-slate-900 p-1 rounded-xl shadow-lg border border-primary/20">
            <div className="flex flex-1 flex-col items-center justify-center py-4 rounded-lg bg-blue-600/10 border-b-4 border-blue-600">
              <p className="text-blue-600 text-xs font-bold uppercase tracking-wider">Blue</p>
              <p className="text-slate-900 dark:text-slate-100 text-3xl font-black italic">{voteCount.blue || 0}</p>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center py-4 rounded-lg bg-slate-100 dark:bg-slate-800 border-b-4 border-slate-400">
              <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">Pending</p>
              <p className="text-slate-900 dark:text-slate-100 text-3xl font-black italic">{voteCount.pending || 0}</p>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center py-4 rounded-lg bg-red-600/10 border-b-4 border-red-600">
              <p className="text-red-600 text-xs font-bold uppercase tracking-wider">Red</p>
              <p className="text-slate-900 dark:text-slate-100 text-3xl font-black italic">{voteCount.red || 0}</p>
            </div>
          </div>
        </div>

        {/* Blue Team Section */}
        <section className="px-4 mb-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-6 w-1 bg-blue-600 rounded-full" />
            <h3 className="text-blue-600 text-sm font-black uppercase tracking-widest italic">Blue Team</h3>
          </div>
          <div className="space-y-2">
            {blueTeamPlayers.map((player) => (
              <div key={player.id} className="flex items-center gap-3 bg-white dark:bg-slate-900/50 p-3 rounded-lg border border-blue-600/20">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg h-10 w-10 border border-blue-600/30"
                  style={{ backgroundImage: `url("${AVATAR_URLS[player.avatar] || AVATAR_URLS[0]}")` }}
                />
                <p className="text-slate-900 dark:text-slate-100 font-bold flex-1">
                  {player.name || player.username || 'Player'}
                  {player.id === userId && <span className="text-primary text-xs ml-1">(You)</span>}
                </p>
                {getVoteIcon(player.vote)}
              </div>
            ))}
          </div>
        </section>

        {/* Red Team Section */}
        <section className="px-4 mb-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-6 w-1 bg-red-600 rounded-full" />
            <h3 className="text-red-600 text-sm font-black uppercase tracking-widest italic">Red Team</h3>
          </div>
          <div className="space-y-2">
            {redTeamPlayers.map((player) => (
              <div key={player.id} className="flex items-center gap-3 bg-white dark:bg-slate-900/50 p-3 rounded-lg border border-red-600/20">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg h-10 w-10 border border-red-600/30"
                  style={{ backgroundImage: `url("${AVATAR_URLS[player.avatar] || AVATAR_URLS[0]}")` }}
                />
                <p className="text-slate-900 dark:text-slate-100 font-bold flex-1">
                  {player.name || player.username || 'Player'}
                  {player.id === userId && <span className="text-primary text-xs ml-1">(You)</span>}
                </p>
                {getVoteIcon(player.vote)}
              </div>
            ))}
          </div>
        </section>

        {/* Non-voter Warning */}
        <div className="px-6 py-4">
          <div className="flex items-center justify-center gap-2 text-primary bg-primary/10 p-3 rounded-lg border border-primary/20">
            <span className="material-symbols-outlined text-lg">warning</span>
            <p className="text-xs font-bold uppercase tracking-tight">Non-voters lose 2 stars</p>
          </div>
        </div>
      </div>

      {/* Bottom Vote Buttons */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#f8f6f6] dark:from-[#221610] via-[#f8f6f6] dark:via-[#221610] to-transparent pt-10">
        <div className="flex flex-col gap-3">
          <button
            onClick={() => handleVote('my_team')}
            disabled={!!myVote}
            className={`w-full py-4 rounded-xl font-black uppercase tracking-widest italic shadow-lg transition-all flex items-center justify-center gap-2 group ${
              myVote === myTeam
                ? 'bg-blue-800 text-white ring-2 ring-blue-400'
                : myVote
                  ? 'bg-blue-600/30 text-white/50 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/20'
            }`}
          >
            <span className="material-symbols-outlined group-hover:scale-110 transition-transform">military_tech</span>
            {myVote === myTeam ? 'VOTED: MY TEAM ✓' : 'MY TEAM WON'}
          </button>
          <button
            onClick={() => handleVote('enemy_team')}
            disabled={!!myVote}
            className={`w-full py-4 rounded-xl font-black uppercase tracking-widest italic shadow-lg transition-all flex items-center justify-center gap-2 group ${
              myVote === enemyTeam
                ? 'bg-red-800 text-white ring-2 ring-red-400'
                : myVote
                  ? 'bg-red-600/30 text-white/50 cursor-not-allowed'
                  : 'bg-red-600 hover:bg-red-700 text-white shadow-red-600/20'
            }`}
          >
            <span className="material-symbols-outlined group-hover:scale-110 transition-transform">close</span>
            {myVote === enemyTeam ? 'VOTED: ENEMY TEAM ✓' : 'ENEMY TEAM WON'}
          </button>
        </div>
      </div>
    </div>
  );
}
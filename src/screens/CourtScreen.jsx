import { useNavigate, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useMatchStore from '../stores/useMatchStore';
import useUserStore from '../stores/useUserStore';
import useMatchListener from '../hooks/useMatchListener';
import { AVATAR_URLS } from '../utils/constants';
import { getRank } from '../utils/ranks';
import { endMatch } from '../services/matchService';
import { getLobbyData } from '../services/lobbyService';
import { playBgm, playSfx } from '../utils/audioManager';
import toast from 'react-hot-toast';

export default function CourtScreen() {
  const [searchParams] = useSearchParams();
  const matchId = searchParams.get('id');
  const navigate = useNavigate();
  const match = useMatchStore();
  const userId = useUserStore((s) => s.userId);
  const [isHost, setIsHost] = useState(false);
  const [loading, setLoading] = useState(false);

  useMatchListener(matchId);

  useEffect(() => {
    playBgm('COURT_BGM');
    playSfx('WELCOME_BBL');
  }, []);

  // Check if current user is a host of any lobby in their team
  useEffect(() => {
    async function checkHostStatus() {
      if (!match.teams || !userId) return;

      const bluePlayers = match.teams.blue?.players || [];
      const redPlayers = match.teams.red?.players || [];
      
      let userTeamLobbies = [];
      
      // Determine which team the user is on
      if (bluePlayers.includes(userId)) {
        userTeamLobbies = match.teams.blue?.lobbies || [];
      } else if (redPlayers.includes(userId)) {
        userTeamLobbies = match.teams.red?.lobbies || [];
      }

      // Check if user is host of any lobby in their team
      for (const lobbyCode of userTeamLobbies) {
        try {
          const lobbyData = await getLobbyData(lobbyCode);
          if (lobbyData && lobbyData.host === userId) {
            setIsHost(true);
            return;
          }
        } catch (err) {
          console.error('Error checking lobby host:', err);
        }
      }
      
      setIsHost(false);
    }

    checkHostStatus();
  }, [match.teams, userId]);

  // Navigate to vote when match status changes to VOTING
  useEffect(() => {
    if (match.status === 'voting') {
      navigate(`/vote?id=${matchId}`);
    }
  }, [match.status, matchId, navigate]);

  const courtParts = (match.courtId || '').split('#');
  const courtName = courtParts[0]?.replace(/_/g, ' ') || 'BBL Legends Court';
  const courtNumber = courtParts[1] || '1';

  const handleMatchOver = async () => {
    if (!isHost) return;
    
    setLoading(true);
    try {
      await endMatch(matchId);
      toast.success('Match ended - proceeding to voting');
      // Navigation will happen via useEffect when status changes
    } catch (err) {
      toast.error('Failed to end match');
      console.error(err);
      setLoading(false);
    }
  };

  const renderPlayer = (playerId, teamColor) => {
    const p = match.players?.[playerId] || {};
    const avatarUrl = AVATAR_URLS[p.avatar] || AVATAR_URLS[0];
    const rank = getRank(p.stars || 0);
    const borderClass = teamColor === 'blue' ? 'border-blue-500' : 'border-red-500';

    return (
      <div key={playerId} className="flex items-center gap-4 bg-white dark:bg-primary/5 p-3 rounded-xl border border-primary/10 shadow-sm">
        <div className="relative">
          <div className={`bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-14 border-2 ${borderClass}`}
            style={{ backgroundImage: `url("${avatarUrl}")` }} />
          <div className="absolute -bottom-1 -right-1 size-5 rounded-full bg-green-500 border-2 border-white dark:border-[#221610]" />
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex items-center gap-2">
            <p className="text-slate-900 dark:text-white text-base font-bold">{p.username || 'Player'}</p>
            <span className="text-[10px] font-bold text-green-500 uppercase">[In-Game]</span>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-slate-500 dark:text-primary/60 text-xs font-semibold uppercase tracking-tight">Rank: {rank.name}</p>
            <div className="flex text-primary">
              {Array.from({ length: Math.min(5, Math.max(1, Math.ceil((p.stars || 1) / 10))) }).map((_, i) => (
                <span key={i} className="material-symbols-outlined text-xs">star</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative flex h-screen w-full flex-col bg-[#f8f6f6] dark:bg-[#221610]">
      {/* Top Bar */}
      <header className="flex items-center p-4 pb-2 justify-between border-b border-primary/10">
        <button onClick={() => navigate('/home')} className="text-primary flex size-12 shrink-0 items-center justify-start">
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </button>
        <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-wider flex-1 text-center uppercase">Match In Progress</h2>
        <div className="flex w-12 items-center justify-end">
          <span className="material-symbols-outlined text-primary text-[24px]">info</span>
        </div>
      </header>

      {/* Court Info */}
      <div className="px-4 py-6 bg-gradient-to-b from-primary/5 to-transparent text-center">
        <h2 className="text-slate-900 dark:text-white text-2xl font-extrabold leading-tight tracking-tight capitalize">
          {courtName} #{courtNumber}
        </h2>
        <div className="flex items-center justify-center gap-2 mt-1">
          <span className="material-symbols-outlined text-primary text-sm">location_on</span>
          <p className="text-slate-600 dark:text-primary/70 text-sm font-medium uppercase tracking-widest">Downtown Arena</p>
        </div>
      </div>

      {/* Teams */}
      <div className="flex-1 overflow-y-auto px-4 pb-32">
        {/* Blue Team */}
        <div className="mb-8">
          <div className="flex items-center justify-between border-b-2 border-blue-500/30 pb-2 mb-4">
            <h3 className="text-blue-600 dark:text-blue-400 text-lg font-black italic tracking-tighter">BLUE TEAM</h3>
            <span className="text-[10px] font-bold text-blue-500 bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20">TEAM A</span>
          </div>
          <div className="space-y-3">
            {(match.teams?.blue?.players || []).map(pid => renderPlayer(pid, 'blue'))}
          </div>
        </div>

        {/* Red Team */}
        <div className="mb-8">
          <div className="flex items-center justify-between border-b-2 border-red-500/30 pb-2 mb-4">
            <h3 className="text-red-600 dark:text-red-400 text-lg font-black italic tracking-tighter">RED TEAM</h3>
            <span className="text-[10px] font-bold text-red-500 bg-red-500/10 px-2 py-0.5 rounded-full border border-red-500/20">TEAM B</span>
          </div>
          <div className="space-y-3">
            {(match.teams?.red?.players || []).map(pid => renderPlayer(pid, 'red'))}
          </div>
        </div>
      </div>

      {/* Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#f8f6f6] dark:from-[#221610] via-[#f8f6f6] dark:via-[#221610]/95 to-transparent max-w-md mx-auto">
        <button
          onClick={handleMatchOver}
          disabled={!isHost || loading}
          className={`w-full font-black text-lg py-4 rounded-xl shadow-[0_0_20px_rgba(236,91,19,0.4)] tracking-widest uppercase transition-all ${
            isHost 
              ? 'bg-primary hover:bg-primary/90 text-white cursor-pointer'
              : 'bg-gray-400 text-gray-200 cursor-not-allowed opacity-50'
          }`}
        >
          {loading ? 'Ending Match...' : isHost ? 'Match Over' : 'Match Over (Host Only)'}
        </button>
        {!isHost && (
          <p className="text-center text-slate-500 dark:text-primary/40 text-[10px] mt-3 font-bold uppercase tracking-tighter">
            Only team captains can end the match
          </p>
        )}
      </div>
    </div>
  );
}
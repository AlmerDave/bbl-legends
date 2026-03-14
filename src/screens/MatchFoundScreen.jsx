import { useEffect, useRef, useCallback } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import TeamRoster from '../components/TeamRoster';
import CountdownTimer from '../components/CountdownTimer';
import useMatchStore from '../stores/useMatchStore';
import useUserStore from '../stores/useUserStore';
import { subscribeMatch, acceptMatch, declineMatch } from '../services/matchService';
import { MATCH_STATUS } from '../utils/constants';
import { writeSession, clearSession } from './HomeScreen';
import { playBgm, playSfx } from '../utils/audioManager';
import toast from 'react-hot-toast';

export default function MatchFoundScreen() {
  const [searchParams] = useSearchParams();
  const matchId = searchParams.get('id');
  const navigate = useNavigate();
  const match = useMatchStore();
  const userId = useUserStore((s) => s.userId);
  
  const cancellationHandledRef = useRef(false);
  const unsubscribeRef = useRef(null);
  const isMountedRef = useRef(true);
  const navigationTimeoutRef = useRef(null);

  useEffect(() => {
    playSfx('MATCH_FOUND');
  }, []);

  // Track mount state
  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
      }
    };
  }, []);

  // ── Write matchId into the session bookmark as soon as we land here ──────────
  useEffect(() => {
    if (!matchId) return;
    writeSession({ matchId });
  }, [matchId]);

  // Find user's lobby code
  const findUserLobby = useCallback((matchData) => {
    if (!matchData?.teams) return null;

    if (matchData.teams.blue?.lobbies) {
      for (const lobbyCode of matchData.teams.blue.lobbies) {
        const lobbyPlayers = matchData.teams.blue.players || [];
        if (lobbyPlayers.includes(userId)) {
          return lobbyCode;
        }
      }
    }

    if (matchData.teams.red?.lobbies) {
      for (const lobbyCode of matchData.teams.red.lobbies) {
        const lobbyPlayers = matchData.teams.red.players || [];
        if (lobbyPlayers.includes(userId)) {
          return lobbyCode;
        }
      }
    }

    return null;
  }, [userId]);

  // Handle cancellation — session stays intact (match was cancelled externally,
  // lobby may still be open so user can re-queue)
  const handleCancellation = useCallback((matchData) => {
    if (cancellationHandledRef.current) return;

    cancellationHandledRef.current = true;

    if (unsubscribeRef.current) {
      unsubscribeRef.current();
      unsubscribeRef.current = null;
    }

    toast.error('Match was cancelled');

    const userLobbyCode = findUserLobby(matchData);

    useMatchStore.getState().clearMatch();

    // Remove only the matchId from session — lobby may still be valid
    writeSession({ matchId: null });

    navigationTimeoutRef.current = setTimeout(() => {
      if (isMountedRef.current) {
        if (userLobbyCode) {
          navigate(`/lobby/${userLobbyCode}`);
        } else {
          navigate('/home');
        }
      }
      navigationTimeoutRef.current = null;
    }, 500);
  }, [findUserLobby, navigate]);

  // Firebase listener setup
  useEffect(() => {
    if (!matchId) return;

    cancellationHandledRef.current = false;

    const unsubscribe = subscribeMatch(matchId, (data) => {
      if (cancellationHandledRef.current) return;
      if (!data) return;

      if (data.status === 'cancelled') {
        handleCancellation(data);
        return;
      }

      useMatchStore.getState().setMatch(data);
    });

    unsubscribeRef.current = unsubscribe;

    return () => {
      if (unsubscribeRef.current) {
        unsubscribeRef.current();
        unsubscribeRef.current = null;
      }
    };
  }, [matchId, handleCancellation]);

  // BACKUP: Detect cancellation from store state
  useEffect(() => {
    if (!matchId || match.matchId !== matchId) return;
    if (cancellationHandledRef.current) return;

    if (match.status === 'cancelled') {
      handleCancellation(match);
    }
  }, [match.status, match.matchId, matchId, handleCancellation]);

  // Navigate to court when match starts
  useEffect(() => {
    if (!matchId || match.matchId !== matchId) return;
    if (cancellationHandledRef.current) return;

    if (match.status === MATCH_STATUS.IN_PROGRESS) {
      navigate(`/court?id=${matchId}`);
    }
  }, [match.status, match.matchId, matchId, navigate]);

  const handleAccept = async () => {
    playSfx('ACCEPT');
    try {
      await acceptMatch(matchId, userId);
      toast.success('Match accepted!');
    } catch (err) {
      console.error('❌ Accept failed:', err);
      toast.error('Failed to accept');
    }
  };

  // ── Decline: clear full session — user chose to leave ────────────────────────
  const handleDecline = async () => {
    playSfx('DECLINE');

    if (!matchId) return;
    if (cancellationHandledRef.current) return;

    cancellationHandledRef.current = true;

    if (unsubscribeRef.current) {
      unsubscribeRef.current();
      unsubscribeRef.current = null;
    }

    try {
      toast('Match declined');

      const currentMatch = useMatchStore.getState();
      const userLobbyCode = findUserLobby(currentMatch);

      await declineMatch(matchId, userId);

      useMatchStore.getState().clearMatch();
      clearSession(); // ← user voluntarily declined — wipe the session

      navigationTimeoutRef.current = setTimeout(() => {
        if (isMountedRef.current) {
          if (userLobbyCode) {
            navigate(`/lobby/${userLobbyCode}`);
          } else {
            navigate('/home');
          }
        }
        navigationTimeoutRef.current = null;
      }, 500);
    } catch (err) {
      console.error('❌ Decline failed:', err);
      toast.error('Failed to decline');
      cancellationHandledRef.current = false;
    }
  };

  const handleTimerExpire = () => {
    handleDecline();
  };

  const hasAccepted = match.acceptances?.[userId];

  return (
    <div className="relative flex h-screen w-full flex-col max-w-md mx-auto shadow-2xl bg-slate-900 overflow-hidden">
      <div className="relative flex flex-col items-center pt-8 pb-4 bg-gradient-to-b from-primary/20 to-transparent">
        <div className="relative w-24 h-24 mb-4 flex items-center justify-center">
          <div className="absolute inset-0 border-4 border-primary/30 rounded-full" />
          <div className="absolute inset-0 border-t-4 border-primary rounded-full animate-spin" style={{ animationDuration: '3s' }} />
          <span className="material-symbols-outlined text-primary text-5xl">radar</span>
        </div>
        <h2 className="text-white text-3xl font-black italic leading-tight tracking-tighter uppercase">Match Found!</h2>
        <p className="text-primary text-xs font-bold tracking-[0.2em] mt-1">COMPETITIVE QUEUE</p>
      </div>

      <div className="flex-1 overflow-y-auto px-4 space-y-2 pb-24">
        <TeamRoster
          team="blue"
          players={match.teams?.blue?.players || []}
          playerData={match.players}
          acceptances={match.acceptances}
        />

        <div className="relative py-2 flex items-center justify-center">
          <div className="h-[1px] w-full bg-slate-700" />
          <div className="absolute bg-slate-900 px-4">
            <span className="text-2xl font-black italic text-primary/80 tracking-tighter">VS</span>
          </div>
        </div>

        <TeamRoster
          team="red"
          players={match.teams?.red?.players || []}
          playerData={match.players}
          acceptances={match.acceptances}
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 bg-slate-900/95 backdrop-blur-md border-t border-slate-800">
        <div className="text-center mb-4">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Accept to join match</p>
          <CountdownTimer expiresAt={match.expiresAt} onExpire={handleTimerExpire} />
        </div>
        <div className="flex gap-4">
          <button
            onClick={handleDecline}
            disabled={hasAccepted || cancellationHandledRef.current}
            className="flex-1 bg-red-600/10 border-2 border-red-600/40 hover:bg-red-600/20 text-red-500 font-black py-4 rounded-xl uppercase tracking-tighter shadow-[0_0_15px_rgba(220,38,38,0.2)] disabled:opacity-30"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            disabled={hasAccepted}
            className="flex-1 bg-emerald-600 border-2 border-emerald-400 text-white font-black py-4 rounded-xl uppercase tracking-tighter shadow-[0_0_25px_rgba(16,185,129,0.4)] relative overflow-hidden disabled:opacity-50"
          >
            {hasAccepted ? 'Accepted ✓' : 'Accept'}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white/10" />
          </button>
        </div>
      </div>
    </div>
  );
}
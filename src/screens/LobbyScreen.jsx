import { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../services/firebase';
import PlayerCard from '../components/PlayerCard';
import FormatSelector from '../components/FormatSelector';
import GameModeScreen from '../screens/GameModeScreen';
import useUserStore from '../stores/useUserStore';
import useLobbyStore from '../stores/useLobbyStore';
import useLobbyListener from '../hooks/useLobbyListener';
import { leaveLobby, updateLobbyStatus, updateLobbyLocation, updateLobbyGameMode } from '../services/lobbyService';
import { findMatch, getMatch } from '../services/matchService';
import { getFormatOptions } from '../utils/formatLogic';
import { LOBBY_STATUS, MAX_LOBBY_SIZE, GAME_MODES, SPORTS } from '../utils/constants';
import { writeSession, clearSession } from './HomeScreen';
import { playBgm, playSfx } from '../utils/audioManager';
import toast from 'react-hot-toast';

export default function LobbyScreen() {
  const { lobbyId } = useParams();
  const navigate = useNavigate();
  const user = useUserStore();
  const lobby = useLobbyStore();
  const [courts, setCourts] = useState([]);
  const [showFormatPicker, setShowFormatPicker] = useState(false);
  const [showGameModePicker, setShowGameModePicker] = useState(false);
  const [formatOptions, setFormatOptions] = useState([]);
  const [searching, setSearching] = useState(false);
  const [queueTime, setQueueTime] = useState(0);
  const hasNavigatedToMatchRef = useRef(false);

  useLobbyListener(lobbyId);

  useEffect(() => {
    playBgm('LOBBY_BGM');
  }, []);

  // ── Write session bookmark when entering a lobby ─────────────────────────────
  useEffect(() => {
    if (!lobbyId || !lobby.sport) return;
    writeSession({
      lobbyCode: lobbyId,
      sport: lobby.sport,
      matchId: null,
    });
  }, [lobbyId, lobby.sport]);

  // ── Keep matchId in session once lobby transitions to matched ────────────────
  useEffect(() => {
    if (!lobbyId || !lobby.matchId) return;
    writeSession({ matchId: lobby.matchId });
  }, [lobbyId, lobby.matchId]);

  // Reset navigation flag when lobbyId changes
  useEffect(() => {
    hasNavigatedToMatchRef.current = false;
  }, [lobbyId]);

  // Queue timer
  useEffect(() => {
    let interval;
    if (lobby.status === LOBBY_STATUS.QUEUED) {
      setQueueTime(0);
      interval = setInterval(() => {
        setQueueTime(prev => prev + 1);
      }, 1000);
    } else {
      setQueueTime(0);
    }
    return () => clearInterval(interval);
  }, [lobby.status]);

  // Fetch courts
  useEffect(() => {
    const fetchCourts = async () => {
      if (!lobby.sport) return;
      try {
        const courtsRef = collection(db, 'courts');
        const q = query(courtsRef, where('sport', '==', lobby.sport));
        const snap = await getDocs(q);
        const courtList = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setCourts(courtList);
      } catch (err) {
        console.error('Failed to fetch courts:', err);
      }
    };
    fetchCourts();
  }, [lobby.sport]);

  // Navigate to match with validation
  useEffect(() => {
    if (lobby.lobbyCode !== lobbyId) return;
    if (hasNavigatedToMatchRef.current) return;
    
    if (lobby.status === LOBBY_STATUS.MATCHED && lobby.matchId) {
      const checkAndNavigate = async () => {
        try {
          const match = await getMatch(lobby.matchId);
          if (!match) return;
          if (match.status === 'cancelled') return;
          hasNavigatedToMatchRef.current = true;
          navigate(`/match?id=${lobby.matchId}`);
        } catch (err) {
          console.error('❌ Failed to verify match status:', err);
        }
      };
      checkAndNavigate();
    }
  }, [lobby.status, lobby.matchId, lobby.lobbyCode, lobbyId, navigate]);

  const handleCopyCode = () => {
    playSfx('BTN_CLICK');
    if (lobby.lobbyCode) {
      navigator.clipboard.writeText(lobby.lobbyCode);
      toast.success('Lobby code copied!');
    }
  };

  const handleLocationChange = async (e) => {
    const newLocation = e.target.value;
    if (lobby.lobbyCode && user.userId === lobby.host) {
      try {
        await updateLobbyLocation(lobby.lobbyCode, newLocation);
        toast.success('Location updated!');
      } catch (err) {
        toast.error('Failed to update location');
        console.error(err);
      }
    }
  };

  const handleGameModeSelect = async (modeId) => {
    playSfx('BTN_CLICK');
    if (!isHost || lobby.sport !== SPORTS.BASKETBALL) return;
    try {
      await updateLobbyGameMode(lobby.lobbyCode, modeId);
      toast.success('Game mode updated!');
    } catch (err) {
      toast.error('Failed to update game mode');
      console.error(err);
    }
  };

  const handleFindMatch = () => {
    playSfx('BTN_CLICK');
    const playerCount = lobby.playerCount;
    const { auto, format, options } = getFormatOptions(lobby.sport, playerCount);

    if (auto && format) {
      startMatchmaking(format);
    } else {
      setFormatOptions(options);
      setShowFormatPicker(true);
    }
  };

  const startMatchmaking = async (format) => {
    setShowFormatPicker(false);
    setSearching(true);
    try {
      const match = await findMatch(lobby.lobbyCode, format);
      if (!match) {
        toast('Searching for opponents... stay in queue!', { icon: '🔍' });
      }
    } catch (err) {
      toast.error('Matchmaking failed');
      console.error(err);
    } finally {
      setSearching(false);
    }
  };

  const handleCancelQueue = async () => {
    playSfx('DECLINE');
    try {
      await updateLobbyStatus(lobby.lobbyCode, LOBBY_STATUS.WAITING, { selectedFormat: null });
      toast.success('Queue cancelled');
    } catch (err) {
      toast.error('Failed to cancel queue');
      console.error(err);
    }
  };

  // ── Voluntary leave: clear session BEFORE navigating ────────────────────────
  const handleLeave = async () => {
    try {
      if (lobby.status === LOBBY_STATUS.QUEUED) {
        await updateLobbyStatus(lobby.lobbyCode, LOBBY_STATUS.WAITING);
      }
      if (lobby.lobbyCode) {
        await leaveLobby(lobby.lobbyCode, user.userId);
        useLobbyStore.getState().clearLobby();
        clearSession(); // ← user intentionally left, no need to resume
        navigate('/home');
      }
    } catch (err) {
      toast.error('Failed to leave lobby');
      console.error(err);
    }
  };

  const isHost = user.userId === lobby.host;
  const isQueued = lobby.status === LOBBY_STATUS.QUEUED;
  const isBasketball = lobby.sport === SPORTS.BASKETBALL;
  const players = Object.entries(lobby.players || {});
  const maxPlayers = MAX_LOBBY_SIZE[lobby.sport] || 5;
  const emptySlots = Math.max(0, maxPlayers - players.length);

  const currentGameMode = GAME_MODES.find(m => m.id === lobby.gameMode) || GAME_MODES[0];

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden max-w-[480px] mx-auto bg-[#f8f6f6] dark:bg-[#221610] shadow-2xl">
      {/* Sticky header */}
      <div className="flex items-center bg-[#f8f6f6] dark:bg-[#221610] p-4 border-b border-primary/10 justify-between sticky top-0 z-10 backdrop-blur-md">
        {lobby.status !== LOBBY_STATUS.MATCHED ? (
          <button onClick={handleLeave} className="flex size-10 items-center justify-center rounded-full hover:bg-primary/10 transition-colors">
            <span className="material-symbols-outlined text-primary">arrow_back</span>
          </button>
        ) : (
          <div className="size-10" />
        )}
        <div className="flex flex-col items-center">
          <h2 className="text-slate-900 dark:text-slate-100 text-lg font-extrabold leading-tight tracking-tight">
            LOBBY: {lobby.lobbyCode || '...'}
          </h2>
          <span className="text-[10px] uppercase tracking-widest text-primary font-bold">
            {lobby.sport || ''} {lobby.selectedFormat || ''}
          </span>
          {isQueued && (
            <div className="flex items-center gap-1 mt-1">
              <span className="material-symbols-outlined text-primary text-xs animate-pulse">schedule</span>
              <span className="text-xs font-bold text-primary">{formatTime(queueTime)}</span>
            </div>
          )}
        </div>
        <div className="size-10" />
      </div>

      <div className="flex-1 overflow-y-auto pb-32">
        {/* Hero image */}
        <div className="relative h-48 w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
          <div className="absolute inset-0 bg-gradient-to-t from-[#221610] to-transparent z-0" />
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMN1rz67SSO3kChwmw8lDqyfB2AOi-uTB-185wKdZFVmgMc2vveNXDDbUX9Um-pViK5Kzy15ehQfIm2Pu4k6uI-9Rx4ISV9KXpc-iSYvNgGBxFJaGWbmgeddH0xJV2LrtD7ILBD7E4SVbyHqVn4NsfhQlf0P1UD0t1dPPDDjGCagfU6B2NGCqJV-06cQjkdJViCVEhf9jFjcbm71J0qVViphUsk17lAPTyDoICtHisHK7ZVFU2C7J1PP1bk9lIHcTGJYWhkMDk1Rc"
            alt="Court" className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute bottom-4 left-4 z-10">
            <div className="flex items-center gap-2 bg-primary px-3 py-1 rounded-full">
              <span className="material-symbols-outlined text-sm text-white">location_on</span>
              <span className="text-xs font-bold text-white uppercase tracking-wider">Active Map</span>
            </div>
          </div>
        </div>

        {/* Select Arena */}
        <div className="p-4 -mt-6 relative z-20">
          <div className="bg-white dark:bg-slate-900 rounded-xl p-4 shadow-xl border border-primary/20">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-primary text-sm">map</span>
              <p className="text-slate-600 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">Select Arena</p>
              {isHost && <span className="text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded uppercase">Host</span>}
            </div>
            <select
              value={lobby.location || ''}
              onChange={handleLocationChange}
              disabled={!isHost || isQueued}
              className="w-full rounded-lg border-primary/30 bg-[#f8f6f6] dark:bg-slate-800 text-slate-900 dark:text-slate-100 h-12 px-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {courts.length === 0 ? (
                <option value="">Loading courts...</option>
              ) : (
                courts.map((court) => (
                  <option key={court.id} value={court.id}>
                    {court.name || court.id}
                  </option>
                ))
              )}
            </select>
          </div>
        </div>

        {/* Game Mode Selector (basketball only) */}
        {isBasketball && (
          <div className="px-4 pb-2">
            <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-primary/20">
              <div className="flex items-center gap-2 px-4 pt-3 pb-2">
                <span className="material-symbols-outlined text-primary text-sm">sports_basketball</span>
                <p className="text-slate-600 dark:text-slate-400 text-xs font-bold uppercase tracking-wider flex-1">
                  Game Mode
                </p>
                {isHost && (
                  <span className="text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded uppercase">Host</span>
                )}
              </div>

              <button
                onClick={() => isHost && !isQueued && setShowGameModePicker(true)}
                disabled={!isHost || isQueued}
                className="relative w-full h-24 overflow-hidden disabled:opacity-60 disabled:cursor-not-allowed group"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${currentGameMode.backgroundUrl}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
                <div
                  className="absolute inset-0 opacity-20"
                  style={{ background: `radial-gradient(ellipse at left, ${currentGameMode.color} 0%, transparent 70%)` }}
                />
                <div className="absolute inset-0 flex items-center justify-between px-4">
                  <div className="text-left">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] mb-1" style={{ color: currentGameMode.color }}>
                      {currentGameMode.tag}
                    </p>
                    <p
                      className="font-black uppercase italic leading-none"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.6rem', color: '#ffffff', textShadow: '0 2px 12px rgba(0,0,0,0.7)' }}
                    >
                      {currentGameMode.name}
                    </p>
                  </div>
                  {isHost && !isQueued && (
                    <div
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-bold uppercase tracking-wider transition-all group-hover:scale-105"
                      style={{ borderColor: `${currentGameMode.color}60`, background: `${currentGameMode.color}18`, color: currentGameMode.color }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: '0.9rem' }}>tune</span>
                      <span>Change</span>
                    </div>
                  )}
                  {isQueued && (
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-500/40 bg-slate-700/30 text-xs font-bold uppercase tracking-wider text-slate-400">
                      <span className="material-symbols-outlined" style={{ fontSize: '0.9rem' }}>lock</span>
                      <span>Locked</span>
                    </div>
                  )}
                </div>
              </button>
            </div>
          </div>
        )}

        {/* Lobby Access / Code */}
        <div className="px-4 py-2">
          <div className="flex flex-col gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4 backdrop-blur-sm">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0.5">
                <p className="text-primary text-[10px] font-bold uppercase tracking-[0.1em]">Lobby Access</p>
                <p className="text-slate-900 dark:text-slate-100 text-xl font-black tracking-widest">{lobby.lobbyCode || '...'}</p>
              </div>
              <div className="flex gap-2">
                <button onClick={handleCopyCode} className="flex items-center gap-2 px-4 h-10 rounded-lg bg-primary text-white font-bold text-sm shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                  <span className="material-symbols-outlined text-sm">content_copy</span>
                  <span>COPY</span>
                </button>
              </div>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-xs leading-normal">
              {isQueued ? 'Lobby locked while in queue' : 'Invite teammates by sharing this unique lobby ID.'}
            </p>
          </div>
        </div>

        {/* Team Roster */}
        <div className="px-4 py-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-slate-900 dark:text-slate-100 text-sm font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">groups</span>
              Team Roster
            </h3>
            <span className="text-primary font-black text-sm px-3 py-1 bg-primary/10 rounded-full">
              {players.length} / {maxPlayers}
            </span>
          </div>
          <div className="space-y-3">
            {players.map(([pid, pdata]) => (
              <PlayerCard
                key={pid}
                player={{ ...pdata, userId: pid }}
                isHost={pid === lobby.host}
                status={pdata.ready ? 'ready' : 'preparing'}
              />
            ))}
            {emptySlots > 0 && Array.from({ length: emptySlots }).map((_, i) => (
              <div key={`empty-${i}`} className={`flex items-center justify-between p-3 rounded-xl border-2 border-dashed ${
                isQueued ? 'border-slate-400/30 bg-slate-200/30 dark:bg-slate-800/30' : 'border-primary/20 bg-primary/5'
              }`}>
                <div className="flex items-center gap-4">
                  <div className={`size-12 rounded-full flex items-center justify-center border-2 border-dashed ${
                    isQueued ? 'bg-slate-300/50 dark:bg-slate-700/50 border-slate-400/50' : 'bg-slate-200/50 dark:bg-slate-800/50 border-primary/30'
                  }`}>
                    <span className={`material-symbols-outlined ${isQueued ? 'text-slate-400' : 'text-primary/40'}`}>
                      {isQueued ? 'lock' : 'person_add'}
                    </span>
                  </div>
                  <p className={`font-bold text-sm italic ${
                    isQueued ? 'text-slate-400' : 'text-primary/60 dark:text-primary/40'
                  }`}>
                    {isQueued ? 'Locked during queue' : 'Waiting for players...'}
                  </p>
                </div>
                <span className={`material-symbols-outlined ${isQueued ? 'text-slate-400' : 'text-primary/60'}`}>
                  {isQueued ? 'lock' : 'add_circle'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="absolute bottom-0 left-0 right-0 z-30">
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-4/5 h-16 bg-primary/20 blur-3xl pointer-events-none" />
        <div className="bg-[#f8f6f6] dark:bg-[#221610]/95 border-t border-primary/20 px-4 pb-8 pt-4 backdrop-blur-md">
          {isQueued ? (
            <button
              onClick={handleCancelQueue}
              className="relative w-full h-16 rounded-xl bg-red-600 flex items-center justify-center gap-3 overflow-hidden shadow-[0_0_25px_rgba(220,38,38,0.4)]"
            >
              <span className="material-symbols-outlined text-white text-3xl font-bold">cancel</span>
              <span className="text-white text-xl font-black tracking-widest">CANCEL QUEUE</span>
            </button>
          ) : (
            <button
              onClick={handleFindMatch}
              disabled={!isHost || searching || players.length < 1}
              className="relative w-full h-16 rounded-xl bg-primary flex items-center justify-center gap-3 overflow-hidden shadow-[0_0_25px_rgba(236,91,19,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700" />
              <span className="material-symbols-outlined text-white text-3xl font-bold">stadium</span>
              <span className="text-white text-xl font-black tracking-widest">
                {searching ? 'SEARCHING...' : isHost ? 'FIND MATCH' : 'WAITING FOR HOST'}
              </span>
            </button>
          )}
        </div>
      </div>

      {showFormatPicker && (
        <FormatSelector
          options={formatOptions}
          sport={lobby.sport}
          onSelect={startMatchmaking}
          onClose={() => setShowFormatPicker(false)}
        />
      )}

      {showGameModePicker && isBasketball && isHost && (
        <GameModeScreen
          currentMode={lobby.gameMode}
          onSelect={handleGameModeSelect}
          onClose={() => setShowGameModePicker(false)}
        />
      )}
    </div>
  );
}
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { get, ref } from 'firebase/database';
import { rtdb } from '../services/firebase';
import useUserStore from '../stores/useUserStore';
import BottomNav from '../components/BottomNav';
import JoinLobbyModal from '../components/JoinLobbyModal';
import AudioSettingsModal from '../components/AudioSettingsModal';
import { AVATAR_URLS } from '../utils/constants';
import { createLobby } from '../services/lobbyService';
import { fetchUserProfile } from '../services/userService';
import { getRank } from '../utils/ranks';
import { BASE } from '../utils/constants';
import useAudio from '../hooks/useAudio';
import useAudioStore from '../stores/useAudioStore';

// ── Session helpers ────────────────────────────────────────────────────────────
const SESSION_KEY = 'bbl_session';

export function writeSession(data) {
  try {
    const existing = readSession() || {};
    localStorage.setItem(SESSION_KEY, JSON.stringify({ ...existing, ...data }));
  } catch {}
}

export function readSession() {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}

export function clearSession() {
  try { localStorage.removeItem(SESSION_KEY); } catch {}
}
// ──────────────────────────────────────────────────────────────────────────────

export default function HomeScreen() {
  const { username, avatar, userId, basketballStars, badmintonStars, updateSportStars, logout } = useUserStore();
  const navigate = useNavigate();
  const avatarUrl = AVATAR_URLS[avatar] || AVATAR_URLS[0];
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [showAudioSettings, setShowAudioSettings] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Unfinished session state
  const [sessionPopup, setSessionPopup] = useState(null); // { lobbyCode, sport, matchId, route, label }
  const [sessionChecking, setSessionChecking] = useState(false);

  const { playSfx, playBgm } = useAudio();
  const isMuted = useAudioStore((s) => s.isMuted);

  const bballRank = getRank(basketballStars ?? 0);
  const badyRank  = getRank(badmintonStars  ?? 0);

  useEffect(() => {
    playBgm('HOME_BGM');
  }, []);

  // ── Check 1: Account deletion + Check 2: Unfinished session ─────────────────
  useEffect(() => {
    async function runStartupChecks() {
      if (!userId) return;
      setIsLoading(true);

      // ── Check 1: Verify user still exists in Firestore ──
      try {
        const userData = await fetchUserProfile(userId);

        if (!userData) {
          // Admin deleted this account — wipe local state and send to registration
          toast.error('Your account was not found. Please register again.');
          logout();
          navigate('/', { replace: true });
          return; // stop all further checks
        }

        // Account exists — sync stars
        updateSportStars('basketball', userData.basketballStars ?? 0);
        updateSportStars('badminton',  userData.badmintonStars  ?? 0);
      } catch (error) {
        console.error('Failed to fetch user profile:', error);
        // Network error — don't log out, just continue
      } finally {
        setIsLoading(false);
      }

      // ── Check 2: Unfinished session bookmark ──
      const session = readSession();
      if (!session?.lobbyCode) return;

      setSessionChecking(true);
      try {
        // If we have a matchId, check the match first
        if (session.matchId) {
          const matchSnap = await get(ref(rtdb, `matches/${session.matchId}`));
          if (matchSnap.exists()) {
            const match = matchSnap.val();
            const allPlayers = [
              ...(match.teams?.blue?.players || []),
              ...(match.teams?.red?.players || []),
            ];

            // Only show popup if user is still a participant and match is active
            if (
              allPlayers.includes(userId) &&
              match.status !== 'cancelled' &&
              match.status !== 'completed'
            ) {
              let route = `/match?id=${session.matchId}`;
              let label = 'Match Pending';

              if (match.status === 'in_progress') {
                route = `/court?id=${session.matchId}`;
                label = 'Match In Progress';
              } else if (match.status === 'voting') {
                route = `/vote?id=${session.matchId}`;
                label = 'Voting In Progress';
              }

              setSessionPopup({
                lobbyCode: session.lobbyCode,
                sport: session.sport,
                matchId: session.matchId,
                route,
                label,
              });
              return;
            }
          }
          // Match is gone or completed — fall through to lobby check
        }

        // Check lobby
        const lobbySnap = await get(ref(rtdb, `lobbies/${session.lobbyCode}`));
        if (lobbySnap.exists()) {
          const lobby = lobbySnap.val();
          const players = lobby.players || {};

          if (
            players[userId] &&
            lobby.status !== 'cancelled'
          ) {
            let route = `/lobby/${session.lobbyCode}`;
            let label = 'Lobby Open';

            if (lobby.status === 'matched' && lobby.matchId) {
              route = `/match?id=${lobby.matchId}`;
              label = 'Match Pending';
            } else if (lobby.status === 'queued') {
              label = 'In Queue';
            }

            setSessionPopup({
              lobbyCode: session.lobbyCode,
              sport: session.sport,
              matchId: lobby.matchId || null,
              route,
              label,
            });
            return;
          }
        }

        // Nothing active found — silently clear stale session
        clearSession();
      } catch (err) {
        console.error('Session check failed:', err);
        clearSession();
      } finally {
        setSessionChecking(false);
      }
    }

    runStartupChecks();
  }, [userId]);

  const handleRejoin = () => {
    if (!sessionPopup) return;
    playSfx('BTN_CLICK');
    navigate(sessionPopup.route);
  };

  // ── Sport select ─────────────────────────────────────────────────────────────
  const handleSportSelect = async (sport) => {
    setIsCreating(true);
    try {
      const user = useUserStore.getState();
      const lobby = await createLobby(sport, 'default', {
        userId:          user.userId,
        username:        user.username,
        avatar:          user.avatar,
        stars:           user.basketballStars ?? 0,
        basketballStars: user.basketballStars ?? 0,
        badmintonStars:  user.badmintonStars  ?? 0,
      });
      toast.success(`${sport === 'basketball' ? 'Basketball' : 'Badminton'} lobby created!`);
      navigate(`/lobby/${lobby.code}`);
    } catch (error) {
      console.error('Failed to create lobby:', error);
      toast.error('Failed to create lobby. Please try again.');
    } finally {
      setIsCreating(false);
    }
  };

  const handleSportSelectWithSound = (sport) => {
    playSfx(sport === 'basketball' ? 'BASKETBALL' : 'BADMINTON');
    handleSportSelect(sport);
  };

  // Sport icon for popup
  const sportIcon = sessionPopup?.sport === 'basketball' ? 'sports_basketball' : 'sports_tennis';
  const sportColor = sessionPopup?.sport === 'basketball' ? '#ec5b13' : '#3b82f6';

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Barlow:wght@400;500;600&display=swap');

        .home-root {
          font-family: 'Barlow', sans-serif;
        }

        .home-root * {
          box-sizing: border-box;
        }

        /* === BACKGROUND === */
        .court-bg {
          background:
            radial-gradient(ellipse 80% 40% at 50% 0%, rgba(180, 80, 10, 0.18) 0%, transparent 70%),
            radial-gradient(ellipse 60% 50% at 80% 100%, rgba(40, 20, 5, 0.9) 0%, transparent 70%),
            linear-gradient(
              170deg,
              #1a0e08 0%,
              #1f1108 18%,
              #231410 35%,
              #1c1210 55%,
              #16100e 72%,
              #1a1418 88%,
              #141218 100%
            );
          min-height: 100vh;
        }

        .court-bg::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          opacity: 0.35;
          pointer-events: none;
          z-index: 0;
        }

        .court-bg::after {
          content: '';
          position: fixed;
          top: -20%;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 300px;
          background: radial-gradient(ellipse, rgba(236, 91, 19, 0.12) 0%, transparent 70%);
          animation: emberPulse 6s ease-in-out infinite alternate;
          pointer-events: none;
          z-index: 0;
        }

        @keyframes emberPulse {
          0%   { opacity: 0.5; transform: translateX(-50%) scaleX(1); }
          100% { opacity: 1;   transform: translateX(-50%) scaleX(1.15); }
        }

        /* === HEADER === */
        .header-bar {
          position: sticky;
          top: 0;
          z-index: 20;
          padding: 14px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: linear-gradient(180deg, rgba(26,14,8,0.95) 0%, rgba(26,14,8,0) 100%);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .header-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 2px solid rgba(236,91,19,0.8);
          overflow: hidden;
          box-shadow: 0 0 14px rgba(236,91,19,0.4);
        }

        .header-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .header-logo {
          font-family: 'Barlow Condensed', sans-serif;
          font-style: italic;
          font-weight: 900;
          font-size: 1.4rem;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          color: #f0ece8;
        }

        .header-logo span {
          color: #ec5b13;
        }

        /* === SPORT CARDS === */
        .cards-wrapper {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 14px;
          padding: 10px 16px 16px;
        }

        .sport-card {
          position: relative;
          flex: 1;
          min-height: 210px;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.18s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.18s ease;
          will-change: transform;
        }

        .sport-card:active {
          transform: scale(0.97);
        }

        .sport-card-basketball {
          border: 1.5px solid rgba(236,91,19,0.45);
          box-shadow:
            0 0 0 1px rgba(236,91,19,0.1),
            0 8px 40px rgba(236,91,19,0.25),
            0 2px 8px rgba(0,0,0,0.5);
        }

        .sport-card-badminton {
          border: 1.5px solid rgba(180,160,130,0.3);
          box-shadow:
            0 0 0 1px rgba(180,160,130,0.08),
            0 8px 40px rgba(100,80,50,0.2),
            0 2px 8px rgba(0,0,0,0.5);
        }

        .sport-card-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transition: transform 0.4s ease;
        }

        .sport-card:hover .sport-card-bg {
          transform: scale(1.04);
        }

        .sport-card-overlay-basketball {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(0deg, rgba(20,8,2,0.92) 0%, rgba(20,8,2,0.4) 45%, rgba(0,0,0,0.05) 100%),
            linear-gradient(135deg, rgba(236,91,19,0.15) 0%, transparent 60%);
        }

        .sport-card-overlay-badminton {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(0deg, rgba(14,10,8,0.92) 0%, rgba(14,10,8,0.4) 45%, rgba(0,0,0,0.05) 100%),
            linear-gradient(135deg, rgba(140,120,90,0.1) 0%, transparent 60%);
        }

        .sport-card-glint {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent 0%, rgba(236,91,19,0.8) 50%, transparent 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .sport-card:hover .sport-card-glint {
          opacity: 1;
        }

        .sport-card-content {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 20px 22px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
        }

        .sport-label-sub {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          margin-bottom: 4px;
        }

        .sport-label-main {
          font-family: 'Barlow Condensed', sans-serif;
          font-style: italic;
          font-weight: 900;
          font-size: 2.8rem;
          text-transform: uppercase;
          letter-spacing: -0.02em;
          line-height: 1;
          color: #ffffff;
          text-shadow: 0 2px 20px rgba(0,0,0,0.6);
        }

        .sport-card-arrow {
          font-size: 1.6rem;
          color: rgba(255,255,255,0.35);
          transition: color 0.2s, transform 0.2s;
          font-family: 'Material Symbols Outlined', sans-serif;
        }

        .sport-card:hover .sport-card-arrow {
          color: rgba(255,255,255,0.9);
          transform: translateX(3px);
        }

        .sport-card-creating {
          position: absolute;
          inset: 0;
          background: rgba(26,14,8,0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(4px);
          z-index: 10;
        }

        .spinner {
          width: 32px; height: 32px;
          border-radius: 50%;
          border: 3px solid rgba(236,91,19,0.2);
          border-top-color: #ec5b13;
          animation: spin 0.7s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* === PLAYER BAR === */
        .player-bar {
          padding: 16px;
          background: linear-gradient(180deg, rgba(26,18,12,0) 0%, rgba(18,12,10,0.98) 30%);
          border-top: 1px solid rgba(236,91,19,0.12);
          position: relative;
        }

        .player-bar::before {
          content: '';
          position: absolute;
          top: 0; left: 16px; right: 16px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(236,91,19,0.3), transparent);
        }

        .player-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 0;
        }

        .player-identity {
          display: flex;
          align-items: center;
          gap: 12px;
          flex: 1;
          min-width: 0;
        }

        .player-avatar-wrap {
          position: relative;
          width: 48px;
          height: 48px;
          border-radius: 14px;
          overflow: hidden;
          border: 2px solid rgba(236,91,19,0.6);
          background: rgba(236,91,19,0.1);
          box-shadow: 0 0 16px rgba(236,91,19,0.25);
          flex-shrink: 0;
        }

        .player-avatar-wrap img {
          width: 100%; height: 100%;
          object-fit: cover;
        }

        .player-name {
          font-family: 'Barlow Condensed', sans-serif;
          font-style: italic;
          font-weight: 900;
          font-size: 1.25rem;
          text-transform: uppercase;
          letter-spacing: 0.01em;
          color: #f5f0eb;
          line-height: 1;
          margin-bottom: 5px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* === JOIN BUTTON === */
        .join-btn {
          position: relative;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 11px 18px;
          border-radius: 14px;
          border: none;
          cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif;
          font-style: italic;
          font-weight: 700;
          font-size: 0.95rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #fff;
          background: linear-gradient(135deg, #f06020 0%, #c94a08 100%);
          box-shadow:
            0 4px 20px rgba(236,91,19,0.45),
            0 1px 3px rgba(0,0,0,0.4),
            inset 0 1px 0 rgba(255,255,255,0.15);
          transition: transform 0.15s ease, box-shadow 0.15s ease;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .join-btn:hover {
          transform: translateY(-1px);
          box-shadow:
            0 6px 28px rgba(236,91,19,0.55),
            0 2px 6px rgba(0,0,0,0.4),
            inset 0 1px 0 rgba(255,255,255,0.15);
        }

        .join-btn:active {
          transform: translateY(1px);
          box-shadow: 0 2px 12px rgba(236,91,19,0.35);
        }

        .join-btn-icon {
          font-family: 'Material Symbols Outlined', sans-serif;
          font-size: 1.1rem;
          line-height: 1;
        }

        /* === LOADING === */
        .loading-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px 0;
        }

        /* === MOUNT ANIMATION === */
        .fade-up {
          opacity: 0;
          transform: translateY(16px);
          animation: fadeUp 0.5s ease forwards;
        }

        .fade-up-1 { animation-delay: 0.05s; }
        .fade-up-2 { animation-delay: 0.15s; }
        .fade-up-3 { animation-delay: 0.25s; }
        .fade-up-4 { animation-delay: 0.35s; }

        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }

        /* === SESSION POPUP OVERLAY === */
        .session-overlay {
          position: fixed;
          inset: 0;
          z-index: 999;
          background: rgba(10, 6, 4, 0.88);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding-bottom: 0;
          animation: overlayFadeIn 0.3s ease forwards;
        }

        @keyframes overlayFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        .session-sheet {
          width: 100%;
          max-width: 448px;
          background: linear-gradient(160deg, #1e1008 0%, #18100c 60%, #140e10 100%);
          border-top: 1px solid rgba(236,91,19,0.35);
          border-radius: 28px 28px 0 0;
          padding: 28px 24px 44px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          animation: sheetSlideUp 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          box-shadow: 0 -16px 60px rgba(0,0,0,0.6);
        }

        @keyframes sheetSlideUp {
          from { transform: translateY(100%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }

        .session-pill {
          width: 36px; height: 4px;
          border-radius: 2px;
          background: rgba(236,91,19,0.3);
          margin: 0 auto -8px;
        }

        .session-icon-wrap {
          width: 56px; height: 56px;
          border-radius: 18px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        .session-pulse {
          animation: sessionPulse 2s ease-in-out infinite;
        }

        @keyframes sessionPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(236,91,19,0.4); }
          50%       { box-shadow: 0 0 0 10px rgba(236,91,19,0); }
        }

        .session-rejoin-btn {
          width: 100%;
          padding: 16px;
          border-radius: 16px;
          border: none;
          cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif;
          font-style: italic;
          font-weight: 900;
          font-size: 1.15rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #fff;
          background: linear-gradient(135deg, #f06020 0%, #c94a08 100%);
          box-shadow:
            0 4px 24px rgba(236,91,19,0.5),
            inset 0 1px 0 rgba(255,255,255,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }

        .session-rejoin-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 32px rgba(236,91,19,0.6), inset 0 1px 0 rgba(255,255,255,0.15);
        }

        .session-rejoin-btn:active {
          transform: scale(0.98);
        }
      `}</style>

      <div className="home-root court-bg relative flex flex-col max-w-md mx-auto min-h-screen overflow-x-hidden shadow-2xl">

        {/* Header */}
        <header className="header-bar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div className="header-avatar">
              <img src={avatarUrl} alt="Profile" />
            </div>
            <span className="header-logo">
              BBL <span>Legends</span>
            </span>
          </div>

          <button
            onClick={() => { playSfx('BTN_CLICK'); setShowAudioSettings(true); }}
            style={{
              width: '40px', height: '40px', borderRadius: '50%',
              border: '1.5px solid rgba(236,91,19,0.35)',
              background: 'rgba(236,91,19,0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer',
              color: isMuted ? 'rgba(180,130,100,0.5)' : '#ec5b13',
              transition: 'all 0.2s', flexShrink: 0, position: 'relative',
            }}
            title="Audio Settings"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '1.2rem' }}>
              {isMuted ? 'volume_off' : 'music_note'}
            </span>
            {isMuted && (
              <span style={{
                position: 'absolute', top: '4px', right: '4px',
                width: '7px', height: '7px', borderRadius: '50%',
                background: '#ef4444', border: '1.5px solid #1a0e08',
              }} />
            )}
          </button>
        </header>

        {/* Cards */}
        <main className={`cards-wrapper ${mounted ? 'fade-up fade-up-1' : ''}`} style={{ zIndex: 1, position: 'relative' }}>

          {/* Basketball */}
          <div
            className={`sport-card sport-card-basketball ${mounted ? 'fade-up fade-up-2' : ''}`}
            onClick={() => !isCreating && handleSportSelectWithSound('basketball')}
          >
            <div className="sport-card-bg" style={{ backgroundImage: `url('${BASE}/main/basketball.jpg')` }} />
            <div className="sport-card-overlay-basketball" />
            <div className="sport-card-glint" />
            <div className="sport-card-content">
              <div>
                <p className="sport-label-sub" style={{ color: '#ec5b13' }}>Competitive Season 4</p>
                <h2 className="sport-label-main">Basketball</h2>
              </div>
              <span className="material-symbols-outlined sport-card-arrow">arrow_forward_ios</span>
            </div>
            {isCreating && (
              <div className="sport-card-creating">
                <div className="spinner" />
              </div>
            )}
          </div>

          {/* Badminton */}
          <div
            className={`sport-card sport-card-badminton ${mounted ? 'fade-up fade-up-3' : ''}`}
            onClick={() => !isCreating && handleSportSelectWithSound('badminton')}
          >
            <div
              className="sport-card-bg"
              style={{ backgroundImage: `url('${BASE}/main/badminton.jpg')`, backgroundPosition: 'center top' }}
            />
            <div className="sport-card-overlay-badminton" />
            <div className="sport-card-glint" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(180,150,100,0.6) 50%, transparent 100%)' }} />
            <div className="sport-card-content">
              <div>
                <p className="sport-label-sub" style={{ color: '#b4a082' }}>Casual & Ranked</p>
                <h2 className="sport-label-main">Badminton</h2>
              </div>
              <span className="material-symbols-outlined sport-card-arrow">arrow_forward_ios</span>
            </div>
            {isCreating && (
              <div className="sport-card-creating">
                <div className="spinner" />
              </div>
            )}
          </div>

        </main>

        {/* Player Bar */}
        <section className={`player-bar ${mounted ? 'fade-up fade-up-4' : ''}`} style={{ zIndex: 1, position: 'relative' }}>
          {isLoading ? (
            <div className="loading-wrap">
              <div className="spinner" />
            </div>
          ) : (
            <>
              <div className="player-row">
                <div className="player-identity">
                  <div className="player-avatar-wrap">
                    <img src={avatarUrl} alt={username} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p className="player-name">{username || 'Player'}</p>
                    <div style={{ display: 'flex', gap: '6px', marginTop: '4px', flexWrap: 'wrap' }}>
                      {/* Basketball badge */}
                      <div style={{
                        display: 'flex', alignItems: 'center', gap: '4px',
                        background: 'rgba(236,91,19,0.12)',
                        border: '1px solid rgba(236,91,19,0.3)',
                        borderRadius: '8px', padding: '2px 7px',
                      }}>
                        <span style={{ fontFamily: 'Material Symbols Outlined', fontSize: '11px', color: '#ec5b13', lineHeight: 1 }}>sports_basketball</span>
                        <span style={{ fontSize: '11px' }}>{bballRank.badge}</span>
                        <span style={{
                          fontFamily: 'Barlow Condensed, sans-serif', fontStyle: 'italic', fontWeight: 900,
                          fontSize: '11px', color: bballRank.color, textTransform: 'uppercase',
                          letterSpacing: '0.03em', lineHeight: 1,
                        }}>{bballRank.name}</span>
                        <span style={{ fontSize: '10px', color: 'rgba(236,91,19,0.7)', fontWeight: 700 }}>{basketballStars ?? 0}★</span>
                      </div>

                      {/* Badminton badge */}
                      <div style={{
                        display: 'flex', alignItems: 'center', gap: '4px',
                        background: 'rgba(59,130,246,0.12)',
                        border: '1px solid rgba(59,130,246,0.3)',
                        borderRadius: '8px', padding: '2px 7px',
                      }}>
                        <span style={{ fontFamily: 'Material Symbols Outlined', fontSize: '11px', color: '#3b82f6', lineHeight: 1 }}>sports_tennis</span>
                        <span style={{ fontSize: '11px' }}>{badyRank.badge}</span>
                        <span style={{
                          fontFamily: 'Barlow Condensed, sans-serif', fontStyle: 'italic', fontWeight: 900,
                          fontSize: '11px', color: badyRank.color, textTransform: 'uppercase',
                          letterSpacing: '0.03em', lineHeight: 1,
                        }}>{badyRank.name}</span>
                        <span style={{ fontSize: '10px', color: 'rgba(59,130,246,0.7)', fontWeight: 700 }}>{badmintonStars ?? 0}★</span>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="join-btn" onClick={() => { playSfx('BTN_CLICK'); setShowJoinModal(true); }}>
                  <span>Join Match</span>
                  <span className="join-btn-icon material-symbols-outlined">login</span>
                </button>
              </div>
            </>
          )}
        </section>

        <BottomNav />

        {showJoinModal && <JoinLobbyModal onClose={() => setShowJoinModal(false)} />}
        {showAudioSettings && <AudioSettingsModal onClose={() => setShowAudioSettings(false)} />}

        {/* ── Unfinished Session Popup (forced — no dismiss) ── */}
        {(sessionChecking || sessionPopup) && (
          <div className="session-overlay">
            <div className="session-sheet">
              <div className="session-pill" />

              {sessionChecking ? (
                /* Checking state */
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px', padding: '12px 0' }}>
                  <div className="spinner" style={{ width: '36px', height: '36px' }} />
                  <p style={{
                    fontFamily: 'Barlow Condensed, sans-serif', fontStyle: 'italic', fontWeight: 700,
                    fontSize: '1rem', color: 'rgba(240,220,200,0.6)', textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}>
                    Checking session...
                  </p>
                </div>
              ) : sessionPopup && (
                <>
                  {/* Top row: icon + text */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div
                      className="session-icon-wrap session-pulse"
                      style={{ background: `${sportColor}18`, border: `1.5px solid ${sportColor}50` }}
                    >
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: '1.6rem', color: sportColor }}
                      >
                        {sportIcon}
                      </span>
                    </div>

                    <div style={{ flex: 1 }}>
                      <p style={{
                        fontFamily: 'Barlow Condensed, sans-serif', fontStyle: 'italic', fontWeight: 900,
                        fontSize: '1.35rem', textTransform: 'uppercase', color: '#f5f0eb',
                        letterSpacing: '0.01em', lineHeight: 1, marginBottom: '5px',
                      }}>
                        Unfinished Match
                      </p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{
                          display: 'inline-block',
                          width: '7px', height: '7px', borderRadius: '50%',
                          background: '#22c55e',
                          boxShadow: '0 0 6px rgba(34,197,94,0.8)',
                          animation: 'sessionPulse 1.5s ease-in-out infinite',
                        }} />
                        <span style={{
                          fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                          fontSize: '0.75rem', textTransform: 'uppercase',
                          letterSpacing: '0.15em', color: '#22c55e',
                        }}>
                          {sessionPopup.label}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Info card */}
                  <div style={{
                    background: 'rgba(236,91,19,0.06)',
                    border: '1px solid rgba(236,91,19,0.2)',
                    borderRadius: '14px',
                    padding: '14px 16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(240,220,200,0.45)' }}>
                        Sport
                      </span>
                      <span style={{
                        fontFamily: 'Barlow Condensed, sans-serif', fontStyle: 'italic', fontWeight: 900,
                        fontSize: '0.95rem', textTransform: 'uppercase', color: sportColor,
                      }}>
                        {sessionPopup.sport === 'basketball' ? '🏀 Basketball' : '🏸 Badminton'}
                      </span>
                    </div>
                    <div style={{ height: '1px', background: 'rgba(236,91,19,0.12)' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(240,220,200,0.45)' }}>
                        Lobby
                      </span>
                      <span style={{
                        fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 900,
                        fontSize: '0.95rem', color: '#f5f0eb', letterSpacing: '0.08em',
                      }}>
                        {sessionPopup.lobbyCode}
                      </span>
                    </div>
                  </div>

                  {/* Warning note */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '1rem', color: '#f59e0b', flexShrink: 0, marginTop: '1px' }}>
                      warning
                    </span>
                    <p style={{ fontSize: '0.8rem', color: 'rgba(240,220,200,0.5)', lineHeight: 1.5 }}>
                      You have an active session. Leaving it unattended may affect your match result.
                    </p>
                  </div>

                  {/* Rejoin button */}
                  <button className="session-rejoin-btn" onClick={handleRejoin}>
                    <span className="material-symbols-outlined" style={{ fontSize: '1.2rem' }}>sports</span>
                    Return to Match
                    <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>arrow_forward</span>
                  </button>
                </>
              )}
            </div>
          </div>
        )}

      </div>
    </>
  );
}
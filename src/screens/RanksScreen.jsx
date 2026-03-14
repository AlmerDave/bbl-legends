import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import useUserStore from '../stores/useUserStore';
import BottomNav from '../components/BottomNav';
import { AVATAR_URLS } from '../utils/constants';
import { fetchLeaderboard } from '../services/userService';

// ── Medal config for top 3 ────────────────────────────────────────────────────
const MEDALS = [
  {
    rank: 1, label: '1st', icon: '🥇',
    color: '#FFD700', glow: 'rgba(255,215,0,0.35)',
    border: 'rgba(255,215,0,0.6)', bg: 'rgba(255,215,0,0.1)',
  },
  {
    rank: 2, label: '2nd', icon: '🥈',
    color: '#C0C0C0', glow: 'rgba(192,192,192,0.25)',
    border: 'rgba(192,192,192,0.5)', bg: 'rgba(192,192,192,0.08)',
  },
  {
    rank: 3, label: '3rd', icon: '🥉',
    color: '#CD7F32', glow: 'rgba(205,127,50,0.25)',
    border: 'rgba(205,127,50,0.5)', bg: 'rgba(205,127,50,0.08)',
  },
];

export default function RanksScreen() {
  const navigate = useNavigate();
  const userId   = useUserStore((s) => s.userId);
  const [activeSport, setActiveSport] = useState('basketball');
  const [players,     setPlayers]     = useState([]);
  const [loading,     setLoading]     = useState(true);
  const [error,       setError]       = useState(null);

  const sportAccent = activeSport === 'basketball' ? '#ec5b13' : '#3b82f6';

  const loadLeaderboard = useCallback(async (sport) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchLeaderboard(sport);
      setPlayers(data);
    } catch (err) {
      console.error('Failed to load leaderboard:', err);
      setError('Failed to load leaderboard. Please try again.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadLeaderboard(activeSport);
  }, [activeSport, loadLeaderboard]);

  const podium   = players.slice(0, 3);
  const restList = players.slice(3);

  // Display order: 2nd | 1st | 3rd for visual podium effect
  const podiumOrder = [
    podium[1] ? { ...podium[1], medal: MEDALS[1] } : null,
    podium[0] ? { ...podium[0], medal: MEDALS[0] } : null,
    podium[2] ? { ...podium[2], medal: MEDALS[2] } : null,
  ].filter(Boolean);

  const isMe = (p) => p.userId === userId;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Barlow:wght@400;500;600&display=swap');

        .lb-root { font-family: 'Barlow', sans-serif; }
        .lb-root * { box-sizing: border-box; }

        /* ── Background ── */
        .lb-bg {
          background:
            radial-gradient(ellipse 80% 40% at 50% 0%, rgba(180,80,10,0.18) 0%, transparent 70%),
            radial-gradient(ellipse 60% 50% at 80% 100%, rgba(40,20,5,0.9) 0%, transparent 70%),
            linear-gradient(170deg,
              #1a0e08 0%, #1f1108 18%, #231410 35%,
              #1c1210 55%, #16100e 72%, #1a1418 88%, #141218 100%
            );
          min-height: 100vh;
        }
        .lb-bg::before {
          content: '';
          position: fixed; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          opacity: 0.35; pointer-events: none; z-index: 0;
        }
        .lb-bg::after {
          content: '';
          position: fixed; top: -20%; left: 50%;
          transform: translateX(-50%);
          width: 600px; height: 300px;
          background: radial-gradient(ellipse, rgba(236,91,19,0.1) 0%, transparent 70%);
          animation: emberPulse 6s ease-in-out infinite alternate;
          pointer-events: none; z-index: 0;
        }
        @keyframes emberPulse {
          0%   { opacity: 0.5; transform: translateX(-50%) scaleX(1); }
          100% { opacity: 1;   transform: translateX(-50%) scaleX(1.15); }
        }

        /* ── Header ── */
        .lb-header {
          position: sticky; top: 0; z-index: 20;
          padding: 14px 18px;
          display: flex; align-items: center; justify-content: space-between;
          background: linear-gradient(180deg, rgba(26,14,8,0.97) 0%, rgba(26,14,8,0) 100%);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
        .icon-btn {
          width: 38px; height: 38px; border-radius: 12px;
          border: 1.5px solid rgba(236,91,19,0.3);
          background: rgba(236,91,19,0.08);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; color: #ec5b13; transition: all 0.2s;
        }
        .icon-btn:hover { background: rgba(236,91,19,0.16); border-color: rgba(236,91,19,0.6); }

        .lb-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-style: italic; font-weight: 900;
          font-size: 1.4rem; letter-spacing: -0.02em;
          text-transform: uppercase; color: #f0ece8;
        }

        /* ── Tabs ── */
        .tab-bar {
          position: relative; z-index: 1;
          display: flex; gap: 10px; padding: 0 16px 18px;
        }
        .tab-btn {
          flex: 1; display: flex; align-items: center; justify-content: center;
          gap: 7px; padding: 11px 0; border-radius: 14px;
          border: 1.5px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.04); cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif;
          font-style: italic; font-weight: 900;
          font-size: 1rem; text-transform: uppercase; letter-spacing: 0.05em;
          color: rgba(240,220,200,0.45); transition: all 0.22s ease;
        }
        .tab-btn.active-bball {
          background: rgba(236,91,19,0.14); border-color: rgba(236,91,19,0.55);
          color: #ec5b13;
          box-shadow: 0 0 20px rgba(236,91,19,0.2), inset 0 1px 0 rgba(255,255,255,0.08);
        }
        .tab-btn.active-bady {
          background: rgba(59,130,246,0.14); border-color: rgba(59,130,246,0.55);
          color: #3b82f6;
          box-shadow: 0 0 20px rgba(59,130,246,0.2), inset 0 1px 0 rgba(255,255,255,0.08);
        }

        /* ── Podium ── */
        .podium-wrap {
          position: relative; z-index: 1;
          padding: 0 16px 24px;
          display: flex; align-items: flex-end;
          justify-content: center; gap: 10px;
        }
        .podium-card {
          border-radius: 18px; border: 1.5px solid;
          display: flex; flex-direction: column; align-items: center;
          padding: 14px 10px 20px;
          position: relative; overflow: hidden; flex: 1;
          animation: podiumRise 0.5s cubic-bezier(0.34,1.56,0.64,1) both;
        }
        .podium-card-glow {
          position: absolute; inset: 0; border-radius: 18px;
          opacity: 0.07; pointer-events: none;
        }
        .podium-card-glint {
          position: absolute; top: 0; left: 0; right: 0;
          height: 1.5px; pointer-events: none;
        }
        .podium-bottom-bar {
          position: absolute; bottom: 0; left: 0; right: 0; height: 4px;
        }
        @keyframes podiumRise {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .podium-avatar-wrap { position: relative; margin-bottom: 8px; }
        .podium-avatar {
          border-radius: 50%; object-fit: cover; border: 2.5px solid;
          display: block;
        }
        .me-dot {
          position: absolute; bottom: 1px; right: 1px;
          width: 10px; height: 10px; border-radius: 50%;
          background: #22c55e; border: 1.5px solid #1a0e08;
          box-shadow: 0 0 6px rgba(34,197,94,0.8);
        }
        .podium-name {
          font-family: 'Barlow Condensed', sans-serif;
          font-style: italic; font-weight: 900; font-size: 0.82rem;
          text-transform: uppercase; color: #f0ece8; letter-spacing: 0.02em;
          text-align: center; width: 100%; position: relative; z-index: 1;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
          margin-bottom: 3px;
        }
        .rank-pill {
          display: flex; align-items: center; gap: 3px;
          position: relative; z-index: 1; margin-bottom: 5px;
        }
        .podium-stars {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900; font-size: 1rem;
          position: relative; z-index: 1;
          display: flex; align-items: center; gap: 3px;
        }

        /* ── Divider ── */
        .lb-divider {
          position: relative; z-index: 1;
          display: flex; align-items: center; gap: 10px;
          padding: 0 16px 12px;
        }
        .lb-divider-line {
          flex: 1; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(236,91,19,0.2), transparent);
        }
        .lb-divider-label {
          font-family: 'Barlow Condensed', sans-serif;
          font-style: italic; font-weight: 700; font-size: 0.7rem;
          text-transform: uppercase; letter-spacing: 0.18em;
          color: rgba(240,220,200,0.3);
        }

        /* ── List rows ── */
        .lb-list {
          position: relative; z-index: 1;
          padding: 0 16px 100px;
          display: flex; flex-direction: column; gap: 8px;
        }
        .lb-row {
          border-radius: 14px; border: 1.5px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.03);
          padding: 11px 14px;
          display: flex; align-items: center; gap: 12px;
          position: relative; overflow: hidden;
          animation: rowFadeUp 0.35s ease both;
        }
        .lb-row.is-me {
          border-color: rgba(34,197,94,0.4);
          background: rgba(34,197,94,0.06);
          box-shadow: 0 0 16px rgba(34,197,94,0.1);
        }
        @keyframes rowFadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .lb-pos {
          font-family: 'Barlow Condensed', sans-serif;
          font-style: italic; font-weight: 900; font-size: 1.1rem;
          color: rgba(240,220,200,0.35);
          width: 28px; text-align: center; flex-shrink: 0;
        }
        .lb-avatar {
          width: 42px; height: 42px; border-radius: 50%; object-fit: cover;
          border: 2px solid rgba(255,255,255,0.1); flex-shrink: 0;
        }
        .lb-name {
          font-family: 'Barlow Condensed', sans-serif;
          font-style: italic; font-weight: 900; font-size: 1rem;
          text-transform: uppercase; color: #f0ece8; letter-spacing: 0.02em;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        .lb-stars {
          margin-left: auto;
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900; font-size: 1rem;
          display: flex; align-items: center; gap: 4px; flex-shrink: 0;
        }

        /* ── States ── */
        .lb-state {
          position: relative; z-index: 1;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          padding: 60px 16px; gap: 14px;
        }
        .spinner {
          width: 36px; height: 36px; border-radius: 50%;
          border: 3px solid rgba(236,91,19,0.2);
          border-top-color: #ec5b13;
          animation: spin 0.7s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        .state-label {
          font-family: 'Barlow Condensed', sans-serif;
          font-style: italic; font-weight: 700; font-size: 0.9rem;
          text-transform: uppercase; letter-spacing: 0.12em;
          color: rgba(240,220,200,0.4); text-align: center;
        }
        .retry-btn {
          padding: 10px 24px; border-radius: 12px; cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif; font-style: italic;
          font-weight: 900; font-size: 0.9rem; text-transform: uppercase;
          letter-spacing: 0.08em;
        }
      `}</style>

      <div className="lb-root lb-bg relative flex flex-col max-w-md mx-auto min-h-screen overflow-x-hidden shadow-2xl">

        {/* Header */}
        <header className="lb-header">
          <button className="icon-btn" onClick={() => navigate('/home')}>
            <span className="material-symbols-outlined" style={{ fontSize: '1.2rem' }}>arrow_back</span>
          </button>

          <span className="lb-title">
            <span style={{ color: sportAccent }}>Top</span> Players
          </span>

          <button
            className="icon-btn"
            onClick={() => loadLeaderboard(activeSport)}
            title="Refresh"
            style={{ color: sportAccent, borderColor: `${sportAccent}50`, background: `${sportAccent}12` }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '1.1rem' }}>refresh</span>
          </button>
        </header>

        {/* Tabs */}
        <div className="tab-bar">
          <button
            className={`tab-btn ${activeSport === 'basketball' ? 'active-bball' : ''}`}
            onClick={() => setActiveSport('basketball')}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '1.1rem' }}>sports_basketball</span>
            Basketball
          </button>
          <button
            className={`tab-btn ${activeSport === 'badminton' ? 'active-bady' : ''}`}
            onClick={() => setActiveSport('badminton')}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '1.1rem' }}>sports_tennis</span>
            Badminton
          </button>
        </div>

        {/* Loading */}
        {loading && (
          <div className="lb-state">
            <div className="spinner" />
            <p className="state-label">Loading leaderboard...</p>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="lb-state">
            <span className="material-symbols-outlined" style={{ fontSize: '2.5rem', color: 'rgba(236,91,19,0.5)' }}>
              wifi_off
            </span>
            <p className="state-label">{error}</p>
            <button
              className="retry-btn"
              onClick={() => loadLeaderboard(activeSport)}
              style={{
                border: `1.5px solid ${sportAccent}50`,
                background: `${sportAccent}14`,
                color: sportAccent,
              }}
            >
              Try Again
            </button>
          </div>
        )}

        {/* Empty */}
        {!loading && !error && players.length === 0 && (
          <div className="lb-state">
            <span className="material-symbols-outlined" style={{ fontSize: '2.5rem', color: 'rgba(236,91,19,0.4)' }}>
              leaderboard
            </span>
            <p className="state-label">No players yet. Be the first!</p>
          </div>
        )}

        {/* Leaderboard */}
        {!loading && !error && players.length > 0 && (
          <>
            {/* ── Podium top 3 ── */}
            <div className="podium-wrap">
              {podiumOrder.map((player, i) => {
                const { medal } = player;
                const isFirst  = medal.rank === 1;
                const avatarSz = isFirst ? 60 : 48;

                return (
                  <div
                    key={player.userId}
                    className="podium-card"
                    style={{
                      borderColor: medal.border,
                      boxShadow: `0 0 28px ${medal.glow}, inset 0 0 0 1px ${medal.bg}`,
                      marginBottom: isFirst ? 0 : medal.rank === 2 ? 12 : 20,
                      animationDelay: `${i * 0.08}s`,
                    }}
                  >
                    <div className="podium-card-glow" style={{ background: medal.color }} />
                    <div
                      className="podium-card-glint"
                      style={{ background: `linear-gradient(90deg, transparent, ${medal.color}90, transparent)` }}
                    />

                    {/* Medal */}
                    <span style={{ fontSize: '1.4rem', marginBottom: '8px', position: 'relative', zIndex: 1 }}>
                      {medal.icon}
                    </span>

                    {/* Avatar */}
                    <div className="podium-avatar-wrap">
                      <img
                        src={AVATAR_URLS[player.avatar] || AVATAR_URLS[0]}
                        alt={player.username}
                        className="podium-avatar"
                        style={{
                          width: avatarSz, height: avatarSz,
                          borderColor: medal.border,
                          boxShadow: `0 0 14px ${medal.glow}`,
                        }}
                      />
                      {isMe(player) && <div className="me-dot" />}
                    </div>

                    {/* Name */}
                    <p className="podium-name" style={isMe(player) ? { color: '#22c55e' } : {}}>
                      {player.username}
                    </p>

                    {/* Rank badge */}
                    <div className="rank-pill">
                      <span style={{ fontSize: '0.72rem' }}>{player.rankInfo.badge}</span>
                      <span style={{
                        fontFamily: 'Barlow Condensed, sans-serif', fontStyle: 'italic',
                        fontWeight: 900, fontSize: '0.62rem', textTransform: 'uppercase',
                        letterSpacing: '0.04em', color: player.rankInfo.color,
                      }}>
                        {player.rankInfo.name}
                      </span>
                    </div>

                    {/* Stars */}
                    <div className="podium-stars" style={{ color: medal.color }}>
                      <span>{player.stars}</span>
                      <span className="material-symbols-outlined" style={{ fontSize: '0.85rem' }}>star</span>
                    </div>

                    {/* Bottom accent */}
                    <div
                      className="podium-bottom-bar"
                      style={{ background: `linear-gradient(90deg, transparent, ${medal.color}60, transparent)` }}
                    />
                  </div>
                );
              })}
            </div>

            {/* Divider */}
            {restList.length > 0 && (
              <div className="lb-divider">
                <div className="lb-divider-line" />
                <span className="lb-divider-label">Rankings 4 – 10</span>
                <div className="lb-divider-line" />
              </div>
            )}

            {/* Rows 4–10 */}
            <div className="lb-list">
              {restList.map((player, i) => {
                const position = i + 4;
                const me = isMe(player);

                return (
                  <div
                    key={player.userId}
                    className={`lb-row ${me ? 'is-me' : ''}`}
                    style={{ animationDelay: `${i * 0.05}s` }}
                  >
                    <span className="lb-pos" style={me ? { color: '#22c55e' } : {}}>
                      {position}
                    </span>

                    <div style={{ position: 'relative', flexShrink: 0 }}>
                      <img
                        src={AVATAR_URLS[player.avatar] || AVATAR_URLS[0]}
                        alt={player.username}
                        className="lb-avatar"
                        style={me ? { borderColor: 'rgba(34,197,94,0.5)' } : {}}
                      />
                      {me && (
                        <div style={{
                          position: 'absolute', bottom: 1, right: 1,
                          width: 9, height: 9, borderRadius: '50%',
                          background: '#22c55e', border: '1.5px solid #1a0e08',
                          boxShadow: '0 0 5px rgba(34,197,94,0.8)',
                        }} />
                      )}
                    </div>

                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p className="lb-name" style={me ? { color: '#22c55e' } : {}}>
                        {player.username}
                        {me && (
                          <span style={{
                            fontSize: '0.58rem', fontWeight: 700, marginLeft: '5px',
                            color: '#22c55e', letterSpacing: '0.1em',
                          }}>
                            YOU
                          </span>
                        )}
                      </p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '3px', marginTop: '2px' }}>
                        <span style={{ fontSize: '0.72rem' }}>{player.rankInfo.badge}</span>
                        <span style={{
                          fontFamily: 'Barlow Condensed, sans-serif', fontStyle: 'italic',
                          fontWeight: 900, fontSize: '0.68rem', textTransform: 'uppercase',
                          letterSpacing: '0.04em', color: player.rankInfo.color,
                        }}>
                          {player.rankInfo.name}
                        </span>
                      </div>
                    </div>

                    <div className="lb-stars" style={{ color: sportAccent }}>
                      <span>{player.stars}</span>
                      <span className="material-symbols-outlined" style={{ fontSize: '0.9rem' }}>star</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        <div style={{ flex: 1 }} />
        <BottomNav />
      </div>
    </>
  );
}
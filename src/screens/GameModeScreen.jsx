import { useState } from 'react';
import { GAME_MODES } from '../utils/constants';

/**
 * GameModeScreen
 * Full-screen overlay for selecting basketball game mode.
 * Basketball-only. Host-only interaction.
 *
 * Props:
 *   currentMode  – currently selected mode id (string)
 *   onSelect     – (modeId: string) => void
 *   onClose      – () => void
 */
export default function GameModeScreen({ currentMode, onSelect, onClose }) {
  const [hovered, setHovered] = useState(null);

  const handleSelect = (modeId) => {
    onSelect(modeId);
    onClose();
  };

  // Split into bento layout: first card is large (hero), rest are smaller
  const [heroMode, ...restModes] = GAME_MODES;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Barlow:wght@400;500;600&display=swap');

        .gm-root {
          font-family: 'Barlow', sans-serif;
        }

        .gm-overlay {
          position: fixed;
          inset: 0;
          z-index: 50;
          background: rgba(10, 6, 4, 0.92);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          display: flex;
          flex-direction: column;
          max-width: 480px;
          margin: 0 auto;
          animation: gmSlideUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        @keyframes gmSlideUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Header */
        .gm-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 18px 10px;
          flex-shrink: 0;
        }

        .gm-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-style: italic;
          font-weight: 900;
          font-size: 1.55rem;
          text-transform: uppercase;
          letter-spacing: -0.01em;
          color: #f5f0eb;
          line-height: 1;
        }

        .gm-title span {
          color: #ec5b13;
        }

        .gm-subtitle {
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(200,180,160,0.5);
          margin-top: 3px;
        }

        .gm-close {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1.5px solid rgba(236,91,19,0.3);
          background: rgba(236,91,19,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          color: #ec5b13;
        }

        .gm-close:hover {
          background: rgba(236,91,19,0.18);
          border-color: rgba(236,91,19,0.6);
        }

        /* Bento grid */
        .gm-grid {
          flex: 1;
          overflow-y: auto;
          padding: 8px 14px 24px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        /* Individual card */
        .gm-card {
          position: relative;
          border-radius: 18px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s ease;
          border: 1.5px solid rgba(255,255,255,0.08);
          will-change: transform;
        }

        .gm-card:active {
          transform: scale(0.97) !important;
        }

        .gm-card.hero {
          height: 200px;
        }

        .gm-card.small {
          height: 130px;
        }

        .gm-card.selected {
          border-color: #ec5b13 !important;
          box-shadow: 0 0 0 2px rgba(236,91,19,0.4), 0 8px 30px rgba(236,91,19,0.3) !important;
        }

        /* Two-column row for small cards */
        .gm-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        /* Background image */
        .gm-card-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transition: transform 0.4s ease;
        }

        .gm-card:hover .gm-card-bg {
          transform: scale(1.06);
        }

        /* Dark cinematic overlay */
        .gm-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            0deg,
            rgba(10,5,2,0.93) 0%,
            rgba(10,5,2,0.5) 45%,
            rgba(0,0,0,0.1) 100%
          );
        }

        /* Accent color tint overlay per card */
        .gm-card-tint {
          position: absolute;
          inset: 0;
          opacity: 0.18;
          transition: opacity 0.3s ease;
        }

        .gm-card:hover .gm-card-tint {
          opacity: 0.28;
        }

        /* Selected checkmark */
        .gm-selected-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 26px;
          height: 26px;
          background: #ec5b13;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 12px rgba(236,91,19,0.6);
          animation: popIn 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        @keyframes popIn {
          from { transform: scale(0); opacity: 0; }
          to   { transform: scale(1); opacity: 1; }
        }

        /* Glint line */
        .gm-card-glint {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .gm-card:hover .gm-card-glint,
        .gm-card.selected .gm-card-glint {
          opacity: 1;
        }

        /* Content */
        .gm-card-content {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 14px 16px;
        }

        .gm-card-tag {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 0.58rem;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          margin-bottom: 3px;
        }

        .gm-card-name {
          font-family: 'Barlow Condensed', sans-serif;
          font-style: italic;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: -0.01em;
          color: #ffffff;
          line-height: 1;
          text-shadow: 0 2px 12px rgba(0,0,0,0.7);
        }

        .gm-card.hero .gm-card-name { font-size: 2.6rem; }
        .gm-card.small .gm-card-name { font-size: 1.6rem; }

        .gm-card-desc {
          font-size: 0.68rem;
          font-weight: 500;
          color: rgba(220,200,180,0.65);
          margin-top: 4px;
          line-height: 1.4;
        }

        .gm-card.small .gm-card-desc {
          display: none;
        }
      `}</style>

      <div className="gm-root gm-overlay">
        {/* Header */}
        <div className="gm-header">
          <div>
            <h2 className="gm-title">Game <span>Mode</span></h2>
            <p className="gm-subtitle">Basketball · Select your format</p>
          </div>
          <button className="gm-close" onClick={onClose}>
            <span className="material-symbols-outlined" style={{ fontSize: '1.1rem' }}>close</span>
          </button>
        </div>

        {/* Bento grid */}
        <div className="gm-grid">

          {/* Hero card — first mode */}
          <GameModeCard
            mode={heroMode}
            isSelected={currentMode === heroMode.id}
            isHovered={hovered === heroMode.id}
            size="hero"
            onHover={setHovered}
            onSelect={handleSelect}
          />

          {/* Remaining modes in rows of 2 */}
          {chunk(restModes, 2).map((pair, rowIdx) => (
            <div className="gm-row" key={rowIdx}>
              {pair.map((mode) => (
                <GameModeCard
                  key={mode.id}
                  mode={mode}
                  isSelected={currentMode === mode.id}
                  isHovered={hovered === mode.id}
                  size="small"
                  onHover={setHovered}
                  onSelect={handleSelect}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/** Individual mode card */
function GameModeCard({ mode, isSelected, size, onHover, onSelect }) {
  return (
    <div
      className={`gm-card ${size} ${isSelected ? 'selected' : ''}`}
      style={{
        boxShadow: isSelected
          ? undefined
          : `0 4px 20px rgba(0,0,0,0.4), 0 0 0 1px ${mode.color}22`,
      }}
      onClick={() => onSelect(mode.id)}
      onMouseEnter={() => onHover(mode.id)}
      onMouseLeave={() => onHover(null)}
    >
      {/* BG image */}
      <div
        className="gm-card-bg"
        style={{ backgroundImage: `url('${mode.backgroundUrl}')`, backgroundPosition: mode.backgroundPosition || 'center' }}
      />

      {/* Dark overlay */}
      <div className="gm-card-overlay" />

      {/* Color tint */}
      <div
        className="gm-card-tint"
        style={{ background: `radial-gradient(ellipse at bottom left, ${mode.color} 0%, transparent 70%)` }}
      />

      {/* Glint */}
      <div
        className="gm-card-glint"
        style={{ background: `linear-gradient(90deg, transparent 0%, ${mode.color}cc 50%, transparent 100%)` }}
      />

      {/* Selected badge */}
      {isSelected && (
        <div className="gm-selected-badge">
          <span className="material-symbols-outlined" style={{ fontSize: '0.85rem', color: '#fff' }}>check</span>
        </div>
      )}

      {/* Content */}
      <div className="gm-card-content">
        <p className="gm-card-tag" style={{ color: mode.color }}>{mode.tag}</p>
        <h3 className="gm-card-name">{mode.name}</h3>
        {size === 'hero' && (
          <p className="gm-card-desc">{mode.description}</p>
        )}
      </div>
    </div>
  );
}

/** Split array into chunks of n */
function chunk(arr, n) {
  const result = [];
  for (let i = 0; i < arr.length; i += n) result.push(arr.slice(i, i + n));
  return result;
}
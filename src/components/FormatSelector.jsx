/**
 * FormatSelector
 * Beautiful bento-style format picker overlay.
 * Replaces the plain list with visually rich cards.
 *
 * Props:
 *   options  – string[] of format strings e.g. ['1v1','2v2','3v3']
 *   sport    – 'basketball' | 'badminton'
 *   onSelect – (format: string) => void
 *   onClose  – () => void
 */
import { BASE } from '../utils/constants';


const FORMAT_META = {
  '1v1': {
    label: '1v1',
    tag: 'Solo Duel',
    description: 'One-on-one. Pure skill. No excuses.',
    color: '#ec5b13',
    icon: 'person',
    backgroundUrl: `${BASE}/format/1v1.jpg`,
  },
  '2v2': {
    label: '2v2',
    tag: 'Duo Battle',
    description: 'Chemistry over everything. Find your partner.',
    color: '#f59e0b',
    icon: 'group',
    backgroundUrl: `${BASE}/format/2v2.jpg`,
  },
  '3v3': {
    label: '3v3',
    tag: 'Street Squad',
    description: 'Half-court chaos. Three is the magic number.',
    color: '#10b981',
    icon: 'groups',
    backgroundUrl: `${BASE}/format/3v3.jpg`,
  },
  '4v4': {
    label: '4v4',
    tag: 'Crew Game',
    description: 'Teamwork starts to matter. Get organized.',
    color: '#6366f1',
    icon: 'diversity_3',
    backgroundUrl: `${BASE}/format/4v4.jpg`,
  },
  '5v5': {
    label: '5v5',
    tag: 'Full Court',
    description: 'The real deal. Five vs five, all positions.',
    color: '#ec5b13',
    icon: 'stadium',
    backgroundUrl: `${BASE}/format/5v5.jpg`,
  },
};

export default function FormatSelector({ options = [], onSelect, onClose, sport }) {
  const [hovered, setHovered] = useState(null);

  // Decide layout: if only 2 options → both hero-ish; 3+ → first is hero, rest in rows
  const isSmallSet = options.length <= 2;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,700;0,900;1,700;1,900&family=Barlow:wght@400;500;600&display=swap');

        .fs-root { font-family: 'Barlow', sans-serif; }

        .fs-backdrop {
          position: fixed;
          inset: 0;
          z-index: 50;
          background: rgba(8, 4, 2, 0.88);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          display: flex;
          flex-direction: column;
          max-width: 480px;
          margin: 0 auto;
          animation: fsSlideUp 0.28s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        @keyframes fsSlideUp {
          from { opacity: 0; transform: translateY(50px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .fs-header {
          padding: 20px 18px 12px;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          flex-shrink: 0;
        }

        .fs-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-style: italic;
          font-weight: 900;
          font-size: 1.6rem;
          text-transform: uppercase;
          letter-spacing: -0.01em;
          color: #f5f0eb;
          line-height: 1;
        }

        .fs-title em { color: #ec5b13; font-style: normal; }

        .fs-subtitle {
          font-size: 0.66rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(200,175,150,0.45);
          margin-top: 4px;
        }

        .fs-close {
          width: 36px; height: 36px;
          border-radius: 50%;
          border: 1.5px solid rgba(236,91,19,0.3);
          background: rgba(236,91,19,0.07);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          color: #ec5b13;
          transition: all 0.18s ease;
          flex-shrink: 0;
        }
        .fs-close:hover { background: rgba(236,91,19,0.18); border-color: rgba(236,91,19,0.6); }

        /* Divider */
        .fs-divider {
          height: 1px;
          margin: 0 18px;
          background: linear-gradient(90deg, transparent, rgba(236,91,19,0.25), transparent);
          flex-shrink: 0;
        }

        /* Cards area */
        .fs-cards {
          flex: 1;
          overflow-y: auto;
          padding: 14px 14px 28px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .fs-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        /* Individual card */
        .fs-card {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          border: 1.5px solid rgba(255,255,255,0.07);
          transition: transform 0.18s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.18s ease;
          will-change: transform;
        }

        .fs-card:active { transform: scale(0.96) !important; }

        .fs-card.fs-hero { height: 170px; }
        .fs-card.fs-small { height: 120px; }
        .fs-card.fs-medium { height: 145px; }

        /* BG */
        .fs-card-bg {
          position: absolute; inset: 0;
          background-size: cover; background-position: center;
          transition: transform 0.4s ease;
        }
        .fs-card:hover .fs-card-bg { transform: scale(1.07); }

        /* Overlays */
        .fs-card-dark {
          position: absolute; inset: 0;
          background: linear-gradient(0deg, rgba(8,4,2,0.94) 0%, rgba(8,4,2,0.45) 50%, rgba(0,0,0,0.05) 100%);
        }

        .fs-card-tint {
          position: absolute; inset: 0;
          opacity: 0.15;
          transition: opacity 0.3s ease;
        }
        .fs-card:hover .fs-card-tint { opacity: 0.27; }

        .fs-card-glint {
          position: absolute;
          top: 0; left: 0; right: 0; height: 2px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .fs-card:hover .fs-card-glint { opacity: 1; }

        /* Content */
        .fs-card-content {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 12px 14px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
        }

        .fs-card-tag {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 0.57rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 3px;
        }

        .fs-card-label {
          font-family: 'Barlow Condensed', sans-serif;
          font-style: italic;
          font-weight: 900;
          text-transform: uppercase;
          color: #fff;
          line-height: 1;
          text-shadow: 0 2px 12px rgba(0,0,0,0.8);
        }

        .fs-card.fs-hero .fs-card-label { font-size: 2.8rem; }
        .fs-card.fs-medium .fs-card-label { font-size: 2.2rem; }
        .fs-card.fs-small .fs-card-label { font-size: 1.8rem; }

        .fs-card-arrow {
          font-family: 'Material Symbols Outlined', sans-serif;
          font-size: 1.2rem;
          color: rgba(255,255,255,0.3);
          transition: color 0.2s, transform 0.2s;
          line-height: 1;
        }
        .fs-card:hover .fs-card-arrow {
          color: rgba(255,255,255,0.85);
          transform: translateX(2px);
        }

        .fs-card-desc {
          font-size: 0.67rem;
          font-weight: 500;
          color: rgba(215,195,170,0.6);
          margin-top: 4px;
          line-height: 1.4;
          max-width: 85%;
        }

        .fs-card.fs-small .fs-card-desc { display: none; }
      `}</style>

      <div className="fs-root fs-backdrop">
        {/* Header */}
        <div className="fs-header">
          <div>
            <h2 className="fs-title">Match <em>Format</em></h2>
            <p className="fs-subtitle">{sport} · Choose your match type</p>
          </div>
          <button className="fs-close" onClick={onClose}>
            <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>close</span>
          </button>
        </div>

        <div className="fs-divider" />

        {/* Cards */}
        <div className="fs-cards">
          {isSmallSet ? (
            // 1–2 options: all medium cards in a single row
            <div className={options.length === 1 ? '' : 'fs-row'}>
              {options.map((fmt) => (
                <FormatCard key={fmt} format={fmt} size={options.length === 1 ? 'fs-hero' : 'fs-medium'} onSelect={onSelect} />
              ))}
            </div>
          ) : (
            // 3+ options: first is hero, rest in pairs
            <>
              <FormatCard format={options[0]} size="fs-hero" onSelect={onSelect} />
              {chunk(options.slice(1), 2).map((pair, i) => (
                <div className="fs-row" key={i}>
                  {pair.map((fmt) => (
                    <FormatCard key={fmt} format={fmt} size="fs-small" onSelect={onSelect} />
                  ))}
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}

function FormatCard({ format, size, onSelect }) {
  const meta = FORMAT_META[format] || {
    label: format,
    tag: 'Format',
    description: '',
    color: '#ec5b13',
    backgroundUrl: `${BASE}/format/1v1.jpg`,
  };

  return (
    <div
      className={`fs-card ${size}`}
      style={{ boxShadow: `0 4px 24px rgba(0,0,0,0.45), 0 0 0 1px ${meta.color}18` }}
      onClick={() => onSelect(format)}
    >
      <div className="fs-card-bg" style={{ backgroundImage: `url('${meta.backgroundUrl}')` }} />
      <div className="fs-card-dark" />
      <div className="fs-card-tint" style={{ background: `radial-gradient(ellipse at bottom left, ${meta.color} 0%, transparent 70%)` }} />
      <div className="fs-card-glint" style={{ background: `linear-gradient(90deg, transparent 0%, ${meta.color}bb 50%, transparent 100%)` }} />

      <div className="fs-card-content">
        <div>
          <p className="fs-card-tag" style={{ color: meta.color }}>{meta.tag}</p>
          <h3 className="fs-card-label">{meta.label}</h3>
          <p className="fs-card-desc">{meta.description}</p>
        </div>
        <span className="material-symbols-outlined fs-card-arrow">arrow_forward_ios</span>
      </div>
    </div>
  );
}

function chunk(arr, n) {
  const result = [];
  for (let i = 0; i < arr.length; i += n) result.push(arr.slice(i, i + n));
  return result;
}

// Add this import at the top of the file in the real project:
// import { useState } from 'react';
// (included here as reminder — useState is used in parent FormatSelector)
import { useState } from 'react';
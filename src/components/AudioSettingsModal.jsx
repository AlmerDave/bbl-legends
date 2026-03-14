/**
 * AudioSettingsModal.jsx
 * Full-screen slide-up modal for audio settings.
 * Opened from the HomeScreen header settings button.
 *
 * Props:
 *   onClose – () => void
 */
import { useRef, useEffect } from 'react';
import useAudioStore from '../stores/useAudioStore';
import { playSfx } from '../utils/audioManager';

// ─── Tiny sub-components ──────────────────────────────────────────────────────

function VolumeSlider({ label, icon, value, onChange, color = '#ec5b13', disabled }) {
  const pct = Math.round(value * 100);

  return (
    <div className={`vol-row ${disabled ? 'vol-row--disabled' : ''}`}>
      <div className="vol-label-row">
        <div className="vol-icon-wrap" style={{ '--accent': color }}>
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        <div className="vol-text">
          <p className="vol-name">{label}</p>
          <p className="vol-pct" style={{ color }}>{pct}%</p>
        </div>
      </div>

      <div className="slider-track-wrap">
        {/* filled bar behind the native input */}
        <div className="slider-fill" style={{ width: `${pct}%`, background: color }} />
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={value}
          disabled={disabled}
          onChange={(e) => onChange(parseFloat(e.target.value))}
          className="slider-input"
          style={{ '--thumb-color': color }}
        />
      </div>

      {/* Icon landmarks */}
      <div className="slider-landmarks">
        <span className="material-symbols-outlined landmark-icon">volume_mute</span>
        <span className="landmark-dots">
          {[0, 25, 50, 75, 100].map((v) => (
            <span
              key={v}
              className="landmark-dot"
              style={{ background: pct >= v ? color : 'rgba(255,255,255,0.12)' }}
            />
          ))}
        </span>
        <span className="material-symbols-outlined landmark-icon">volume_up</span>
      </div>
    </div>
  );
}

// ─── Main modal ───────────────────────────────────────────────────────────────

export default function AudioSettingsModal({ onClose }) {
  const {
    bgmVolume, sfxVolume, isMuted,
    setBgmVolume, setSfxVolume, toggleMute,
  } = useAudioStore();

  const overlayRef = useRef(null);
  const sheetRef   = useRef(null);

  // Animate in on mount
  useEffect(() => {
    requestAnimationFrame(() => {
      overlayRef.current?.classList.add('asm-overlay--visible');
      sheetRef.current?.classList.add('asm-sheet--visible');
    });
  }, []);

  const handleClose = () => {
    overlayRef.current?.classList.remove('asm-overlay--visible');
    sheetRef.current?.classList.remove('asm-sheet--visible');
    setTimeout(onClose, 320);
  };

  const handleToggleMute = () => {
    toggleMute();
    playSfx('BTN_CLICK');
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,700;0,900;1,700;1,900&family=Barlow:wght@400;500;600;700&display=swap');

        /* ── Overlay ── */
        .asm-overlay {
          position: fixed;
          inset: 0;
          z-index: 100;
          background: rgba(10, 5, 2, 0);
          backdrop-filter: blur(0px);
          transition: background 0.32s ease, backdrop-filter 0.32s ease;
          display: flex;
          align-items: flex-end;
          justify-content: center;
        }
        .asm-overlay--visible {
          background: rgba(10, 5, 2, 0.72);
          backdrop-filter: blur(8px);
        }

        /* ── Sheet ── */
        .asm-sheet {
          font-family: 'Barlow', sans-serif;
          width: 100%;
          max-width: 480px;
          background: linear-gradient(170deg, #1e110a 0%, #19100c 60%, #150e0c 100%);
          border-top: 1.5px solid rgba(236,91,19,0.35);
          border-radius: 28px 28px 0 0;
          padding: 0 0 env(safe-area-inset-bottom, 20px);
          transform: translateY(100%);
          transition: transform 0.32s cubic-bezier(0.34, 1.22, 0.64, 1);
          box-shadow: 0 -20px 60px rgba(0,0,0,0.6), 0 -4px 20px rgba(236,91,19,0.12);
          overflow: hidden;
        }
        .asm-sheet--visible {
          transform: translateY(0);
        }

        /* ── Drag handle ── */
        .asm-handle {
          width: 40px;
          height: 4px;
          border-radius: 100px;
          background: rgba(255,255,255,0.15);
          margin: 14px auto 0;
        }

        /* ── Header ── */
        .asm-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px 12px;
        }
        .asm-title-block {}
        .asm-eyebrow {
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(236,91,19,0.7);
          margin-bottom: 2px;
        }
        .asm-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-style: italic;
          font-weight: 900;
          font-size: 1.55rem;
          text-transform: uppercase;
          letter-spacing: -0.01em;
          color: #f5ece5;
          line-height: 1;
        }
        .asm-title span { color: #ec5b13; }

        .asm-close {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1.5px solid rgba(236,91,19,0.25);
          background: rgba(236,91,19,0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: rgba(200,170,150,0.7);
          transition: all 0.2s;
        }
        .asm-close:hover {
          background: rgba(236,91,19,0.15);
          border-color: rgba(236,91,19,0.5);
          color: #ec5b13;
        }
        .asm-close .material-symbols-outlined { font-size: 1.1rem; }

        /* ── Mute toggle card ── */
        .asm-mute-card {
          margin: 0 16px 20px;
          border-radius: 16px;
          border: 1.5px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.03);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 16px;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s;
          user-select: none;
        }
        .asm-mute-card:hover {
          background: rgba(255,255,255,0.06);
        }
        .asm-mute-card--muted {
          border-color: rgba(236,91,19,0.4);
          background: rgba(236,91,19,0.06);
        }
        .asm-mute-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .asm-mute-icon {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(236,91,19,0.12);
          color: #ec5b13;
          transition: background 0.2s;
        }
        .asm-mute-card--muted .asm-mute-icon {
          background: rgba(236,91,19,0.25);
        }
        .asm-mute-icon .material-symbols-outlined { font-size: 1.3rem; }
        .asm-mute-info {}
        .asm-mute-label {
          font-weight: 700;
          font-size: 0.9rem;
          color: #f0e8e0;
        }
        .asm-mute-sub {
          font-size: 0.7rem;
          font-weight: 500;
          color: rgba(180,160,140,0.6);
          margin-top: 1px;
        }

        /* ── Toggle pill ── */
        .asm-toggle {
          width: 50px;
          height: 28px;
          border-radius: 100px;
          background: rgba(255,255,255,0.08);
          border: 1.5px solid rgba(255,255,255,0.1);
          position: relative;
          transition: background 0.25s, border-color 0.25s;
          flex-shrink: 0;
        }
        .asm-toggle--on {
          background: #ec5b13;
          border-color: #ec5b13;
          box-shadow: 0 0 14px rgba(236,91,19,0.5);
        }
        .asm-toggle-thumb {
          position: absolute;
          top: 3px;
          left: 3px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #fff;
          box-shadow: 0 1px 4px rgba(0,0,0,0.4);
          transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .asm-toggle--on .asm-toggle-thumb {
          transform: translateX(22px);
        }

        /* ── Divider ── */
        .asm-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.07) 30%, rgba(255,255,255,0.07) 70%, transparent);
          margin: 0 16px 20px;
        }

        /* ── Volume rows ── */
        .vol-row {
          padding: 0 16px;
          margin-bottom: 22px;
          transition: opacity 0.25s;
        }
        .vol-row--disabled {
          opacity: 0.35;
          pointer-events: none;
        }
        .vol-label-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }
        .vol-icon-wrap {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: color-mix(in srgb, var(--accent) 15%, transparent);
          border: 1px solid color-mix(in srgb, var(--accent) 25%, transparent);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent);
          flex-shrink: 0;
        }
        .vol-icon-wrap .material-symbols-outlined { font-size: 1.1rem; }
        .vol-text { flex: 1; }
        .vol-name {
          font-weight: 700;
          font-size: 0.9rem;
          color: #f0e8e0;
        }
        .vol-pct {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          font-size: 0.8rem;
          letter-spacing: 0.05em;
        }

        /* ── Slider ── */
        .slider-track-wrap {
          position: relative;
          height: 8px;
          border-radius: 100px;
          background: rgba(255,255,255,0.07);
          margin-bottom: 8px;
        }
        .slider-fill {
          position: absolute;
          top: 0; left: 0; bottom: 0;
          border-radius: 100px;
          transition: width 0.05s linear;
          box-shadow: 0 0 8px currentColor;
        }
        .slider-input {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          cursor: pointer;
          margin: 0;
          -webkit-appearance: none;
          appearance: none;
        }
        /* Invisible but functional native range on top of the visual track */

        .slider-landmarks {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .landmark-icon {
          font-family: 'Material Symbols Outlined';
          font-size: 0.85rem;
          color: rgba(255,255,255,0.25);
        }
        .landmark-dots {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .landmark-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          transition: background 0.15s;
        }

        /* ── Preset buttons ── */
        .asm-presets {
          padding: 0 16px 24px;
        }
        .asm-presets-label {
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(180,150,130,0.5);
          margin-bottom: 10px;
        }
        .asm-preset-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
        }
        .asm-preset-btn {
          border-radius: 12px;
          border: 1.5px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          padding: 10px 6px;
          text-align: center;
          cursor: pointer;
          transition: all 0.2s;
          color: rgba(200,180,160,0.7);
        }
        .asm-preset-btn:hover {
          border-color: rgba(236,91,19,0.35);
          background: rgba(236,91,19,0.06);
          color: #ec5b13;
        }
        .asm-preset-btn .material-symbols-outlined {
          font-size: 1.2rem;
          display: block;
          margin-bottom: 4px;
        }
        .asm-preset-btn span:last-child {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
      `}</style>

      {/* Backdrop */}
      <div ref={overlayRef} className="asm-overlay" onClick={handleClose}>
        {/* Sheet — stop propagation so clicking inside doesn't close */}
        <div ref={sheetRef} className="asm-sheet" onClick={(e) => e.stopPropagation()}>

          {/* Drag handle */}
          <div className="asm-handle" />

          {/* Header */}
          <div className="asm-header">
            <div className="asm-title-block">
              <p className="asm-eyebrow">Settings</p>
              <h2 className="asm-title">Audio <span>Control</span></h2>
            </div>
            <button className="asm-close" onClick={handleClose}>
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Master mute toggle */}
          <div
            className={`asm-mute-card ${isMuted ? 'asm-mute-card--muted' : ''}`}
            onClick={handleToggleMute}
          >
            <div className="asm-mute-left">
              <div className="asm-mute-icon">
                <span className="material-symbols-outlined">
                  {isMuted ? 'volume_off' : 'volume_up'}
                </span>
              </div>
              <div className="asm-mute-info">
                <p className="asm-mute-label">Master Sound</p>
                <p className="asm-mute-sub">
                  {isMuted ? 'All audio is muted' : 'All audio active'}
                </p>
              </div>
            </div>
            {/* Toggle pill */}
            <div className={`asm-toggle ${!isMuted ? 'asm-toggle--on' : ''}`}>
              <div className="asm-toggle-thumb" />
            </div>
          </div>

          <div className="asm-divider" />

          {/* BGM slider */}
          <VolumeSlider
            label="Background Music"
            icon="music_note"
            value={bgmVolume}
            onChange={setBgmVolume}
            color="#ec5b13"
            disabled={isMuted}
          />

          {/* SFX slider */}
          <VolumeSlider
            label="Sound Effects"
            icon="touch_app"
            value={sfxVolume}
            onChange={setSfxVolume}
            color="#60a5fa"
            disabled={isMuted}
          />

          <div className="asm-divider" />

          {/* Preset quick-sets */}
          <div className="asm-presets">
            <p className="asm-presets-label">Quick Presets</p>
            <div className="asm-preset-row">
              <button
                className="asm-preset-btn"
                onClick={() => {
                  setBgmVolume(0.4);
                  setSfxVolume(0.8);
                  useAudioStore.getState().setMuted(false);
                  playSfx('BTN_CLICK');
                }}
              >
                <span className="material-symbols-outlined">home</span>
                <span>Default</span>
              </button>
              <button
                className="asm-preset-btn"
                onClick={() => {
                  setBgmVolume(0.15);
                  setSfxVolume(0.5);
                  useAudioStore.getState().setMuted(false);
                  playSfx('BTN_CLICK');
                }}
              >
                <span className="material-symbols-outlined">bedtime</span>
                <span>Low Key</span>
              </button>
              <button
                className="asm-preset-btn"
                onClick={() => {
                  setBgmVolume(0.8);
                  setSfxVolume(1.0);
                  useAudioStore.getState().setMuted(false);
                  playSfx('BTN_CLICK');
                }}
              >
                <span className="material-symbols-outlined">bolt</span>
                <span>Hype</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
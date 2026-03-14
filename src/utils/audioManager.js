/**
 * audioManager.js
 * Singleton that owns every Audio instance in the app.
 * Import this wherever you need audio — it's safe to import many times.
 *
 * ─── AUDIO FILE LOCATIONS ────────────────────────────────────────────────────
 * Drop your files in /public/sounds/ and the paths below auto-resolve.
 * Swap any placeholder path to your real file whenever you're ready.
 * ─────────────────────────────────────────────────────────────────────────────
 */
import { BASE } from '../utils/constants';


// ─── Sound catalogue ─────────────────────────────────────────────────────────
export const SOUNDS = {
  // Background music (looping)
  HOME_BGM:       `${BASE}/sounds/home_bg.mp3`,          // 🎵 Home screen ambient loop
  LOBBY_BGM:      `${BASE}/sounds/lobby_bg.mp3`,          // 🎵 Lobby waiting loop
  COURT_BGM:      `${BASE}/sounds/court_bg.mp3`,          // 🎵 In-game ambience loop

  // One-shot stings
  MATCH_FOUND:    `${BASE}/sounds/match_found.mp3`,       // 🔔 Match Found intro sting
  WELCOME_BBL:    `${BASE}/sounds/welcome_bbl.mp3`,       // 🎙️ "Welcome to BBL" voice (CourtScreen)

  // UI sound effects
  BTN_CLICK:      `${BASE}/sounds/sfx_click.wav`,         // 🖱️  Generic button click
  BASKETBALL:     `${BASE}/sounds/sfx_basketball.wav`,    // 🏀 Basketball card select
  BADMINTON:      `${BASE}/sounds/sfx_badminton.wav`,     // 🏸 Badminton card select
  ACCEPT:         `${BASE}/sounds/sfx_accept.mp3`,        // ✅ Accept match
  DECLINE:        `${BASE}/sounds/sfx_decline.mp3`,       // ❌ Decline / error
  VOTE:           `${BASE}/sounds/sfx_vote.mp3`,          // 🗳️  Vote cast
};

// ─── Internal state ───────────────────────────────────────────────────────────
let bgmAudio    = null;   // currently playing BGM Audio object
let bgmName     = null;   // key of current BGM (e.g. 'HOME_BGM')
let masterMuted = false;
let bgmVol      = 0.5;
let sfxVol      = 0.8;

const FADE_STEPS = 20;
const FADE_MS    = 400; // total crossfade duration in ms

// ─── Helpers ─────────────────────────────────────────────────────────────────
function clamp(v) { return Math.min(1, Math.max(0, v)); }

function fadeOut(audio, duration = FADE_MS) {
  return new Promise((resolve) => {
    if (!audio) { resolve(); return; }
    const startVol   = audio.volume;
    const stepTime   = duration / FADE_STEPS;
    const stepAmount = startVol / FADE_STEPS;
    let step = 0;
    const id = setInterval(() => {
      step++;
      audio.volume = clamp(startVol - stepAmount * step);
      if (step >= FADE_STEPS) {
        clearInterval(id);
        audio.pause();
        audio.currentTime = 0;
        resolve();
      }
    }, stepTime);
  });
}

function fadeIn(audio, targetVol, duration = FADE_MS) {
  audio.volume = 0;
  audio.play().catch(() => {}); // autoplay guard
  const stepTime   = duration / FADE_STEPS;
  const stepAmount = targetVol / FADE_STEPS;
  let step = 0;
  const id = setInterval(() => {
    step++;
    audio.volume = clamp(stepAmount * step);
    if (step >= FADE_STEPS) {
      clearInterval(id);
      audio.volume = targetVol;
    }
  }, stepTime);
}

// ─── Public API ───────────────────────────────────────────────────────────────

/**
 * Sync mute + volume settings from the store into the manager.
 * Call this whenever the store changes.
 */
export function syncSettings({ isMuted, bgmVolume, sfxVolume }) {
  masterMuted = isMuted;
  bgmVol      = clamp(bgmVolume);
  sfxVol      = clamp(sfxVolume);

  if (bgmAudio) {
    bgmAudio.volume = isMuted ? 0 : bgmVol;
    if (isMuted) {
      bgmAudio.pause();
    } else if (bgmAudio.paused) {
      bgmAudio.play().catch(() => {});
    }
  }
}

/**
 * Play a looping background music track.
 * If the same track is already playing, does nothing.
 * Crossfades from any previous track.
 */
export async function playBgm(soundKey) {
  if (bgmName === soundKey && bgmAudio && !bgmAudio.paused) return;

  const src = SOUNDS[soundKey];
  if (!src) return;

  // Stop current BGM instantly
  if (bgmAudio) {
    bgmAudio.pause();
    bgmAudio.currentTime = 0;
    bgmAudio.src = '';
  }

  // Create and play new BGM immediately
  const audio  = new Audio(src);
  audio.loop   = true;
  audio.volume = masterMuted ? 0 : bgmVol;
  bgmAudio     = audio;
  bgmName      = soundKey;

  if (!masterMuted) {
    audio.play().catch(() => {});
  }
}

/** Stop the currently playing BGM with a fade */
export async function stopBgm() {
  if (!bgmAudio) return;
  const old = bgmAudio;
  bgmAudio  = null;
  bgmName   = null;
  await fadeOut(old);
  old.src   = '';
}

/**
 * Play a one-shot SFX.
 * Uses a fresh Audio object each time (pooled fire-and-forget).
 */
export function playSfx(soundKey) {
  if (masterMuted) return;
  const src = SOUNDS[soundKey];
  if (!src) return;
  const audio   = new Audio(src);
  audio.volume  = sfxVol;
  audio.play().catch(() => {});
}

/** Returns the current BGM name (or null) */
export function getCurrentBgm() { return bgmName; }
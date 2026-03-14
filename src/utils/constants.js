// ── BBL Legends Constants ──

// Add this at the top of constants.js
export const BASE = '/bbl-legends';

// Brand Colors
export const COLORS = {
  primary: '#10b981',
  backgroundDark: '#1e293b',
  backgroundLight: '#f1f5f9',
  mobaPurple: '#1a0b2e',
  mobaAccent: '#00f2ff',
  mobaGold: '#ffd700',
  blue: '#2563eb',
  red: '#dc2626',
};

// Sport types
export const SPORTS = {
  BASKETBALL: 'basketball',
  BADMINTON: 'badminton',
};

// Max lobby sizes per sport
export const MAX_LOBBY_SIZE = {
  [SPORTS.BASKETBALL]: 5,
  [SPORTS.BADMINTON]: 2,
};

// Available formats per sport
export const FORMATS = {
  [SPORTS.BASKETBALL]: ['1v1', '2v2', '3v3', '4v4', '5v5'],
  [SPORTS.BADMINTON]: ['1v1', '2v2'],
};

// Players needed per format (total both teams)
export const PLAYERS_PER_FORMAT = {
  '1v1': 2,
  '2v2': 4,
  '3v3': 6,
  '4v4': 8,
  '5v5': 10,
};

// Team size per format
export const TEAM_SIZE = {
  '1v1': 1,
  '2v2': 2,
  '3v3': 3,
  '4v4': 4,
  '5v5': 5,
};

// Timers (in seconds)
export const TIMERS = {
  MATCH_ACCEPT: 15,
  VOTE_DURATION: 300,
  RESULT_REDIRECT: 30,
  MATCH_EXPIRY: 300,
};

// Star changes
export const STAR_CHANGES = {
  WIN: 1,
  LOSS: -1,
  NON_VOTER_WIN: 0,
  NON_VOTER_LOSS: -2,
};

// Lobby statuses
export const LOBBY_STATUS = {
  WAITING: 'waiting',
  QUEUED: 'queued',
  MATCHED: 'matched',
};

// Match statuses
export const MATCH_STATUS = {
  PENDING_ACCEPT: 'pending_accept',
  IN_PROGRESS: 'in_progress',
  VOTING: 'voting',
  COMPLETED: 'completed',
};

// ── Basketball Game Modes ──
// Basketball-only. Add new modes here freely — the UI will auto-render them.
// Fields:
//   id           – unique key stored in RTDB
//   name         – display name (short, caps-friendly)
//   tag          – small label above name (e.g. season label, mode type)
//   description  – one-liner shown on the hero card
//   color        – accent hex used for tint, glint, and tag
//   backgroundUrl – card background image; swap to any URL you prefer
export const GAME_MODES = [
  {
    id: 'ranked',
    name: 'Ranked',
    tag: 'Competitive · Season 4',
    description: 'Win stars, climb the ladder. Every match counts.',
    color: '#ec5b13',
    backgroundUrl: `${BASE}/game_modes/ranked.jpg`,
    backgroundPosition: 'left top',    // 'center top' | 'center' | 'center bottom' | 'left top' | etc.
  },
  {
    id: 'classic',
    name: 'Classic',
    tag: 'Old School',
    description: 'Traditional rules. No gimmicks. Just basketball.',
    color: '#f59e0b',
    backgroundUrl: `${BASE}/game_modes/classic.jpg`,
    backgroundPosition: 'center',
  },
  {
    id: 'rainbow',
    name: 'Rainbow',
    tag: 'Special Mode',
    description: 'Chaos rules. Expect the unexpected every possession.',
    color: '#a78bfa',
    backgroundUrl: `${BASE}/game_modes/rainbow.jpg`,
    backgroundPosition: 'center top',
  },
  {
    id: 'onse_onse',
    name: 'Onse Onse',
    tag: 'Street Rules',
    description: 'Filipino street ball. One shot, one chance.',
    color: '#10b981',
    backgroundUrl: `${BASE}/game_modes/onse_onse.jpg`,
    backgroundPosition: 'center top',
  },
  // ── Add more game modes below. Same shape as above. ──
];

// Default game mode id for basketball lobbies
export const DEFAULT_GAME_MODE = 'ranked';

// Avatar image URLs
export const AVATAR_URLS = [
  `${BASE}/avatars/avatar1.jpg`,
  `${BASE}/avatars/avatar2.jpg`,
  `${BASE}/avatars/avatar3.jpg`,
  `${BASE}/avatars/avatar4.jpg`,
  `${BASE}/avatars/avatar5.jpg`,
  `${BASE}/avatars/avatar6.jpg`,
  `${BASE}/avatars/avatar7.jpg`,
  `${BASE}/avatars/avatar8.jpg`,
  `${BASE}/avatars/avatar9.jpg`,
  `${BASE}/avatars/avatar10.jpg`,
  `${BASE}/avatars/avatar11.jpg`,
  `${BASE}/avatars/avatar12.jpg`,
  `${BASE}/avatars/avatar13.jpg`,
  `${BASE}/avatars/avatar14.jpg`,
  `${BASE}/avatars/avatar15.jpg`,
]

// Username validation
export const USERNAME_MIN = 4;
export const USERNAME_MAX = 16;
export const USERNAME_REGEX = /^[a-zA-Z0-9_]+$/;
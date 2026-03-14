// ── Lobby Service: Create, Join, Leave, Real-time ──
import { rtdb } from './firebase';
import { ref, set, get, update, remove, push, onValue, off, serverTimestamp } from 'firebase/database';
import { customAlphabet } from 'nanoid';
import { LOBBY_STATUS, MAX_LOBBY_SIZE, DEFAULT_GAME_MODE } from '../utils/constants';

const generateCode = customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', 5);

/**
 * Create a new lobby
 */
export async function createLobby(sport, location, user) {
  const code = generateCode();
  const lobbyRef = ref(rtdb, `lobbies/${code}`);

  // `stars` on the player entry = the relevant sport's stars
  // so CourtScreen/MatchFoundScreen rank display is always correct
  const sportStars = sport === 'basketball'
    ? (user.basketballStars ?? user.stars ?? 0)
    : (user.badmintonStars  ?? user.stars ?? 0);

  const lobbyData = {
    code,
    host: user.userId,
    sport,
    location,
    status: LOBBY_STATUS.WAITING,
    selectedFormat: null,
    gameMode: DEFAULT_GAME_MODE,
    playerCount: 1,
    players: {
      [user.userId]: {
        username:        user.username,
        avatar:          user.avatar,
        stars:           sportStars,          // sport-relevant for rank display
        basketballStars: user.basketballStars ?? 0,
        badmintonStars:  user.badmintonStars  ?? 0,
        ready:           true,
        joinedAt:        Date.now(),
      },
    },
    createdAt: Date.now(),
  };

  await set(lobbyRef, lobbyData);
  return { code, ...lobbyData };
}

/**
 * Join an existing lobby by code
 */
export async function joinLobby(code, user) {
  const lobbyRef = ref(rtdb, `lobbies/${code}`);
  const snap = await get(lobbyRef);

  if (!snap.exists()) throw new Error('Lobby not found');

  const lobby = snap.val();

  if (lobby.status === LOBBY_STATUS.QUEUED) {
    throw new Error('Cannot join - lobby is currently in queue');
  }

  if (lobby.status !== LOBBY_STATUS.WAITING) {
    throw new Error('Lobby is no longer accepting players');
  }

  const maxSize = MAX_LOBBY_SIZE[lobby.sport] || 5;
  if (lobby.playerCount >= maxSize) {
    throw new Error('Lobby is full');
  }

  if (lobby.players?.[user.userId]) {
    throw new Error('You are already in this lobby');
  }

  // `stars` = sport-relevant value so rank displays correctly in match screens
  const sportStars = lobby.sport === 'basketball'
    ? (user.basketballStars ?? user.stars ?? 0)
    : (user.badmintonStars  ?? user.stars ?? 0);

  await update(lobbyRef, {
    [`players/${user.userId}`]: {
      username:        user.username,
      avatar:          user.avatar,
      stars:           sportStars,
      basketballStars: user.basketballStars ?? 0,
      badmintonStars:  user.badmintonStars  ?? 0,
      ready:           true,
      joinedAt:        Date.now(),
    },
    playerCount: lobby.playerCount + 1,
  });

  return { code, ...lobby };
}

/**
 * Leave a lobby
 */
export async function leaveLobby(code, userId) {
  const lobbyRef = ref(rtdb, `lobbies/${code}`);
  const snap = await get(lobbyRef);

  if (!snap.exists()) return;
  const lobby = snap.val();

  await remove(ref(rtdb, `lobbies/${code}/players/${userId}`));
  await update(lobbyRef, { playerCount: Math.max(0, lobby.playerCount - 1) });

  if (lobby.host === userId) {
    const remainingPlayers = Object.keys(lobby.players || {}).filter(id => id !== userId);
    if (remainingPlayers.length > 0) {
      await update(lobbyRef, { host: remainingPlayers[0] });
    } else {
      await remove(lobbyRef);
    }
  }
}

/**
 * Update lobby status (e.g., to queued)
 */
export async function updateLobbyStatus(code, status, extras = {}) {
  await update(ref(rtdb, `lobbies/${code}`), { status, ...extras });
}

/**
 * Update lobby location (host only)
 */
export async function updateLobbyLocation(code, location) {
  await update(ref(rtdb, `lobbies/${code}`), { location });
}

/**
 * Update lobby game mode (host only, basketball only)
 */
export async function updateLobbyGameMode(code, gameMode) {
  await update(ref(rtdb, `lobbies/${code}`), { gameMode });
}

/**
 * Set player ready status
 */
export async function setPlayerReady(code, userId, ready = true) {
  await update(ref(rtdb, `lobbies/${code}/players/${userId}`), { ready });
}

/**
 * Subscribe to lobby updates
 */
export function subscribeLobby(code, callback) {
  const lobbyRef = ref(rtdb, `lobbies/${code}`);
  onValue(lobbyRef, (snap) => {
    callback(snap.exists() ? { code, ...snap.val() } : null);
  });
  return () => off(lobbyRef);
}

/**
 * Get lobby data once
 */
export async function getLobby(code) {
  const snap = await get(ref(rtdb, `lobbies/${code}`));
  return snap.exists() ? { code, ...snap.val() } : null;
}

/**
 * Get lobby data by code
 */
export async function getLobbyData(lobbyCode) {
  const lobbyRef = ref(rtdb, `lobbies/${lobbyCode}`);
  const snap = await get(lobbyRef);
  return snap.exists() ? snap.val() : null;
}
// ── User Service: Registration, Profile, Stars ──
import { db } from './firebase';
import { doc, setDoc, getDoc, updateDoc, serverTimestamp, collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { getRank } from '../utils/ranks';

const STORAGE_KEY = 'bbl_user';

/**
 * Get user from localStorage
 */
export function getLocalUser() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

/**
 * Save user to localStorage
 */
function saveLocalUser(user) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
}

/**
 * Check if an IGN already exists in Firestore.
 */
export async function checkIGNExists(username) {
  const snap = await getDoc(doc(db, 'players', username.toLowerCase()));
  return snap.exists();
}

/**
 * Fetch a user by IGN (used for cross-device account recovery).
 */
export async function fetchUserByIGN(username) {
  const snap = await getDoc(doc(db, 'players', username.toLowerCase()));
  if (!snap.exists()) return null;

  const data = snap.data();

  const basketballStars = data.basketballStars ?? 0;
  const badmintonStars  = data.badmintonStars  ?? (data.stars || 0);

  const user = {
    userId:           data.userId,
    username:         data.username,
    avatar:           data.avatar,
    stars:            data.stars || 0,
    basketballStars,
    badmintonStars,
    wins:             data.wins    || 0,
    losses:           data.losses  || 0,
    basketballWins:   data.basketballWins   || 0,
    basketballLosses: data.basketballLosses || 0,
    badmintonWins:    data.badmintonWins    || 0,
    badmintonLosses:  data.badmintonLosses  || 0,
    basketballRankInfo: getRank(basketballStars),
    badmintonRankInfo:  getRank(badmintonStars),
    rankInfo:           getRank(basketballStars),
  };

  saveLocalUser(user);
  return user;
}

/**
 * Register a new user.
 */
export async function registerUser(username, avatarIndex) {
  const userId = username.toLowerCase();

  const user = {
    userId,
    username,
    avatar: avatarIndex,
    stars: 0,
    basketballStars: 0,
    badmintonStars: 0,
    wins: 0,
    losses: 0,
    basketballWins: 0,
    basketballLosses: 0,
    badmintonWins: 0,
    badmintonLosses: 0,
  };

  await setDoc(doc(db, 'players', userId), {
    ...user,
    basketballRank: 'Warrior',
    badmintonRank: 'Warrior',
    rank: 'Warrior',
    currentMatchId: null,
    currentLobbyId: null,
    createdAt: serverTimestamp(),
  });

  saveLocalUser(user);
  return user;
}

/**
 * Fetch user profile from Firestore.
 */
export async function fetchUserProfile(userId) {
  const snap = await getDoc(doc(db, 'players', userId));
  if (!snap.exists()) return null;
  const data = snap.data();

  const basketballStars = data.basketballStars ?? 0;
  const badmintonStars  = data.badmintonStars  ?? (data.stars || 0);

  const basketballRankInfo = getRank(basketballStars);
  const badmintonRankInfo  = getRank(badmintonStars);

  return {
    ...data,
    basketballStars,
    badmintonStars,
    basketballRankInfo,
    badmintonRankInfo,
    rankInfo: basketballRankInfo,
  };
}

/**
 * Fetch top 10 leaderboard for a given sport.
 * Primary sort:   basketballStars / badmintonStars (desc)
 * Secondary sort: wins (desc) — tiebreaker
 *
 * @param {'basketball' | 'badminton'} sport
 * @returns {Promise<Array>} sorted array of player objects with rankInfo attached
 */
export async function fetchLeaderboard(sport) {
  const starsField = sport === 'basketball' ? 'basketballStars' : 'badmintonStars';
  const winsField  = sport === 'basketball' ? 'basketballWins'  : 'badmintonWins';

  // Firestore only allows one orderBy on a non-indexed second field without
  // a composite index, so we fetch top 20 sorted by stars then sort wins client-side.
  const q = query(
    collection(db, 'players'),
    orderBy(starsField, 'desc'),
    limit(20),
  );

  const snap = await getDocs(q);

  const players = snap.docs.map((d) => {
    const data = d.data();
    const stars = data[starsField] ?? 0;
    const wins  = data[winsField]  ?? 0;
    return {
      userId:   d.id,
      username: data.username || d.id,
      avatar:   data.avatar   ?? 0,
      stars,
      wins,
      rankInfo: getRank(stars),
    };
  });

  // Client-side tiebreaker: sort by stars desc, then wins desc
  players.sort((a, b) => b.stars - a.stars || b.wins - a.wins);

  // Return only top 10 after tiebreaker sort
  return players.slice(0, 10);
}

/**
 * Update user stars after a match.
 */
export async function updateUserStars(userId, starDelta, sport) {
  const docRef = doc(db, 'players', userId);
  const snap = await getDoc(docRef);
  if (!snap.exists()) return;

  const current = snap.data();

  const starsField = sport === 'basketball' ? 'basketballStars' : 'badmintonStars';
  const rankField  = sport === 'basketball' ? 'basketballRank'  : 'badmintonRank';
  const winsField  = sport === 'basketball' ? 'basketballWins'  : 'badmintonWins';
  const lossField  = sport === 'basketball' ? 'basketballLosses': 'badmintonLosses';

  const currentSportStars = current[starsField] ?? (sport === 'badminton' ? (current.stars || 0) : 0);
  const newStars   = Math.max(0, currentSportStars + starDelta);
  const newRank    = getRank(newStars);

  const updates = {
    [starsField]: newStars,
    [rankField]:  newRank.name,
    wins:   (current.wins   || 0) + (starDelta > 0 ? 1 : 0),
    losses: (current.losses || 0) + (starDelta < 0 ? 1 : 0),
  };

  if (starDelta > 0) updates[winsField]  = (current[winsField]  || 0) + 1;
  if (starDelta < 0) updates[lossField]  = (current[lossField]  || 0) + 1;

  await updateDoc(docRef, updates);

  const local = getLocalUser();
  if (local && local.userId === userId) {
    saveLocalUser({
      ...local,
      [starsField]: newStars,
      stars: sport === 'badminton' ? newStars : (local.stars || 0),
    });
  }

  return { stars: newStars, rank: newRank, sport };
}

/**
 * Update user's current lobby/match reference
 */
export async function updateUserState(userId, updates) {
  await updateDoc(doc(db, 'players', userId), updates);
}
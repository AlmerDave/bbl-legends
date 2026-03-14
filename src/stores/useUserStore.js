// ── User Store (Zustand) ──
import { create } from 'zustand';
import { getLocalUser } from '../services/userService';
import { getRank } from '../utils/ranks';

const useUserStore = create((set, get) => ({
  userId: null,
  username: null,
  avatar: null,

  // Legacy combined stars (kept so any old reads don't crash)
  stars: 0,

  // Sport-separated stars
  basketballStars: 0,
  badmintonStars: 0,

  wins: 0,
  losses: 0,
  basketballWins: 0,
  basketballLosses: 0,
  badmintonWins: 0,
  badmintonLosses: 0,

  // Rank info per sport
  basketballRankInfo: getRank(0),
  badmintonRankInfo: getRank(0),
  rankInfo: getRank(0), // legacy alias → basketball

  isRegistered: false,

  // Hydrate from localStorage
  hydrate: () => {
    const user = getLocalUser();
    if (user) {
      const bball = user.basketballStars ?? 0;
      const baddy = user.badmintonStars  ?? (user.stars || 0);
      set({
        userId:   user.userId,
        username: user.username,
        avatar:   user.avatar,
        stars:    user.stars || 0,
        basketballStars: bball,
        badmintonStars:  baddy,
        wins:    user.wins    || 0,
        losses:  user.losses  || 0,
        basketballWins:    user.basketballWins    || 0,
        basketballLosses:  user.basketballLosses  || 0,
        badmintonWins:     user.badmintonWins     || 0,
        badmintonLosses:   user.badmintonLosses   || 0,
        basketballRankInfo: getRank(bball),
        badmintonRankInfo:  getRank(baddy),
        rankInfo:           getRank(bball),
        isRegistered: true,
      });
    }
  },

  // Set user after registration
  setUser: (user) => {
    const bball = user.basketballStars ?? 0;
    const baddy = user.badmintonStars  ?? 0;
    set({
      userId:   user.userId,
      username: user.username,
      avatar:   user.avatar,
      stars:    user.stars || 0,
      basketballStars: bball,
      badmintonStars:  baddy,
      basketballRankInfo: getRank(bball),
      badmintonRankInfo:  getRank(baddy),
      rankInfo:           getRank(bball),
      isRegistered: true,
    });
  },

  // Update stars for a specific sport (called after Firestore fetch)
  updateSportStars: (sport, newStars) => {
    if (sport === 'basketball') {
      set({ basketballStars: newStars, basketballRankInfo: getRank(newStars), rankInfo: getRank(newStars) });
    } else {
      set({ badmintonStars: newStars, badmintonRankInfo: getRank(newStars) });
    }
  },

  // Legacy updateStars — still works, updates basketball by default
  // Kept so ProfileScreen and any other old callers don't crash
  updateStars: (newStars) => {
    set({
      stars: newStars,
      basketballStars: newStars,
      basketballRankInfo: getRank(newStars),
      rankInfo: getRank(newStars),
    });
  },

  // Logout (clear state)
  logout: () => {
    localStorage.removeItem('bbl_user');
    set({
      userId: null, username: null, avatar: null,
      stars: 0,
      basketballStars: 0, badmintonStars: 0,
      wins: 0, losses: 0,
      basketballWins: 0, basketballLosses: 0,
      badmintonWins: 0, badmintonLosses: 0,
      basketballRankInfo: getRank(0),
      badmintonRankInfo:  getRank(0),
      rankInfo: getRank(0),
      isRegistered: false,
    });
  },
}));

export default useUserStore;
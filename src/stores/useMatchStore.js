// ── Match Store (Zustand) ──
import { create } from 'zustand';

const useMatchStore = create((set) => ({
  matchId: null,
  sport: null,
  format: null,
  gameMode: 'ranked',
  courtId: null,
  status: null,
  teams: { blue: { players: [], lobbies: [] }, red: { players: [], lobbies: [] } },
  players: {},
  acceptances: {},
  votes: {},
  voteCount: { blue: 0, red: 0, pending: 0 },
  result: null,
  expiresAt: null,
  voteExpiresAt: null,

  // Set full match data from Firebase listener
  setMatch: (data) => {
    if (!data) {
      set({
        matchId: null, sport: null, format: null, gameMode: 'ranked', courtId: null,
        status: null, teams: { blue: { players: [], lobbies: [] }, red: { players: [], lobbies: [] } },
        players: {}, acceptances: {}, votes: {},
        voteCount: { blue: 0, red: 0, pending: 0 },
        result: null, expiresAt: null, voteExpiresAt: null,
      });
      return;
    }
    set({
      matchId: data.matchId,
      sport: data.sport,
      format: data.format,
      gameMode: data.gameMode || 'ranked',
      courtId: data.courtId,
      status: data.status,
      teams: data.teams || { blue: { players: [], lobbies: [] }, red: { players: [], lobbies: [] } },
      players: data.players || {},
      acceptances: data.acceptances || {},
      votes: data.votes || {},
      voteCount: data.voteCount || { blue: 0, red: 0, pending: 0 },
      result: data.result || null,
      expiresAt: data.expiresAt || null,
      voteExpiresAt: data.voteExpiresAt || null,
    });
  },

  clearMatch: () => {
    set({
      matchId: null, sport: null, format: null, gameMode: 'ranked', courtId: null,
      status: null, teams: { blue: { players: [], lobbies: [] }, red: { players: [], lobbies: [] } },
      players: {}, acceptances: {}, votes: {},
      voteCount: { blue: 0, red: 0, pending: 0 },
      result: null, expiresAt: null, voteExpiresAt: null,
    });
  },
}));

export default useMatchStore;
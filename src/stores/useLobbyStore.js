// ── Lobby Store (Zustand) ──
import { create } from 'zustand';
import { DEFAULT_GAME_MODE } from '../utils/constants';

const useLobbyStore = create((set) => ({
  lobbyCode: null,
  sport: null,
  location: null,
  status: null,
  players: {},
  playerCount: 0,
  host: null,
  selectedFormat: null,
  matchId: null,
  gameMode: DEFAULT_GAME_MODE,   // ← new field; defaults to 'ranked'

  // Set full lobby data from Firebase listener
  setLobby: (lobbyData) => {
    if (!lobbyData) {
      set({
        lobbyCode: null, sport: null, location: null,
        status: null, players: {}, playerCount: 0,
        host: null, selectedFormat: null, matchId: null,
        gameMode: DEFAULT_GAME_MODE,
      });
      return;
    }
    set({
      lobbyCode: lobbyData.code,
      sport: lobbyData.sport,
      location: lobbyData.location,
      status: lobbyData.status,
      players: lobbyData.players || {},
      playerCount: lobbyData.playerCount || 0,
      host: lobbyData.host,
      selectedFormat: lobbyData.selectedFormat,
      matchId: lobbyData.matchId || null,
      gameMode: lobbyData.gameMode || DEFAULT_GAME_MODE,  // ← synced from RTDB
    });
  },

  // Clear lobby
  clearLobby: () => {
    set({
      lobbyCode: null, sport: null, location: null,
      status: null, players: {}, playerCount: 0,
      host: null, selectedFormat: null, matchId: null,
      gameMode: DEFAULT_GAME_MODE,
    });
  },

  // Set selected format
  setFormat: (format) => set({ selectedFormat: format }),

  // Set game mode (local optimistic update; RTDB update handled in LobbyScreen)
  setGameMode: (gameMode) => set({ gameMode }),
}));

export default useLobbyStore;
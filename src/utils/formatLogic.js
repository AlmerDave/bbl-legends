// ── Smart Format Selection Logic ──
import { SPORTS, FORMATS, TEAM_SIZE, MAX_LOBBY_SIZE } from './constants';

/**
 * Determine if format can be auto-detected or needs manual selection
 * NEW LOGIC: Each lobby = ONE TEAM (not split into two teams)
 * Format determines what match type they're searching for
 * 
 * @param {string} sport - 'basketball' | 'badminton'
 * @param {number} playerCount - number of players in THIS lobby (the team)
 * @returns {{ auto: boolean, format: string|null, options: string[] }}
 */
export function getFormatOptions(sport, playerCount) {
  if (sport === SPORTS.BADMINTON) {
    if (playerCount === 2) {
      // Full badminton team → auto 2v2
      return { auto: true, format: '2v2', options: [] };
    }
    if (playerCount === 1) {
      // Solo player → can search for 1v1 or 2v2
      return { auto: false, format: null, options: ['1v1', '2v2'] };
    }
  }

  if (sport === SPORTS.BASKETBALL) {
    if (playerCount === 5) {
      // Full basketball team → auto 5v5
      return { auto: true, format: '5v5', options: [] };
    }
    
    // Basketball with 1-4 players → show formats where team size >= playerCount
    // 1 player → can search for 1v1, 2v2, 3v3, 4v4, 5v5
    // 2 players → can search for 2v2, 3v3, 4v4, 5v5
    // 3 players → can search for 3v3, 4v4, 5v5
    // 4 players → can search for 4v4, 5v5
    const options = FORMATS[sport].filter(format => {
      const teamSize = TEAM_SIZE[format];
      return teamSize >= playerCount;
    });

    if (options.length === 1) {
      return { auto: true, format: options[0], options: [] };
    }

    return { auto: false, format: null, options };
  }

  return { auto: false, format: null, options: FORMATS[sport] || [] };
}

/**
 * Check if a lobby has reached max size for its sport
 */
export function isLobbyFull(sport, playerCount) {
  return playerCount >= MAX_LOBBY_SIZE[sport];
}

/**
 * Get team size for a given format
 */
export function getTeamSize(format) {
  return TEAM_SIZE[format] || 1;
}
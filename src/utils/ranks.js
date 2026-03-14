// ── Star → Rank Mapping ──

const RANK_TIERS = [
  { name: 'Warrior',          minStars: 0,   badge: '⚔️',  color: '#CD7F32' },
  { name: 'Elite',            minStars: 11,  badge: '🛡️',  color: '#C0C0C0' },
  { name: 'Master',           minStars: 21,  badge: '🏅',  color: '#FFD700' },
  { name: 'Grandmaster',      minStars: 36,  badge: '💎',  color: '#B9F2FF' },
  { name: 'Epic',             minStars: 51,  badge: '👑',  color: '#9B59B6' },
  { name: 'Legend',            minStars: 66,  badge: '🌟',  color: '#F1C40F' },
  { name: 'Mythic',           minStars: 81,  badge: '🔥',  color: '#E74C3C' },
  { name: 'Mythical Honor',   minStars: 91,  badge: '✨',  color: '#3498DB' },
  { name: 'Mythical Glory',   minStars: 96,  badge: '🌌',  color: '#8E44AD' },
  { name: 'Mythical Immortal',minStars: 101, badge: '🏆',  color: '#F39C12' },
];

/**
 * Get rank info from star count
 * @param {number} stars
 * @returns {{ name: string, badge: string, color: string, tier: number, stars: number, starsInTier: number, starsToNext: number }}
 */
export function getRank(stars = 0) {
  const safeStars = Math.max(0, stars);
  let current = RANK_TIERS[0];
  let tierIndex = 0;

  for (let i = RANK_TIERS.length - 1; i >= 0; i--) {
    if (safeStars >= RANK_TIERS[i].minStars) {
      current = RANK_TIERS[i];
      tierIndex = i;
      break;
    }
  }

  const nextTier = RANK_TIERS[tierIndex + 1];
  const starsInTier = safeStars - current.minStars;
  const starsToNext = nextTier ? nextTier.minStars - safeStars : 0;

  return {
    name: current.name,
    badge: current.badge,
    color: current.color,
    tier: tierIndex,
    stars: safeStars,
    starsInTier,
    starsToNext,
  };
}

/**
 * Get star display (filled/empty stars for visual)
 * @param {number} stars
 * @param {number} max
 * @returns {boolean[]}
 */
export function getStarDisplay(stars, max = 5) {
  const starsInTier = getRank(stars).starsInTier;
  const display = starsInTier % max || (starsInTier > 0 ? max : 0);
  return Array.from({ length: max }, (_, i) => i < display);
}

export { RANK_TIERS };

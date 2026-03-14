import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useUserStore from '../stores/useUserStore';
import BottomNav from '../components/BottomNav';
import { AVATAR_URLS } from '../utils/constants';
import { fetchUserProfile } from '../services/userService';
import { getRank } from '../utils/ranks';

export default function ProfileScreen() {
  const { username, avatar, userId, updateSportStars } = useUserStore();
  const navigate = useNavigate();
  const avatarUrl = AVATAR_URLS[avatar] || AVATAR_URLS[0];
  const [isLoading, setIsLoading] = useState(true);

  // Profile data state
  const [wins, setWins]           = useState(0);
  const [losses, setLosses]       = useState(0);
  const [totalGames, setTotalGames] = useState(0);
  const [winRate, setWinRate]     = useState(0);

  // Per-sport stars
  const [bballStars, setBballStars] = useState(0);
  const [badyStars,  setBadyStars]  = useState(0);

  useEffect(() => {
    async function loadUserData() {
      if (!userId) return;
      setIsLoading(true);
      try {
        const userData = await fetchUserProfile(userId);
        if (userData) {
          const bs = userData.basketballStars ?? 0;
          const bd = userData.badmintonStars  ?? 0;

          setBballStars(bs);
          setBadyStars(bd);
          updateSportStars('basketball', bs);
          updateSportStars('badminton',  bd);

          const userWins   = userData.wins   || 0;
          const userLosses = userData.losses || 0;
          const games      = userWins + userLosses;
          setWins(userWins);
          setLosses(userLosses);
          setTotalGames(games);
          setWinRate(games > 0 ? Math.round((userWins / games) * 100) : 0);
        }
      } catch (error) {
        console.error('Failed to fetch user profile:', error);
      } finally {
        setIsLoading(false);
      }
    }
    loadUserData();
  }, [userId, updateSportStars]);

  const bballRank = getRank(bballStars);
  const badyRank  = getRank(badyStars);

  return (
    <div className="relative flex min-h-screen w-full flex-col max-w-md mx-auto overflow-x-hidden bg-[#f8f6f6] dark:bg-[#221610] shadow-2xl">
      {/* Header */}
      <header className="flex items-center p-4 justify-between sticky top-0 z-20 bg-[#f8f6f6]/80 dark:bg-[#221610]/80 backdrop-blur-md border-b border-slate-200 dark:border-primary/20">
        <button
          onClick={() => navigate('/home')}
          className="size-10 flex items-center justify-center rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-primary/20 hover:text-primary transition-colors"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-xl font-extrabold tracking-tighter italic text-slate-900 dark:text-slate-100 uppercase">
          Profile
        </h1>
        <div className="size-10" />
      </header>

      <main className="flex-1 flex flex-col items-center p-6 pb-28">
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
          </div>
        ) : (
          <>
            {/* Avatar */}
            <div className="size-28 rounded-full border-4 border-primary bg-primary/20 overflow-hidden mb-4 shadow-[0_0_30px_rgba(236,91,19,0.4)]">
              <img src={avatarUrl} alt={username} className="w-full h-full object-cover" />
            </div>

            {/* Username */}
            <h2 className="text-3xl font-black italic uppercase tracking-tighter text-slate-900 dark:text-white mb-6">
              {username || 'Player'}
            </h2>

            {/* ── Sport Rank Cards ── */}
            <div className="w-full mb-6">
              {/* Section label */}
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                  Rank by Sport
                </p>
                <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                {/* Basketball card */}
                <SportRankCard
                  sport="basketball"
                  label="Basketball"
                  icon="sports_basketball"
                  accentColor="#ec5b13"
                  bgFrom="rgba(236,91,19,0.15)"
                  bgTo="rgba(236,91,19,0.03)"
                  borderColor="rgba(236,91,19,0.3)"
                  stars={bballStars}
                  rank={bballRank}
                />

                {/* Badminton card */}
                <SportRankCard
                  sport="badminton"
                  label="Badminton"
                  icon="sports_tennis"
                  accentColor="#3b82f6"
                  bgFrom="rgba(59,130,246,0.15)"
                  bgTo="rgba(59,130,246,0.03)"
                  borderColor="rgba(59,130,246,0.3)"
                  stars={badyStars}
                  rank={badyRank}
                />
              </div>
            </div>

            {/* Stats Grid */}
            <div className="w-full mb-6 grid grid-cols-3 gap-3">
              <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border-2 border-emerald-500/30 rounded-xl p-4 text-center">
                <p className="text-3xl font-black text-emerald-600 dark:text-emerald-400">{wins}</p>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-bold uppercase tracking-wide mt-1">Wins</p>
              </div>
              <div className="bg-gradient-to-br from-slate-500/20 to-slate-500/5 border-2 border-slate-500/30 rounded-xl p-4 text-center">
                <p className="text-3xl font-black text-slate-900 dark:text-white">{totalGames}</p>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-bold uppercase tracking-wide mt-1">Games</p>
              </div>
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30 rounded-xl p-4 text-center">
                <p className="text-3xl font-black text-primary">{winRate}%</p>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-bold uppercase tracking-wide mt-1">Win Rate</p>
              </div>
            </div>

            {/* Coming Soon */}
            <div className="w-full bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30 rounded-2xl p-8 text-center">
              <div className="size-20 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary/20">
                <span className="material-symbols-outlined text-primary text-5xl">construction</span>
              </div>
              <h3 className="text-2xl font-black italic uppercase tracking-tighter text-slate-900 dark:text-white mb-3">
                Coming <span className="text-primary">Soon</span>
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Match history, achievements, and more features are on the way!
              </p>
            </div>
          </>
        )}
      </main>

      <BottomNav />
    </div>
  );
}

// ── Sport Rank Card sub-component ─────────────────────────────────────────────
function SportRankCard({ label, icon, accentColor, bgFrom, bgTo, borderColor, stars, rank }) {
  const progressPct = rank.starsToNext > 0
    ? Math.round((rank.starsInTier / (rank.starsInTier + rank.starsToNext)) * 100)
    : 100;

  return (
    <div
      className="relative rounded-2xl p-4 flex flex-col gap-2 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${bgFrom} 0%, ${bgTo} 100%)`,
        border: `2px solid ${borderColor}`,
      }}
    >
      {/* Sport label row */}
      <div className="flex items-center gap-1.5 mb-1">
        <span
          className="material-symbols-outlined text-base"
          style={{ color: accentColor, fontSize: '1rem' }}
        >
          {icon}
        </span>
        <p
          className="text-[10px] font-black uppercase tracking-widest"
          style={{ color: accentColor }}
        >
          {label}
        </p>
      </div>

      {/* Badge + rank name */}
      <div className="flex items-center gap-2">
        <span className="text-3xl leading-none">{rank.badge}</span>
        <div className="min-w-0">
          <p
            className="text-base font-black italic uppercase tracking-tight leading-none truncate"
            style={{ color: rank.color }}
          >
            {rank.name}
          </p>
          <p className="text-xs font-bold text-slate-500 dark:text-slate-400 mt-0.5">
            {stars} ⭐
          </p>
        </div>
      </div>

      {/* Progress bar to next rank */}
      <div className="mt-1">
        <div className="h-1.5 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${progressPct}%`, backgroundColor: accentColor }}
          />
        </div>
        {rank.starsToNext > 0 && (
          <p className="text-[10px] text-slate-400 dark:text-slate-500 font-medium mt-1">
            {rank.starsToNext} to next rank
          </p>
        )}
      </div>
    </div>
  );
}
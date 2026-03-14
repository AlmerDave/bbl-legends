import { useNavigate, useLocation } from 'react-router-dom';

const NAV_ITEMS = [
  { label: 'Home', icon: 'home', path: '/home' },
  { label: 'Ranks', icon: 'military_tech', path: '/ranks' },
  { label: 'Profile', icon: 'person', path: '/profile' },
];

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="flex justify-around border-t border-slate-200 dark:border-primary/20 bg-[#f8f6f6] dark:bg-[#221610] px-4 pb-6 pt-2">
      {NAV_ITEMS.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <button
            key={item.label}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center gap-1 transition-colors ${
              isActive ? 'text-primary' : 'text-slate-400 dark:text-slate-500 hover:text-primary'
            }`}
          >
            <span className="material-symbols-outlined text-[28px]">{item.icon}</span>
            <span className="text-[10px] font-bold uppercase tracking-widest">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
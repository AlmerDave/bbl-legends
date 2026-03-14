import { AVATAR_URLS } from '../utils/constants';
import { getRank } from '../utils/ranks';

export default function PlayerCard({ player, isHost = false, status = 'ready', borderColor = 'primary' }) {
  const avatarUrl = AVATAR_URLS[player.avatar] || AVATAR_URLS[0];
  const rank = getRank(player.stars || 0);

  const statusColors = {
    ready: 'text-emerald-500',
    preparing: 'text-amber-500',
    connecting: 'text-slate-500',
    'in-game': 'text-green-500',
  };

  const statusLabels = {
    ready: '● READY',
    preparing: 'PREPARING...',
    connecting: '[CONNECTING]',
    'in-game': '[IN-GAME]',
  };

  return (
    <div className={`flex items-center justify-between p-3 rounded-xl bg-white dark:bg-slate-900 shadow-sm transition-all ${
      isHost ? 'border-l-4 border-primary' : 'border-l-4 border-slate-300 dark:border-slate-700'
    }`}>
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className={`size-12 rounded-full p-0.5 shadow-lg ${
            isHost ? 'bg-gradient-to-tr from-primary to-orange-400 shadow-primary/20' : 'bg-slate-200 dark:bg-slate-800'
          }`}>
            <div className="size-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
              <img src={avatarUrl} alt={player.username} className="w-full h-full object-cover" />
            </div>
          </div>
          {isHost && (
            <div className="absolute -bottom-1 -right-1 size-5 rounded-full bg-primary border-2 border-white dark:border-slate-900 flex items-center justify-center">
              <span className="material-symbols-outlined text-[10px] text-white">crown</span>
            </div>
          )}
        </div>
        <div>
          <p className="text-slate-900 dark:text-slate-100 font-bold text-sm flex items-center gap-2">
            {player.username}
            {isHost && (
              <span className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded uppercase">Host</span>
            )}
          </p>
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-amber-500 text-xs">star</span>
            <p className="text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase">{rank.name}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <span className={`text-[10px] font-bold uppercase ${statusColors[status] || 'text-slate-400'} ${status === 'ready' ? 'animate-pulse' : ''}`}>
          {statusLabels[status] || status}
        </span>
      </div>
    </div>
  );
}

import { AVATAR_URLS } from '../utils/constants';
import { getRank } from '../utils/ranks';

export default function TeamRoster({ team = 'blue', players = [], playerData = {}, acceptances = {}, showStars = true }) {
  const isBlue = team === 'blue';
  const borderColor = isBlue ? 'border-blue-500' : 'border-red-500';
  const bgColor = isBlue ? 'bg-blue-600/20' : 'bg-red-600/20';
  const textColor = isBlue ? 'text-blue-400' : 'text-red-400';
  const label = isBlue ? 'BLUE TEAM' : 'RED TEAM';

  return (
    <div className="space-y-1">
      <div className={`flex items-center justify-between px-2 py-1 ${bgColor} border-l-4 ${borderColor} rounded-sm`}>
        <h4 className={`${textColor} text-xs font-black tracking-widest uppercase`}>{label}</h4>
      </div>
      {players.map((playerId) => {
        const p = playerData[playerId] || {};
        const avatarUrl = AVATAR_URLS[p.avatar] || AVATAR_URLS[0];
        const rank = getRank(p.stars || 0);
        const hasAccepted = acceptances[playerId] === true;

        return (
          <div 
            key={playerId} 
            className={`flex items-center gap-3 bg-slate-800/50 p-2 rounded-lg border transition-all ${
              hasAccepted 
                ? 'border-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.3)]'
                : 'border-slate-700/50'
            }`}
          >
            <div
              className={`bg-center bg-no-repeat aspect-square bg-cover rounded-full h-10 w-10 border ${isBlue ? 'border-blue-500/50' : 'border-red-500/50'}`}
              style={{ backgroundImage: `url("${avatarUrl}")` }}
            />
            <div className="flex flex-col flex-1">
              <p className="text-slate-100 text-sm font-bold leading-none">{p.username || 'Unknown'}</p>
              <p className="text-slate-400 text-[10px] font-medium">{rank.name}</p>
            </div>
            {showStars && (
              <div className="text-primary text-xs">
                {'⭐'.repeat(Math.min(5, Math.max(1, Math.ceil((p.stars || 0) / 10))))}
              </div>
            )}
            {hasAccepted && (
              <div className="flex items-center gap-1 bg-emerald-500/20 px-2 py-1 rounded">
                <span className="material-symbols-outlined text-emerald-500 text-sm">check_circle</span>
                <span className="text-emerald-500 text-[10px] font-bold">READY</span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
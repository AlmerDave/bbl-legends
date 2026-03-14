import { getRank } from '../utils/ranks';

export default function RankBadge({ stars = 0, size = 'md', showStars = true, animated = false }) {
  const rank = getRank(stars);
  
  const sizes = {
    sm: {
      text: 'text-[10px]',
      badge: 'text-sm',
      star: 'text-[12px]',
      starNum: 'text-[10px]',
    },
    md: {
      text: 'text-xs',
      badge: 'text-base',
      star: 'text-[14px]',
      starNum: 'text-xs',
    },
    lg: {
      text: 'text-sm',
      badge: 'text-xl',
      star: 'text-base',
      starNum: 'text-sm',
    },
  };

  const sizeConfig = sizes[size] || sizes.md;

  return (
    <div className="flex items-center gap-2">
      {/* Rank Badge with Glow */}
      <div 
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border-2 ${animated ? 'animate-pulse' : ''}`}
        style={{ 
          backgroundColor: `${rank.color}15`,
          borderColor: `${rank.color}40`,
          boxShadow: `0 0 20px ${rank.color}30`
        }}
      >
        <span className={sizeConfig.badge}>{rank.badge}</span>
        <span 
          className={`${sizeConfig.text} font-bold uppercase tracking-wider`} 
          style={{ color: rank.color }}
        >
          {rank.name}
        </span>
      </div>

      {/* Stars */}
      {showStars && (
        <div className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded-full border border-primary/20">
          <span className={`material-symbols-outlined text-primary ${sizeConfig.star}`}>star</span>
          <span className={`text-primary ${sizeConfig.starNum} font-bold leading-none`}>{stars}</span>
        </div>
      )}
    </div>
  );
}
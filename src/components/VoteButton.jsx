export default function VoteButton({ type = 'my-team', onClick, disabled = false, selected = false }) {
  const isMyTeam = type === 'my-team';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full py-4 rounded-xl font-black uppercase tracking-widest italic shadow-lg transition-all flex items-center justify-center gap-2 group ${
        isMyTeam
          ? `bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/20 ${selected ? 'ring-4 ring-blue-300' : ''}`
          : `bg-red-600 hover:bg-red-700 text-white shadow-red-600/20 ${selected ? 'ring-4 ring-red-300' : ''}`
      } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      <span className="material-symbols-outlined group-hover:scale-110 transition-transform">
        {isMyTeam ? 'military_tech' : 'close'}
      </span>
      {isMyTeam ? 'MY TEAM WON' : 'ENEMY TEAM WON'}
    </button>
  );
}

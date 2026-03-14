import { AVATAR_URLS } from '../utils/constants';

export default function AvatarSelector({ selected, onSelect }) {
  return (
    <div className="grid grid-cols-4 gap-3">
      {AVATAR_URLS.map((url, index) => {
        const isSelected = selected === index;
        return (
          <div
            key={index}
            onClick={() => onSelect(index)}
            className={`aspect-square rounded-lg overflow-hidden cursor-pointer relative transition-all ${
              isSelected
                ? 'shadow-[0_0_15px_rgba(0,242,255,0.6)] border-2 border-[#00f2ff]'
                : 'border-2 border-white/10 hover:border-white/30'
            } bg-[#2d174d]`}
          >
            <img
              src={url}
              alt={`Avatar ${index + 1}`}
              className={`w-full h-full object-cover ${
                isSelected ? '' : 'grayscale opacity-60 hover:grayscale-0 hover:opacity-100'
              } transition-all`}
            />
            {isSelected && (
              <>
                <div className="absolute inset-0 bg-[#00f2ff]/20" />
                <div className="absolute bottom-0 right-0 p-0.5 bg-[#00f2ff]">
                  <span className="material-symbols-outlined text-[10px] text-black font-black">check</span>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

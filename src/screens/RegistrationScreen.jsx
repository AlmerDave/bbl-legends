import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser, fetchUserByIGN, checkIGNExists } from '../services/userService';
import useUserStore from '../stores/useUserStore';
import { USERNAME_MIN, USERNAME_MAX, USERNAME_REGEX } from '../utils/constants';
import { AVATAR_URLS } from '../utils/constants';
import toast from 'react-hot-toast';

const RANK_BADGE_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQi6XbHfLEpG4vWWe8gJ96-qS0ZbVd2GC7BC2aOSqjxq5Wca7aLuFzSzhmIaeAY8IIsr89R86eon-hdt_IKZboUj9MXvtGjW-0x9Sz_Ud17ripaXeWBBkVeikhCipD6osKYwLQM-UFOhhMkVtZg8cWd8f7ctjcpx0835qjWlxoS9DFztyoipVhdqfgC4UgX2GgxI36XsvmUje7co2RvLhM1O20hOb4VXXSNZBkBr66q77JI5O7ZX-U2q4Ejpvynyg1AlbOw7TRRMQ';

const TAB_NEW      = 'new';
const TAB_RETURNING = 'returning';

export default function RegistrationScreen() {
  const [activeTab, setActiveTab] = useState(TAB_NEW);
  const [username, setUsername]   = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState(0);
  const [loading, setLoading] = useState(false);
  const setUser    = useUserStore((s) => s.setUser);
  const navigate   = useNavigate();

  const isValidUsername =
    username.length >= USERNAME_MIN &&
    username.length <= USERNAME_MAX &&
    USERNAME_REGEX.test(username);

  // ── Handlers ──────────────────────────────────────────────

  const handleRegister = async () => {
    if (!isValidUsername) {
      toast.error('Invalid username. 4-16 chars, alphanumeric + underscore only.');
      return;
    }
    setLoading(true);
    try {
      // Block duplicate IGNs
      const taken = await checkIGNExists(username);
      if (taken) {
        toast.error('That IGN is already taken. Choose another.');
        return;
      }
      const user = await registerUser(username, selectedAvatar);
      setUser(user);
      toast.success('Welcome to BBL Legends!');
      navigate('/home');
    } catch (err) {
      toast.error('Registration failed. Try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleRecover = async () => {
    if (!isValidUsername) {
      toast.error('Enter a valid IGN to look up.');
      return;
    }
    setLoading(true);
    try {
      const user = await fetchUserByIGN(username);
      if (!user) {
        toast.error('No account found with that IGN.');
        return;
      }
      setUser(user);
      toast.success(`Welcome back, ${user.username}!`);
      navigate('/home');
    } catch (err) {
      toast.error('Lookup failed. Try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
    setUsername('');
  };

  // ── Render ─────────────────────────────────────────────────

  const isNew = activeTab === TAB_NEW;

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col moba-gradient overflow-x-hidden max-w-md mx-auto border-x border-primary/10">

      {/* TopAppBar */}
      <div className="flex items-center p-4 pb-2 justify-between">
        <div
          className="text-white flex size-12 shrink-0 items-center cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <span className="material-symbols-outlined text-3xl">arrow_back</span>
        </div>
        <div className="flex flex-col items-center flex-1 pr-12">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-1 shadow-lg shadow-primary/50">
            <span className="material-symbols-outlined text-white text-3xl">sports_esports</span>
          </div>
          <h2 className="text-white text-xs font-black leading-tight tracking-[0.1em] uppercase">BBL LEGENDS</h2>
        </div>
      </div>

      {/* Hero */}
      <div className="px-6 pt-4 pb-2 text-center">
        <h1 className="text-moba-accent text-3xl font-black italic tracking-tighter uppercase gold-text-glow">
          WELCOME TO BBL LEGENDS
        </h1>
        <p className="text-slate-300 text-xs mt-1 font-semibold uppercase tracking-widest opacity-80">
          {isNew ? 'Create your legend today' : 'Continue your legacy'}
        </p>
      </div>

      {/* ── Tab Switch ── */}
      <div className="px-6 pt-2 pb-4">
        <div className="flex rounded-xl overflow-hidden border-2 border-primary/30 bg-black/40 p-1 gap-1">
          <button
            onClick={() => handleTabSwitch(TAB_NEW)}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-xs font-black uppercase tracking-widest transition-all duration-200
              ${isNew
                ? 'bg-primary text-white shadow-[0_4px_15px_-3px_rgba(236,91,19,0.6)]'
                : 'text-slate-400 hover:text-white'
              }`}
          >
            <span className="material-symbols-outlined text-sm">add_circle</span>
            New Legend
          </button>
          <button
            onClick={() => handleTabSwitch(TAB_RETURNING)}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-xs font-black uppercase tracking-widest transition-all duration-200
              ${!isNew
                ? 'bg-primary text-white shadow-[0_4px_15px_-3px_rgba(236,91,19,0.6)]'
                : 'text-slate-400 hover:text-white'
              }`}
          >
            <span className="material-symbols-outlined text-sm">login</span>
            Returning
          </button>
        </div>
      </div>

      {/* ── Username Input (shared) ── */}
      <div className="px-6 pb-4">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-end">
            <p className="text-white text-sm font-bold uppercase tracking-wider">
              {isNew ? 'Username' : 'Your IGN'}
            </p>
            {isNew && (
              <span className="text-moba-accent text-[10px] font-bold">
                {username.length}/{USERNAME_MAX}
              </span>
            )}
          </div>
          <div className="flex w-full items-stretch rounded-xl overflow-hidden border-2 border-primary/30 bg-black/40 focus-within:border-moba-accent transition-all">
            <input
              className="bg-transparent flex w-full min-w-0 flex-1 border-none text-white focus:ring-0 h-14 placeholder:text-slate-500 p-4 text-base font-bold italic"
              placeholder={isNew ? 'ENTER YOUR IGN...' : 'TYPE YOUR IGN...'}
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value.replace(/\s/g, ''))}
              maxLength={USERNAME_MAX}
            />
            <div className="text-moba-accent flex items-center justify-center pr-4">
              <span className="material-symbols-outlined">
                {isValidUsername ? 'verified_user' : 'info'}
              </span>
            </div>
          </div>
          <p className="text-slate-400 text-[10px] font-medium leading-normal flex items-center gap-1 px-1 italic">
            <span className="material-symbols-outlined text-xs">info</span>
            {isNew
              ? `IGN must be ${USERNAME_MIN}-${USERNAME_MAX} characters. No special symbols allowed.`
              : 'Enter the exact IGN you registered with to restore your account.'
            }
          </p>
        </div>
      </div>

      {/* ── Avatar Selection (New only) ── */}
      {isNew && (
        <div className="px-6 flex-1 flex flex-col">
          <p className="text-white text-sm font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
            Choose your Avatar
            <span className="h-[1px] flex-1 bg-gradient-to-r from-primary/50 to-transparent"></span>
          </p>
          <div className="grid grid-cols-4 gap-3 mb-6">
            {AVATAR_URLS.map((imgUrl, index) => (
              <div
                key={index}
                onClick={() => setSelectedAvatar(index)}
                className={`aspect-square rounded-lg overflow-hidden relative bg-moba-purple cursor-pointer ${
                  selectedAvatar === index
                    ? 'glowing-border'
                    : 'border-2 border-white/10 hover:border-white/30'
                } transition-all`}
              >
                <img
                  className={`w-full h-full object-cover ${
                    selectedAvatar === index ? '' : 'grayscale opacity-60 hover:grayscale-0 hover:opacity-100'
                  }`}
                  src={imgUrl}
                  alt={`Avatar ${index + 1}`}
                />
                {selectedAvatar === index && (
                  <>
                    <div className="absolute inset-0 bg-moba-accent/20"></div>
                    <div className="absolute bottom-0 right-0 p-0.5 bg-moba-accent">
                      <span className="material-symbols-outlined text-[10px] text-black font-black">check</span>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Returning: info card instead of avatar grid ── */}
      {!isNew && (
        <div className="px-6 flex-1 flex flex-col justify-center pb-4">
          <div className="bg-black/30 rounded-xl p-5 border border-white/5 flex flex-col items-center gap-3 text-center">
            <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center border border-primary/30">
              <span className="material-symbols-outlined text-primary text-3xl">manage_accounts</span>
            </div>
            <div>
              <p className="text-white text-sm font-black uppercase tracking-wider">Restore Your Account</p>
              <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                Your profile, rank, and stats will be loaded from the cloud using your IGN.
              </p>
            </div>
            <div className="flex items-center gap-4 w-full mt-1">
              {[
                { icon: 'emoji_events', label: 'Rank' },
                { icon: 'star', label: 'Stars' },
                { icon: 'sports_score', label: 'W/L' },
              ].map(({ icon, label }) => (
                <div key={label} className="flex-1 flex flex-col items-center gap-1 bg-white/5 rounded-lg py-2">
                  <span className="material-symbols-outlined text-moba-accent text-lg">{icon}</span>
                  <span className="text-white text-[10px] font-bold uppercase tracking-wider">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Rank badge (New only) ── */}
      {isNew && (
        <div className="px-6 pb-8">
          <div className="bg-black/30 rounded-xl p-4 border border-white/5 flex items-center gap-4">
            <div className="w-16 h-16 flex-shrink-0 relative">
              <div className="absolute inset-0 bg-moba-gold/20 blur-lg rounded-full"></div>
              <img
                className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(255,215,0,0.6)]"
                src={RANK_BADGE_IMAGE}
                alt="Warrior rank badge icon"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-white text-[10px] font-bold uppercase tracking-widest opacity-60">Starting Rank</p>
              <p className="text-moba-gold text-xl font-black italic tracking-tight">WARRIOR</p>
              <div className="flex items-center gap-1 mt-1">
                <span className="material-symbols-outlined text-moba-accent text-sm">star_outline</span>
                <span className="text-moba-accent text-xs font-bold">0 Stars</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── CTA Button ── */}
      <div className="px-6 pb-10 mt-auto">
        <button
          onClick={isNew ? handleRegister : handleRecover}
          disabled={!isValidUsername || loading}
          className="w-full bg-primary hover:bg-primary/90 text-white font-black py-5 rounded-xl text-xl italic tracking-tighter uppercase shadow-[0_8px_25px_-5px_rgba(236,91,19,0.5)] active:scale-[0.98] transition-all border-b-4 border-black/20 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading
            ? (isNew ? 'CREATING...' : 'SEARCHING...')
            : (isNew ? 'START YOUR JOURNEY' : 'RESTORE MY ACCOUNT')
          }
          <span className="material-symbols-outlined font-black">
            {isNew ? 'bolt' : 'download'}
          </span>
        </button>
        <p className="text-center text-white/40 text-[10px] mt-4 font-bold uppercase tracking-widest">
          {isNew
            ? 'By starting, you agree to our terms of battle'
            : 'Your progress will be restored from the cloud'
          }
        </p>
      </div>
    </div>
  );
}
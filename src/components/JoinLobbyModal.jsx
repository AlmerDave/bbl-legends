import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import useUserStore from '../stores/useUserStore';
import { joinLobby } from '../services/lobbyService';

export default function JoinLobbyModal({ onClose }) {
  const [code, setCode] = useState('');
  const [isJoining, setIsJoining] = useState(false);
  const navigate = useNavigate();

  const handleJoin = async () => {
    if (!code.trim()) {
      toast.error('Please enter a lobby code');
      return;
    }

    if (code.length !== 5) {
      toast.error('Lobby code must be 5 characters');
      return;
    }

    setIsJoining(true);
    try {
      const user = useUserStore.getState();
      await joinLobby(code.toUpperCase(), {
        userId: user.userId,
        username: user.username,
        avatar: user.avatar,
        stars: user.stars || 0,
      });

      toast.success('Joined lobby successfully!');
      navigate(`/lobby/${code.toUpperCase()}`);
      onClose();
    } catch (error) {
      console.error('Failed to join lobby:', error);
      if (error.message.includes('not found')) {
        toast.error('Lobby not found. Check the code and try again.');
      } else if (error.message.includes('full')) {
        toast.error('This lobby is full.');
      } else if (error.message.includes('already in')) {
        toast.error('You are already in this lobby.');
      } else if (error.message.includes('no longer accepting')) {
        toast.error('This lobby is no longer accepting players.');
      } else {
        toast.error('Failed to join lobby. Please try again.');
      }
    } finally {
      setIsJoining(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !isJoining) {
      handleJoin();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="bg-[#f8f6f6] dark:bg-[#221610] rounded-2xl p-6 w-[90%] max-w-md border-2 border-primary/30 shadow-[0_0_40px_rgba(236,91,19,0.4)]">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-black italic uppercase tracking-tighter text-slate-900 dark:text-white">
            Join <span className="text-primary">Lobby</span>
          </h2>
          <button
            onClick={onClose}
            disabled={isJoining}
            className="size-10 flex items-center justify-center rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary/20 hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Input */}
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide">
              Enter Lobby Code
            </label>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value.toUpperCase())}
              onKeyPress={handleKeyPress}
              placeholder="ABC12"
              maxLength={5}
              disabled={isJoining}
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-center text-2xl tracking-[0.3em] uppercase focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
              autoFocus
            />
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 text-center">
              5-character code from your friend
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            disabled={isJoining}
            className="flex-1 px-6 py-3 rounded-xl font-bold uppercase italic tracking-tighter bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            onClick={handleJoin}
            disabled={isJoining || !code.trim()}
            className="flex-1 px-6 py-3 rounded-xl font-bold uppercase italic tracking-tighter bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/30 active:translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isJoining ? (
              <>
                <span className="material-symbols-outlined animate-spin">refresh</span>
                <span>Joining...</span>
              </>
            ) : (
              <>
                <span>Join</span>
                <span className="material-symbols-outlined">login</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
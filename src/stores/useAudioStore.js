import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAudioStore = create(
  persist(
    (set, get) => ({
      // Volume levels (0.0 - 1.0)
      bgmVolume: 0.5,
      sfxVolume: 0.8,

      // Master mute toggle
      isMuted: false,

      // Which BGM is currently active
      currentBgm: null,

      // Setters
      setBgmVolume: (val) => set({ bgmVolume: Math.min(1, Math.max(0, val)) }),
      setSfxVolume: (val) => set({ sfxVolume: Math.min(1, Math.max(0, val)) }),
      toggleMute: () => set((s) => ({ isMuted: !s.isMuted })),
      setMuted: (val) => set({ isMuted: val }),
      setCurrentBgm: (name) => set({ currentBgm: name }),
    }),
    {
      name: 'bbl-audio-settings', // persisted in localStorage
      partialState: (s) => ({
        bgmVolume: s.bgmVolume,
        sfxVolume: s.sfxVolume,
        isMuted: s.isMuted,
      }),
    }
  )
);

export default useAudioStore;
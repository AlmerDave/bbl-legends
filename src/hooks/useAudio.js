/**
 * useAudio.js
 * React hook that keeps audioManager in sync with the Zustand store
 * and exposes convenient helpers.
 *
 * Usage:
 *   const { playSfx, playBgm, stopBgm } = useAudio();
 */
import { useEffect, useCallback } from 'react';
import useAudioStore from '../stores/useAudioStore';
import * as am from '../utils/audioManager';

export default function useAudio() {
  const { isMuted, bgmVolume, sfxVolume } = useAudioStore();

  // Keep audioManager in sync whenever store changes
  useEffect(() => {
    am.syncSettings({ isMuted, bgmVolume, sfxVolume });
  }, [isMuted, bgmVolume, sfxVolume]);

  const playSfx = useCallback((soundKey) => {
    am.playSfx(soundKey);
  }, []);

  const playBgm = useCallback((soundKey) => {
    am.playBgm(soundKey);
  }, []);

  const stopBgm = useCallback(() => {
    am.stopBgm();
  }, []);

  return { playSfx, playBgm, stopBgm };
}
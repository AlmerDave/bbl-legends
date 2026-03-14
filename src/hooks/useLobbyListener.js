// ── useLobbyListener: Real-time lobby subscription ──
import { useEffect } from 'react';
import { subscribeLobby } from '../services/lobbyService';
import useLobbyStore from '../stores/useLobbyStore';

export default function useLobbyListener(lobbyCode) {
  const setLobby = useLobbyStore((s) => s.setLobby);

  useEffect(() => {
    if (!lobbyCode) return;
    
    let isActive = true; // Cleanup guard to prevent updates after unmount
    
    const unsubscribe = subscribeLobby(lobbyCode, (data) => {
      if (isActive) {
        setLobby(data);
      }
    });
    
    return () => {
      isActive = false; // Mark as inactive before cleanup
      unsubscribe();
    };
  }, [lobbyCode, setLobby]);
}
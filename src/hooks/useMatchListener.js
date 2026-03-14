// ── useMatchListener: Real-time match subscription ──
import { useEffect } from 'react';
import { subscribeMatch } from '../services/matchService';
import useMatchStore from '../stores/useMatchStore';

export default function useMatchListener(matchId) {
  const setMatch = useMatchStore((s) => s.setMatch);

  useEffect(() => {
    if (!matchId) return;
    
    let isActive = true;
    
    const unsubscribe = subscribeMatch(matchId, (data) => {
      if (isActive) {
        setMatch(data);
      }
    });
    
    return () => {
      isActive = false;
      unsubscribe();
    };
  }, [matchId, setMatch]);
}
// ── useVoteListener: Real-time vote subscription ──
import { useEffect } from 'react';
import { subscribeVotes } from '../services/voteService';
import useMatchStore from '../stores/useMatchStore';

export default function useVoteListener(matchId) {
  const setMatch = useMatchStore((s) => s.setMatch);

  useEffect(() => {
    if (!matchId) return;
    const unsubscribe = subscribeVotes(matchId, (voteData) => {
      // Merge vote data into match store
      useMatchStore.setState((prev) => ({
        ...prev,
        votes: voteData.votes,
        voteCount: voteData.voteCount,
        status: voteData.status,
        result: voteData.result,
        voteExpiresAt: voteData.voteExpiresAt,
      }));
    });
    return () => unsubscribe();
  }, [matchId]);
}

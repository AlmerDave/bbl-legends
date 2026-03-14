// ── useFirebase: Ensure Firebase is initialized ──
import { useEffect, useState } from 'react';
import { rtdb, db } from '../services/firebase';

export default function useFirebase() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Firebase initializes synchronously via the import, so just mark ready
    if (rtdb && db) {
      setReady(true);
    }
  }, []);

  return { ready, rtdb, db };
}

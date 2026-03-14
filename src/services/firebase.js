// ── Firebase Configuration & Initialization ──
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';

// TODO: Replace with your actual Firebase config
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyDC0N0W9RRaf8ouVV4nJej8khPGVv3vywI',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'bbl-legends.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'bbl-legends',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'YOUR_PROJECT.appspot.com',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '711744045780',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:711744045780:web:27691c4d7556e58f32b141',
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL || 'https://bbl-legends-default-rtdb.asia-southeast1.firebasedatabase.app',
};

const app = initializeApp(firebaseConfig);

// Realtime Database — for lobbies, matches, live voting
export const rtdb = getDatabase(app);

// Firestore — for user profiles, court locations
export const db = getFirestore(app);

export default app;

import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import useUserStore from './stores/useUserStore';
import RegistrationScreen from './screens/RegistrationScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import RanksScreen from './screens/RanksScreen';
import LobbyScreen from './screens/LobbyScreen';
import MatchFoundScreen from './screens/MatchFoundScreen';
import CourtScreen from './screens/CourtScreen';
import VoteScreen from './screens/VoteScreen';
import ResultScreen from './screens/ResultScreen';

// Auth guard: redirect to registration if no user
function RequireUser({ children }) {
  const userId = useUserStore((s) => s.userId);
  if (!userId) return <Navigate to="/" replace />;
  return children;
}

// If already registered, skip to home
function GuestOnly({ children }) {
  const userId = useUserStore((s) => s.userId);
  if (userId) return <Navigate to="/home" replace />;
  return children;
}

// ── Back Button Guard ─────────────────────────────────────────────────────────
// Intercepts the browser/phone back button on every screen.
// Instead of navigating away, it does nothing and shows a toast hint.
function BackButtonGuard({ children }) {
  const location = useLocation();

  useEffect(() => {
    // Push a dummy history entry so the back button fires popstate
    // instead of actually leaving the app
    window.history.pushState(null, '', window.location.href);

    const handlePopState = () => {
      // Re-push to keep trapping subsequent back presses
      window.history.pushState(null, '', window.location.href);
      toast('Please use the in-game back button 🎮', { duration: 2000 });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [location.pathname]); // re-arm on every route change

  return children;
}
// ─────────────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <BackButtonGuard>
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#1a0b2e',
              color: '#fff',
              border: '1px solid rgba(236, 91, 19, 0.3)',
              fontWeight: 700,
              fontSize: '14px',
            },
            success: {
              iconTheme: { primary: '#ec5b13', secondary: '#fff' },
            },
            error: {
              iconTheme: { primary: '#dc2626', secondary: '#fff' },
            },
          }}
        />
        <Routes>
          {/* Registration (first launch only) */}
          <Route
            path="/"
            element={
              <GuestOnly>
                <RegistrationScreen />
              </GuestOnly>
            }
          />

          {/* Main Screens (require registered user) */}
          <Route
            path="/home"
            element={
              <RequireUser>
                <HomeScreen />
              </RequireUser>
            }
          />
          <Route
            path="/profile"
            element={
              <RequireUser>
                <ProfileScreen />
              </RequireUser>
            }
          />
          <Route
            path="/ranks"
            element={
              <RequireUser>
                <RanksScreen />
              </RequireUser>
            }
          />
          <Route
            path="/lobby/new"
            element={
              <RequireUser>
                <LobbyScreen />
              </RequireUser>
            }
          />
          <Route
            path="/lobby/:lobbyId"
            element={
              <RequireUser>
                <LobbyScreen />
              </RequireUser>
            }
          />
          <Route
            path="/match"
            element={
              <RequireUser>
                <MatchFoundScreen />
              </RequireUser>
            }
          />
          <Route
            path="/court"
            element={
              <RequireUser>
                <CourtScreen />
              </RequireUser>
            }
          />
          <Route
            path="/vote"
            element={
              <RequireUser>
                <VoteScreen />
              </RequireUser>
            }
          />
          <Route
            path="/results"
            element={
              <RequireUser>
                <ResultScreen />
              </RequireUser>
            }
          />

          {/* Catch-all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BackButtonGuard>
    </BrowserRouter>
  );
}
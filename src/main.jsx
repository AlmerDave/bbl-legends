import React from 'react';
import ReactDOM from 'react-dom/client';
import { registerSW } from 'virtual:pwa-register';
import toast from 'react-hot-toast';
import App from './App';
import './index.css';

// Hydrate user from localStorage on app start
import useUserStore from './stores/useUserStore';
useUserStore.getState().hydrate();

// Register PWA service worker
const updateSW = registerSW({
  onNeedRefresh() {
    // Uses your existing react-hot-toast
    toast('New update available!', {
      icon: '🔄',
      duration: 5000,
      onClick: () => updateSW(true)
    });
  },
  onOfflineReady() {
    console.log('BBL Legends is ready to work offline!');
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
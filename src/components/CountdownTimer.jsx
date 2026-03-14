import { useState, useEffect } from 'react';

export default function CountdownTimer({ expiresAt, onExpire, className = '' }) {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    if (!expiresAt) return;

    const tick = () => {
      const remaining = Math.max(0, Math.floor((expiresAt - Date.now()) / 1000));
      setTimeLeft(remaining);
      if (remaining <= 0 && onExpire) {
        onExpire();
      }
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [expiresAt, onExpire]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const display = `${minutes}:${String(seconds).padStart(2, '0')}`;

  const isUrgent = timeLeft <= 10;

  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <span className={`material-symbols-outlined text-sm ${isUrgent ? 'text-red-500 animate-pulse' : 'text-primary'}`}>
        schedule
      </span>
      <span className={`font-black text-xl leading-none ${isUrgent ? 'text-red-500' : 'text-primary'}`}>
        {display}
      </span>
    </div>
  );
}

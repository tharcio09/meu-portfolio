'use client';

import { useEffect, useState } from 'react';

export function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setProgress(Math.min((scrollTop / docHeight) * 100, 100));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[100] h-[3px] w-full bg-transparent" aria-hidden="true">
      <div
        className="h-full origin-left bg-gradient-to-r from-accent to-accent-light transition-[transform] duration-150 ease-out dark:from-accent-light dark:to-accent"
        style={{ transform: `scaleX(${progress / 100})` }}
      />
    </div>
  );
}

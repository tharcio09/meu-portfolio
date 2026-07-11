'use client';

import { useEffect, useRef } from 'react';

export function HeroParallaxBackground() {
  const gradientRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const gradient = gradientRef.current;
    if (!gradient || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const updatePosition = () => {
      if (frameRef.current !== null) return;

      frameRef.current = window.requestAnimationFrame(() => {
        gradient.style.transform = `translateY(${window.scrollY * 0.3}px)`;
        frameRef.current = null;
      });
    };

    updatePosition();
    window.addEventListener('scroll', updatePosition, { passive: true });

    return () => {
      window.removeEventListener('scroll', updatePosition);
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <>
      <div
        ref={gradientRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[length:200%_200%] bg-gradient-to-br from-accent/30 via-accent-light/10 to-accent/20 dark:from-accent-light/30 dark:via-accent/15 dark:to-accent-light/20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-light-bg via-light-bg/50 to-transparent dark:from-dark-bg dark:via-dark-bg/50"
      />
    </>
  );
}

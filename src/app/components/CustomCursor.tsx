'use client';

import { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    // Verificar se é dispositivo touch — não mostrar cursor nesses casos
    const isTouchDevice =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(hover: none)').matches;

    if (isTouchDevice) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMove = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX - 8}px, ${e.clientY - 8}px)`;
      setIsVisible(true);

      const target = e.target as HTMLElement;
      const clickable = target.closest('a, button, [role="button"], input, label, select, textarea');
      setIsPointer(!!clickable);
    };

    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9998] hidden md:block"
      style={{ willChange: 'transform' }}
    >
      <div
        className="relative flex items-center justify-center"
        style={{
          transition: 'opacity 0.15s ease',
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div
          className="rounded-full bg-accent dark:bg-accent-light"
          style={{
            width: isPointer ? '12px' : '8px',
            height: isPointer ? '12px' : '8px',
            transition: 'width 0.15s ease, height 0.15s ease',
          }}
        />
        {isPointer && (
          <div
            className="absolute rounded-full border border-accent/40 dark:border-accent-light/40"
            style={{
              width: '28px',
              height: '28px',
              animation: 'fade-in 0.15s ease forwards',
            }}
          />
        )}
      </div>
    </div>
  );
};

export default CustomCursor;


'use client';

import { useEffect, useRef, useState } from 'react';

export function useScrollReveal<T extends HTMLElement = HTMLElement>(threshold = 0.12) {
  const ref = useRef<T | null>(null);

  // Mesmo estado no servidor e no navegador: evita erro de hidratação.
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;

    const reducedMotion =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Sem animação quando o navegador não suportar o observador
    // ou quando o usuário preferir menos movimento.
    if (reducedMotion || typeof IntersectionObserver === 'undefined') {
      const frame = window.requestAnimationFrame(() => setVisible(true));

      return () => window.cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold, visible]);

  return { ref, visible };
}

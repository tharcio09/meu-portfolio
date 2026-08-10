'use client';

import { useEffect, useRef, useState } from 'react';

export function useScrollReveal<T extends HTMLElement = HTMLElement>(threshold = 0.12) {
  const ref = useRef<T | null>(null);
  // Reduced motion revela imediatamente — checagem no estado inicial
  // evita setState síncrono dentro do effect (regra react-hooks v6).
  const [visible, setVisible] = useState(
    () =>
      typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;

    // O IntersectionObserver reporta a interseção inicial ao observar,
    // cobrindo também elementos já visíveis no carregamento.
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

    return () => {
      observer.disconnect();
    };
  }, [threshold, visible]);

  return { ref, visible };
}

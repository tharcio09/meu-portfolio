'use client';

import { useEffect, useRef, useState } from 'react';

export function useScrollReveal(threshold = 0.12) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

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
  }, [threshold]);

  return { ref, visible };
}

export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState('');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: '-40% 0px -55% 0px' }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [ids]);

  return active;
}

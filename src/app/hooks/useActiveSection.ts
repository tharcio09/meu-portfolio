'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Rastreia qual secção está activa com base na posição do scroll.
 *
 * @param ids - Array de IDs estável. IMPORTANTE: passe um array definido fora
 *   do componente ou memorizado com useMemo para evitar loops de renderização —
 *   um array inline (ex: useActiveSection(['a','b'])) recria a referência a cada
 *   render, o que recoloca o IntersectionObserver desnecessariamente.
 */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState('');
  // Usar ref para evitar que a mudança de referência do array
  // (quando definido inline no componente) cause re-execução do efeito.
  const idsRef = useRef(ids);

  useEffect(() => {
    const currentIds = idsRef.current;
    const observers: IntersectionObserver[] = [];

    currentIds.forEach((id) => {
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
    // O array de ids é lido via ref — sem dependência directa para evitar loops.
  }, []);

  return active;
}

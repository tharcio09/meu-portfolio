'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Rastreia qual secção está activa com base na posição do scroll.
 *
 * Usa um único IntersectionObserver para todas as secções, mantendo um mapa
 * de visibilidade por `entry.target.id` e elegendo a primeira secção da lista
 * que ainda intersecta a faixa central.
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
    const sectionIds = currentIds.filter((id) => document.getElementById(id) !== null);
    if (sectionIds.length === 0) return;

    // Mapa de visibilidade actual por secção, actualizado no callback.
    const visible = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        });

        // A secção activa é a primeira da lista que continua intersectando
        // a faixa central; preserva a anterior se nenhuma estiver visível.
        const activeId = sectionIds.find((id) => visible.has(id));
        if (activeId) setActive(activeId);
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      visible.clear();
      observer.disconnect();
    };
    // O array de ids é lido via ref — sem dependência directa para evitar loops.
  }, []);

  return active;
}

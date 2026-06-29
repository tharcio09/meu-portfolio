'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const evidenceItems = [
  { index: '01', title: 'Projetos publicados', detail: 'Código público e aplicações disponíveis' },
  { index: '02', title: 'Fluxos completos', detail: 'Autenticação, CRUD e banco relacional' },
  { index: '03', title: 'Integrações reais', detail: 'APIs, persistência e estados de interface' },
  { index: '04', title: 'Entrega contínua', detail: 'Testes, deploy e evolução incremental' },
];

const EvidenceStrip = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      aria-labelledby="evidencias-title"
      className="border-b border-border-light px-6 dark:border-border-dark"
    >
      <h2 id="evidencias-title" className="sr-only">
        Evidências técnicas
      </h2>
      <dl className="mx-auto grid max-w-6xl gap-3 py-4 sm:grid-cols-2 xl:grid-cols-4">
        {evidenceItems.map((item, index) => (
          <div
            key={item.index}
            className={cn(
              'border border-border-light bg-white/55 p-3 dark:border-border-dark dark:bg-dark-card/55',
              'motion-safe:transition motion-safe:duration-600 motion-safe:ease-out',
              visible ? 'motion-safe:opacity-100' : 'motion-safe:opacity-0'
            )}
            style={{ transitionDelay: visible ? `${index * 100}ms` : '0ms' }}
          >
            <dt className="flex items-center justify-between gap-3">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-accent dark:text-accent-light">
                metric/{item.index}
              </span>
              <span
                className="h-2 w-2 rounded-full bg-accent dark:bg-accent-light"
                aria-hidden="true"
              />
            </dt>
            <dd className="mt-2">
              <p className="text-sm font-semibold leading-snug text-primary-text dark:text-light-text">
                {item.title}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-secondary-text dark:text-dark-text">
                {item.detail}
              </p>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default EvidenceStrip;

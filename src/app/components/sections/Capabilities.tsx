'use client';

import { useEffect, useRef, useState } from 'react';
import { capabilities } from '@/data/capabilities';
import { cn } from '@/lib/utils';
import Section from '../ui/Section';

const Capabilities = () => {
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
    <Section
      id="habilidades"
      spacing="editorial"
      className="border-b border-border-light dark:border-border-dark"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-5 border-b border-border-light pb-6 dark:border-border-dark md:grid-cols-[0.75fr_1.25fr] md:items-end md:pb-8">
          <div>
            <div className="flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent dark:text-accent-light">
              <span className="h-px w-10 bg-current" aria-hidden="true" />
              Competências
            </div>
            <h2 className="mt-5 text-3xl font-bold tracking-[-0.035em] text-primary-text dark:text-light-text sm:text-4xl md:text-5xl">
              Habilidades aplicadas
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-secondary-text dark:text-dark-text md:justify-self-end md:text-lg">
            Tecnologias apresentadas pelo contexto em que são usadas: da construção da interface à
            persistência de dados, validação e entrega do produto.
          </p>
        </div>

        <div ref={ref} className="grid gap-4 pt-6 md:pt-8 lg:grid-cols-3">
          {capabilities.map((item, index) => (
            <article
              key={item.title}
              className={cn(
                'flex min-h-full flex-col border border-border-light bg-white/70 p-3 shadow-sm dark:border-border-dark dark:bg-dark-card/70 sm:p-4 md:p-5',
                'motion-safe:transition motion-safe:duration-600 motion-safe:ease-out',
                visible ? 'motion-safe:opacity-100' : 'motion-safe:opacity-0'
              )}
              style={{ transitionDelay: visible ? `${index * 100}ms` : '0ms' }}
            >
              <div className="flex flex-wrap items-center gap-2 border-b border-border-light pb-3 dark:border-border-dark">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-accent dark:text-accent-light">
                  scope/{String(index + 1).padStart(2, '0')}
                </p>
              </div>

              <h3 className="mt-4 text-xl font-bold tracking-tight text-primary-text dark:text-light-text sm:text-2xl">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-secondary-text dark:text-dark-text lg:min-h-24">
                {item.description}
              </p>

              <div className="mt-4 md:mt-5">
                <h4 className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-primary-text dark:text-light-text">
                  Tecnologias
                </h4>
                <ul
                  className="mt-3 flex flex-wrap gap-1.5 sm:gap-2"
                  aria-label={`Tecnologias de ${item.title}`}
                >
                  {item.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="border border-accent-border bg-accent-subtle px-2 py-1 text-xs font-medium text-accent dark:border-accent-border-dark dark:bg-accent-subtle-dark dark:text-accent-light sm:px-2.5"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 border-t border-border-light pt-3 dark:border-border-dark sm:pt-4 lg:mt-auto">
                <h4 className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-primary-text dark:text-light-text">
                  Usado em
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-secondary-text dark:text-dark-text">
                  {item.usedIn.join(' · ')}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Capabilities;

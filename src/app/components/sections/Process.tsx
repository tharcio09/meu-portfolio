'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import Section from '../ui/Section';

const processSteps = [
  {
    step: 'Schema do banco',
    detail: 'Modelei o banco com Prisma definindo User, Ticket e Comment com relacionamentos.',
  },
  {
    step: 'API com rotas',
    detail: 'Criei endpoints REST com Next.js para CRUD de tickets, autenticação e filtros.',
  },
  {
    step: 'Autenticação',
    detail: 'Implementei login com NextAuth, roles CLIENT/_AGENT e proteção de rotas.',
  },
  {
    step: 'Interface',
    detail: 'Construí o painel com React, formulários validados e estados de carregamento.',
  },
  {
    step: 'Testes',
    detail: 'Escrevi testes unitários com Vitest e E2E com Cypress no fluxo principal.',
  },
  {
    step: 'Deploy',
    detail: 'Publiquei no Vercel com variáveis de ambiente e banco no Supabase.',
  },
];

const Process = () => {
  const ref = useRef<HTMLOListElement>(null);
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
      id="processo"
      spacing="editorial"
      className="border-b border-border-light dark:border-border-dark"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
        <div>
          <div className="flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent dark:text-accent-light">
            <span className="h-px w-10 bg-current" aria-hidden="true" />
            Processo
          </div>
          <h2 className="mt-5 max-w-md text-4xl font-bold tracking-[-0.035em] text-primary-text dark:text-light-text md:text-5xl">
            Como eu trabajo
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-secondary-text dark:text-dark-text">
            No HelpFlow, dividi o desenvolvimento em etapas pequenas e incrementais. Cada etapa gera
            código funcional e testável antes de avançar para a próxima.
          </p>
        </div>

        <ol ref={ref} className="grid gap-3 sm:grid-cols-2">
          {processSteps.map((item, index) => (
            <li
              key={item.step}
              className={cn(
                'grid min-h-20 grid-cols-[auto_1fr] items-start gap-3 border border-border-light bg-white/70 p-4 shadow-sm dark:border-border-dark dark:bg-dark-card/70',
                'transition-[opacity,border-color,box-shadow] duration-150 ease-out',
                'hover:border-accent-border hover:shadow-lg dark:hover:border-accent-border-dark',
                visible ? 'opacity-100' : 'opacity-0',
                index === processSteps.length - 1 &&
                  processSteps.length % 2 !== 0 &&
                  'sm:col-span-2'
              )}
              style={{ transitionDelay: visible ? `${index * 70}ms` : '0ms' }}
            >
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent dark:text-accent-light">
                Passo {index + 1}
              </span>
              <div>
                <p className="text-sm font-semibold text-primary-text dark:text-light-text">
                  {item.step}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-secondary-text dark:text-dark-text">
                  {item.detail}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
};

export default Process;

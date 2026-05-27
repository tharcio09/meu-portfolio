'use client';

import { buttonVariants } from '../ui/Button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { HiArrowRight, HiDocumentText } from 'react-icons/hi';
import { LuDatabase, LuServer, LuShieldCheck } from 'react-icons/lu';
import Section from '../ui/Section';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const proofItems = [
  '4 projetos com deploy ativo',
  'React, Next.js, TypeScript e Node.js',
  'Auth, banco relacional, APIs e PWA',
];

const Hero = () => {
  const { ref, visible } = useScrollReveal(0.01);

  return (
    <Section
      id="home"
      spacing="hero"
      className="relative border-b border-border-light dark:border-border-dark overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(99,102,241,0.10),transparent)]
          dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-15%,rgba(99,102,241,0.14),transparent)]"
      />

      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center"
      >
        <div>
          <div
            className={`inline-flex items-center gap-2 rounded-full border border-accent-border bg-accent-subtle px-3 py-1 text-xs font-semibold text-accent
              dark:border-accent-border-dark dark:bg-accent-subtle-dark dark:text-accent-light
              transition-[opacity,transform] duration-300
              ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent dark:bg-accent-light" />
            </span>
            Disponível para oportunidade júnior
          </div>

          <h1
            className={`mt-6 text-5xl font-extrabold tracking-tight text-primary-text dark:text-light-text md:text-7xl
              transition-[opacity,transform] duration-700 delay-150
              ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Tharcio Santos
          </h1>

          <h2
            className={`mt-5 max-w-2xl text-2xl font-semibold leading-tight text-primary-text dark:text-light-text md:text-3xl
              transition-[opacity,transform] duration-700 delay-200
              ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Desenvolvedor fullstack com{' '}
            <span className="relative whitespace-nowrap">
              <span
                aria-hidden="true"
                className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-accent to-violet-500 dark:from-accent-light dark:to-violet-400 animate-scale-x-in"
              />
              <span className="relative">stack completa em produção.</span>
            </span>
          </h2>

          <p
            className={`mt-6 max-w-xl text-lg leading-relaxed text-secondary-text dark:text-dark-text
              transition-[opacity,transform] duration-700 delay-300
              ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Desenvolvo aplicações com React, Next.js e Node.js, integrando interface, autenticação,
            banco de dados e deploy. Foco em transformar requisitos em produtos funcionais,
            responsivos e fáceis de evoluir.
          </p>

          <div
            className={`mt-8 flex flex-col gap-3 sm:flex-row
              transition-[opacity,transform] duration-700 delay-[400ms]
              ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <a href="#projetos" className={cn(buttonVariants({ variant: 'primary', size: 'lg' }))}>
              Ver projetos
              <HiArrowRight className="text-base" />
            </a>
            <a
              href="/curriculo-tharcio-santos.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}
            >
              <HiDocumentText className="text-base" />
              Baixar currículo
            </a>
          </div>

          <p
            className={`mt-3 text-sm text-secondary-text dark:text-dark-text
              transition-[opacity,transform] duration-700 delay-[450ms]
              ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Todos com código público, deploy ativo e decisões técnicas visíveis.
          </p>

          <dl
            className={`mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-border-light pt-6 text-sm text-secondary-text dark:border-border-dark dark:text-dark-text
              transition-[opacity,transform] duration-700 delay-500
              ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            {proofItems.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent dark:bg-accent-light"
                />
                <dt className="sr-only">Destaque</dt>
                <dd>{item}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div
          className={`relative transition-[opacity,transform] duration-700 delay-300
            ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div className="overflow-hidden rounded-xl border border-border-light bg-white shadow-lg shadow-accent/5 dark:border-border-dark dark:bg-dark-card dark:shadow-black/20">
            <div className="flex items-center justify-between border-b border-border-light px-4 py-3 dark:border-border-dark">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-accent dark:text-accent-light">
                  Projeto principal
                </p>
                <h3 className="mt-1 text-base font-bold text-primary-text dark:text-light-text">
                  HelpFlow
                </h3>
              </div>
              <span className="rounded-md bg-accent-subtle px-2.5 py-1 text-xs font-semibold text-accent dark:bg-accent-subtle-dark dark:text-accent-light">
                🟢 Em produção
              </span>
            </div>

            <div className="relative aspect-[16/10] bg-light-surface dark:bg-dark-surface">
              <Image
                src="/images/helpflow-screenshot.png"
                alt="Preview do HelpFlow, sistema de help desk desenvolvido por Tharcio Santos"
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-contain p-3"
                priority
              />
            </div>

            <div className="grid gap-3 border-t border-border-light p-4 text-sm dark:border-border-dark sm:grid-cols-3">
              <div className="flex items-center gap-2 text-secondary-text dark:text-dark-text">
                <LuShieldCheck className="text-accent dark:text-accent-light" />
                Auth
              </div>
              <div className="flex items-center gap-2 text-secondary-text dark:text-dark-text">
                <LuDatabase className="text-accent dark:text-accent-light" />
                Banco
              </div>
              <div className="flex items-center gap-2 text-secondary-text dark:text-dark-text">
                <LuServer className="text-accent dark:text-accent-light" />
                Deploy
              </div>
            </div>
          </div>

          {/* Glow decorativo atrás do card */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-4 -z-10 rounded-2xl bg-accent/5 blur-2xl dark:bg-accent/10"
          />
        </div>
      </div>
    </Section>
  );
};

export default Hero;

'use client';

import { useEffect, useState } from 'react';
import { buttonVariants } from '../ui/Button';
import { cn } from '@/lib/utils';
import Section from '../ui/Section';
import { ArrowRightIcon, DocumentIcon } from '../ui/Icons';

const stackItems = ['Next.js', 'TypeScript', 'React', 'Node.js', 'Supabase'];

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY * 0.3);
    };

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Section
      id="home"
      spacing="hero"
      className="relative overflow-hidden border-b border-border-light dark:border-border-dark"
    >
      {/* Gradiente animado com parallax */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[length:200%_200%] bg-gradient-to-br from-accent/30 via-accent-light/10 to-accent/20 animate-gradient-shift dark:from-accent-light/30 dark:via-accent/15 dark:to-accent-light/20"
        style={{ transform: `translateY(${offsetY}px)` }}
      />

      {/* Vinheta suave nas bordas */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-light-bg via-light-bg/50 to-transparent dark:from-dark-bg dark:via-dark-bg/50"
      />

      <div className="mx-auto max-w-4xl">
        <div className="stagger-1 animate-fade-up opacity-0 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-secondary-text dark:text-dark-text">
          <span className="h-px w-10 bg-accent dark:bg-accent-light" aria-hidden="true" />
          Portfólio · Desenvolvimento web
        </div>

        <div className="stagger-2 mt-7">
          <h1
            className="text-5xl font-extrabold leading-[0.98] tracking-[-0.045em] text-primary-text dark:text-light-text sm:text-6xl md:text-7xl lg:text-[4.5rem]"
            style={{
              textShadow: '0 0 60px rgba(15,118,110,0.12), 0 0 120px rgba(15,118,110,0.06)',
            }}
          >
            Desenvolvo aplicações web full stack com autenticação, APIs e deploy.
          </h1>
        </div>

        <div className="stagger-3 animate-fade-up opacity-0 mt-7 max-w-2xl">
          <p className="text-base leading-relaxed text-secondary-text dark:text-dark-text md:text-lg">
            Gosto de entender como as pessoas trabalham antes de transformar um problema em
            software. Busco minha primeira oportunidade em estágio ou posição júnior.
          </p>
        </div>

        <div className="stagger-4 animate-fade-up opacity-0 mt-6 flex flex-wrap items-center gap-3">
          {stackItems.map((item) => (
            <span
              key={item}
              className="border border-accent-border bg-accent-subtle px-2.5 py-1 text-xs font-medium text-accent dark:border-accent-border-dark dark:bg-accent-subtle-dark dark:text-accent-light"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="stagger-5 animate-fade-up opacity-0 mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#projetos" className={cn(buttonVariants({ variant: 'primary', size: 'lg' }))}>
            Explorar projetos
            <ArrowRightIcon className="h-4 w-4" />
          </a>
          <a
            href="/curriculo-tharcio-santos.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}
          >
            <DocumentIcon className="h-4 w-4" />
            Baixar currículo
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Hero;

'use client';

import { HiArrowRight, HiDocumentText } from "react-icons/hi";
import Section from "../ui/Section";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const proofItems = [
  "4 projetos com deploy ativo",
  "React, Next.js, TypeScript e Node.js",
  "Autenticação, banco relacional, APIs e PWA",
];

const Hero = () => {
  const { ref, visible } = useScrollReveal(0.01);

  return (
    <Section
      id="home"
      spacing="hero"
      className="relative border-b border-gray-200/80 dark:border-gray-800 overflow-hidden"
    >
      {/* Gradiente de fundo sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(6,182,212,0.08),transparent)]
          dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(6,182,212,0.05),transparent)]"
      />

      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="mx-auto max-w-5xl"
      >
        {/* Badge de disponibilidade */}
        <div
          className={`inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700
            dark:border-cyan-900 dark:bg-cyan-950/40 dark:text-cyan-300
            transition-all duration-700
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}
        >
          <span
            className="relative flex h-2 w-2"
            aria-hidden="true"
          >
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-500 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-600 dark:bg-cyan-400" />
          </span>
          Disponível para estágio ou oportunidade júnior
        </div>

        <h1
          className={`mt-5 text-5xl font-extrabold tracking-tight text-primary-text dark:text-light-text md:text-7xl
            transition-all duration-700 delay-150
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          Tharcio Santos
        </h1>

        <h2
          className={`mt-5 max-w-2xl text-2xl font-semibold leading-tight text-primary-text dark:text-light-text md:text-3xl
            transition-all duration-700 delay-200
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          Construindo aplicações web{" "}
          <span className="relative whitespace-nowrap">
            <span
              aria-hidden="true"
              className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-cyan-400 to-cyan-600 dark:from-cyan-500 dark:to-cyan-300"
            />
            <span className="relative">do backend ao frontend.</span>
          </span>
        </h2>

        <p
          className={`mt-6 max-w-2xl text-lg leading-relaxed text-secondary-text dark:text-gray-300
            transition-all duration-700 delay-300
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          Desenvolvo projetos com React, Next.js e Node.js, conectando interface,
          autenticação, banco relacional e deploy em produção. Busco minha primeira
          oportunidade para contribuir com aplicações reais, aprendendo rápido e
          entregando com organização, clareza e boa execução.
        </p>

        <div
          className={`mt-8 flex flex-col gap-3 sm:flex-row
            transition-all duration-700 delay-[400ms]
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <a
            href="#projetos"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary-text px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-700 dark:bg-light-text dark:text-dark-bg dark:hover:bg-gray-200"
          >
            Ver projetos
            <HiArrowRight className="text-base" />
          </a>
          <a
            href="/curriculo-tharcio-santos.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-gray-300 px-5 py-3 text-sm font-semibold text-primary-text transition-colors hover:border-cyan-600 hover:text-cyan-700 dark:border-gray-700 dark:text-light-text dark:hover:border-cyan-300 dark:hover:text-cyan-300"
          >
            <HiDocumentText className="text-base" />
            Baixar currículo
          </a>
        </div>

        <dl
          className={`mt-12 grid gap-4 border-t border-gray-200 pt-6 text-sm text-secondary-text dark:border-gray-800 dark:text-gray-400 md:grid-cols-3
            transition-all duration-700 delay-500
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          {proofItems.map((item) => (
            <div key={item} className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="h-1 w-1 shrink-0 rounded-full bg-cyan-500 dark:bg-cyan-400"
              />
              <dt className="sr-only">Destaque</dt>
              <dd>{item}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
};

export default Hero;

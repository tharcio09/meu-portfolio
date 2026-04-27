'use client';

import Image from "next/image";
import { HiArrowRight, HiDocumentText } from "react-icons/hi";
import { LuDatabase, LuServer, LuShieldCheck } from "react-icons/lu";
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
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(6,182,212,0.08),transparent)]
          dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(6,182,212,0.05),transparent)]"
      />

      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center"
      >
        <div>
          <div
            className={`inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700
              dark:border-cyan-900 dark:bg-cyan-950/40 dark:text-cyan-300
              transition-[opacity,transform] duration-300
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-600 dark:bg-cyan-400" />
            </span>
            Disponível para estágio ou oportunidade júnior
          </div>

          <h1
            className={`mt-5 text-5xl font-extrabold tracking-tight text-primary-text dark:text-light-text md:text-7xl
              transition-[opacity,transform] duration-700 delay-150
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Tharcio Santos
          </h1>

          <h2
            className={`mt-5 max-w-2xl text-2xl font-semibold leading-tight text-primary-text dark:text-light-text md:text-3xl
              transition-[opacity,transform] duration-700 delay-200
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Desenvolvedor fullstack em formação, criando aplicações web{" "}
            <span className="relative whitespace-nowrap">
              <span
                aria-hidden="true"
                className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-cyan-400 to-cyan-600 dark:from-cyan-500 dark:to-cyan-300"
              />
              <span className="relative">reais e completas.</span>
            </span>
          </h2>

          <p
            className={`mt-6 max-w-2xl text-lg leading-relaxed text-secondary-text dark:text-gray-300
              transition-[opacity,transform] duration-700 delay-300
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Desenvolvo aplicações com React, Next.js e Node.js, integrando interface,
            autenticação, banco de dados e deploy. Meu foco é transformar requisitos
            em produtos funcionais, responsivos e fáceis de evoluir.
          </p>

          <div
            className={`mt-8 flex flex-col gap-3 sm:flex-row
              transition-[opacity,transform] duration-700 delay-[400ms]
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

          <p
            className={`mt-3 text-sm text-secondary-text dark:text-gray-400
              transition-[opacity,transform] duration-700 delay-[450ms]
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Todos com código público, deploy ativo e decisões técnicas visíveis.
          </p>

          <dl
            className={`mt-12 grid gap-4 border-t border-gray-200 pt-6 text-sm text-secondary-text dark:border-gray-800 dark:text-gray-400 md:grid-cols-3
              transition-[opacity,transform] duration-700 delay-500
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

        <div
          className={`relative transition-[opacity,transform] duration-700 delay-300
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-zinc-950">
            <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3 dark:border-gray-800">
              <div>
                <p className="text-xs font-semibold uppercase tracking-normal text-cyan-700 dark:text-cyan-300">
                  Projeto principal
                </p>
                <h3 className="mt-1 text-base font-bold text-primary-text dark:text-light-text">
                  HelpFlow
                </h3>
              </div>
              <span className="rounded-md bg-cyan-50 px-2.5 py-1 text-xs font-semibold text-cyan-700 dark:bg-cyan-950/40 dark:text-cyan-300">
                Produção
              </span>
            </div>

            <div className="relative aspect-[16/10] bg-gray-50 dark:bg-zinc-900">
              <Image
                src="/images/helpflow-screenshot.png"
                alt="Preview do HelpFlow, sistema de help desk desenvolvido por Tharcio Santos"
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-contain p-3"
                priority
              />
            </div>

            <div className="grid gap-3 border-t border-gray-200 p-4 text-sm dark:border-gray-800 sm:grid-cols-3">
              <div className="flex items-center gap-2 text-secondary-text dark:text-gray-400">
                <LuShieldCheck className="text-cyan-700 dark:text-cyan-300" />
                Auth
              </div>
              <div className="flex items-center gap-2 text-secondary-text dark:text-gray-400">
                <LuDatabase className="text-cyan-700 dark:text-cyan-300" />
                Banco
              </div>
              <div className="flex items-center gap-2 text-secondary-text dark:text-gray-400">
                <LuServer className="text-cyan-700 dark:text-cyan-300" />
                Deploy
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;



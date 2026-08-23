'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { SearchIcon, ChevronLeftIcon, ChevronRightIcon, CloseIcon } from './Icons';
import { cn } from '@/lib/utils';

export type ProjectScreen = {
  label: string;
  imageUrl: string;
  caption: string;
};

type ProjectScreenShowcaseProps = {
  screens: ProjectScreen[];
  title: string;
  demoUrl?: string;
  defaultImageUrl?: string;
  defaultImageAlt?: string;
};

function extractDomain(url?: string): string {
  if (!url) return 'app.local';
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url.replace(/^https?:\/\//, '').split('/')[0] || 'app.local';
  }
}

export function ProjectScreenShowcase({
  screens,
  title,
  demoUrl,
  defaultImageUrl,
  defaultImageAlt,
}: ProjectScreenShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Controle de Swipe Touch para Mobile
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const items =
    screens && screens.length > 0
      ? screens
      : defaultImageUrl
        ? [
            {
              label: 'Visão Geral',
              imageUrl: defaultImageUrl,
              caption: defaultImageAlt ?? `Interface de ${title}`,
            },
          ]
        : [];

  const total = items.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Gestos de toque (Swipe Left / Swipe Right) no Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 40; // pixels

    if (diff > minSwipeDistance) {
      // Deslizou para esquerda -> Próximo slide
      nextSlide();
    } else if (diff < -minSwipeDistance) {
      // Deslizou para direita -> Slide anterior
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Auto-play interval
  useEffect(() => {
    if (total <= 1 || isPaused || isModalOpen) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3800);

    return () => clearInterval(interval);
  }, [total, isPaused, isModalOpen, nextSlide]);

  // Atalhos de teclado quando modal estiver aberto
  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen, nextSlide, prevSlide]);

  if (total === 0) return null;

  const activeItem = items[currentIndex] ?? items[0];

  return (
    <>
      <div
        className="group/showcase relative w-full min-w-0 overflow-hidden border border-border-light bg-white p-3 shadow-sm transition-all duration-300 dark:border-border-dark dark:bg-dark-card sm:p-4 touch-pan-y"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        role="region"
        aria-roledescription="carousel"
        aria-label={`Demonstração visual do projeto ${title}`}
      >
        {/* Barra Superior de Segmentos / Stories */}
        <div className="mb-2.5 space-y-2 border-b border-border-light pb-2 dark:border-border-dark sm:mb-3 sm:pb-2.5">
          <div className="flex items-center justify-between text-xs gap-2 min-w-0">
            <div className="flex items-center gap-1.5 min-w-0">
              <span className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-accent dark:text-accent-light shrink-0">
                Tour Visual
              </span>
              <span className="text-secondary-text dark:text-dark-text">·</span>
              <span className="font-mono text-[10px] sm:text-[11px] font-semibold text-secondary-text dark:text-dark-text shrink-0">
                0{currentIndex + 1} / 0{total}
              </span>
            </div>

            {/* Botão de Ampliação Claro, Compacto com Tokens Semânticos */}
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold bg-light-surface hover:bg-white text-primary-text border border-border-light dark:bg-dark-surface dark:hover:bg-dark-card dark:text-light-text dark:border-border-dark shadow-xs transition-all cursor-pointer shrink-0 min-h-[36px] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:focus-visible:ring-accent-light"
              title="Ampliar visualização em tela cheia com alta resolução"
              aria-label="Ampliar tela do projeto em alta resolução"
            >
              <SearchIcon className="h-3.5 w-3.5 text-secondary-text dark:text-dark-text" />
              <span className="font-sans font-medium text-[11px] sm:text-xs">Ampliar</span>
            </button>
          </div>

          {/* Segmentos de Progresso Clicáveis */}
          {total > 1 && (
            <div
              className="grid gap-1 sm:gap-1.5 w-full min-w-0"
              style={{ gridTemplateColumns: `repeat(${total}, minmax(0, 1fr))` }}
            >
              {items.map((item, idx) => {
                const isCurrent = idx === currentIndex;
                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className="group/segment flex flex-col gap-1 text-left cursor-pointer focus:outline-none py-0.5 min-w-0 overflow-hidden"
                    aria-label={`Ir para tela: ${item.label}`}
                    aria-current={isCurrent}
                  >
                    <div className="h-1 w-full overflow-hidden rounded-full bg-light-surface dark:bg-dark-surface">
                      <div
                        className={cn(
                          'h-full transition-all duration-300',
                          isCurrent
                            ? 'bg-accent dark:bg-accent-light w-full'
                            : idx < currentIndex
                              ? 'bg-accent/40 dark:bg-accent-light/40 w-full'
                              : 'w-0'
                        )}
                      />
                    </div>
                    <span
                      className={cn(
                        'block truncate font-mono text-[9px] sm:text-[10px] whitespace-nowrap transition-colors',
                        isCurrent
                          ? 'font-bold text-primary-text dark:text-light-text'
                          : 'text-secondary-text/70 dark:text-dark-text/70 hover:text-primary-text dark:hover:text-light-text'
                      )}
                    >
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Moldura de Navegador com Aspect Ratio Fixo e Tokens Semânticos */}
        <div className="relative aspect-[16/9] w-full min-w-0 overflow-hidden rounded border border-border-light bg-light-surface shadow-inner dark:border-border-dark dark:bg-dark-card">
          {/* Barra de Janela do Navegador */}
          <div className="absolute top-0 left-0 right-0 z-20 flex h-6 items-center justify-between border-b border-border-light bg-light-surface/95 px-2 sm:px-2.5 backdrop-blur-sm dark:border-border-dark dark:bg-dark-surface/95">
            <div className="flex items-center gap-1 shrink-0" aria-hidden="true">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500/80" />
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500/80" />
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/80" />
            </div>
            <span className="font-mono text-[8px] sm:text-[9px] text-secondary-text dark:text-dark-text truncate max-w-[160px] sm:max-w-none">
              {extractDomain(demoUrl)}
            </span>
            <span className="h-1.5 w-1.5 shrink-0" aria-hidden="true" />
          </div>

          {/* Imagens com Top-Padding para a Barra do Navegador */}
          <div className="absolute inset-0 pt-6 pointer-events-none select-none">
            {items.map((item, idx) => (
              <div
                key={item.imageUrl}
                className={cn(
                  'absolute inset-0 top-6 transition-opacity duration-300 ease-in-out pointer-events-none select-none',
                  idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
                )}
              >
                <Image
                  src={item.imageUrl}
                  alt={item.caption}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, (max-width: 1280px) 55vw, 600px"
                  className="object-contain pointer-events-none select-none"
                  quality={90}
                  priority={idx === 0}
                  draggable={false}
                />
              </div>
            ))}
          </div>

          {/* Botões de Navegação Manual (< e >) com Touch Targets Otimizados */}
          {total > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                }}
                className="absolute left-1.5 sm:left-2 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-border-light bg-white/95 text-primary-text opacity-85 sm:opacity-0 shadow-md backdrop-blur-sm transition-all hover:bg-white group-hover/showcase:opacity-95 dark:border-border-dark dark:bg-dark-surface/95 dark:text-light-text dark:hover:bg-dark-surface cursor-pointer text-sm sm:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:focus-visible:ring-accent-light active:scale-95"
                aria-label="Tela anterior"
              >
                <ChevronLeftIcon className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                }}
                className="absolute right-1.5 sm:right-2 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-border-light bg-white/95 text-primary-text opacity-85 sm:opacity-0 shadow-md backdrop-blur-sm transition-all hover:bg-white group-hover/showcase:opacity-95 dark:border-border-dark dark:bg-dark-surface/95 dark:text-light-text dark:hover:bg-dark-surface cursor-pointer text-sm sm:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:focus-visible:ring-accent-light active:scale-95"
                aria-label="Próxima tela"
              >
                <ChevronRightIcon className="h-4 w-4" />
              </button>
            </>
          )}
        </div>

        {/* Legenda Dinâmica com Altura Fixa */}
        <div className="mt-2.5 sm:mt-3 flex h-7 items-center justify-between gap-2 border-t border-border-light pt-2 text-xs dark:border-border-dark sm:pt-2.5 min-w-0">
          <p
            className="truncate text-secondary-text dark:text-dark-text text-[11px] sm:text-xs min-w-0 flex-1"
            title={`${activeItem.label}: ${activeItem.caption}`}
          >
            <span className="font-semibold text-primary-text dark:text-light-text">
              {activeItem.label}:
            </span>{' '}
            {activeItem.caption}
          </p>
          <span className="inline-flex shrink-0 items-center gap-1 font-mono text-[9px] sm:text-[10px] font-semibold text-emerald-700 dark:text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
            Online
          </span>
        </div>
      </div>

      {/* Modal Lightbox de Alta Resolução em Tela Cheia (Com suporte a Swipe no Mobile) */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-dark-bg/95 p-2.5 sm:p-6 overflow-hidden backdrop-blur-md transition-opacity duration-200 transform-gpu"
          onClick={() => setIsModalOpen(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          role="dialog"
          aria-modal="true"
          aria-label={`Visualização em alta resolução de ${title} - ${activeItem.label}`}
        >
          {/* Card Flutuante da Barra Superior do Modal */}
          <div
            className="w-full max-w-6xl mb-2 sm:mb-3.5 p-2.5 sm:p-4 bg-dark-card border border-border-dark rounded-xl sm:rounded-2xl shadow-xl flex items-center justify-between gap-2 sm:gap-3 text-light-text shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                <span className="font-extrabold text-xs sm:text-base text-light-text tracking-tight">
                  {title}
                </span>
                <span className="text-dark-text">·</span>
                <span className="font-mono text-[10px] sm:text-xs font-bold text-accent-light bg-accent-subtle-dark px-2 py-0.5 rounded-md border border-accent-border-dark">
                  0{currentIndex + 1} / 0{total} · {activeItem.label}
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-dark-text truncate mt-0.5 sm:mt-1">
                {activeItem.caption}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="text-[11px] font-mono text-dark-text hidden lg:inline">
                Navegue com as setas ou deslize na tela
              </span>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl bg-dark-surface hover:bg-dark-card active:scale-95 text-light-text text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer border border-border-dark shadow-md min-h-[40px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-light"
                aria-label="Fechar tela cheia"
              >
                <CloseIcon className="h-3.5 w-3.5" />
                <span className="font-mono text-[11px] sm:text-xs">Fechar</span>
              </button>
            </div>
          </div>

          {/* Imagem em Resolução Máxima com Controles Laterais */}
          <div
            className="relative w-full max-w-6xl aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden bg-dark-bg border border-border-dark shadow-2xl flex items-center justify-center shrink-0 transform-gpu"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activeItem.imageUrl}
              alt={activeItem.caption}
              fill
              sizes="(max-width: 1280px) 100vw, 1152px"
              className="object-contain"
              quality={90}
              priority
              decoding="async"
            />

            {/* Botão Anterior no Modal com Touch Target Confortável (≥44px) */}
            {total > 1 && (
              <button
                type="button"
                onClick={prevSlide}
                className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-20 min-h-[44px] min-w-[44px] sm:h-14 sm:w-14 rounded-full bg-dark-card/90 hover:bg-dark-card active:scale-95 text-light-text text-lg sm:text-2xl flex items-center justify-center border border-border-dark backdrop-blur-sm transition-all cursor-pointer shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-light"
                aria-label="Tela anterior"
                title="Tela anterior"
              >
                <ChevronLeftIcon className="h-6 w-6 sm:h-8 sm:w-8" />
              </button>
            )}

            {/* Botão Próximo no Modal com Touch Target Confortável (≥44px) */}
            {total > 1 && (
              <button
                type="button"
                onClick={nextSlide}
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-20 min-h-[44px] min-w-[44px] sm:h-14 sm:w-14 rounded-full bg-dark-card/90 hover:bg-dark-card active:scale-95 text-light-text text-lg sm:text-2xl flex items-center justify-center border border-border-dark backdrop-blur-sm transition-all cursor-pointer shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-light"
                aria-label="Próxima tela"
                title="Próxima tela"
              >
                <ChevronRightIcon className="h-6 w-6 sm:h-8 sm:w-8" />
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}

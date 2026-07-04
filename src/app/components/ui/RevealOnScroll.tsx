'use client';

import { type ElementType, type ReactNode } from 'react';
import { useScrollReveal } from '@/app/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

type RevealOnScrollProps<T extends ElementType = 'div'> = {
  children: ReactNode;
  className?: string;
  as?: T;
  delay?: number;
};

export function RevealOnScroll<T extends ElementType = 'div'>({
  children,
  className = '',
  as,
  delay = 0,
}: RevealOnScrollProps<T>) {
  const { ref, visible } = useScrollReveal<HTMLElement>(0.12);
  const Tag = as ?? ('div' as ElementType);

  return (
    <Tag
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
        className
      )}
      style={delay > 0 ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}

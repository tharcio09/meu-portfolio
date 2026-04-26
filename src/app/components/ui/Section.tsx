'use client';

import type { ReactNode } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

type SectionProps = {
  id?: string;
  className?: string;
  spacing?: 'default' | 'compact' | 'hero';
  children: ReactNode;
  animate?: boolean;
};

const spacingClasses = {
  default: 'py-16 md:py-24',
  compact: 'py-14 md:py-20',
  hero: 'pt-20 pb-14 md:pt-28 md:pb-16',
};

const Section = ({
  children,
  id,
  className = '',
  spacing = 'default',
  animate = true,
}: SectionProps) => {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id={id}
      ref={animate ? (ref as React.RefObject<HTMLElement>) : undefined}
      className={`
        ${spacingClasses[spacing]} px-6 ${className}
        ${animate ? 'transition-all duration-700' : ''}
        ${animate && !visible ? 'opacity-0 translate-y-6' : 'opacity-100 translate-y-0'}
      `}
    >
      {children}
    </section>
  );
};

export default Section;

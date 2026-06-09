'use client';

import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { useScrollReveal } from '@/app/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  threshold?: number;
};

const ScrollReveal = ({ children, className, threshold }: ScrollRevealProps) => {
  const { ref, visible } = useScrollReveal<HTMLDivElement>(threshold);
  const [canAnimate, setCanAnimate] = useState(false);

  useEffect(() => {
    setCanAnimate(true);
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        'motion-safe:transition motion-safe:duration-700 motion-safe:ease-out',
        canAnimate && !visible && 'motion-safe:translate-y-4 motion-safe:opacity-0',
        visible && 'motion-safe:translate-y-0 motion-safe:opacity-100',
        className
      )}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;

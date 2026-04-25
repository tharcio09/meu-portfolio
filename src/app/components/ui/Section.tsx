import type { ReactNode } from 'react';

type SectionProps = {
  id?: string;
  className?: string;
  spacing?: 'default' | 'compact' | 'hero';
  children: ReactNode;
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
}: SectionProps) => {
  return (
    <section
      id={id}
      className={`${spacingClasses[spacing]} px-6 ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;

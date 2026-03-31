import type { ReactNode } from 'react';

type SectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

const Section = ({ children, id, className = '' }: SectionProps) => {
  return (
    <section
      id={id}
      className={`py-24 md:py-32 px-6 ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;

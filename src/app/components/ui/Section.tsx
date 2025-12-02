'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type SectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

const Section = ({ children, id, className = '' }: SectionProps): JSX.Element => {
  return (
    <motion.section
      id={id}
      className={`py-24 md:py-32 px-6 ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
};

export default Section;

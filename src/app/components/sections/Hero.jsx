'use client';

import { motion } from 'framer-motion';
import TypingEffect from '../ui/TypingEffect';
import Link from 'next/link';
import Section from '../ui/Section';

const Hero = () => {
  return (
    <Section id="home" className="relative min-h-[90vh] flex items-center justify-center text-center overflow-hidden px-0">
      {/* Hero Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center gap-10 text-center max-w-4xl mx-auto px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-lg md:text-xl lg:text-2xl text-secondary-text dark:text-dark-text font-medium tracking-wide">
            <TypingEffect text="Olá, eu sou" />
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[1.1] tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="block bg-gradient-to-r from-neon-blue via-neon-purple to-neon-blue bg-clip-text text-transparent">
            Tharcio
          </span>
        </motion.h1>

        {/* Role */}
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-neon-blue tracking-wide">
            Desenvolvedor Full-Stack
          </p>
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-neon-blue to-transparent rounded-full opacity-60" />
        </motion.div>

        {/* Description */}
        <motion.p
          className="max-w-2xl text-base md:text-lg lg:text-xl text-secondary-text dark:text-dark-text leading-relaxed mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Focado em construir projetos desafiadores com React, Next.js e Node.js. Sou um estudante proativo e de rápido aprendizado, pronto para aplicar minha dedicação total e contribuir com a equipe.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link 
            href="#contato" 
            className="group inline-flex items-center gap-2.5 px-10 py-4 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-blue text-dark-bg font-bold text-base md:text-lg rounded-xl shadow-lg hover:shadow-neon-lg transition-all duration-300 ease-out"
          >
            <span>Entre em Contato</span>
            <motion.span
              className="text-lg"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1, ease: 'easeInOut' }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Hero;

'use client';

import { motion } from 'framer-motion';
import TypingEffect from '../ui/TypingEffect';
import Link from 'next/link';

const Hero = () => {
  return (
    <section id="home" className="min-h-[80vh] flex items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="flex flex-col items-center gap-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold">
          <TypingEffect text="Olá, eu sou Tharcio Santos" />
        </h1>
        <p className="text-xl md:text-3xl text-neon-purple">
          Desenvolvedor Full-Stack
        </p>
        <p className="max-w-2xl text-secondary-text dark:text-dark-text mt-2">
          Dedicado a aprimorar minhas habilidades com as tecnologias mais atuais, pronto para transformar conhecimento em software de alto impacto.
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="#contact" className="mt-6 px-8 py-3 bg-neon-blue text-dark-bg font-semibold rounded-lg shadow-lg hover:bg-neon-purple transition-all duration-300">
            Entre em Contato
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;



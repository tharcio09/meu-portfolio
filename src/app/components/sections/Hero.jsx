'use client';

import { motion } from 'framer-motion';
import TypingEffect from '../ui/TypingEffect';
import Link from 'next/link';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiNextdotjs } from 'react-icons/si';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center justify-center text-center overflow-hidden">

      {/* --- Ícones Flutuantes (com opacidade aumentada) --- */}

      {/* Ícone 1: React */}
      <motion.div
        // --- MUDANÇA AQUI: de /10 para /20 ---
        className="absolute top-1/4 left-1/4 text-5xl md:text-7xl text-neon-blue/20 dark:text-neon-blue/20"
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          repeatType: "mirror", 
          ease: "easeInOut" 
        }}
      >
        <FaReact />
      </motion.div>

      {/* Ícone 2: Node.js */}
      <motion.div
        // --- MUDANÇA AQUI: de /10 para /20 ---
        className="absolute top-1/3 right-1/4 text-6xl md:text-8xl text-neon-purple/20 dark:text-neon-purple/20"
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          repeatType: "mirror", 
          ease: "easeInOut",
          delay: 0.5 
        }}
      >
        <FaNodeJs />
      </motion.div>
      
      {/* Ícone 3: JavaScript */}
      <motion.div
        // --- MUDANÇA AQUI: de /10 e /5 para /20 e /10 ---
        className="absolute bottom-1/4 left-1/3 text-4xl md:text-6xl text-gray-900/20 dark:text-white/10"
        animate={{ y: [0, -10, 0] }} 
        transition={{ 
          duration: 3.5, 
          repeat: Infinity, 
          repeatType: "mirror", 
          ease: "easeInOut",
          delay: 1 
        }}
      >
        <SiJavascript />
      </motion.div>

      {/* Ícone 4: Next.js */}
      <motion.div
        // --- MUDANÇA AQUI: de /10 e /5 para /20 e /10 ---
        className="absolute bottom-1/3 right-1/3 text-5xl md:text-7xl text-gray-900/20 dark:text-white/10"
        animate={{ y: [0, 10, 0] }} 
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          repeatType: "mirror", 
          ease: "easeInOut",
          delay: 0.2 
        }}
      >
        <SiNextdotjs />
      </motion.div>

      {/* Conteúdo Principal (NA FRENTE) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center gap-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold">
          <TypingEffect text="Olá, eu sou Tharcio," />
        </h1>
        <p className="text-xl md:text-3xl text-neon-purple">
          Desenvolvedor Web Full-Stack
        </p>
        <p className="max-w-2xl text-secondary-text dark:text-dark-text mt-2">
          Focado em traduzir problemas complexos em código limpo, funcional e com uma ótima experiência para o usuário.
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="#contato" className="mt-6 px-8 py-3 bg-neon-blue text-dark-bg font-semibold rounded-lg shadow-lg hover:bg-neon-purple transition-all duration-300">
            Entre em Contato
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
'use client';

import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import Section from '../ui/Section';

const Hero = () => {
  return (
    <Section id="home" className="flex flex-col justify-center min-h-screen">
      <div className="text-center space-y-8 max-w-4xl mx-auto z-10 px-4">
        

        <motion.p
          className="text-lg md:text-xl text-secondary-text dark:text-cyan-200/80 font-medium tracking-wide uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Olá, eu sou
        </motion.p>

        <motion.h1
          className="text-6xl md:text-8xl font-extrabold tracking-tight"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-300% animate-gradient pb-2">
            Tharcio
          </span>
        </motion.h1>


        <motion.h2
          className="text-2xl md:text-4xl font-bold text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Desenvolvedor Full-Stack
        </motion.h2>

        <motion.p
          className="text-base md:text-xl text-secondary-text dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Transformo ideias em aplicações reais. Focado no desenvolvimento de interfaces modernas com <strong className="text-cyan-400">React/Next.js</strong> e sistemas robustos com <strong className="text-purple-400">Node.js</strong>. Busco minha primeira oportunidade para somar com a equipe e gerar resultados.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a 
            href="#projetos"
            className="group relative px-8 py-4 w-full sm:w-auto rounded-full text-white font-bold text-lg transition-all duration-300
                       bg-gradient-to-r from-cyan-500 via-purple-600 to-cyan-500 bg-[length:200%_auto]
                       hover:bg-right hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.7)]
                       shadow-[0_0_15px_rgba(6,182,212,0.4)]
                       flex items-center justify-center gap-3"
          >
            Ver Projetos 
            <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#contato"
            className="px-8 py-4 w-full sm:w-auto rounded-full font-bold text-lg transition-all duration-300
                       border-2 border-cyan-500/70 text-cyan-400
                       hover:bg-cyan-500/10 hover:border-cyan-400 hover:text-white hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]
                       flex items-center justify-center"
          >
            Entre em Contato
          </a>
        </motion.div>

        <motion.div 
          className="flex justify-center gap-8 pt-8 text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a href="https://github.com/tharcio09" target="_blank" className="hover:text-cyan-400 hover:scale-110 transition-all text-3xl"><SiGithub /></a>
          <a href="https://linkedin.com/in/tharcio-santos-dev" target="_blank" className="hover:text-cyan-400 hover:scale-110 transition-all text-3xl"><SiLinkedin /></a>
        </motion.div>

      </div>
    </Section>
  );
};

export default Hero;
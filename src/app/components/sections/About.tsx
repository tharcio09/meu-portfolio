'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Section from '../ui/Section';
import {
  SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiNodedotjs, SiReact,
  SiNextdotjs, SiMysql, SiMongodb, SiGit, SiGithub,
  SiPostman, SiNotion,
  SiPrisma, SiSupabase, SiFigma,
  SiVite, SiFramer, SiAuth0
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { LuAward } from 'react-icons/lu';
import { FaUserGraduate } from 'react-icons/fa';
import type { ReactNode } from 'react';

type Skill = {
  icon: ReactNode;
  name: string;
  featured: boolean;
};

const skills: Skill[] = [
  // Stack Principal (Destaque Roxo)
  { icon: <SiJavascript />, name: 'JavaScript', featured: true },
  { icon: <SiReact />, name: 'React', featured: true },
  { icon: <SiNextdotjs />, name: 'Next.js', featured: true },
  { icon: <SiNodedotjs />, name: 'Node.js', featured: true },
  { icon: <SiTailwindcss />, name: 'Tailwind CSS', featured: true },
  { icon: <SiPrisma />, name: 'Prisma', featured: true },
  { icon: <SiSupabase />, name: 'Supabase', featured: true },

  // Ferramentas Complementares (Badges)
  { icon: <SiHtml5 />, name: 'HTML5', featured: false },
  { icon: <SiCss3 />, name: 'CSS3', featured: false },
  { icon: <SiFramer />, name: 'Motion', featured: false },
  { icon: <SiVite />, name: 'Vite', featured: false },
  { icon: <SiAuth0 />, name: 'NextAuth', featured: false },
  { icon: <SiMysql />, name: 'MySQL', featured: false },
  { icon: <SiMongodb />, name: 'MongoDB', featured: false },
  { icon: <SiGit />, name: 'Git', featured: false },
  { icon: <SiGithub />, name: 'GitHub', featured: false },
  { icon: <SiFigma />, name: 'Figma', featured: false },
  { icon: <VscCode />, name: 'VS Code', featured: false },
  { icon: <SiPostman />, name: 'Postman', featured: false },
  { icon: <SiNotion />, name: 'Notion', featured: false },
];

const About = () => {
  // Filtra as skills para renderizar separadamente
  const mainSkills = skills.filter(s => s.featured);
  const otherSkills = skills.filter(s => !s.featured);

  return (
    <Section id="sobre-mim">
      {/* --- SEÇÃO SOBRE MIM --- */}
      <motion.div className="text-center mb-20">
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-primary-text dark:text-light-text tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Sobre Mim
        </motion.h2>
        <motion.div
          className="w-24 h-0.5 bg-gradient-to-r from-transparent via-neon-blue to-transparent rounded-full mx-auto mb-6 opacity-60"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 0.6, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.p
          className="text-base md:text-lg text-secondary-text dark:text-dark-text max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          Conheça um pouco sobre minha trajetória e habilidades
        </motion.p>
      </motion.div>

      <div className="grid md:grid-cols-5 gap-12 items-center max-w-6xl mx-auto">
        {/* FOTO DE PERFIL */}
        <motion.div
          className="md:col-span-2 relative w-64 h-64 mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          style={{ perspective: 800 }}
        >
          <motion.div
            className="relative w-full h-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded-full p-1 backdrop-blur-sm"
            style={{ transformStyle: 'preserve-3d' }}
            whileHover={{ rotateY: 15 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <div className="relative w-full h-full bg-light-card/80 dark:bg-dark-card/80 backdrop-blur-md rounded-full overflow-hidden border-4 border-neon-blue/50 shadow-neon-blue">
              <Image
                src="/images/profile.png"
                alt="Foto de Tharcio Santos"
                fill={true}
                className="object-cover"
                priority={true}
                sizes="(max-width: 768px) 256px, 256px"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* TEXTO SOBRE MIM */}
        <motion.div 
          className="md:col-span-3 text-secondary-text dark:text-dark-text leading-relaxed space-y-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg">
            Desenvolvedor <strong className="text-neon-blue">Full-Stack</strong> em início de carreira, com foco em <strong>React</strong>, <strong>Next.js</strong>, <strong>Node.js</strong> e <strong>Tailwind CSS</strong>. Apaixonado por tecnologia e pelo processo de transformar ideias em soluções digitais eficientes.
          </p>
          <p className="text-lg">
            Busco uma oportunidade para aplicar e expandir meus conhecimentos, valorizando o <strong className="text-neon-purple">aprendizado contínuo</strong> e o trabalho em equipe.
          </p>
          <p className="text-lg">
            Minhas principais stacks incluem Front-end (React, Next.js, Tailwind CSS), Back-end (Node.js, Prisma, Supabase) e Ferramentas (Git/GitHub, Figma, NextAuth).
          </p>
        </motion.div>
      </div>

      {/* --- NOVA SEÇÃO DE FERRAMENTAS --- */}
      <div className="mt-24">
        {/* Título Stack Principal */}
        <motion.div className="text-center mb-12">
          <motion.h3 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary-text dark:text-light-text tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Stack Principal
          </motion.h3>
          <motion.div
            className="w-24 h-0.5 bg-gradient-to-r from-transparent via-neon-purple to-transparent rounded-full mx-auto opacity-60"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          />
        </motion.div>

        {/* 1. CARDS GRANDES */}
        <motion.div
          className="flex flex-wrap gap-4 md:gap-6 justify-center max-w-4xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.05 }}
        >
          {mainSkills.map((skill) => (
            <motion.div
              key={skill.name}
              className="group flex flex-col items-center p-5 bg-light-card/90 dark:bg-dark-card/90 backdrop-blur-md rounded-xl w-24 md:w-28 shadow-[0_0_15px_rgba(168,85,247,0.15)] border border-neon-purple/40 hover:border-neon-purple hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all duration-300 ease-out"
              variants={{ hidden: { opacity: 0, y: 20, scale: 0.8 }, visible: { opacity: 1, y: 0, scale: 1 } }}
              whileHover={{ y: -8, scale: 1.1 }}
            >
              <motion.div 
                className="text-4xl md:text-5xl mb-3 text-neon-purple group-hover:text-white transition-colors"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {skill.icon}
              </motion.div>
              <span className="text-sm font-bold text-primary-text dark:text-white">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* 2. SUBTÍTULO SECUNDÁRIO */}
        <motion.p 
          className="text-center text-secondary-text dark:text-dark-text mb-6 text-sm uppercase tracking-widest font-semibold opacity-70"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.7 }}
          viewport={{ once: true }}
        >
          Outras Tecnologias & Ferramentas
        </motion.p>

        {/* 3. PÍLULAS/BADGES  */}
        <motion.div
          className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.02 }}
        >
          {otherSkills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
              whileHover={{ scale: 1.1, y: -3 }}
              className="
                flex items-center gap-2 px-4 py-2 rounded-full 
                bg-light-card/50 dark:bg-dark-card/50 
                border border-neon-blue/10 dark:border-neon-blue/20 
                hover:border-neon-blue hover:bg-neon-blue/10 
                hover:shadow-[0_0_15px_rgba(39,215,254,0.3)]
                transition-all duration-300 cursor-default
              "
            >
              <span className="text-xl text-neon-blue opacity-80 group-hover:opacity-100 transition-opacity">
                {skill.icon}
              </span>
              <span className="text-sm font-medium text-secondary-text dark:text-gray-300 group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* --- SEÇÃO FORMAÇÃO E CURSOS --- */}
      <div className="mt-24">
        <motion.div className="text-center mb-16">
          <motion.h3 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary-text dark:text-light-text tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Formação Acadêmica e Cursos
          </motion.h3>
          <motion.div
            className="w-24 h-0.5 bg-gradient-to-r from-transparent via-neon-blue to-transparent rounded-full mx-auto opacity-60"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 0.6, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>
        
        <motion.div
          className="max-w-3xl mx-auto grid md:grid-cols-1 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {/* CARD 1: FACULDADE */}
          <motion.div
            className="bg-light-card/80 dark:bg-dark-card/80 backdrop-blur-md rounded-xl shadow-xl border border-neon-blue/20 dark:border-neon-blue/30 p-6 md:p-8 flex flex-col sm:flex-row items-center gap-6 hover:border-neon-blue/50 dark:hover:border-neon-blue/50 transition-all duration-300 ease-out"
            variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
            whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(39, 215, 254, 0.2)' }}
          >
            <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.6 }}>
              <FaUserGraduate size={50} className="text-neon-blue flex-shrink-0" />
            </motion.div>
            <div className="flex-grow text-center sm:text-left">
              <h4 className="font-bold text-xl text-primary-text dark:text-light-text mb-1">
                Análise e Desenvolvimento de Sistemas
              </h4>
              <p className="text-base text-neon-purple font-semibold mb-2">
                Centro Universitário Anhanguera
              </p>
              <p className="text-sm text-secondary-text dark:text-dark-text">
                Graduação • Em andamento
              </p>
            </div>
            <div className="flex-shrink-0 mt-4 sm:mt-0">
               <span className="py-2 px-4 bg-neon-blue/10 text-neon-blue border border-neon-blue/30 rounded-lg text-sm font-semibold">
                 Cursando
               </span>
            </div>
          </motion.div>

          {/* CARD 2: ROCKETSEAT */}
          <motion.div
            className="bg-light-card/80 dark:bg-dark-card/80 backdrop-blur-md rounded-xl shadow-xl border border-neon-blue/20 dark:border-neon-blue/30 p-6 md:p-8 flex flex-col sm:flex-row items-center gap-6 hover:border-neon-blue/50 dark:hover:border-neon-blue/50 transition-all duration-300 ease-out"
            variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
            whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(39, 215, 254, 0.2)' }}
          >
            <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.6 }}>
              <LuAward size={50} className="text-neon-purple flex-shrink-0" />
            </motion.div>
            <div className="flex-grow text-center sm:text-left">
              <h4 className="font-bold text-xl text-primary-text dark:text-light-text mb-1">
                NLW Connect (Fullstack)
              </h4>
              <p className="text-base text-neon-purple font-semibold mb-2">
                Rocketseat
              </p>
              <p className="text-sm text-secondary-text dark:text-dark-text">
                Certificado de Conclusão • Emitido em 21/02/2025
              </p>
            </div>
            <motion.a
              href="https://app.rocketseat.com.br/certificates/861a62ff-782a-4bec-9f04-df3def1002cb"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="py-3 px-8 rounded-xl text-white font-bold text-sm flex-shrink-0 mt-4 sm:mt-0 transition-all duration-300
                         bg-gradient-to-r from-cyan-500 via-purple-600 to-cyan-500 bg-[length:200%_auto]
                         hover:bg-right hover:shadow-[0_0_30px_rgba(6,182,212,0.7)]
                         shadow-[0_0_15px_rgba(6,182,212,0.4)]"
            >
              Ver Credencial
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
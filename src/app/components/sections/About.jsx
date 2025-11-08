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

const skills = [
  { icon: <SiHtml5 />, name: 'HTML5' },
  { icon: <SiCss3 />, name: 'CSS3' },
  { icon: <SiJavascript />, name: 'JavaScript' },
  { icon: <SiReact />, name: 'React' },
  { icon: <SiNextdotjs />, name: 'Next.js' },
  { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
  { icon: <SiFramer />, name: 'Framer Motion' },
  { icon: <SiNodedotjs />, name: 'Node.js' },
  { icon: <SiPrisma />, name: 'Prisma' },
  { icon: <SiSupabase />, name: 'Supabase' },
  { icon: <SiMysql />, name: 'MySQL' },
  { icon: <SiMongodb />, name: 'MongoDB' },
  { icon: <SiGit />, name: 'Git' },
  { icon: <SiGithub />, name: 'GitHub' },
  { icon: <SiVite />, name: 'Vite' },
  { icon: <SiAuth0 />, name: 'NextAuth' },
  { icon: <SiFigma />, name: 'Figma' },
  { icon: <VscCode />, name: 'VS Code' },
  { icon: <SiPostman />, name: 'Postman' },
  { icon: <SiNotion />, name: 'Notion' },
];

const About = () => {
  return (
    <Section id="sobre-mim">
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

        <motion.div 
          className="md:col-span-3 text-secondary-text dark:text-dark-text leading-relaxed space-y-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg">
            Desenvolvedor Full-Stack em início de carreira, com foco em React, Next.js, Node.js e Tailwind CSS. Apaixonado por tecnologia e pelo processo de transformar ideias em soluções digitais eficientes.
          </p>
          <p className="text-lg">
            Busco uma oportunidade para aplicar e expandir meus conhecimentos, valorizando o aprendizado contínuo e o trabalho em equipe.
          </p>
          <p className="text-lg">
            Minhas principais stacks incluem Front-end (React, Next.js, Tailwind CSS), Back-end (Node.js, Prisma, Supabase) e Ferramentas (Git/GitHub, Figma, NextAuth).
          </p>
        </motion.div>
      </div>

      <div className="mt-24">
        <motion.div className="text-center mb-16">
          <motion.h3 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary-text dark:text-light-text tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Minhas Ferramentas
          </motion.h3>
          <motion.div
            className="w-24 h-0.5 bg-gradient-to-r from-transparent via-neon-purple to-transparent rounded-full mx-auto opacity-60"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 0.6, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>
        <motion.div
          className="flex flex-wrap gap-4 md:gap-6 justify-center max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.04, delayChildren: 0.1 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="group flex flex-col items-center p-5 md:p-6 bg-light-card/80 dark:bg-dark-card/80 backdrop-blur-md rounded-xl w-24 md:w-28 shadow-lg border border-neon-blue/10 dark:border-neon-blue/20 hover:border-neon-blue/50 dark:hover:border-neon-blue/50 transition-all duration-300 ease-out"
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.8 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              whileHover={{ y: -8, scale: 1.1, boxShadow: '0 10px 25px rgba(39, 215, 254, 0.3)' }}
            >
              <motion.div 
                className="text-5xl text-neon-blue mb-3 group-hover:text-neon-purple transition-colors duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {skill.icon}
              </motion.div>
              <span className="text-sm font-medium text-primary-text dark:text-light-text">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="mt-24">
        <motion.div className="text-center mb-16">
          <motion.h3 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary-text dark:text-light-text tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Certificados e Cursos
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
          <motion.div
            className="bg-light-card/80 dark:bg-dark-card/80 backdrop-blur-md rounded-xl shadow-xl border border-neon-blue/20 dark:border-neon-blue/30 p-6 md:p-8 flex flex-col sm:flex-row items-center gap-6 hover:border-neon-blue/50 dark:hover:border-neon-blue/50 transition-all duration-300 ease-out"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(39, 215, 254, 0.2)' }}
          >
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <LuAward size={50} className="text-neon-blue flex-shrink-0" />
            </motion.div>
            <div className="flex-grow text-center sm:text-left">
              <h4 className="font-bold text-xl text-primary-text dark:text-light-text mb-2">
                NLW Connect (Fullstack)
              </h4>
              <p className="text-base text-secondary-text dark:text-dark-text">
                Rocketseat - Emitido em 21/02/2025
              </p>
            </div>
            <motion.a
              href="https://app.rocketseat.com.br/certificates/861a62ff-782a-4bec-9f04-df3def1002cb"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="py-3 px-8 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-blue text-dark-bg font-bold rounded-xl shadow-lg hover:shadow-neon-lg transition-all duration-300 text-sm flex-shrink-0 mt-4 sm:mt-0"
              aria-label="Ver credencial do certificado NLW Connect"
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
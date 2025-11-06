'use client';

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';

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
  // Front-end
  { icon: <SiHtml5 />, name: 'HTML5' },
  { icon: <SiCss3 />, name: 'CSS3' },
  { icon: <SiJavascript />, name: 'JavaScript' },
  { icon: <SiReact />, name: 'React' },
  { icon: <SiNextdotjs />, name: 'Next.js' },
  { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
  { icon: <SiFramer />, name: 'Framer Motion' },
  // Back-end
  { icon: <SiNodedotjs />, name: 'Node.js' },
  { icon: <SiPrisma />, name: 'Prisma' },
  { icon: <SiSupabase />, name: 'Supabase' },
  { icon: <SiMysql />, name: 'MySQL' },
  { icon: <SiMongodb />, name: 'MongoDB' },
  // Ferramentas
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

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-128, 128], [10, -10]);
  const rotateY = useTransform(x, [-128, 128], [-10, 10]);
  const springConfig = { stiffness: 300, damping: 20 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - (rect.width / 2);
    const mouseY = e.clientY - rect.top - (rect.height / 2);
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="sobre-mim" className="py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">Sobre Mim</h2>
        <div className="grid md:grid-cols-5 gap-10 items-center">

          <motion.div
            whileHover={{ scale: 1.05 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              perspective: 800,
              rotateX: springRotateX,
              rotateY: springRotateY,
            }}
            className="md:col-span-2 relative w-64 h-64 mx-auto"
          >
            <Image
              src="/images/profile.png"
              alt="Foto de Tharcio Santos"
              fill={true}
              className="rounded-full border-4 border-neon-purple shadow-lg object-cover"
              priority={true}
            />
          </motion.div>

          {/* Texto "Sobre Mim" (Atualizado) */}
          <div className="md:col-span-3 text-secondary-text dark:text-dark-text leading-relaxed">
            <p className="mb-4">
              Desenvolvedor Full-Stack em início de carreira, com foco em React, Next.js, Node.js e Tailwind CSS. Apaixonado por tecnologia e pelo processo de transformar ideias em soluções digitais eficientes.
            </p>
            <p className="mb-4">
              Busco uma oportunidade para aplicar e expandir meus conhecimentos, valorizando o aprendizado contínuo e o trabalho em equipe.
            </p>
            <p>
              Minhas principais stacks incluem Front-end (React, Next.js, Tailwind CSS), Back-end (Node.js, Prisma, Supabase) e Ferramentas (Git/GitHub, Figma, NextAuth).
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6 text-primary-text dark:text-light-text text-center">
            Minhas Ferramentas
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center p-4 bg-light-card dark:bg-dark-card rounded-lg w-24 shadow-md dark:shadow-none"
              >
                <div className="text-4xl text-neon-blue mb-2">{skill.icon}</div>
                <span className="text-sm">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6 text-primary-text dark:text-light-text text-center">
            Certificados e Cursos
          </h3>
          <div className="max-w-2xl mx-auto grid md:grid-cols-1 gap-6">
            <div className="bg-light-card dark:bg-dark-card rounded-lg shadow-md p-6 flex flex-col sm:flex-row items-center gap-5">
              <LuAward size={40} className="text-neon-blue flex-shrink-0" />
              <div className="flex-grow text-center sm:text-left">
                <h4 className="font-bold text-lg text-primary-text dark:text-light-text">
                  NLW Connect (Fullstack)
                </h4>
                <p className="text-sm text-secondary-text dark:text-dark-text mt-1">
                  Rocketseat - Emitido em 21/02/2025
                </p>
              </div>
              <motion.a
                href="https://app.rocketseat.com.br/certificates/861a62ff-782a-4bec-9f04-df3def1002cb"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="py-2 px-6 bg-neon-blue text-dark-bg font-semibold rounded-lg shadow-lg hover:bg-neon-purple transition-all duration-300 dark:text-dark-bg text-sm flex-shrink-0 mt-4 sm:mt-0"
              >
                Ver Credencial
              </motion.a>
            </div>
          </div>
        </div>

      </motion.div>
    </section>
  );
};

export default About;
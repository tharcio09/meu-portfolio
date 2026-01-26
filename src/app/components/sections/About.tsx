"use client";

import Image from "next/image";
import Section from "../ui/Section";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiGit,
  SiGithub,
  SiPrisma,
  SiSupabase,
  SiFigma,
} from "react-icons/si";
import { LuAward, LuCode, LuGraduationCap } from "react-icons/lu";
import { FaUserGraduate } from "react-icons/fa";
import type { ReactNode } from "react";

type Skill = {
  icon: ReactNode;
  name: string;
  featured: boolean;
};

const skills: Skill[] = [
  { icon: <SiJavascript size={24} />, name: "JavaScript", featured: true },
  { icon: <SiTypescript size={24} />, name: "TypeScript", featured: true },
  { icon: <SiReact size={24} />, name: "React", featured: true },
  { icon: <SiNextdotjs size={24} />, name: "Next.js", featured: true },
  { icon: <SiTailwindcss size={24} />, name: "Tailwind CSS", featured: true },
  { icon: <SiNodedotjs size={24} />, name: "Node.js", featured: true },
  { icon: <SiPrisma size={24} />, name: "Prisma", featured: false },
  { icon: <SiSupabase size={24} />, name: "Supabase", featured: false },
  { icon: <SiGit size={24} />, name: "Git", featured: false },
  { icon: <SiGithub size={24} />, name: "GitHub", featured: false },
  { icon: <SiFigma size={24} />, name: "Figma", featured: false },
];

const About = () => {
  return (
    <Section id="sobre-mim">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-primary-text dark:text-light-text tracking-tight">
            Sobre Mim
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full mx-auto opacity-80" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Column 1: Photo & Resume */}
          <div className="flex flex-col items-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8 group">
              <div className="absolute inset-0 bg-neon-blue/20 rounded-full blur-2xl group-hover:bg-neon-blue/30 transition-colors duration-500" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-neon-blue/20 group-hover:border-neon-blue/50 transition-colors duration-500 shadow-2xl">
                <Image
                  src="/images/profile.png"
                  alt="Foto de Tharcio Santos"
                  fill={true}
                  className="object-cover"
                  priority={true}
                  sizes="(max-width: 768px) 256px, 320px"
                />
              </div>
            </div>
          </div>

          {/* Column 2: Bio & Text */}
          <div className="text-center md:text-left space-y-6">
            <h3 className="text-3xl font-heading font-bold text-primary-text dark:text-light-text">
              Olá, eu sou o{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
                Tharcio
              </span>
            </h3>
            <p className="text-lg text-secondary-text dark:text-gray-300 leading-relaxed">
              Sou estudante de{" "}
              <strong>Análise e Desenvolvimento de Sistemas</strong>, com foco
              em desenvolvimento web. Atualmente estudo <strong>React</strong>,{" "}
              <strong>Next.js</strong> e <strong>TypeScript</strong>, aplicando
              esses conhecimentos em projetos pessoais e explorando conceitos de
              frontend e backend com foco em aprendizado e prática.
            </p>

            <p className="text-lg text-secondary-text dark:text-gray-300 leading-relaxed">
              Busco minha <strong>primeira oportunidade de estágio</strong> para
              aprender com uma equipe real, evoluir tecnicamente e contribuir
              com o time.
            </p>

            <div className="pt-4 flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="flex items-center gap-3 px-4 py-2 bg-light-card dark:bg-dark-card rounded-lg border border-gray-200 dark:border-gray-800">
                <LuCode className="text-neon-blue text-xl" />
                <span className="font-medium text-sm">Full-Stack Dev</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-2 bg-light-card dark:bg-dark-card rounded-lg border border-gray-200 dark:border-gray-800">
                <LuGraduationCap className="text-neon-purple text-xl" />
                <span className="font-medium text-sm">Estudante ADS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section - Clean Icons */}
        <div className="mb-24">
          <h3 className="text-center text-xl font-heading font-bold mb-10 text-primary-text dark:text-light-text">
            Stack Tecnológica & Ferramentas
          </h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group flex flex-col items-center gap-3 transition-transform duration-300 hover:scale-110"
              >
                <div className="text-4xl text-secondary-text dark:text-gray-500 group-hover:text-neon-blue transition-colors duration-300">
                  {skill.icon}
                </div>
                <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-2 group-hover:translate-y-0 text-neon-blue">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Education - Simple clean cards */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 p-6 rounded-2xl bg-light-card dark:bg-dark-card border border-gray-200 dark:border-gray-800 flex items-start gap-4 hover:border-neon-blue/30 transition-colors">
              <div className="p-3 bg-light-bg dark:bg-dark-bg rounded-xl text-neon-blue">
                <LuGraduationCap size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg text-primary-text dark:text-light-text">
                  Análise e Desesenvolvimento de Sistemas
                </h4>
                <p className="text-sm text-secondary-text dark:text-gray-400">
                  Anhanguera • Em andamento
                </p>
              </div>
            </div>

            <div className="flex-1 p-6 rounded-2xl bg-light-card dark:bg-dark-card border border-gray-200 dark:border-gray-800 flex items-start gap-4 hover:border-neon-purple/30 transition-colors">
              <div className="p-3 bg-light-bg dark:bg-dark-bg rounded-xl text-neon-purple">
                <LuAward size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg text-primary-text dark:text-light-text">
                  NLW Connect
                </h4>
                <p className="text-sm text-secondary-text dark:text-gray-400">
                  Rocketseat • Concluído
                </p>
                <a
                  href="https://app.rocketseat.com.br/certificates/861a62ff-782a-4bec-9f04-df3def1002cb"
                  target="_blank"
                  className="text-xs font-semibold text-neon-purple hover:underline mt-1 block"
                >
                  Ver Credencial
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;

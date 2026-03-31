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
            <div className="relative w-64 h-64 md:w-72 md:h-72 mb-8">
              <div className="relative w-full h-full rounded-full overflow-hidden border border-gray-200 dark:border-gray-800 shadow-md">
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
              Olá, eu sou o Tharcio
            </h3>
            <p className="text-lg text-secondary-text dark:text-gray-300 leading-relaxed">
              Sou estudante de{" "}
              <strong>Análise e Desenvolvimento de Sistemas</strong>, com foco
              em desenvolvimento web. Estudo e pratico{" "}
              <strong>React</strong>, <strong>Next.js</strong> e{" "}
              <strong>TypeScript</strong>, aplicando esses conhecimentos em
              projetos pessoais para consolidar fundamentos de frontend e
              explorar conceitos iniciais de backend.
            </p>

            <p className="text-lg text-secondary-text dark:text-gray-300 leading-relaxed">
              Busco minha <strong>primeira oportunidade de estágio</strong> para
              aprender com uma equipe real, evoluir tecnicamente e contribuir
              com o time.
            </p>

            <div className="pt-4 flex flex-wrap gap-3 justify-center md:justify-start text-sm text-secondary-text dark:text-gray-300">
              <span className="px-3 py-1 rounded-full bg-light-card dark:bg-dark-card border border-gray-200 dark:border-gray-800">
                Estudante de ADS
              </span>
              <span className="px-3 py-1 rounded-full bg-light-card dark:bg-dark-card border border-gray-200 dark:border-gray-800">
                Desenvolvimento Web
              </span>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-24">
          <h3 className="text-center text-xl font-heading font-bold mb-10 text-primary-text dark:text-light-text">
            Stack Tecnológica & Ferramentas
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span
                key={skill.name}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium
                           bg-light-card dark:bg-dark-card border border-gray-200 dark:border-gray-800
                           text-secondary-text dark:text-gray-300"
              >
                <span className="text-base text-secondary-text dark:text-gray-400">
                  {skill.icon}
                </span>
                {skill.name}
              </span>
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
                  Análise e Desenvolvimento de Sistemas
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

import Image from 'next/image';
import Section from '../ui/Section';
import type { ReactNode } from 'react';
import { skills } from '@/data/about';
import { learningItems } from '@/data/learning';
import { GithubIcon, TechBadgeIcon } from '../ui/Icons';

/**
 * Map local de iconName → componente de ícone.
 * Mantém a renderização de JSX no componente e os dados limpos em about.ts.
 */
const SKILL_ICON_MAP: Record<string, ReactNode> = {
  SiJavascript: <TechBadgeIcon label="JS" />,
  SiTypescript: <TechBadgeIcon label="TS" />,
  SiReact: <TechBadgeIcon label="R" />,
  SiNextdotjs: <TechBadgeIcon label="N" />,
  SiTailwindcss: <TechBadgeIcon label="TW" />,
  SiNodedotjs: <TechBadgeIcon label="ND" />,
  SiPrisma: <TechBadgeIcon label="PR" />,
  SiSupabase: <TechBadgeIcon label="SB" />,
  SiGit: <TechBadgeIcon label="GT" />,
  SiGithub: <GithubIcon className="h-4 w-4" />,
  SiFigma: <TechBadgeIcon label="FG" />,
};

const About = () => {
  return (
    <Section id="sobre-mim" spacing="compact">
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[0.75fr_1.25fr] md:items-start">
        <div>
          <div className="relative aspect-square max-w-64 overflow-hidden rounded-xl border border-border-light bg-light-surface shadow-sm dark:border-border-dark dark:bg-dark-card">
            <Image
              src="/images/profile.png"
              alt="Foto de Tharcio Santos"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 256px, 320px"
            />
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-accent dark:text-accent-light">Sobre</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary-text dark:text-light-text md:text-4xl">
            Evolução prática através de projetos publicados.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-secondary-text dark:text-dark-text">
            <p>
              Venho desenvolvendo projetos próprios para praticar o ciclo completo de uma aplicação
              web: entender o problema, construir a interface, integrar dados, implementar
              autenticação quando necessário e publicar em produção.
            </p>
            <p>
              Minha experiência anterior em ambientes operacionais reforçou uma forma de trabalho
              que levo para o desenvolvimento: observar o contexto, organizar informações,
              diagnosticar causas e comunicar decisões com clareza.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-text dark:text-light-text">
              Stack e ferramentas
            </h3>
            <div className="mt-4 flex flex-wrap gap-2" role="list" aria-label="Tecnologias">
              {skills.map((skill) => (
                <span
                  key={skill.name}
                  role="listitem"
                  className={`inline-flex items-center gap-2 rounded-md border px-2.5 py-1.5 text-xs font-medium transition-all duration-200 hover:scale-105 ${
                    skill.featured
                      ? 'border-accent-border bg-accent-subtle text-accent dark:border-accent-border-dark dark:bg-accent-subtle-dark dark:text-accent-light'
                      : 'border-border-light text-secondary-text dark:border-border-dark dark:text-dark-text'
                  }`}
                >
                  <span className="text-sm" aria-hidden="true">
                    {SKILL_ICON_MAP[skill.iconName]}
                  </span>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-text dark:text-light-text">
              Atualmente aprendendo
            </h3>
            <div className="mt-3 flex flex-col gap-2">
              {learningItems.map((item) => (
                <div
                  key={item.name}
                  className="rounded-lg border border-border-light bg-light-surface/60 p-3 dark:border-border-dark dark:bg-dark-surface/60"
                >
                  <p className="text-sm font-semibold text-primary-text dark:text-light-text">
                    {item.name}
                  </p>
                  <p className="mt-0.5 text-xs leading-relaxed text-secondary-text dark:text-dark-text">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-border-light p-5 dark:border-border-dark">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent dark:text-accent-light">
                Formação
              </p>
              <h4 className="mt-3 font-bold text-primary-text dark:text-light-text">
                Análise e Desenvolvimento de Sistemas
              </h4>
              <p className="mt-1 text-sm text-secondary-text dark:text-dark-text">
                Anhanguera · Em andamento
              </p>
            </div>
            <div className="rounded-lg border border-border-light p-5 dark:border-border-dark">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent dark:text-accent-light">
                Certificação
              </p>
              <h4 className="mt-3 font-bold text-primary-text dark:text-light-text">NLW Connect</h4>
              <p className="mt-1 text-sm text-secondary-text dark:text-dark-text">
                Rocketseat · Concluído
              </p>
              <a
                href="https://app.rocketseat.com.br/certificates/861a62ff-782a-4bec-9f04-df3def1002cb"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex text-sm font-semibold text-accent hover:underline dark:text-accent-light"
              >
                Ver credencial →
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;

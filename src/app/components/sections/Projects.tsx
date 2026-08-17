import { projects } from '@/data/projects';
import { RevealOnScroll } from '../ui/RevealOnScroll';
import Section from '../ui/Section';
import { ProjectTabs } from './ProjectTabs';

const Projects = () => {
  return (
    <Section
      id="projetos"
      spacing="editorial"
      className="border-b border-border-light dark:border-border-dark"
    >
      <RevealOnScroll className="mx-auto max-w-6xl">
        <div className="grid gap-4 border-b border-border-light pb-6 dark:border-border-dark md:grid-cols-[0.75fr_1.25fr] md:items-end">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent dark:text-accent-light">
              Trabalho selecionado
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-[-0.035em] text-primary-text dark:text-light-text md:text-4xl">
              Projetos
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-secondary-text dark:text-dark-text md:justify-self-end">
            Sistemas full stack e aplicações publicadas em produção com autenticação, testes
            automatizados e regras de negócio. Navegue pelas abas abaixo para explorar cada solução.
          </p>
        </div>

        <ProjectTabs projects={projects} />
      </RevealOnScroll>
    </Section>
  );
};

export default Projects;

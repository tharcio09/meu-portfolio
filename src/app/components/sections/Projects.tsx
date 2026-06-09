import { projects } from '@/data/projects';
import ProjectCard from '../ui/ProjectCard';
import Section from '../ui/Section';

const STAGGER_DELAY_MS = 100;

const Projects = () => {
  const featuredProject = projects.find((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <Section id="projetos">
      <div className="mb-16 text-center">
        <p className="text-sm font-medium text-accent dark:text-accent-light">
          Projetos em destaque
        </p>
        <h2 className="mt-3 text-4xl font-bold tracking-tight text-primary-text dark:text-light-text md:text-5xl">
          Projetos que demonstram prática full stack
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-secondary-text dark:text-dark-text md:text-lg">
          Aplicações publicadas com foco em fluxos reais: autenticação, persistência de dados, APIs,
          responsividade, testes e deploy. Cada projeto mostra uma parte diferente da minha evolução
          técnica.
        </p>
      </div>

      {featuredProject && (
        <div className="mb-10">
          <ProjectCard {...featuredProject} hideImage />
        </div>
      )}

      <div className="grid gap-8 md:grid-cols-2">
        {otherProjects.map((project, index) => (
          <div
            key={project.title}
            className="animate-stagger-in"
            style={{
              animationDelay: `${index * STAGGER_DELAY_MS}ms`,
              animationFillMode: 'both',
            }}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;

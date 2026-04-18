import ProjectCard from "../ui/ProjectCard";
import Section from "../ui/Section";

type Project = {
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  demoUrl?: string;
  demoLabel?: string;
  tags: string[];
  featured?: boolean;
  highlights?: string[];
  badge?: string;
};

const projectsData: Project[] = [
  {
    title: "HelpFlow — Sistema de Help Desk",
    description:
      "Sistema de Help Desk fullstack para centralizar e organizar chamados internos em equipes. Do login ao painel de gestão — aplicação completa com autenticação, banco relacional e deploy em produção.",
    highlights: [
      "Autenticação por sessão (NextAuth) com controle de acesso",
      "CRUD completo de tickets com status e prioridade",
      "Deploy em produção (Vercel) + banco relacional (Prisma + Supabase)",
    ],
    badge: "Projeto completo: auth + banco + deploy",
    imageUrl: "/images/helpflow-screenshot.png",
    githubUrl: "https://github.com/tharcio09/helpflow",
    demoUrl: "https://helpflow.vercel.app/",
    demoLabel: "Acessar demo completa",
    tags: ["Next.js", "React", "TypeScript", "Prisma", "Supabase", "NextAuth"],
    featured: true,
  },
  {
    title: "DevLinks: Plataforma de Perfil e Linktree",
    description:
      "Plataforma fullstack para criação e gerenciamento de páginas de links personalizadas (estilo Linktree). Upload de imagens via Cloudinary, estado sincronizado com React Query e testes end-to-end com Cypress — aplicação completa com frontend e backend integrados.",
    imageUrl: "/images/screenshot-api.png",
    githubUrl: "https://github.com/tharcio09/frontend-api",
    demoUrl: "https://frontend-api-weld.vercel.app/",
    tags: ["React", "Vite", "Tailwind CSS", "React Query", "Cloudinary", "Cypress"],
  },
  {
    title: "Lista de Mercado — PWA",
    description:
      "PWA de lista de compras para uso no dia a dia — funciona offline, salva no dispositivo e compartilha pelo WhatsApp com um clique. Interface mobile-first que funciona como app nativo, sem backend ou custo de servidor.",
    imageUrl: "/images/lista-mercado-screenshot.png",
    githubUrl: "https://github.com/tharcio09/lista-mercado",
    demoUrl: "https://lista-mercado-sage.vercel.app/",
    tags: ["React", "Vite", "PWA", "Tailwind CSS", "Local Storage"],
  },
];

const Projects = () => {
  const featuredProject = projectsData.find((p) => p.featured);
  const otherProjects = projectsData.filter((p) => !p.featured);

  return (
    <Section id="projetos">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-primary-text dark:text-light-text tracking-tight">
          Projetos
        </h2>

        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-neon-purple to-transparent rounded-full mx-auto mb-6 opacity-60" />

        <p className="text-base md:text-lg text-secondary-text dark:text-dark-text max-w-2xl mx-auto leading-relaxed">
          Aplicações com deploy ativo — problema real, stack moderna, código no GitHub.
        </p>
      </div>

      {/* Projeto principal — layout horizontal */}
      {featuredProject && (
        <div className="mb-8">
          <ProjectCard {...featuredProject} />
        </div>
      )}

      {/* Demais projetos — grid 2 colunas */}
      <div className="grid gap-8 md:grid-cols-2">
        {otherProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;

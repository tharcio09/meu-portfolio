export type Capability = {
  title: string;
  description: string;
  technologies: string[];
  usedIn: string[];
};

export const capabilities: Capability[] = [
  {
    title: 'Frontend e UI',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    description:
      'Interfaces responsivas, componentes reutilizáveis e estados de carregamento e erro.',
    usedIn: ['HelpFlow', 'ManutFlow', 'Crypto Dashboard'],
  },
  {
    title: 'Backend e autenticação',
    technologies: ['Node.js', 'APIs REST', 'Prisma', 'NextAuth', 'Zod'],
    description: 'APIs, CRUD, validação e regras de acesso para fluxos autenticados.',
    usedIn: ['HelpFlow', 'ManutFlow'],
  },
  {
    title: 'Banco de dados e infra',
    technologies: ['PostgreSQL', 'Supabase', 'Vercel', 'Cloudinary'],
    description: 'Modelagem relacional, controle de acesso a dados, uploads e deploy.',
    usedIn: ['HelpFlow', 'ManutFlow', 'DevLinks'],
  },
  {
    title: 'Testes e qualidade',
    technologies: ['Vitest', 'Cypress'],
    description: 'Validação automatizada de regras e fluxos principais.',
    usedIn: ['HelpFlow', 'DevLinks'],
  },
  {
    title: 'PWA e mobile',
    technologies: ['Service Worker', 'PWA', 'Offline-first'],
    description:
      'Experiência offline, persistência local e compartilhamento em dispositivos móveis.',
    usedIn: ['Lista de Mercado'],
  },
  {
    title: 'Versionamento e ferramentas',
    technologies: ['Git', 'GitHub', 'GitHub Actions'],
    description: 'Controle de versão, integração contínua e automação de qualidade do código.',
    usedIn: ['HelpFlow', 'ManutFlow', 'DevLinks', 'Lista de Mercado', 'Crypto Dashboard'],
  },
];

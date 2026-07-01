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
      'Componentes reutilizáveis, rotas dinâmicas, estados assíncronos e layouts responsivos com foco em acessibilidade.',
    usedIn: ['HelpFlow', 'ManutFlow', 'Crypto Dashboard'],
  },
  {
    title: 'Backend e autenticação',
    technologies: ['Node.js', 'APIs REST', 'Prisma', 'NextAuth', 'Zod'],
    description:
      'CRUD com validação, autenticação por roles (CLIENT/AGENT), rate limiting e persistência relacional com Prisma.',
    usedIn: ['HelpFlow', 'ManutFlow'],
  },
  {
    title: 'Banco de dados e infra',
    technologies: ['PostgreSQL', 'Supabase', 'Vercel', 'Cloudinary'],
    description:
      'Modelagem relacional, RLS no Supabase, upload de imagens via Cloudinary e deploy contínuo no Vercel.',
    usedIn: ['HelpFlow', 'ManutFlow', 'DevLinks'],
  },
  {
    title: 'Testes e qualidade',
    technologies: ['Vitest', 'Cypress', 'Testes E2E'],
    description:
      'Testes unitários com Vitest e testes end-to-end com Cypress no fluxo principal de autenticação e CRUD.',
    usedIn: ['HelpFlow', 'DevLinks'],
  },
  {
    title: 'PWA e mobile',
    technologies: ['Service Worker', 'PWA', 'Offline-first'],
    description:
      'Aplicações progressivas com funcionamento offline, persistência local e compartilhamento nativo.',
    usedIn: ['Lista de Mercado'],
  },
  {
    title: 'Em evolução',
    technologies: ['Docker', 'Testes de integração', 'Zod avançado'],
    description:
      'Containerização de aplicações, testes de integração além do unitário e validação de schemas complexos.',
    usedIn: [],
  },
];

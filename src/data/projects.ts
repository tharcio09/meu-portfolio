export type Project = {
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
  outcome?: string;
  casePoints?: {
    label: string;
    value: string;
  }[];
};

export const projects: Project[] = [
  {
    title: 'HelpFlow — Sistema de Help Desk',
    description:
      'Sistema fullstack para organizar chamados internos com login, painel de gestão, status, prioridade e banco relacional. O projeto cobre o fluxo completo: interface, regra de negócio, autenticação, persistência e deploy.',
    casePoints: [
      {
        label: 'Problema',
        value: 'Registrar e priorizar solicitações internas sem perder histórico.',
      },
      {
        label: 'Solução',
        value: 'Painel autenticado com CRUD de tickets, status e prioridade.',
      },
      {
        label: 'Entrega',
        value: 'Deploy na Vercel, Supabase com Prisma e código público.',
      },
    ],
    highlights: [
      'Autenticação por sessão com NextAuth e controle de acesso por perfil',
      'CRUD completo de tickets com status, prioridade e histórico',
      'Banco relacional (Supabase + Prisma), deploy ativo e interface responsiva',
    ],
    badge: 'Auth + banco + deploy',
    imageUrl: '/images/helpflow-screenshot.png',
    githubUrl: 'https://github.com/tharcio09/helpflow',
    demoUrl: 'https://helpflow.vercel.app/',
    demoLabel: 'Acessar demo completa',
    tags: ['Next.js', 'React', 'TypeScript', 'Prisma', 'Supabase', 'NextAuth'],
    featured: true,
  },
  {
    title: 'DevLinks — Perfil e Linktree',
    description:
      'Plataforma fullstack para criar páginas de links personalizadas, com upload de imagens via Cloudinary, estado sincronizado com React Query e cobertura de testes end-to-end com Cypress.',
    casePoints: [
      {
        label: 'Problema',
        value: 'Centralizar links de redes sociais e portfólio em uma única página editável.',
      },
      {
        label: 'Solução',
        value: 'Perfil editável em tempo real com upload de avatar e persistência de estado.',
      },
      {
        label: 'Diferencial',
        value: 'Testes E2E com Cypress cobrindo fluxo completo de edição e navegação.',
      },
    ],
    highlights: [
      'Upload de imagem via Cloudinary com preview instantâneo',
      'Testes end-to-end com Cypress — diferencial técnico para vaga júnior',
      'React Query para sincronização de estado entre servidor e cliente',
    ],
    outcome: 'Edição em tempo real + upload + testes E2E',
    imageUrl: '/images/screenshot-devlinks.png',
    githubUrl: 'https://github.com/tharcio09/frontend-api',
    demoUrl: 'https://frontend-api-weld.vercel.app/',
    tags: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'React Query', 'Cloudinary', 'Cypress'],
  },
  {
    title: 'Lista de Mercado — PWA',
    description:
      'Aplicativo de lista de compras mobile-first que funciona completamente offline, salva dados no dispositivo via Local Storage e compartilha pelo WhatsApp com um clique.',
    casePoints: [
      {
        label: 'Problema',
        value: 'Precisar de internet para acessar uma lista de compras simples.',
      },
      {
        label: 'Solução',
        value: 'PWA que instala como app nativo, funciona offline e persiste dados localmente.',
      },
      {
        label: 'Entrega',
        value: 'Compartilhamento via WhatsApp e deploy ativo na Vercel.',
      },
    ],
    highlights: [
      'Funciona 100% offline após instalação (Service Worker + Cache API)',
      'Instalável como app nativo em Android e iOS',
      'Compartilhamento da lista via WhatsApp com formatação automática',
    ],
    outcome: 'Offline + instalável + compartilhamento',
    imageUrl: '/images/lista-mercado-screenshot.png',
    githubUrl: 'https://github.com/tharcio09/lista-mercado',
    demoUrl: 'https://lista-mercado-sage.vercel.app/',
    tags: ['React', 'Vite', 'TypeScript', 'PWA', 'Tailwind CSS', 'Local Storage'],
  },
  {
    title: 'Crypto Dashboard',
    description:
      'Dashboard para acompanhar preços e variações de criptomoedas em tempo real, consumindo a API pública da CoinGecko com atualização automática e interface responsiva.',
    casePoints: [
      {
        label: 'Problema',
        value: 'Acompanhar dados de cripto sem precisar acessar múltiplas plataformas.',
      },
      {
        label: 'Solução',
        value: 'Dashboard unificado com dados em tempo real via CoinGecko API.',
      },
      {
        label: 'Entrega',
        value: 'Interface responsiva com atualização automática e deploy ativo.',
      },
    ],
    highlights: [
      'Integração com API externa (CoinGecko) com atualização periódica',
      'Dashboard com dados em tempo real e interface responsiva',
      'Gerenciamento de estado de loading e error boundaries',
    ],
    outcome: 'API externa + dados em tempo real + responsivo',
    imageUrl: '/images/screenshot-crypto.png',
    githubUrl: 'https://github.com/tharcio09/crypto-dashboard',
    demoUrl: 'https://crypto-dashboard-five-sandy.vercel.app/',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'CoinGecko API'],
  },
];

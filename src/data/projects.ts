export type Project = {
  title: string;
  shortTitle: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
  githubUrl: string;
  demoUrl?: string;
  demoLabel?: string;
  demoNote?: string;
  metrics?: string[];
  tags: string[];
  kind: 'featured' | 'secondary';
  outcome?: string;
  technicalHighlight?: string;
  responsibility?: string;
  challenge?: string;
  decision?: string;
  evidence?: string[];
  nextStep?: string;
};

export const projects: Project[] = [
  {
    title: 'HelpFlow: Sistema de Help Desk',
    shortTitle: 'HelpFlow',
    description:
      'Sistema full stack para abertura, acompanhamento e gerenciamento de chamados internos.',
    responsibility:
      'Desenvolvimento completo do produto, da interface e das regras de negócio à persistência e ao deploy.',
    challenge:
      'Organizar autenticação, permissões, regras de negócio e histórico sem comprometer a clareza do fluxo.',
    decision:
      'Separar acessos com roles CLIENT/AGENT e centralizar validação com Zod e persistência com Prisma.',
    evidence: [
      'Autenticação por credenciais e GitHub, com recuperação de senha',
      'Controle de acesso por perfil e propriedade de chamados',
      'Acesso de demonstração com 1-clique (visões Client e Agent)',
      'CRUD paginado de tickets com status e prioridades',
      'Validação, rate limiting, testes unitários e E2E',
    ],
    demoNote: 'Acesso rápido com 1-clique para perfis de Solicitante (Client) e Agente (Suporte).',
    metrics: ['RBAC (Client/Agent)', 'NextAuth + JWT', 'CRUD Paginado'],
    nextStep: 'Ampliar os testes de integração e adicionar observabilidade aos fluxos críticos.',
    imageUrl: '/images/helpflow-screenshot.webp',
    imageAlt:
      'Interface do HelpFlow mostrando painel de gestão de chamados com lista de tickets, status e prioridade',
    githubUrl: 'https://github.com/tharciosantos/helpflow',
    demoUrl: 'https://helpflow.vercel.app/',
    demoLabel: 'Acessar aplicação',
    tags: ['Next.js', 'React', 'JavaScript', 'Prisma', 'Supabase', 'NextAuth'],
    kind: 'featured',
  },
  {
    title: 'ManutFlow: Controle de Manutenção',
    shortTitle: 'ManutFlow',
    description:
      'Sistema completo para cadastro de equipamentos, abertura de ordens de serviço e dashboard com indicadores de status e prioridade.',
    responsibility:
      'Modelagem e implementação do sistema de equipamentos, ordens de serviço e indicadores operacionais. A experiência prática com suporte e manutenção de TI ajudou a aproximar o produto de rotinas reais de equipamentos e manutenção.',
    challenge:
      'Garantir que cada usuário acesse apenas seus próprios equipamentos e ordens de manutenção.',
    decision:
      'Aplicar proteção em três camadas com proxy, getUser() na API e Row Level Security no banco.',
    evidence: [
      '161 testes automatizados em 15 arquivos',
      'CRUD completo com busca, filtros, paginação e histórico',
      'Proteção em camadas com sessão, user_id e RLS',
      'Acesso de demonstração com 1-clique e dados pré-carregados',
      'Dashboard operacional com prazos, indicadores e ordens urgentes',
    ],
    demoNote: 'Acesso rápido com 1-clique com equipamentos e ordens de serviço pré-cadastrados.',
    metrics: ['161 testes automatizados', '3 camadas de segurança', 'Supabase RLS'],
    nextStep: 'Ampliar os testes automatizados e evoluir os indicadores operacionais do dashboard.',
    imageUrl: '/images/manutflow-screenshot.webp',
    imageAlt: 'Dashboard do ManutFlow com indicadores de equipamentos e ordens de serviço',
    githubUrl: 'https://github.com/tharciosantos/manutflow',
    demoUrl: 'https://manutflow.vercel.app',
    demoLabel: 'Acessar sistema',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL'],
    kind: 'featured',
  },
  {
    title: 'DevLinks: Perfil e Linktree',
    shortTitle: 'DevLinks',
    description:
      'Página de perfil com links personalizados, upload de avatar e dados sincronizados entre cliente e servidor.',
    technicalHighlight:
      'Upload de imagem via Cloudinary, cache e invalidação com React Query, e testes end-to-end com Cypress no fluxo principal.',
    outcome: 'Upload · sincronização · testes E2E',
    imageUrl: '/images/screenshot-devlinks.webp',
    imageAlt: 'Interface do DevLinks exibindo página de perfil com links personalizados',
    githubUrl: 'https://github.com/tharciosantos/devlinks-web',
    demoUrl: 'https://devlinks-web-api.vercel.app/',
    tags: ['React', 'React Query', 'Cloudinary', 'Cypress'],
    kind: 'secondary',
  },
  {
    title: 'Lista de Mercado: PWA',
    shortTitle: 'Lista de Mercado',
    description:
      'Aplicação mobile para organizar compras por setores, funcionar sem internet e compartilhar a lista via WhatsApp.',
    technicalHighlight:
      'PWA com service worker para uso offline, persistência local e compartilhamento da lista via WhatsApp.',
    outcome: 'PWA · offline-first · compartilhamento',
    imageUrl: '/images/lista-mercado-screenshot.webp',
    imageAlt: 'Interface mobile da Lista de Mercado com itens de compras',
    githubUrl: 'https://github.com/tharciosantos/lista-mercado',
    demoUrl: 'https://lista-mercado-sage.vercel.app/',
    tags: ['React', 'Vite', 'PWA', 'Tailwind CSS'],
    kind: 'secondary',
  },
  {
    title: 'Crypto Dashboard',
    shortTitle: 'Crypto Dashboard',
    description:
      'Consulta de preços e variações de criptomoedas com busca, páginas de detalhe e tratamento de estados de carregamento e erro.',
    technicalHighlight:
      'Consumo de API externa com rotas dinâmicas, busca client-side e estados assíncronos, incluindo loading, erro e exibição de dados.',
    outcome: 'API externa · rotas dinâmicas · estados assíncronos',
    imageUrl: '/images/screenshot-crypto.webp',
    imageAlt: 'Dashboard de criptomoedas exibindo preços e variações',
    githubUrl: 'https://github.com/tharciosantos/crypto-dashboard',
    demoUrl: 'https://crypto-dashboard-five-sandy.vercel.app/',
    tags: ['Next.js', 'React', 'API externa'],
    kind: 'secondary',
  },
];

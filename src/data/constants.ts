export type NavLink = {
  href: string;
  label: string;
  cta?: boolean;
};

export type SocialLink = {
  label: string;
  description: string;
  href: string;
  action: string;
};

export const EMAIL = 'tharciosantos09@gmail.com';

/** URLs públicas centralizadas para evitar divergências entre as superfícies do portfólio */
export const SITE_URL = 'https://tharcio-portfolio.vercel.app';
export const GITHUB_URL = 'https://github.com/tharciosantos';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/tharcio-santos-dev/';
export const RESUME_URL = '/curriculo-tharcio-santos.pdf';

export const sectionIdFromHref = (href: string) => (href.startsWith('#') ? href.slice(1) : '');

export const navLinks: NavLink[] = [
  { href: '#projetos', label: 'Projetos' },
  { href: '#processo', label: 'Processo' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#sobre-mim', label: 'Sobre' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#contato', label: 'Contato', cta: true },
];

/** IDs estáveis para scroll spy — manter sincronizado com os hrefs de navLinks. */
export const SECTION_IDS = [
  'projetos',
  'processo',
  'habilidades',
  'sobre-mim',
  'experiencia',
  'contato',
] as const;

export const redesSociais: SocialLink[] = [
  {
    label: 'LinkedIn',
    description: 'Conversar sobre vagas, networking e carreira.',
    href: LINKEDIN_URL,
    action: 'Ver perfil',
  },
  {
    label: 'GitHub',
    description: 'Ver código, projetos publicados e evolução técnica.',
    href: GITHUB_URL,
    action: 'Ver repositórios',
  },
];

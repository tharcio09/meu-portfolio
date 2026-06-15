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

/** URLs base exportadas para evitar duplicação entre Footer e Contact */
export const GITHUB_URL = 'https://github.com/tharciosantos';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/tharcio-santos-dev/';

export const navLinks: NavLink[] = [
  { href: '#projetos', label: 'Projetos' },
  { href: '#sobre-mim', label: 'Sobre' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#processo', label: 'Processo' },
  { href: '#experiencia', label: 'Trajetória' },
  { href: '#contato', label: 'Contato', cta: true },
];

/** IDs estáveis para scroll spy — manter sincronizado com os hrefs de navLinks. */
export const SECTION_IDS = [
  'projetos',
  'sobre-mim',
  'habilidades',
  'processo',
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

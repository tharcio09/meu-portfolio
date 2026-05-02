export type NavLink = {
  href: string;
  label: string;
  cta?: boolean;
};

export const navLinks: NavLink[] = [
  { href: '#entregas', label: 'Entregas' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#sobre-mim', label: 'Sobre' },
  { href: '#experiencia', label: 'Trajetória' },
  { href: '#contato', label: 'Contato', cta: true },
];

export const EMAIL = 'tharciosantos09@gmail.com';

export const redesSociais = [
  {
    label: 'LinkedIn',
    description: 'Conversar sobre vagas, networking e carreira.',
    href: 'https://www.linkedin.com/in/tharcio-santos-dev/',
    action: 'Abrir',
  },
  {
    label: 'GitHub',
    description: 'Ver código, projetos publicados e evolução técnica.',
    href: 'https://github.com/tharcio09',
    action: 'Abrir',
  },
];

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

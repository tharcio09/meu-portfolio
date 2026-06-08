/**
 * Dados das competências técnicas.
 * iconName corresponde a um identificador usado em About.tsx para selecionar
 * o ícone correto — mantendo JSX fora da camada de dados.
 */
export type Skill = {
  iconName: string;
  name: string;
  featured?: boolean;
};

export const skills: Skill[] = [
  { iconName: 'SiJavascript', name: 'JavaScript', featured: true },
  { iconName: 'SiTypescript', name: 'TypeScript', featured: true },
  { iconName: 'SiReact', name: 'React', featured: true },
  { iconName: 'SiNextdotjs', name: 'Next.js', featured: true },
  { iconName: 'SiTailwindcss', name: 'Tailwind CSS', featured: true },
  { iconName: 'SiNodedotjs', name: 'Node.js', featured: true },
  { iconName: 'SiPrisma', name: 'Prisma' },
  { iconName: 'SiSupabase', name: 'Supabase' },
  { iconName: 'SiGit', name: 'Git' },
  { iconName: 'SiGithub', name: 'GitHub' },
  { iconName: 'SiFigma', name: 'Figma' },
];

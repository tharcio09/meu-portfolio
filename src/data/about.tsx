import type { ReactNode } from 'react';
import {
  SiFigma,
  SiGit,
  SiGithub,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

export type Skill = {
  icon: ReactNode;
  name: string;
  featured?: boolean;
};

export const skills: Skill[] = [
  { icon: <SiJavascript />, name: 'JavaScript', featured: true },
  { icon: <SiTypescript />, name: 'TypeScript', featured: true },
  { icon: <SiReact />, name: 'React', featured: true },
  { icon: <SiNextdotjs />, name: 'Next.js', featured: true },
  { icon: <SiTailwindcss />, name: 'Tailwind CSS', featured: true },
  { icon: <SiNodedotjs />, name: 'Node.js', featured: true },
  { icon: <SiPrisma />, name: 'Prisma' },
  { icon: <SiSupabase />, name: 'Supabase' },
  { icon: <SiGit />, name: 'Git' },
  { icon: <SiGithub />, name: 'GitHub' },
  { icon: <SiFigma />, name: 'Figma' },
];

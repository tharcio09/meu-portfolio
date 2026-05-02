import { describe, it, expect } from 'vitest';
import { projects } from '../projects';

describe('projects', () => {
  it('deve ter pelo menos um projeto', () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  it('deve ter exatamente um projeto em destaque', () => {
    const destaques = projects.filter((p) => p.featured);
    expect(destaques).toHaveLength(1);
  });

  it('todos os projetos devem ter titulo, githubUrl e imageUrl', () => {
    projects.forEach((projeto) => {
      expect(projeto.title).toBeTruthy();
      expect(projeto.githubUrl).toBeTruthy();
      expect(projeto.imageUrl).toBeTruthy();
    });
  });
});

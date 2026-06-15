import { describe, it, expect } from 'vitest';
import { projects } from '../projects';

describe('projects', () => {
  it('deve ter pelo menos um projeto', () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  it('deve ter exatamente um projeto em destaque', () => {
    const destaques = projects.filter((project) => project.kind === 'featured');
    expect(destaques).toHaveLength(1);
    expect(destaques[0].shortTitle).toBe('HelpFlow');
  });

  it('deve apresentar ManutFlow como produto em construção sem demo falsa', () => {
    const emConstrucao = projects.filter((project) => project.kind === 'building');

    expect(emConstrucao).toHaveLength(1);
    expect(emConstrucao[0].shortTitle).toBe('ManutFlow');
    expect(emConstrucao[0]).not.toHaveProperty('demoUrl');
    expect(emConstrucao[0]).not.toHaveProperty('imageUrl');
  });

  it('deve manter os projetos secundários compactos e identificados', () => {
    const secundarios = projects.filter((project) => project.kind === 'secondary');

    expect(secundarios.map((project) => project.shortTitle)).toEqual([
      'DevLinks',
      'Lista de Mercado',
      'Crypto Dashboard',
    ]);
    secundarios.forEach((project) => {
      expect(project.imageUrl).toBeTruthy();
      expect(project.tags.length).toBeGreaterThan(0);
    });
  });

  it('todos os projetos devem ter título, GitHub e classificação', () => {
    projects.forEach((projeto) => {
      expect(projeto.title).toBeTruthy();
      expect(projeto.githubUrl).toBeTruthy();
      expect(['featured', 'building', 'secondary']).toContain(projeto.kind);
    });
  });
});

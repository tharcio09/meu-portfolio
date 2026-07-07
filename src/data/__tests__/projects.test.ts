import { describe, it, expect } from 'vitest';
import { projects } from '../projects';

describe('projects', () => {
  it('deve ter pelo menos um projeto', () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  it('deve ter exatamente dois projetos em destaque (HelpFlow e ManutFlow)', () => {
    const destaques = projects.filter((project) => project.kind === 'featured');
    expect(destaques).toHaveLength(2);
    expect(destaques[0].shortTitle).toBe('HelpFlow');
    expect(destaques[1].shortTitle).toBe('ManutFlow');
  });

  it('ManutFlow deve ser featured com demoUrl e imageUrl', () => {
    const manutflow = projects.find((p) => p.shortTitle === 'ManutFlow');

    expect(manutflow).toBeTruthy();
    expect(manutflow!.kind).toBe('featured');
    expect(manutflow).toHaveProperty('demoUrl');
    expect(manutflow).toHaveProperty('imageUrl');
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
      expect(['featured', 'secondary']).toContain(projeto.kind);
    });
  });
});

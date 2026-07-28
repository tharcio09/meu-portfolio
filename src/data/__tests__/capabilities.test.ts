import { describe, expect, it } from 'vitest';
import { capabilities } from '../capabilities';

describe('capabilities', () => {
  it('apresenta apenas competências comprovadas em projetos', () => {
    const projectNames = [
      'HelpFlow',
      'ManutFlow',
      'Crypto Dashboard',
      'DevLinks',
      'Lista de Mercado',
    ];

    capabilities.forEach((capability) => {
      expect(capability.usedIn.length).toBeGreaterThan(0);
      capability.usedIn.forEach((project) => {
        expect(projectNames).toContain(project);
      });
    });
  });

  it('não mantém uma categoria genérica de tecnologias em evolução', () => {
    expect(capabilities.some((capability) => capability.title === 'Em evolução')).toBe(false);
  });

  it('mantém títulos, descrições e tecnologias preenchidos', () => {
    capabilities.forEach((capability) => {
      expect(capability.title).toBeTruthy();
      expect(capability.description).toBeTruthy();
      expect(capability.technologies.length).toBeGreaterThan(0);
    });
  });

  it('inclui Git e GitHub nas tecnologias', () => {
    const versionamento = capabilities.find((c) => c.title === 'Versionamento e ferramentas');
    expect(versionamento).toBeTruthy();
    expect(versionamento!.technologies).toContain('Git');
    expect(versionamento!.technologies).toContain('GitHub');
  });
});

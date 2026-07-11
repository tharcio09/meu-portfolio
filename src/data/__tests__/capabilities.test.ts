import { describe, expect, it } from 'vitest';
import { capabilities } from '../capabilities';

describe('capabilities', () => {
  it('apresenta apenas competências comprovadas em projetos', () => {
    capabilities.forEach((capability) => {
      expect(capability.usedIn.length).toBeGreaterThan(0);
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
});

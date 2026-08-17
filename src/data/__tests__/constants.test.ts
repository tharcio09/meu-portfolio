import { describe, it, expect } from 'vitest';
import { navLinks, SECTION_IDS } from '../constants';

describe('constants', () => {
  it('navLinks contém link para sobre', () => {
    const sobre = navLinks.find((l) => l.href === '#sobre-mim');
    expect(sobre).toBeTruthy();
    expect(sobre!.label).toBe('Sobre');
  });

  it('SECTION_IDS contém sobre-mim', () => {
    expect(SECTION_IDS).toContain('sobre-mim');
  });

  it('todos os hrefs de navLinks estão sincronizados com SECTION_IDS', () => {
    navLinks.forEach((link) => {
      const id = link.href.replace('#', '');
      expect(SECTION_IDS).toContain(id);
    });
  });

  it('Contato permanece como CTA', () => {
    const contato = navLinks.find((l) => l.href === '#contato');
    expect(contato?.cta).toBe(true);
  });
});

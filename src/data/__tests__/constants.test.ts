import { describe, it, expect } from 'vitest';
import { navLinks, SECTION_IDS } from '../constants';

describe('constants', () => {
  it('navLinks contém link para experiência', () => {
    const experiencia = navLinks.find((l) => l.href === '#experiencia');
    expect(experiencia).toBeTruthy();
    expect(experiencia!.label).toBe('Experiência');
  });

  it('SECTION_IDS contém experiencia', () => {
    expect(SECTION_IDS).toContain('experiencia');
  });

  it('href de experiência está sincronizado com SECTION_IDS', () => {
    const experienciaLink = navLinks.find((l) => l.label === 'Experiência');
    expect(experienciaLink).toBeTruthy();
    expect(SECTION_IDS).toContain(experienciaLink!.href.replace('#', ''));
  });

  it('Contato permanece como CTA', () => {
    const contato = navLinks.find((l) => l.href === '#contato');
    expect(contato?.cta).toBe(true);
  });
});

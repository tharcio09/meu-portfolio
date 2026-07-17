import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { NavbarClient } from '../NavbarClient';

const { useActiveSectionMock } = vi.hoisted(() => ({
  useActiveSectionMock: vi.fn(),
}));

vi.mock('@/app/hooks/useActiveSection', () => ({
  useActiveSection: useActiveSectionMock,
}));

describe('NavbarClient', () => {
  beforeEach(() => {
    useActiveSectionMock.mockReset();
  });

  it('indica o link da seção ativa como localização atual', () => {
    useActiveSectionMock.mockReturnValue('processo');

    render(<NavbarClient />);

    expect(screen.getByRole('link', { name: 'Processo' })).toHaveAttribute(
      'aria-current',
      'location'
    );
    expect(screen.getByRole('link', { name: 'Projetos' })).not.toHaveAttribute('aria-current');
  });

  it('aplica a mesma semântica ao CTA de contato quando ativo', () => {
    useActiveSectionMock.mockReturnValue('contato');

    render(<NavbarClient />);

    expect(screen.getByRole('link', { name: 'Contato' })).toHaveAttribute(
      'aria-current',
      'location'
    );
  });
});

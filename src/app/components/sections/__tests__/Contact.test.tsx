import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Contact from '../Contact';

beforeEach(() => {
  Object.defineProperty(navigator, 'clipboard', {
    value: { writeText: vi.fn().mockResolvedValue(undefined) },
    configurable: true,
    writable: true,
  });
});

describe('Contact', () => {
  it('deve renderizar o botão de copiar email', () => {
    render(<Contact />);
    expect(screen.getByRole('button', { name: /copiar email/i })).toBeInTheDocument();
  });

  it('deve mostrar o texto "Copiar" antes de clicar', () => {
    render(<Contact />);
    expect(screen.getByText('Copiar')).toBeInTheDocument();
  });

  // Testa o que o USUÁRIO vê, não a implementação interna
  it('deve mostrar "Copiado" após clicar no botão', async () => {
    const user = userEvent.setup();
    render(<Contact />);
    await user.click(screen.getByRole('button', { name: /copiar email/i }));
    // findByText espera o estado atualizar (assíncrono)
    expect(await screen.findByText('Copiado')).toBeInTheDocument();
  });
});

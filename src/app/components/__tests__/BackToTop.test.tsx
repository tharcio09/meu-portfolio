import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import BackToTop from '../BackToTop';

describe('BackToTop', () => {
  it('renderiza e responde ao scroll e ao clique para voltar ao topo', () => {
    const scrollToMock = vi.fn();
    window.scrollTo = scrollToMock;

    render(<BackToTop />);

    const button = screen.getByRole('button', { name: /Voltar ao topo/i });
    expect(button).toBeInTheDocument();

    // Simula scroll além de 400px
    Object.defineProperty(window, 'scrollY', { value: 500, writable: true });
    fireEvent.scroll(window);

    expect(button).toHaveClass('opacity-100');

    // Clica para voltar ao topo
    fireEvent.click(button);
    expect(scrollToMock).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });
});

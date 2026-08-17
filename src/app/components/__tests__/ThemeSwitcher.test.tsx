import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ThemeSwitcher } from '../ThemeSwitcher';

const setThemeMock = vi.fn();
let currentTheme = 'light';

vi.mock('next-themes', () => ({
  useTheme: () => ({
    resolvedTheme: currentTheme,
    setTheme: setThemeMock,
  }),
}));

describe('ThemeSwitcher', () => {
  it('renderiza o botão e permite alternar entre temas claro e escuro', () => {
    const { rerender } = render(<ThemeSwitcher />);

    const button = screen.getByRole('button', { name: /Alternar tema/i });
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(setThemeMock).toHaveBeenCalledWith('dark');

    currentTheme = 'dark';
    rerender(<ThemeSwitcher />);

    fireEvent.click(button);
    expect(setThemeMock).toHaveBeenCalledWith('light');
  });
});

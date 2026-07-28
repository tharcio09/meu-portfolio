import { act, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { MobileNav } from '../MobileNav';
import { navLinks, type NavLink } from '@/data/constants';

const links: NavLink[] = [
  { href: '#projetos', label: 'Projetos' },
  { href: '#processo', label: 'Processo' },
  { href: '#contato', label: 'Contato', cta: true },
];

const openMenu = () => {
  const trigger = screen.getByRole('button', { name: 'Abrir menu' });
  fireEvent.click(trigger);
  return screen.getByRole('button', { name: 'Fechar menu' });
};

describe('MobileNav', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.spyOn(window, 'requestAnimationFrame').mockImplementation((callback) => {
      callback(0);
      return 1;
    });
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
    vi.restoreAllMocks();
    document.body.style.overflow = '';
  });

  it('abre o menu e atualiza o estado expandido', () => {
    render(<MobileNav links={links} />);

    const trigger = openMenu();

    expect(trigger).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('dialog', { name: 'Menu de navegação' })).toBeInTheDocument();
  });

  it('move o foco para o primeiro link ao abrir', () => {
    render(<MobileNav links={links} />);

    openMenu();

    expect(screen.getByRole('link', { name: 'Projetos' })).toHaveFocus();
  });

  it('exibe Experiência a partir da fonte centralizada de navegação', () => {
    render(<MobileNav links={navLinks} />);

    openMenu();

    expect(screen.getByRole('link', { name: 'Experiência' })).toHaveAttribute(
      'href',
      '#experiencia'
    );
  });

  it('fecha com Escape e restaura o foco no botão', () => {
    render(<MobileNav links={links} />);

    const trigger = openMenu();
    fireEvent.keyDown(document, { key: 'Escape' });

    act(() => vi.advanceTimersByTime(200));

    expect(screen.queryByRole('dialog', { name: 'Menu de navegação' })).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });

  it('mantém o foco dentro do menu com Tab e Shift+Tab', () => {
    render(<MobileNav links={links} />);

    openMenu();
    const firstLink = screen.getByRole('link', { name: 'Projetos' });
    const lastLink = screen.getByRole('link', { name: 'Contato' });

    lastLink.focus();
    fireEvent.keyDown(document, { key: 'Tab' });
    expect(firstLink).toHaveFocus();

    fireEvent.keyDown(document, { key: 'Tab', shiftKey: true });
    expect(lastLink).toHaveFocus();
  });

  it('fecha ao selecionar um link', () => {
    render(<MobileNav links={links} />);

    openMenu();
    fireEvent.click(screen.getByRole('link', { name: 'Projetos' }));

    act(() => vi.advanceTimersByTime(200));

    expect(screen.queryByRole('dialog', { name: 'Menu de navegação' })).not.toBeInTheDocument();
  });

  it('bloqueia e restaura o scroll do body', () => {
    document.body.style.overflow = 'auto';
    const { unmount } = render(<MobileNav links={links} />);

    expect(document.body.style.overflow).toBe('auto');

    openMenu();
    expect(document.body.style.overflow).toBe('hidden');

    unmount();
    expect(document.body.style.overflow).toBe('auto');
  });

  it('indica a seção ativa com aria-current', () => {
    render(<MobileNav links={links} activeSection="processo" />);

    openMenu();

    expect(screen.getByRole('link', { name: 'Processo' })).toHaveAttribute(
      'aria-current',
      'location'
    );
  });
});

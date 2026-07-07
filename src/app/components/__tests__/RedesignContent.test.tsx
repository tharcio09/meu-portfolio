import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Footer from '../Footer';
import Hero from '../sections/Hero';
import Projects from '../sections/Projects';
import { navLinks } from '@/data/constants';

describe('conteúdo principal do redesign', () => {
  it('mantém a navbar na ordem editorial definida', () => {
    expect(navLinks.map(({ label, href }) => ({ label, href }))).toEqual([
      { label: 'Projetos', href: '#projetos' },
      { label: 'Processo', href: '#processo' },
      { label: 'Habilidades', href: '#habilidades' },
      { label: 'Sobre', href: '#sobre-mim' },
      { label: 'Contato', href: '#contato' },
    ]);
  });

  it('renderiza a nova copy e os acessos principais do Hero', () => {
    render(<Hero />);

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Desenvolvo aplicações web full stack com autenticação, APIs e deploy.',
      })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Explorar projetos/i })).toHaveAttribute(
      'href',
      '#projetos'
    );
    expect(screen.getByRole('link', { name: /Baixar currículo/i })).toHaveAttribute(
      'href',
      '/curriculo-tharcio-santos.pdf'
    );
  });

  it('mantém HelpFlow e ManutFlow como destaques e três projetos secundários', () => {
    render(<Projects />);

    expect(screen.getByText('Case principal · 01')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: 'HelpFlow' })).toBeInTheDocument();
    expect(screen.getByText('Case secundário · 02')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: 'ManutFlow' })).toBeInTheDocument();

    const secondaryHeadings = screen.getAllByRole('heading', { level: 4 });
    expect(secondaryHeadings.map((heading) => heading.textContent)).toEqual([
      'DevLinks',
      'Lista de Mercado',
      'Crypto Dashboard',
    ]);
  });

  it('renderiza o Footer editorial e preserva os links profissionais', () => {
    render(<Footer />);

    expect(
      screen.getByText('Tharcio Santos — Desenvolvedor Full Stack Júnior')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Projetos reais, aprendizado contínuo e construção de sistemas web.')
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'GitHub de Tharcio Santos' })).toHaveAttribute(
      'href',
      'https://github.com/tharciosantos'
    );
    expect(screen.getByRole('link', { name: 'LinkedIn de Tharcio Santos' })).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/tharcio-santos-dev/'
    );
  });
});

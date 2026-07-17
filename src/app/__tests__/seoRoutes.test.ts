import { describe, expect, it } from 'vitest';
import robots from '../robots';
import sitemap from '../sitemap';

describe('rotas de SEO', () => {
  it('gera o sitemap com a URL pública do portfólio', () => {
    expect(sitemap()).toEqual([
      {
        url: 'https://tharcio-portfolio.vercel.app/',
      },
    ]);
  });

  it('permite o rastreamento e referencia o sitemap absoluto', () => {
    expect(robots()).toEqual({
      rules: {
        userAgent: '*',
        allow: '/',
      },
      sitemap: 'https://tharcio-portfolio.vercel.app/sitemap.xml',
    });
  });
});

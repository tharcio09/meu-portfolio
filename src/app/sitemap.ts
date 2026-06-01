import type { MetadataRoute } from 'next';

const siteUrl = 'https://tharcio-portfolio.vercel.app';
const lastPortfolioUpdate = '2026-05-28';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: lastPortfolioUpdate,
    },
  ];
}

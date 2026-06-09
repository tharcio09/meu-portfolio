import type { MetadataRoute } from 'next';

const siteUrl = 'https://tharcio-portfolio.vercel.app';
const lastModified = new Date('2026-06-09');

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified,
    },
  ];
}

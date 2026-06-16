import type { MetadataRoute } from 'next';

const siteUrl = 'https://tharcio-portfolio.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
    },
  ];
}

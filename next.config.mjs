import bundleAnalyzer from '@next/bundle-analyzer';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const webpack = require('next/dist/compiled/webpack/webpack-lib.js');

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true,
  },

  compiler: {
    removeConsole: isProd ? { exclude: ['error'] } : false,
  },

  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 78, 82],
  },

  poweredByHeader: false,
  compress: true,

  devIndicators: false,

  webpack: (config, { dev }) => {
    if (!dev) {
      config.plugins.push(
        new webpack.IgnorePlugin({
          resourceRegExp: /next-devtools/,
        })
      );
    }
    return config;
  },
};

export default withBundleAnalyzer(nextConfig);

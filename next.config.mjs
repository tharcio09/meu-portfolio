import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true,
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [78, 82],
  },

  poweredByHeader: false,
  compress: true,

  // Evita que o bundle do Dev Overlay (820 KB) vaze para produção
  devIndicators: false,
};

export default withBundleAnalyzer(nextConfig);

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    globals: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json-summary'],
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        'src/app/layout.tsx',
        'src/app/page.tsx',
        'src/app/error.tsx',
        'src/app/not-found.tsx',
        'src/app/opengraph-image.tsx',
        'src/app/robots.ts',
        'src/app/sitemap.ts',
        'src/app/components/ClientAnalytics.tsx',
        'src/app/components/ThemeProvider.tsx',
      ],
      thresholds: {
        statements: 80,
        branches: 75,
        functions: 75,
        lines: 80,
      },
    },
  },
});

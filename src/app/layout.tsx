import { Inter, Outfit } from 'next/font/google';
import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import { ThemeProvider } from './components/ThemeProvider';

const siteUrl = 'https://tharcio-portfolio.vercel.app';
const siteName = 'Tharcio.dev';
const siteTitle = 'Tharcio Santos | Desenvolvedor Full Stack';
const siteDescription =
  'Portfólio de Tharcio Santos, desenvolvedor full stack com projetos React, Next.js e Node.js em produção. Aplicações com autenticação, banco de dados, APIs e deploy ativo.';
const githubUrl = 'https://github.com/tharciosantos';
const linkedinUrl = 'https://www.linkedin.com/in/tharcio-santos-dev/';

const personJsonLd = {
  '@type': 'Person',
  '@id': `${siteUrl}/#person`,
  name: 'Tharcio Santos',
  url: siteUrl,
  jobTitle: 'Desenvolvedor Full Stack Júnior',
  description:
    'Desenvolvedor Full Stack Júnior com projetos React, Next.js e Node.js em produção. Aplicações com autenticação, banco de dados, APIs e deploy ativo.',
  image: `${siteUrl}/images/profile.png`,
  sameAs: [githubUrl, linkedinUrl],
  knowsAbout: [
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Prisma',
    'Supabase',
    'Tailwind CSS',
    'PostgreSQL',
  ],
};

const websiteJsonLd = {
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  url: siteUrl,
  name: 'Portfólio de Tharcio Santos',
  author: { '@id': `${siteUrl}/#person` },
};

const profilePageJsonLd = {
  '@type': 'ProfilePage',
  '@id': `${siteUrl}/#profilepage`,
  url: siteUrl,
  name: 'Tharcio Santos | Desenvolvedor Full Stack',
  mainEntity: { '@id': `${siteUrl}/#person` },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [personJsonLd, websiteJsonLd, profilePageJsonLd],
};

// ─── FONTES ─────────────────────────────────────────────────────────────────

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    'Tharcio Santos',
    'Desenvolvedor Full Stack',
    'Desenvolvedor Web',
    'Desenvolvedor Júnior',
    'Estágio Desenvolvimento Web',
    'Portfolio Desenvolvedor',
    'React',
    'Next.js',
    'Node.js',
    'JavaScript',
    'TypeScript',
    'Tailwind CSS',
    'Prisma',
    'Supabase',
  ],
  authors: [{ name: 'Tharcio Santos', url: githubUrl }],
  creator: 'Tharcio Santos',
  publisher: 'Tharcio Santos',
  category: 'portfolio',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Portfólio de Tharcio Santos, desenvolvedor full stack',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  verification: {
    google: 'e4de6438b9a53e05',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/manifest.json',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f0f4ff' },
    { media: '(prefers-color-scheme: dark)', color: '#0d1117' },
  ],
  colorScheme: 'light dark',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} min-h-screen bg-light-bg font-sans text-primary-text antialiased dark:bg-dark-bg dark:text-light-text`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <a href="#conteudo-principal" className="skip-link">
            Pular para o conteúdo
          </a>
          <div className="relative z-10 flex min-h-screen flex-col">
            <Navbar />
            <main id="conteudo-principal" className="container mx-auto max-w-7xl flex-1">
              {children}
            </main>
            <Footer />
            <BackToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

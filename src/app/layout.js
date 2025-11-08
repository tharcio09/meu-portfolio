import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from './components/ThemeProvider';
import { Analytics } from "@vercel/analytics/next";

import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tharcio Santos | Desenvolvedor Full-Stack",
  description: "Portfólio profissional de Tharcio Santos, um desenvolvedor web Full-Stack especializado em React, Next.js, Node.js e Tailwind CSS.",
  keywords: [
    "Tharcio Santos",
    "Desenvolvedor Full-Stack",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "Prisma",
    "Supabase",
    "Desenvolvedor Web",
    "Portfólio",
    "Freelancer",
  ],
  authors: [{ name: "Tharcio Santos", url: "https://github.com/tharcio09" }],
  creator: "Tharcio Santos",
  publisher: "Vercel",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  // Open Graph
  openGraph: {
    title: "Tharcio Santos | Desenvolvedor Full-Stack",
    description: "Portfólio profissional de Tharcio Santos, um desenvolvedor web Full-Stack especializado em React, Next.js, Node.js e Tailwind CSS.",
    url: "https://tharcioport.vercel.app/",
    siteName: "Tharcio.dev",
    images: [
      {
        url: "https://tharcioport.vercel.app/screenshot-portfolio.PNG",
        width: 1200,
        height: 630,
        alt: "Tharcio Santos - Desenvolvedor Full-Stack",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Tharcio Santos | Desenvolvedor Full-Stack",
    description: "Portfólio profissional de Tharcio Santos, um desenvolvedor web Full-Stack especializado em React, Next.js, Node.js e Tailwind CSS.",
    creator: "@tharcio_santos",
    images: ["https://tharcioport.vercel.app/screenshot-portfolio.PNG"],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Manifest
  manifest: '/manifest.json',

  // Icons
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/icons/icon-192x192.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/icons/icon-192x192.png',
    },
  },

  // Canonical URL
  alternates: {
    canonical: 'https://tharcioport.vercel.app/',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Toaster position="top-center" reverseOrder={false} />
          <div className="relative z-10">
            <Navbar />
            <main className="container mx-auto max-w-7xl">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
        
        <Analytics />
      </body>
    </html>
  );
}
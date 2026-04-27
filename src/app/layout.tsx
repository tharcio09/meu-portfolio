import { Inter, Outfit } from "next/font/google";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import { ThemeProvider } from "./components/ThemeProvider";

const siteUrl = "https://tharcio-portfolio.vercel.app";
const siteName = "Tharcio.dev";
const siteTitle = "Tharcio Santos | Desenvolvedor Fullstack";
const siteDescription =
  "Portfólio de Tharcio Santos, desenvolvedor fullstack em formação com projetos React, Next.js e Node.js em produção. Aplicações com autenticação, banco de dados, APIs e deploy ativo.";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
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
    "Tharcio Santos",
    "Desenvolvedor Fullstack",
    "Desenvolvedor Web",
    "Desenvolvedor Júnior",
    "Estágio Desenvolvimento Web",
    "Portfolio Desenvolvedor",
    "React",
    "Next.js",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "Prisma",
    "Supabase",
  ],
  authors: [{ name: "Tharcio Santos", url: "https://github.com/tharcio09" }],
  creator: "Tharcio Santos",
  publisher: "Tharcio Santos",
  category: "portfolio",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Portfólio de Tharcio Santos, desenvolvedor fullstack",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/icons/icon-192x192.png",
  },
  manifest: "/manifest.json",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} min-h-screen bg-light-bg font-sans text-primary-text antialiased dark:bg-dark-bg dark:text-light-text`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative z-10 flex min-h-screen flex-col">
            <Navbar />
            <main className="container mx-auto max-w-7xl flex-1">{children}</main>
            <Footer />
            <BackToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

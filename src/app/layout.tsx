import { Inter, Outfit } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import { ThemeProvider } from "./components/ThemeProvider";

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
  title: "Tharcio Santos | Fullstack Developer",
  description:
    "Portfólio de Tharcio Santos, desenvolvedor Fullstack com aplicações React, Next.js e Node.js em produção. Sistemas com autenticação, banco de dados relacional e deploy ativo.",
  keywords: [
    "Tharcio Santos",
    "Fullstack Developer",
    "Desenvolvedor Fullstack",
    "Estágio Desenvolvimento Web",
    "React",
    "Next.js",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "Prisma",
    "Supabase",
    "Portfólio",
  ],
  authors: [{ name: "Tharcio Santos", url: "https://github.com/tharcio09" }],
  creator: "Tharcio Santos",
  publisher: "Vercel",
  openGraph: {
    title: "Tharcio Santos | Fullstack Developer",
    description:
      "Desenvolvedor Fullstack com projetos React, Next.js e Node.js em produção — autenticação, banco de dados relacional e deploy ativo no Vercel.",
    url: "https://tharcio-portfolio.vercel.app/",
    siteName: "Tharcio.dev",
    images: [
      {
        url: "https://tharcio-portfolio.vercel.app/screenshot-portfolio.PNG",
        width: 1200,
        height: 630,
        alt: "Tharcio Santos - Desenvolvimento Web",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tharcio Santos | Fullstack Developer",
    description:
      "Desenvolvedor Fullstack com projetos React, Next.js e Node.js em produção.",
    images: ["https://tharcio-portfolio.vercel.app/screenshot-portfolio.PNG"],
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/icons/icon-192x192.png",
  },
  alternates: {
    canonical: "https://tharcio-portfolio.vercel.app/",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} font-sans bg-light-bg text-primary-text`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="relative z-10">
            <Navbar />
            <main className="container mx-auto max-w-7xl">{children}</main>
            <Footer />
            <BackToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";

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


export const metadata = {
  title: "Tharcio Santos | Desenvolvimento Web",
  description:
    "Portfólio de Tharcio Santos, estudante de Análise e Desenvolvimento de Sistemas, focado em desenvolvimento web com React, Next.js e noções de backend com Node.js.",
  keywords: [
    "Tharcio Santos",
    "Desenvolvimento Web",
    "Desenvolvedor Web",
    "Estágio em Desenvolvimento",
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
    title: "Tharcio Santos | Desenvolvimento Web",
    description:
      "Portfólio de Tharcio Santos, estudante de ADS focado em desenvolvimento web, com projetos em React, Next.js e aprendizado contínuo em backend.",
    url: "https://tharcioport.vercel.app/",
    siteName: "Tharcio.dev",
    images: [
      {
        url: "https://tharcioport.vercel.app/screenshot-portfolio.PNG",
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
    title: "Tharcio Santos | Desenvolvimento Web",
    description:
      "Portfólio de Tharcio Santos, estudante de ADS focado em desenvolvimento web com React e Next.js.",
    images: ["https://tharcioport.vercel.app/screenshot-portfolio.PNG"],
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/icons/icon-192x192.png",
  },
  alternates: {
    canonical: "https://tharcioport.vercel.app/",
  },
};


export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} font-sans bg-light-bg text-primary-text`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="relative z-10">
            <Navbar />
            <main className="container mx-auto max-w-7xl">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

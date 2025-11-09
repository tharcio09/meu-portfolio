import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "Arial"],
});


export const metadata = {
  title: "Tharcio Santos | Desenvolvedor Full-Stack",
  description:
    "Portfólio profissional de Tharcio Santos, um desenvolvedor web Full-Stack especializado em React, Next.js, Node.js e Tailwind CSS.",
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
  openGraph: {
    title: "Tharcio Santos | Desenvolvedor Full-Stack",
    description:
      "Portfólio profissional de Tharcio Santos, um desenvolvedor web Full-Stack especializado em React, Next.js, Node.js e Tailwind CSS.",
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
  twitter: {
    card: "summary_large_image",
    title: "Tharcio Santos | Desenvolvedor Full-Stack",
    description:
      "Portfólio profissional de Tharcio Santos, um desenvolvedor web Full-Stack especializado em React, Next.js, Node.js e Tailwind CSS.",
    creator: "@tharcio_santos",
    images: ["https://tharcioport.vercel.app/screenshot-portfolio.PNG"],
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/icons/icon-192x192.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/icons/icon-192x192.png",
    },
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
      <body className={`${inter.className} bg-light-bg text-primary-text`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Toaster position="top-center" reverseOrder={false} />
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



import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from './components/ThemeProvider';

const inter = Inter({ subsets: ["latin"] });

// Configuração de SEO
export const metadata = {
  title: "Tharcio Santos | Desenvolvedor Full-Stack",
  description: "Portfólio profissional de Tharcio Santos, um desenvolvedor web iniciante em React, Next.js e Node.js.",
  manifest: '/manifest.json',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
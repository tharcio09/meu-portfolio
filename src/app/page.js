// app/page.js

'use client';

import dynamic from 'next/dynamic';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Experience from './components/sections/Experience';

// Lazy load do ParticlesBackground para melhorar performance
const ParticlesBackground = dynamic(
  () => import('./components/ParticlesBackground'),
  { 
    ssr: false,
    loading: () => null
  }
);

export default function Home() {
  return (
    <>
      <ParticlesBackground />
      <div className="flex flex-col">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
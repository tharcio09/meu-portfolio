'use client';

import dynamic from 'next/dynamic';

const ParticlesBackground = dynamic(
  () => import('./components/ParticlesBackground'),
  { 
    ssr: false,
    loading: () => null
  }
);

import Hero from './components/sections/Hero';
import About from './components/sections/About';

const Experience = dynamic(() => import('./components/sections/Experience'), { 
  loading: () => null 
});

const Projects = dynamic(() => import('./components/sections/Projects'), { 
  loading: () => null 
});

const Contact = dynamic(() => import('./components/sections/Contact'), { 
  loading: () => null 
});

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

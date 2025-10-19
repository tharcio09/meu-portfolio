// app/page.js

// Usando caminhos relativos a partir de 'app/'
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Experience from './components/sections/Experience';

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
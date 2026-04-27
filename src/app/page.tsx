import Hero from './components/sections/Hero';
import Capabilities from './components/sections/Capabilities';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import { Analytics } from '@vercel/analytics/next';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Capabilities />
      <Projects />
      <About />
      <Experience />
      <Contact />
      <Analytics/>
    </div>
  );
}

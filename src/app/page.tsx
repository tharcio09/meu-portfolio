import Hero from './components/sections/Hero';
import Capabilities from './components/sections/Capabilities';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import { ClientAnalytics } from './components/ClientAnalytics';
import ScrollReveal from './components/ui/ScrollReveal';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ScrollReveal>
        <Projects />
      </ScrollReveal>
      <ScrollReveal>
        <About />
      </ScrollReveal>
      <ScrollReveal>
        <Capabilities />
      </ScrollReveal>
      <ScrollReveal>
        <Experience />
      </ScrollReveal>
      <ScrollReveal>
        <Contact />
      </ScrollReveal>
      <ClientAnalytics />
    </div>
  );
}

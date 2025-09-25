import Personality from '@/components/Personality';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Projects from '../components/Projects';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Projects />
      <Personality />
      <Contact />
    </main>
  );
}

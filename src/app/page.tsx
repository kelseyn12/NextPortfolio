import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import HowIWork from '@/components/HowIWork';
import Personality from '@/components/Personality';
import Projects from '@/components/Projects';

export default function HomePage() {
  return (
    <main className="flex flex-col gap-[120px] md:gap-[160px]">
      <Hero />
      <Projects />
      <HowIWork />
      <Personality />
      <Contact />
    </main>
  );
}

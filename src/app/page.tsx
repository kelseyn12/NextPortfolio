import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import HowIWork from '@/components/HowIWork';
import LetsWorkTogether from '@/components/LetsWorkTogether';
import Personality from '@/components/Personality';
import Projects from '@/components/Projects';
import WhatIDo from '@/components/WhatIDo';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <WhatIDo />
      <Projects />
      <HowIWork />
      <LetsWorkTogether />
      <Personality />
      <Contact />
    </main>
  );
}

'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

/** Image moves slightly slower than text on scroll — subtle depth. */
const PARALLAX_FACTOR = 0.06;
const MAX_OFFSET_PX = 14;

export default function HeroImageParallax() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = typeof window !== 'undefined' ? window.scrollY : 0;
      const offset = Math.min(scrollY * PARALLAX_FACTOR, MAX_OFFSET_PX);
      setOffsetY(offset);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative flex justify-center">
      {/* Soft shadow glow behind image — warm rust tone for dimensionality */}
      <div
        className="absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 rounded-2xl blur-2xl md:blur-3xl"
        aria-hidden
        style={{
          width: '90%',
          height: '88%',
          background: 'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(184,92,56,0.22) 0%, rgba(184,92,56,0.08) 50%, transparent 75%)',
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 rounded-2xl blur-3xl md:blur-[40px]"
        aria-hidden
        style={{
          width: '75%',
          height: '72%',
          background: 'rgba(184,92,56,0.12)',
        }}
      />
      <div className="absolute top-1/2 -left-3 z-[1] hidden h-16 w-1 -translate-y-1/2 bg-teal/25 md:block" aria-hidden />
      <div className="absolute top-1/2 -left-8 z-[1] hidden h-20 w-1 -translate-y-1/2 bg-coral/20 md:block" aria-hidden />

      <div
        className="relative z-10 transition-transform duration-[180ms] ease-out [@media(prefers-reduced-motion:reduce)]:!translate-y-0"
        style={{ transform: `translateY(${offsetY}px)` }}
      >
        <Image
          src="/kelseyTwo.JPG"
          alt="Kelsey Nocek"
          width={420}
          height={520}
          priority
          className="animate-fade-in-scale w-full max-w-sm rounded-xl object-cover opacity-0 shadow-[0_8px_32px_rgba(184,92,56,0.15),0_2px_12px_rgba(0,0,0,0.08)] delay-600 md:max-w-md"
        />
      </div>
    </div>
  );
}

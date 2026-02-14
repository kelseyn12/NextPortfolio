'use client';

import { useEffect, useState } from 'react';

/** Very slow parallax: background lags behind scroll — calm, like floating. */
const PARALLAX_FACTOR = 0.08;
const MAX_OFFSET_PX = 18;
/** Overlay darkens slightly with scroll; capped so it stays subtle. */
const OVERLAY_SCROLL_RANGE_PX = 500;
const OVERLAY_MAX_OPACITY = 0.12;

export default function Hero() {
  const [parallax, setParallax] = useState({ offsetY: 0, overlayExtra: 0 });

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === 'undefined') {
        return;
      }
      const scrollY = window.scrollY;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        // eslint-disable-next-line react-hooks-extra/no-direct-set-state-in-use-effect -- scroll parallax
        setParallax({ offsetY: 0, overlayExtra: 0 });
        return;
      }
      const offsetY = Math.min(scrollY * PARALLAX_FACTOR, MAX_OFFSET_PX);
      const overlayExtra
        = Math.min(scrollY / OVERLAY_SCROLL_RANGE_PX, 1) * OVERLAY_MAX_OPACITY;
      // eslint-disable-next-line react-hooks-extra/no-direct-set-state-in-use-effect -- scroll parallax
      setParallax({ offsetY, overlayExtra });
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen min-w-full items-center justify-center overflow-hidden"
    >
      {/* Full-width edge-to-edge image — very slow parallax */}
      <div
        className="absolute inset-0 z-0 bg-neutral-900 transition-transform duration-150 ease-out [@media(prefers-reduced-motion:reduce)]:!translate-y-0"
        aria-hidden
        style={{
          backgroundImage: 'url(/hero-surf.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${parallax.offsetY}px)`,
        }}
      />
      {/* Soft dark-to-warm gradient overlay for readability */}
      <div
        className="absolute inset-0 z-[1] [@media(prefers-reduced-motion:reduce)]:!opacity-0"
        aria-hidden
        style={{
          background:
            'linear-gradient(to top, rgba(15,25,35,0.82) 0%, rgba(28,45,55,0.5) 35%, rgba(40,55,65,0.25) 65%, rgba(50,45,38,0.15) 100%)',
        }}
      />
      {/* Slight extra darkening on scroll — calm, subtle */}
      <div
        className="absolute inset-0 z-[1] bg-[#0f1923] transition-opacity duration-200 ease-out [@media(prefers-reduced-motion:reduce)]:opacity-0"
        aria-hidden
        style={{ opacity: parallax.overlayExtra }}
      />
      {/* Headline and copy directly over the image */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center">
        <h1 className="animate-fade-in-up mb-5 text-5xl leading-tight font-extrabold text-white opacity-0 drop-shadow-[0_2px_20px_rgba(0,0,0,0.4)] delay-200 md:mb-6 md:text-6xl lg:text-7xl xl:text-8xl">
          Hello, I&apos;m Kelsey!
        </h1>
        <p className="animate-fade-in-up mb-4 text-xl font-semibold tracking-wide text-white/95 opacity-0 delay-400 md:text-2xl">
          Digital Product Designer & Developer
        </p>
        <p className="animate-fade-in-up mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/90 opacity-0 delay-500 md:mb-12 md:text-xl">
          I design and build digital experiences for surf, bike, climbing and adventure communities.
        </p>
        <a
          href="#projects"
          className="breezy-hover animate-fade-in-up inline-block rounded-2xl border border-white/60 bg-white/10 px-8 py-3.5 font-semibold text-white opacity-0 backdrop-blur-sm delay-300 hover:border-white/80 hover:bg-white/20 hover:text-white md:px-10 md:py-4"
        >
          Start a project
        </a>
      </div>
    </section>
  );
}

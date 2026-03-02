'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';

/** Paths from public/. Landscape videos each get a full-width 16:9 row (captions visible). */
const LANDSCAPE_VIDEOS: { label: string; src: string }[] = [
  { label: 'Helly Hansen', src: '/video/HH.mp4' },
  { label: 'Film', src: '/video/Ifilmplaces.mp4' },
];
const PORTRAIT_VIDEOS: { label: string; src: string }[] = [
  { label: 'Keen', src: '/video/Keen.mp4' },
  { label: 'Wilderdog', src: '/video/Wilderdog.mp4' },
];

/** Portrait stills. Row 1, 2, 3 — paths under public/images. */
const IMAGE_ROW_1: { src: string; label: string }[] = [
  { src: '/images/RadFabJeans4.JPG', label: 'Rad Fab Denim' },
  { src: '/images/RadFabJeans2.JPG', label: 'Rad Fab Denim' },
];
const IMAGE_ROW_2: { src: string; label: string }[] = [
  { src: '/images/RadFabJeans3.JPG', label: 'Rad Fab Denim' },
  { src: '/images/Rompbag1.jpg', label: 'ROMP Bags' },
];
const IMAGE_ROW_3: { src: string; label: string }[] = [
  { src: '/images/RompBike.jpg', label: 'ROMP Bags' },
  { src: '/images/Rompbag2.jpg', label: 'ROMP Bags' },
];

function Lightbox({
  src,
  alt,
  onClose,
}: { src: string; alt: string; onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <button
      type="button"
      className="fixed inset-0 z-[100] flex cursor-default items-center justify-center bg-black/90 p-4 focus:outline-none"
      onClick={onClose}
      aria-label="Close lightbox"
    >
      {/* Lightbox uses img so full-res image loads on demand; thumbnails use next/image */}
      {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
      <img
        src={src}
        alt={alt}
        className="max-h-full max-w-full object-contain"
        onClick={e => e.stopPropagation()}
      />
    </button>
  );
}

type ShortFormContentProps = {
  title?: string;
  intro?: string;
  /** CTA link (e.g. "/#contact" on standalone page, "#contact" when on homepage). */
  ctaHref?: string;
  /** Use "h1" on standalone page for one top-level heading; "h2" when section of another page. */
  titleTag?: 'h1' | 'h2';
};

export default function ShortFormContent({
  title = 'Short-Form',
  intro = 'I create short-form content around movement, gear, and the places I\'m in.',
  ctaHref = '#contact',
  titleTag = 'h2',
}: ShortFormContentProps) {
  const HeadingTag = titleTag;
  const hellyHansen = LANDSCAPE_VIDEOS[0]!;
  const film = LANDSCAPE_VIDEOS[1]!;
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  return (
    <section id="short-form" className="relative px-4 py-16 md:px-8 md:py-20">
      {lightbox && (
        <Lightbox
          src={lightbox.src}
          alt={lightbox.alt}
          onClose={closeLightbox}
        />
      )}
      <div className="mx-auto max-w-[90rem]">
        <ScrollReveal className="text-center">
          <HeadingTag className="mb-6 text-[2.75rem] leading-tight font-bold text-navy md:mb-8 md:text-5xl lg:text-6xl">
            {title}
          </HeadingTag>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-steel md:mb-10">
            {intro}
          </p>
          <a
            href={ctaHref}
            className="breezy-hover inline-block rounded-2xl border-2 border-coral bg-transparent px-8 py-3.5 font-semibold text-navy hover:border-coral hover:bg-coral/10 hover:text-coral md:px-10 md:py-4"
          >
            Get in touch
          </a>
        </ScrollReveal>

        <div className="mx-auto mt-14 max-w-3xl space-y-8 md:mt-16 md:space-y-10">
          {/* 1. Helly Hansen (landscape) */}
          <ScrollReveal key={hellyHansen.label} className="flex flex-col">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-steel/15">
              <video
                src={hellyHansen.src}
                controls
                preload="metadata"
                playsInline
                className="h-full w-full object-contain"
              >
                <track kind="captions" />
              </video>
            </div>
            <p className="mt-3 text-sm font-medium text-navy md:mt-4">
              {hellyHansen.label}
            </p>
          </ScrollReveal>

          {/* 2. Portrait videos (Keen, Wilderdog) */}
          <ScrollReveal className="grid grid-cols-1 grid-rows-2 gap-5 md:grid-cols-2 md:grid-rows-1 md:gap-6">
            {PORTRAIT_VIDEOS.map(({ label, src }) => (
              <div key={label} className="flex flex-col">
                <div className="relative aspect-[9/16] w-full overflow-hidden rounded-lg bg-steel/15">
                  <video
                    src={src}
                    controls
                    preload="metadata"
                    playsInline
                    className="h-full w-full object-cover"
                  >
                    <track kind="captions" />
                  </video>
                </div>
                <p className="mt-3 text-sm font-medium text-navy md:mt-4">
                  {label}
                </p>
              </div>
            ))}
          </ScrollReveal>

          {/* 3. Film (landscape) */}
          <ScrollReveal key={film.label} className="flex flex-col">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-steel/15">
              <video
                src={film.src}
                controls
                preload="metadata"
                playsInline
                className="h-full w-full object-contain"
              >
                <track kind="captions" />
              </video>
            </div>
            <p className="mt-3 text-sm font-medium text-navy md:mt-4">
              {film.label}
            </p>
          </ScrollReveal>

          {/* 4. Portrait stills — Row 1: Rad Fab x2 */}
          <ScrollReveal className="grid grid-cols-1 grid-rows-2 gap-5 md:grid-cols-2 md:grid-rows-1 md:gap-6">
            {IMAGE_ROW_1.map(({ src, label }) => (
              <div key={src} className="flex flex-col">
                <button
                  type="button"
                  className="relative w-full aspect-[9/16] overflow-hidden rounded-lg bg-steel/15 text-left focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal"
                  onClick={() => setLightbox({ src, alt: label })}
                >
                  <Image
                    src={src}
                    alt={label}
                    fill
                    className="object-cover"
                    sizes="(min-width:768px) 50vw, 100vw"
                  />
                </button>
                <p className="mt-3 text-sm font-medium text-navy md:mt-4">
                  {label}
                </p>
              </div>
            ))}
          </ScrollReveal>

          {/* 5. Portrait stills — Row 2: RadFabJeans3 + Rompbag1 */}
          <ScrollReveal className="grid grid-cols-1 grid-rows-2 gap-5 md:grid-cols-2 md:grid-rows-1 md:gap-6">
            {IMAGE_ROW_2.map(({ src, label }) => (
              <div key={src} className="flex flex-col">
                <button
                  type="button"
                  className="relative w-full aspect-[9/16] overflow-hidden rounded-lg bg-steel/15 text-left focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal"
                  onClick={() => setLightbox({ src, alt: label })}
                >
                  <Image
                    src={src}
                    alt={label}
                    fill
                    className="object-cover"
                    sizes="(min-width:768px) 50vw, 100vw"
                  />
                </button>
                <p className="mt-3 text-sm font-medium text-navy md:mt-4">
                  {label}
                </p>
              </div>
            ))}
          </ScrollReveal>

          {/* 6. Portrait stills — Row 3: RompBike + Rompbag2 */}
          <ScrollReveal className="grid grid-cols-1 grid-rows-2 gap-5 md:grid-cols-2 md:grid-rows-1 md:gap-6">
            {IMAGE_ROW_3.map(({ src, label }) => (
              <div key={src} className="flex flex-col">
                <button
                  type="button"
                  className="relative w-full aspect-[9/16] overflow-hidden rounded-lg bg-steel/15 text-left focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal"
                  onClick={() => setLightbox({ src, alt: label })}
                >
                  <Image
                    src={src}
                    alt={label}
                    fill
                    className="object-cover"
                    sizes="(min-width:768px) 50vw, 100vw"
                  />
                </button>
                <p className="mt-3 text-sm font-medium text-navy md:mt-4">
                  {label}
                </p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

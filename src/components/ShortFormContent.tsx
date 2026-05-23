'use client';

import Image from 'next/image';
import { useCallback, useMemo, useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import {
  FilterSection,
  Lightbox,
  YoutubePortraitIframe,
} from '@/components/short-form/shortFormMedia';

type VideoCategory
  = | 'product-demo'
    | 'product-reviews'
    | 'testimonial'
    | 'broll-vo'
    | 'greenscreen'
    | 'skit'
    | 'story';

type FilterId = 'all' | VideoCategory | 'stills';

const CATEGORY_LABELS: Record<VideoCategory, string> = {
  'product-demo': 'Product Demo',
  'product-reviews': 'Product Reviews',
  'testimonial': 'Testimonial',
  'broll-vo': 'B-Roll + VO',
  'greenscreen': 'Greenscreen',
  'skit': 'Skit',
  'story': 'Story',
};

const FILTERS: { id: FilterId; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'product-demo', label: 'Product Demo' },
  { id: 'product-reviews', label: 'Product Reviews' },
  { id: 'testimonial', label: 'Testimonial' },
  { id: 'broll-vo', label: 'B-Roll + VO' },
  { id: 'greenscreen', label: 'Greenscreen' },
  { id: 'skit', label: 'Skit' },
  { id: 'story', label: 'Story' },
  { id: 'stills', label: 'Stills' },
];

type PortraitVideo = {
  label: string;
  category: VideoCategory;
  src?: string;
  youtubeId?: string;
};

type LandscapeVideo = {
  label: string;
  category: VideoCategory;
  src: string;
};

/** Display order when filter is All. */
const PORTRAIT_VIDEOS: PortraitVideo[] = [
  { label: 'Challenger', category: 'skit', src: '/video/Challenger%20Backpack-web.mp4' },
  { label: 'Lost Ranger', category: 'broll-vo', src: '/video/Lost%20Ranger-web.mp4' },
  { label: 'ROMP', category: 'story', src: '/video/Romp-v2-web.mp4' },
  { label: 'Splitwise', category: 'greenscreen', src: '/video/Splitwise-web.mp4' },
  { label: 'Chom Chom', category: 'product-demo', src: '/video/chomchom-web.mp4' },
  {
    label: 'Big Agnes · Larkspur Vest',
    category: 'testimonial',
    src: '/video/Big%20Agnes%20Larkspur%20Vest-web.mp4',
  },
  { label: 'Cub Cadet', category: 'product-demo', src: '/video/CubCadet-web.mp4' },
  { label: 'Wilderdog', category: 'testimonial', src: '/video/Wilderdog-web.mp4' },
  { label: 'Keen', category: 'testimonial', src: '/video/Keen-web.mp4' },
  { label: 'Toms', category: 'testimonial', src: '/video/Toms-web.mp4' },
  { label: 'DJI Mic Mini', category: 'product-reviews', youtubeId: '9KS4jHdY5vg' },
];

const LANDSCAPE_VIDEOS: LandscapeVideo[] = [
  { label: 'I film places', category: 'story', src: '/video/Ifilmplaces-web.mp4' },
];

const IMAGE_ROW_ALTRA: { src: string; label: string }[] = [
  { src: '/images/altra1.jpg', label: 'Altra' },
  { src: '/images/altra2.jpg', label: 'Altra' },
];
const IMAGE_ROW_ROMP: { src: string; label: string }[] = [
  { src: '/images/Rompbag1.jpg', label: 'ROMP Bags' },
  { src: '/images/Rompbag2.jpg', label: 'ROMP Bags' },
];
const IMAGE_ROW_RADFAB: { src: string; label: string }[] = [
  { src: '/images/RadFabJeans2.JPG', label: 'Rad Fab Denim' },
  { src: '/images/RadFabJeans3.JPG', label: 'Rad Fab Denim' },
];

function matchesFilter(category: VideoCategory, activeFilter: FilterId): boolean {
  return activeFilter === 'all' || activeFilter === category;
}

function PortraitVideoCard({
  video,
  showCategory,
}: {
  video: PortraitVideo;
  showCategory: boolean;
}) {
  const { label, category, src, youtubeId } = video;
  return (
    <div className="flex flex-col">
      <div className="relative aspect-[9/16] w-full overflow-hidden rounded-lg bg-steel/15">
        {youtubeId
          ? <YoutubePortraitIframe youtubeId={youtubeId} title={label} />
          : (
              <video
                src={src}
                controls
                preload="metadata"
                playsInline
                className="h-full w-full object-cover"
              >
                <track kind="captions" />
              </video>
            )}
      </div>
      <p className="mt-3 text-sm font-medium text-navy md:mt-4">
        {label}
      </p>
      {showCategory && (
        <p className="mt-1 text-xs text-steel">
          {CATEGORY_LABELS[category]}
        </p>
      )}
    </div>
  );
}

type ShortFormContentProps = {
  title?: string;
  intro?: string;
  ctaHref?: string;
  titleTag?: 'h1' | 'h2';
};

export default function ShortFormContent({
  title = 'Short-Form',
  intro = 'I create short-form content around movement, gear, and the places I\'m in.',
  ctaHref = '#contact',
  titleTag = 'h2',
}: ShortFormContentProps) {
  const HeadingTag = titleTag;
  const [activeFilter, setActiveFilter] = useState<FilterId>('all');
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  const visiblePortraits = useMemo(
    () => PORTRAIT_VIDEOS.filter(v => matchesFilter(v.category, activeFilter)),
    [activeFilter],
  );
  const visibleLandscape = useMemo(
    () => LANDSCAPE_VIDEOS.filter(v => matchesFilter(v.category, activeFilter)),
    [activeFilter],
  );
  const showVideos
    = activeFilter !== 'stills'
      && (visiblePortraits.length > 0 || visibleLandscape.length > 0);
  const showStills = activeFilter === 'all' || activeFilter === 'stills';
  const showCategoryOnCards = activeFilter === 'all';

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

          <div
            className="mt-8 flex flex-wrap items-center justify-center gap-3 md:mt-10 md:gap-4"
            role="group"
            aria-label="Filter content by category"
          >
            {FILTERS.map(({ id, label }) => {
              const selected = activeFilter === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setActiveFilter(id)}
                  aria-pressed={selected}
                  className={`rounded-2xl border-2 px-5 py-2.5 text-sm font-semibold transition-colors duration-200 md:px-6 md:py-3 ${
                    selected
                      ? 'border-coral bg-coral/10 text-coral'
                      : 'border-navy/20 bg-transparent text-navy hover:border-coral hover:bg-coral/5'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        <div className="mx-auto mt-14 max-w-3xl md:mt-16">
          <FilterSection visible={showVideos}>
            {visiblePortraits.length > 0 && (
              <ScrollReveal className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
                {visiblePortraits.map(video => (
                  <PortraitVideoCard
                    key={video.youtubeId ?? video.src ?? video.label}
                    video={video}
                    showCategory={showCategoryOnCards}
                  />
                ))}
              </ScrollReveal>
            )}

            {visibleLandscape.map((video, index) => (
              <ScrollReveal
                key={video.src}
                className={`flex flex-col ${visiblePortraits.length > 0 ? 'mt-8 md:mt-10' : ''}`}
                staggerIndex={visiblePortraits.length > 0 ? index + 1 : index}
              >
                <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-steel/15">
                  <video
                    src={video.src}
                    controls
                    preload="metadata"
                    playsInline
                    className="h-full w-full object-contain"
                  >
                    <track kind="captions" />
                  </video>
                </div>
                <p className="mt-3 text-sm font-medium text-navy md:mt-4">
                  {video.label}
                </p>
                {showCategoryOnCards && (
                  <p className="mt-1 text-xs text-steel">
                    {CATEGORY_LABELS[video.category]}
                  </p>
                )}
              </ScrollReveal>
            ))}
          </FilterSection>

          <FilterSection visible={showStills}>
            <ScrollReveal className="grid grid-cols-1 grid-rows-2 gap-5 md:grid-cols-2 md:grid-rows-1 md:gap-6">
              {IMAGE_ROW_ALTRA.map(({ src, label }) => (
                <div key={src} className="flex flex-col">
                  <button
                    type="button"
                    className="relative aspect-[9/16] w-full overflow-hidden rounded-lg bg-steel/15 text-left focus:ring-2 focus:ring-teal focus:ring-offset-2 focus:outline-none"
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

            <ScrollReveal className="mt-8 grid grid-cols-1 grid-rows-2 gap-5 md:mt-10 md:grid-cols-2 md:grid-rows-1 md:gap-6" staggerIndex={1}>
              {IMAGE_ROW_ROMP.map(({ src, label }) => (
                <div key={src} className="flex flex-col">
                  <button
                    type="button"
                    className="relative aspect-[9/16] w-full overflow-hidden rounded-lg bg-steel/15 text-left focus:ring-2 focus:ring-teal focus:ring-offset-2 focus:outline-none"
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

            <ScrollReveal className="mt-8 grid grid-cols-1 grid-rows-2 gap-5 md:mt-10 md:grid-cols-2 md:grid-rows-1 md:gap-6" staggerIndex={2}>
              {IMAGE_ROW_RADFAB.map(({ src, label }) => (
                <div key={src} className="flex flex-col">
                  <button
                    type="button"
                    className="relative aspect-[9/16] w-full overflow-hidden rounded-lg bg-steel/15 text-left focus:ring-2 focus:ring-teal focus:ring-offset-2 focus:outline-none"
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
          </FilterSection>
        </div>
      </div>
    </section>
  );
}

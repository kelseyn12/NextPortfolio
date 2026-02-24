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
  return (
    <section id="short-form" className="relative px-4 py-16 md:px-8 md:py-20">
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

        <div className="mx-auto max-w-3xl space-y-8 md:space-y-10">
          {LANDSCAPE_VIDEOS.map(({ label, src }) => (
            <ScrollReveal key={label} className="flex flex-col">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-steel/15">
                <video
                  src={src}
                  controls
                  preload="metadata"
                  playsInline
                  className="h-full w-full object-contain"
                >
                  <track kind="captions" />
                </video>
              </div>
              <p className="mt-3 text-sm font-medium text-navy md:mt-4">
                {label}
              </p>
            </ScrollReveal>
          ))}

          <ScrollReveal className="grid grid-cols-1 grid-rows-2 gap-5 md:grid-cols-2 md:gap-6">
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
        </div>
      </div>
    </section>
  );
}

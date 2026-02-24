import ScrollReveal from '@/components/ScrollReveal';

const INTRO
  = 'In addition to digital products, I also make short-form outdoor content — documenting the gear I use and the places I spend time in.';

/** Paths from public/. Landscape videos each get a full-width 16:9 row (captions visible). */
const LANDSCAPE_VIDEOS: { label: string; src: string }[] = [
  { label: 'Helly Hansen', src: '/video/HH.mp4' },
  { label: 'Film', src: '/video/Ifilmplaces.mp4' },
];
const PORTRAIT_VIDEOS: { label: string; src: string }[] = [
  { label: 'Keen', src: '/video/Keen.mp4' },
  { label: 'Wilderdog', src: '/video/Wilderdog.mp4' },
];

export default function ShortFormContent() {
  return (
    <section id="short-form" className="relative px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-[90rem]">
        <ScrollReveal className="text-center">
          <h2 className="mb-6 text-[2.75rem] leading-tight font-bold text-navy md:mb-8 md:text-5xl lg:text-6xl">
            Short-Form Concept Samples
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-steel md:mb-14">
            {INTRO}
          </p>
        </ScrollReveal>

        <div className="mx-auto max-w-3xl space-y-8 md:space-y-10">
          {/* Landscape: each gets full-width 16:9 row — captions stay visible, consistent look */}
          {LANDSCAPE_VIDEOS.map(({ label, src }) => (
            <ScrollReveal key={label} className="flex flex-col">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-steel/15">
                <video
                  src={src}
                  controls
                  className="h-full w-full object-contain"
                  playsInline
                >
                  <track kind="captions" />
                </video>
              </div>
              <p className="mt-3 text-sm font-medium text-navy md:mt-4">
                {label}
              </p>
            </ScrollReveal>
          ))}

          {/* Portrait: 2 in a row, same size and style */}
          <ScrollReveal className="grid grid-cols-2 gap-5 md:gap-6">
            {PORTRAIT_VIDEOS.map(({ label, src }) => (
              <div key={label} className="flex flex-col">
                <div className="relative aspect-[9/16] w-full overflow-hidden rounded-lg bg-steel/15">
                  <video
                    src={src}
                    controls
                    className="h-full w-full object-cover"
                    playsInline
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

        <ScrollReveal className="mt-12 text-center md:mt-14">
          <a
            href="#contact"
            className="breezy-hover inline-block rounded-2xl border-2 border-coral bg-transparent px-8 py-3.5 font-semibold text-navy hover:border-coral hover:bg-coral/10 hover:text-coral md:px-10 md:py-4"
          >
            Get in touch
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}

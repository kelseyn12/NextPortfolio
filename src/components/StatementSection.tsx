'use client';

import ScrollReveal from '@/components/ScrollReveal';

const STATEMENT_IMAGE = '/statement-hero.png';

const WAVE_VIEWBOX_WIDTH = 1200;
const WAVE_VIEWBOX_HEIGHT = 400; // single tall canvas — strokes only, no bands
const NUM_WAVE_LINES = 36; // many soft curves so it flows top to bottom, no straight lines

/** One horizontal wave stroke (no fill). Phase offsets so lines don’t align into bands. */
function buildWaveStroke(rowIndex: number) {
  const w = WAVE_VIEWBOX_WIDTH;
  const points = 32;
  const step = w / points;
  const phase = (rowIndex / NUM_WAVE_LINES) * Math.PI * 2;
  const amp = 12 + Math.sin(rowIndex * 0.7) * 4;
  const mid = (rowIndex / (NUM_WAVE_LINES - 1)) * WAVE_VIEWBOX_HEIGHT;
  return Array.from({ length: points + 1 }, (_, i) => {
    const x = i * step;
    const y = mid + Math.sin((i / points) * Math.PI * 2.2 + phase) * amp;
    return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
  }).join(' ');
}

export default function StatementSection() {
  const waveStrokes = Array.from({ length: NUM_WAVE_LINES }, (_, i) => buildWaveStroke(i));

  return (
    <section
      id="statement"
      aria-label="Statement"
      className="relative flex min-h-screen min-w-full flex-col items-center justify-center overflow-hidden px-6 py-24 md:py-32"
    >
      {/* Full-viewport background image with slow breath zoom */}
      <div
        className="animate-statement-breath absolute inset-0 z-0 bg-neutral-900 [@media(prefers-reduced-motion:reduce)]:animate-none"
        aria-hidden
        style={{
          backgroundImage: `url(${STATEMENT_IMAGE})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 72%',
        }}
      />
      {/* Dark gradient bottom → top: text feels grounded */}
      <div
        className="absolute inset-0 z-[1]"
        aria-hidden
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.25) 45%, rgba(0,0,0,0.12) 100%)',
        }}
      />

      {/* Wave layers: stroke-only curves, no bands — continuous flow top to bottom */}
      <div
        className="pointer-events-none absolute inset-0 z-[2] overflow-hidden [@media(prefers-reduced-motion:reduce)]:opacity-0"
        aria-hidden
      >
        {[
          { class: 'animate-statement-wave-a', opacity: 0.04 },
          { class: 'animate-statement-wave-b', opacity: 0.032 },
          { class: 'animate-statement-wave-c', opacity: 0.025 },
        ].map(({ class: animClass, opacity }) => (
          <div key={animClass} className="absolute inset-0 overflow-hidden">
            <div className={`h-full w-[200%] ${animClass}`} style={{ opacity }}>
              <svg
                width="100%"
                height="100%"
                viewBox={`0 0 ${WAVE_VIEWBOX_WIDTH * 2} ${WAVE_VIEWBOX_HEIGHT}`}
                preserveAspectRatio="none"
                className="h-full w-full"
              >
                <g fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="0.9" strokeLinecap="round">
                  {waveStrokes.map((pathD, i) => (
                    <g key={`wave-stroke-${i}`}>
                      <path d={pathD} />
                      <path d={pathD} transform={`translate(${WAVE_VIEWBOX_WIDTH}, 0)`} />
                    </g>
                  ))}
                </g>
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Text: slightly below center, more vertical padding */}
      <ScrollReveal className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-6 pt-[10vh] pb-[12vh] text-center">
        <p className="max-w-5xl text-5xl font-bold leading-[1.12] tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.35)] md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem]">
        Good design should feel like flow.
        </p>
      </ScrollReveal>
    </section>
  );
}

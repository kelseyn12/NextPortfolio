import ScrollReveal from '@/components/ScrollReveal';

const ACTIVITIES: { label: string; icon: 'music' | 'bike' | 'wave' | 'climb' }[] = [
  { label: 'Playing music', icon: 'music' },
  { label: 'Bike-Boppin about', icon: 'bike' },
  { label: 'Surfing', icon: 'wave' },
  { label: 'Climbing rocks', icon: 'climb' },
];

const ICON_CLASS = 'mb-5 size-7 text-steel';
const STROKE = 1.5;
const STROKE_STYLE = { stroke: 'currentColor', strokeWidth: STROKE, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, fill: 'none' };

/** Minimal music note (Lucide-style outline) */
function IconMusic() {
  return (
    <svg viewBox="0 0 24 24" className={ICON_CLASS} aria-hidden>
      <path d="M9 18V5l12-2v13" {...STROKE_STYLE} />
      <circle cx="6" cy="18" r="3" {...STROKE_STYLE} />
      <circle cx="18" cy="16" r="3" {...STROKE_STYLE} />
    </svg>
  );
}

/** Simple bicycle outline */
function IconBike() {
  return (
    <svg viewBox="0 0 24 24" className={ICON_CLASS} aria-hidden>
      <circle cx="5.5" cy="17.5" r="3.5" {...STROKE_STYLE} />
      <circle cx="18.5" cy="17.5" r="3.5" {...STROKE_STYLE} />
      <path d="M12 17.5V14l3-4 4 1.5" {...STROKE_STYLE} />
      <path d="M12 14H9l-3.5 3.5" {...STROKE_STYLE} />
      <path d="M15 10l-1.5-4h-4" {...STROKE_STYLE} />
    </svg>
  );
}

/** Simple wave outline */
function IconWave() {
  return (
    <svg viewBox="0 0 24 24" className={ICON_CLASS} aria-hidden>
      <path d="M2 12c2-2 4-2 6 0s4 2 6 0 4-2 6 0" {...STROKE_STYLE} />
      <path d="M2 16c2-2 4-2 6 0s4 2 6 0 4-2 6 0" {...STROKE_STYLE} />
    </svg>
  );
}

/** Minimal mountain outline (climbing rocks) */
function IconClimb() {
  return (
    <svg viewBox="0 0 24 24" className={ICON_CLASS} aria-hidden>
      <path d="M2 20l6-10 4 4 4-8 6 14" {...STROKE_STYLE} />
    </svg>
  );
}

function ActivityIcon({ type }: { type: 'music' | 'bike' | 'wave' | 'climb' }) {
  switch (type) {
    case 'music': return <IconMusic />;
    case 'bike': return <IconBike />;
    case 'wave': return <IconWave />;
    case 'climb': return <IconClimb />;
  }
}

export default function Personality() {
  return (
    <section id="personality" className="relative px-6 py-16 md:py-20">
      <ScrollReveal className="mx-auto max-w-6xl text-center">
        <h2 className="mb-14 text-[2.5rem] font-bold leading-tight text-navy md:mb-16 md:text-5xl lg:text-6xl">
          Outside Work
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {ACTIVITIES.map(({ label, icon }, idx) => (
            <ScrollReveal key={label} staggerIndex={idx}>
              <div className="flex flex-col items-center rounded-xl p-6 transition-colors duration-300 hover:bg-white/30">
                <ActivityIcon type={icon} />
                <p className="text-lg font-medium text-navy">{label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}

import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';

/** Outside Work: use your own photos — place files in public/images/ with these names */
const ACTIVITIES: { label: string; image: string; alt: string }[] = [
  { label: 'Playing music', image: '/images/outside-music.jpg', alt: 'Playing music' },
  { label: 'Bike-Boppin about', image: '/images/outside-bike.jpg', alt: 'Bike-Boppin about' },
  { label: 'Surfing', image: '/images/outside-surf.jpg', alt: 'Surfing' },
  { label: 'Climbing rocks', image: '/images/outside-climb.jpg', alt: 'Climbing rocks' },
];

export default function Personality() {
  return (
    <section id="personality" className="relative px-6 py-16 md:py-20">
      <ScrollReveal className="mx-auto max-w-6xl text-center">
        <h2 className="mb-14 text-[2.5rem] leading-tight font-bold text-navy md:mb-16 md:text-5xl lg:text-6xl">
          Outside Work
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          {ACTIVITIES.map(({ label, image, alt }, idx) => (
            <ScrollReveal key={label} staggerIndex={idx}>
              <div className="outside-work-tile group flex flex-col items-center">
                <div className="relative mb-4 aspect-square w-full max-w-[200px] overflow-hidden rounded-full md:max-w-[220px]">
                  <Image
                    src={image}
                    alt={alt}
                    width={400}
                    height={400}
                    className="object-cover object-center transition-transform duration-300 ease-out group-hover:-translate-y-1"
                  />
                </div>
                <p className="text-lg font-medium text-navy">{label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}

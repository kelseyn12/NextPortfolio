import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';

/** Outside Work: your photos in public/ — paths and crop position per tile */
const ACTIVITIES: {
  label: string;
  image: string;
  alt: string;
  objectPosition?: string;
}[] = [
  { label: 'Playing music', image: '/outside-music.jpg', alt: 'Playing music', objectPosition: 'center center' },
  { label: 'Bike-Boppin about', image: '/outside-bike.jpeg', alt: 'Bike-Boppin about', objectPosition: '50% 1000%' },
  { label: 'Surfing', image: '/outside-surfing.JPG', alt: 'Surfing', objectPosition: 'center center' },
  { label: 'Climbing rocks', image: '/outside-climb.JPG', alt: 'Climbing rocks', objectPosition: 'center center' },
];

export default function Personality() {
  return (
    <section id="personality" className="relative -mt-16 px-6 py-16 md:-mt-20 md:py-20">
      <ScrollReveal className="mx-auto max-w-6xl text-center">
        <h2 className="mb-14 text-[2.5rem] leading-tight font-bold text-navy md:mb-16 md:text-5xl lg:text-6xl">
          Outside Work
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          {ACTIVITIES.map(({ label, image, alt, objectPosition = 'center center' }, idx) => (
            <ScrollReveal key={label} staggerIndex={idx}>
              <div className="outside-work-tile group flex flex-col items-center">
                <div className="relative mb-4 aspect-square w-full max-w-[200px] overflow-hidden rounded-full md:max-w-[220px]">
                  <Image
                    src={image}
                    alt={alt}
                    width={400}
                    height={400}
                    className="object-cover transition-transform duration-300 ease-out group-hover:-translate-y-1"
                    style={{ objectPosition }}
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

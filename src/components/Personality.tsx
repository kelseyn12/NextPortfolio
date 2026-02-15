import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';

const ACTIVITIES: { label: string; image: string; alt: string }[] = [
  {
    label: 'Playing music',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=400&fit=crop',
    alt: 'Guitar and music',
  },
  {
    label: 'Bike-Boppin about',
    image: 'https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=400&h=400&fit=crop',
    alt: 'Cycling',
  },
  {
    label: 'Surfing',
    image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=400&h=400&fit=crop',
    alt: 'Surfing',
  },
  {
    label: 'Climbing rocks',
    image: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?w=400&h=400&fit=crop',
    alt: 'Rock climbing',
  },
];

export default function Personality() {
  return (
    <section id="personality" className="relative px-6 py-16 md:py-20">
      <ScrollReveal className="mx-auto max-w-6xl text-center">
        <h2 className="mb-14 text-[2.5rem] font-bold leading-tight text-navy md:mb-16 md:text-5xl lg:text-6xl">
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

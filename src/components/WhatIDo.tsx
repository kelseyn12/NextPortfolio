import ScrollReveal from '@/components/ScrollReveal';

export default function WhatIDo() {
  const services = [
    {
      title: 'Custom Website Builds',
      description:
        'Custom websites designed and developed around your brand, goals, and growth plans.',
      startingAt: 'Website builds starting at $6,000.',
    },
    {
      title: 'Ongoing Website & Product Support',
      description:
        'Ongoing care for your site or product—updates, maintenance, and small improvements so you can focus on what you do best.',
    },
    {
      title: 'Product & App Builds (Selective)',
      description:
        'Web and mobile apps built with intention. I take on a limited number of projects so each one gets the attention it deserves.',
    },
  ];

  return (
    <section id="what-i-do" className="relative px-6 py-16 md:py-20">
      <ScrollReveal className="mx-auto max-w-3xl">
        <h2 className="mb-16 text-center text-[2.5rem] leading-tight font-bold text-navy md:mb-20 md:text-5xl lg:text-6xl">
          What I Do
        </h2>
        <div className="space-y-0">
          {services.map((service, idx) => (
            <ScrollReveal key={service.title} staggerIndex={idx < 3 ? idx : undefined}>
              <div className="border-b border-steel/15 py-12 last:border-0 last:pb-0 md:py-14">
                <h3 className="mb-3 text-xl font-semibold text-navy md:text-2xl">
                  {service.title}
                </h3>
                <p className="leading-relaxed text-steel">
                  {service.description}
                </p>
                {service.startingAt && (
                  <p className="mt-3 text-sm font-medium text-navy">
                    {service.startingAt}
                  </p>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}

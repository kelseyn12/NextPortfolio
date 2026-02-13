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
    <section id="what-i-do" className="border-t border-steel/5 bg-white px-6 pt-36 pb-32 md:pt-40 md:pb-36">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-14 text-center text-4xl font-bold text-navy md:text-5xl">
          What I Do
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          {services.map(service => (
            <div
              key={service.title}
              className="rounded-xl border-2 border-steel/10 bg-white p-8 shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition duration-[250ms] ease-in-out hover:bg-cream/5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.07)]"
            >
              <h3 className="mb-4 text-xl font-semibold text-navy md:text-2xl">
                {service.title}
              </h3>
              <p className="leading-relaxed text-steel/90">
                {service.description}
              </p>
              {service.startingAt && (
                <p className="mt-4 text-sm font-medium text-navy">
                  {service.startingAt}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

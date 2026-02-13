export default function HowIWork() {
  const steps = [
    { number: 1, title: 'We talk', text: 'Quick call or email to understand what you need and whether we’re a good fit.' },
    { number: 2, title: 'Scope & timeline', text: 'I outline what I’ll deliver and when, so there are no surprises.' },
    { number: 3, title: 'Build', text: 'I do the work in clear phases and keep you in the loop.' },
    { number: 4, title: 'Review & refine', text: 'You see it, give feedback, and we adjust until it feels right.' },
    { number: 5, title: 'Handoff', text: 'You get everything you need to own or maintain it going forward.' },
  ];

  return (
    <section id="how-i-work" className="border-t border-steel/5 bg-white px-6 pt-32 pb-40 md:pt-36 md:pb-48">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-14 text-center text-4xl font-bold text-navy md:text-5xl">
          How I Work
        </h2>
        <div className="mx-auto max-w-2xl space-y-8">
          {steps.map(step => (
            <div
              key={step.number}
              className="flex gap-6 rounded-2xl bg-cream/10 p-8 shadow-[0_1px_10px_rgba(0,0,0,0.04)] transition duration-300 ease-in-out hover:shadow-[0_2px_14px_rgba(0,0,0,0.06)]"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream text-lg font-bold text-navy">
                {step.number}
              </span>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-navy">
                  {step.title}
                </h3>
                <p className="leading-loose text-steel/90">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

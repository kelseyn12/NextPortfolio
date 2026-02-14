import ScrollReveal from '@/components/ScrollReveal';

export default function HowIWork() {
  const steps = [
    { number: 1, title: 'We talk', text: 'Quick call or email to understand what you need and whether we’re a good fit.' },
    { number: 2, title: 'Scope & timeline', text: 'I outline what I’ll deliver and when, so there are no surprises.' },
    { number: 3, title: 'Build', text: 'I do the work in clear phases and keep you in the loop.' },
    { number: 4, title: 'Review & refine', text: 'You see it, give feedback, and we adjust until it feels right.' },
    { number: 5, title: 'Handoff', text: 'You get everything you need to own or maintain it going forward.' },
  ];

  return (
    <section id="how-i-work" className="relative isolate overflow-hidden px-6 py-20 md:py-24">
      {/* Soft radial gradient — slightly lighter center, no hard edges */}
      <div
        className="pointer-events-none absolute inset-0 -inset-x-[15%] -inset-y-12 md:-inset-y-16"
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse 85% 75% at 50% 50%, rgba(242,237,228,0.85) 0%, rgba(232,224,212,0.4) 55%, transparent 100%)',
        }}
      />
      <ScrollReveal className="relative z-10 mx-auto max-w-3xl">
        <h2 className="mb-16 text-left text-[2.5rem] font-bold leading-tight text-navy md:mb-20 md:text-5xl lg:text-6xl">
          Process
        </h2>
        <div className="space-y-0">
          {steps.map((step, idx) => (
            <ScrollReveal key={step.number} staggerIndex={idx < 5 ? idx : undefined}>
              <div className="flex gap-5 border-b border-steel/12 py-12 last:border-0 last:pb-0 md:gap-6 md:py-14">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center text-base font-semibold text-steel">
                  {step.number}
                </span>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-navy">
                    {step.title}
                  </h3>
                  <p className="max-w-2xl leading-relaxed text-steel">{step.text}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}

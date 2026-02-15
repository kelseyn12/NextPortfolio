import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export default function LetsWorkTogether() {
  return (
    <section id="lets-work" className="px-6 py-28 md:py-40">
      <ScrollReveal className="mx-auto max-w-2xl text-center">
        <h2 className="mb-8 text-[2.5rem] leading-tight font-bold text-navy md:mb-10 md:text-5xl lg:text-6xl">
          Let’s Work Together
        </h2>
        <p className="mb-10 text-xl text-steel">
          If you have a project in mind or just want to say hi, I’d be glad to
          hear from you.
        </p>
        <Link
          href="#contact"
          className="breezy-hover inline-block rounded-2xl border border-coral/70 px-10 py-4 font-semibold text-navy shadow-[0_1px_8px_rgba(0,0,0,0.04)] hover:border-coral/90 hover:bg-coral/90 hover:text-cream"
        >
          Get in touch
        </Link>
      </ScrollReveal>
    </section>
  );
}

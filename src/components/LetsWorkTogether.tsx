import Link from 'next/link';

export default function LetsWorkTogether() {
  return (
    <section id="lets-work" className="border-t border-steel/5 bg-white px-6 py-32 md:py-36">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-6 text-4xl font-bold text-navy md:text-5xl">
          Let’s Work Together
        </h2>
        <p className="mb-10 text-xl text-steel/90">
          If you have a project in mind or just want to say hi, I’d be glad to
          hear from you.
        </p>
        <Link
          href="#contact"
          className="inline-block rounded-xl border-2 border-teal px-10 py-4 font-semibold text-navy shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition duration-[250ms] ease-in-out hover:bg-teal/90 hover:text-cream"
        >
          Get in touch
        </Link>
      </div>
    </section>
  );
}

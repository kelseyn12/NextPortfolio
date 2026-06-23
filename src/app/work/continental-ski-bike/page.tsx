import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Continental Ski & Bike — Ongoing Web Development for a Local Shop',
  description:
    'An ongoing web development role for Continental Ski & Bike, a Duluth bike and ski shop — custom pages, staff bios, and continued site maintenance.',
  openGraph: {
    title: 'Continental Ski & Bike — Ongoing Web Development for a Local Shop',
    description:
      'Custom pages and continued site maintenance for a local Duluth bike and ski shop.',
    images: ['/images/continental.png'],
  },
};

export default function ContinentalSkiBikeCaseStudy() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <Link
        href="/#projects"
        className="mb-10 inline-block text-sm font-medium text-teal hover:text-coral"
      >
        ← Back to selected work
      </Link>

      <p className="mb-3 text-sm font-semibold tracking-wide text-coral uppercase">
        HTML · CSS · JavaScript · WorkStand
      </p>
      <h1 className="mb-6 text-4xl leading-tight font-bold text-navy md:text-5xl">
        Continental Ski &amp; Bike
      </h1>
      <p className="mb-10 text-lg leading-relaxed text-steel">
        An ongoing web development role for a local Duluth bike and ski shop —
        building custom pages on top of their existing e-commerce platform and
        keeping the site running day to day.
      </p>

      <div className="relative mb-12 aspect-[3/2] w-full overflow-hidden rounded-lg bg-steel/10">
        <Image
          src="/images/continental.png"
          alt="Continental Ski & Bike website homepage"
          fill
          className="object-contain"
          sizes="(min-width:768px) 768px, 100vw"
        />
      </div>

      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-semibold text-navy">The setup</h2>
        <p className="leading-relaxed text-steel">
          Continental Ski & Bike has been a Duluth fixture since 1955, serving
          skiers and cyclists with a full retail shop, a service center, and
          seasonal rentals. Their site runs on WorkStand, a platform built
          specifically for bike and ski shops, which handles their catalog,
          rentals, and checkout. My role isn't to replace that system — it's to
          build the custom pages and personality-driven content that make the
          shop feel like itself online, and to keep the site running smoothly as
          things change.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-semibold text-navy">What I work on</h2>
        <ul className="list-disc space-y-2 pl-5 leading-relaxed text-steel">
          <li>Custom About Us page, including individual staff bios for the whole crew</li>
          <li>Rentals and Service pages tailored to how the shop actually operates</li>
          <li>Ongoing updates and fixes as the shop's offerings and seasons change</li>
          <li>Keeping the site's personality — playful, local, a little weird in the best way — intact across every page</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-semibold text-navy">The relationship</h2>
        <p className="leading-relaxed text-steel">
          This one's ongoing. I'm not just the developer who built it and left —
          I'm part of how the shop keeps its online presence current, which says
          more about the working relationship than any single project ever could.
        </p>
      </section>

      <a
        href="https://www.continentalski.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="breezy-hover inline-block rounded-2xl border border-teal/50 px-6 py-3 font-semibold text-navy hover:border-teal hover:bg-teal/10"
      >
        View the live site →
      </a>
    </article>
  );
}

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Duluth Gear Exchange — Gatsby to Squarespace Migration',
  description:
    'Migrating Duluth Gear Exchange from a custom Gatsby site to Squarespace, while preserving the brand and design the original build established.',
  openGraph: {
    title: 'Duluth Gear Exchange — Gatsby to Squarespace Migration',
    description:
      'A custom Gatsby build later migrated to Squarespace for easier day-to-day management.',
    images: ['/images/DGE.png'],
  },
};

export default function DuluthGearExchangeCaseStudy() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <Link
        href="/#projects"
        className="mb-10 inline-block text-sm font-medium text-teal hover:text-coral"
      >
        ← Back to selected work
      </Link>

      <p className="mb-3 text-sm font-semibold tracking-wide text-coral uppercase">
        Gatsby · React · Contentful · GraphQL · Squarespace
      </p>
      <h1 className="mb-6 text-4xl leading-tight font-bold text-navy md:text-5xl">
        Duluth Gear Exchange
      </h1>
      <p className="mb-10 text-lg leading-relaxed text-steel">
        A used outdoor gear consignment and repair shop in Duluth, MN. I built
        their original site in Gatsby, then later migrated it to Squarespace —
        keeping the brand and design consistent while making the site easier
        for the shop to manage day to day.
      </p>

      <div className="relative mb-12 aspect-[3/2] w-full overflow-hidden rounded-lg bg-steel/10">
        <Image
          src="/images/DGE.png"
          alt="Duluth Gear Exchange website"
          fill
          className="object-contain"
          sizes="(min-width:768px) 768px, 100vw"
        />
      </div>

      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-semibold text-navy">The original build</h2>
        <p className="leading-relaxed text-steel">
          The first version of the site was a custom Gatsby build, using
          Contentful as a headless CMS and GraphQL to pull content into the
          React front end. It covered the shop's core pages — buying and selling
          gear, repairs, staff, and contact — with a fast, modern static site.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-semibold text-navy">Why we moved to Squarespace</h2>
        <p className="leading-relaxed text-steel">
          A custom Gatsby/Contentful stack is great for performance, but it
          means every content change runs through a CMS that isn't built for a
          small retail team to manage on their own day to day. Moving to
          Squarespace let the shop post updates, photos, and consignment
          announcements themselves, without needing a developer for routine
          changes — while I kept the visual identity and layout consistent with
          the original design.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-semibold text-navy">The result</h2>
        <p className="leading-relaxed text-steel">
          A shop that can run its own site day-to-day — posting new consignment
          finds, repair updates, and shop news — without losing the brand
          identity the original build established.
        </p>
      </section>

      <a
        href="https://www.duluthgearexchange.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="breezy-hover inline-block rounded-2xl border border-teal/50 px-6 py-3 font-semibold text-navy hover:border-teal hover:bg-teal/10"
      >
        View the live site →
      </a>
    </article>
  );
}

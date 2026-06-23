import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Yosemite Climbing Association — Shopify Store for a Climbing Nonprofit',
  description:
    'A Shopify store built to support the Yosemite Climbing Association and Yosemite Climbing Museum, funding stewardship programs, archives, and the annual Yosemite Facelift.',
  openGraph: {
    title: 'Yosemite Climbing Association — Shopify Store for a Climbing Nonprofit',
    description:
      'A Shopify store supporting a climbing museum, archives, and stewardship programs in Yosemite Valley.',
    images: ['/images/yosemite.png'],
  },
};

export default function YosemiteClimbingCaseStudy() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <Link
        href="/#projects"
        className="mb-10 inline-block text-sm font-medium text-teal hover:text-coral"
      >
        ← Back to selected work
      </Link>

      <p className="mb-3 text-sm font-semibold tracking-wide text-coral uppercase">
        Shopify · GiveCloud · Google Analytics
      </p>
      <h1 className="mb-6 text-4xl leading-tight font-bold text-navy md:text-5xl">
        Yosemite Climbing Association
      </h1>
      <p className="mb-10 text-lg leading-relaxed text-steel">
        A Shopify store supporting the Yosemite Climbing Association and the
        Yosemite Climbing Museum — funding the largest collection of American
        rock climbing history and artifacts in the country.
      </p>

      <div className="relative mb-12 aspect-[3/2] w-full overflow-hidden rounded-lg bg-steel/10">
        <Image
          src="/images/yosemite.png"
          alt="Yosemite Climbing Association Shopify store homepage"
          fill
          className="object-contain"
          sizes="(min-width:768px) 768px, 100vw"
        />
      </div>

      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-semibold text-navy">The mission</h2>
        <p className="leading-relaxed text-steel">
          The Yosemite Climbing Association preserves the history of climbing in
          Yosemite Valley — through a museum in Mariposa, an archive of
          first-ascent photography and gear, guidebooks, and stewardship programs
          including the annual Yosemite Facelift cleanup event. Every purchase on
          the site directly funds that work.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-semibold text-navy">What I built</h2>
        <ul className="list-disc space-y-2 pl-5 leading-relaxed text-steel">
          <li>A Shopify store organized around books, prints, posters, apparel, and museum gift shop items</li>
          <li>Integration with GiveCloud for membership signups and donations, connected to the organization's broader fundraising</li>
          <li>Featured collections built around seasonal events, including the Yosemite Film Festival</li>
          <li>Google Analytics setup to track store performance</li>
          <li>Coordination with the organization's main Squarespace site so visitors can move between the two seamlessly</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-semibold text-navy">Why it matters</h2>
        <p className="leading-relaxed text-steel">
          This isn't a typical e-commerce build — it's the revenue engine for a
          small nonprofit doing real preservation work. The store needed to be
          straightforward to shop, easy for the team to manage without a
          developer on hand, and built to support the kind of historical, often
          archival content (decades-old expedition photography, rare gear) that
          most storefront templates aren't designed around.
        </p>
      </section>

      <a
        href="https://yosemiteclimbing.myshopify.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="breezy-hover inline-block rounded-2xl border border-teal/50 px-6 py-3 font-semibold text-navy hover:border-teal hover:bg-teal/10"
      >
        View the live store →
      </a>
    </article>
  );
}

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'End2End Outdoor — Squarespace Rebuild for an Outdoor Sales Agency',
  description:
    'How a custom Squarespace rebuild helped End2End Outdoor, a sales rep agency for Big Agnes, La Sportiva, Petzl, and Rab Equipment, modernize their site and generate retailer leads.',
  openGraph: {
    title: 'End2End Outdoor — Squarespace Rebuild for an Outdoor Sales Agency',
    description:
      'A custom Squarespace rebuild and full site copywriting for an outdoor industry sales rep agency.',
    images: ['/images/end2endoutdoors.png'],
  },
};

export default function End2EndOutdoorCaseStudy() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <Link
        href="/#projects"
        className="mb-10 inline-block text-sm font-medium text-teal hover:text-coral"
      >
        ← Back to selected work
      </Link>

      <p className="mb-3 text-sm font-semibold tracking-wide text-coral uppercase">
        Squarespace · Copywriting · Web Design
      </p>
      <h1 className="mb-6 text-4xl leading-tight font-bold text-navy md:text-5xl">
        End2End Outdoor
      </h1>
      <p className="mb-10 text-lg leading-relaxed text-steel">
        A full Squarespace rebuild and copywriting project for a sales representative
        agency serving Big Agnes, La Sportiva, Petzl, and Rab Equipment across the
        South Central, Midwest, and Great Lakes regions.
      </p>

      <div className="relative mb-12 aspect-[3/2] w-full overflow-hidden rounded-lg bg-steel/10">
        <Image
          src="/images/end2endoutdoors.png"
          alt="End2End Outdoor homepage, showing their territory map and brand partners"
          fill
          className="object-contain"
          sizes="(min-width:768px) 768px, 100vw"
        />
      </div>

      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-semibold text-navy">The challenge</h2>
        <p className="leading-relaxed text-steel">
          End2End Outdoor's existing site was outdated and didn't reflect the
          credibility of the agency or the brands they represent. As a sales rep
          agency, their site needed to do two things clearly: show retailers who
          End2End is — a small team with real outdoor industry roots — and who
          they represent, so a retailer could recognize the names (Big Agnes, La
          Sportiva, Petzl, Rab Equipment) and trust the agency on sight.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-semibold text-navy">What I did</h2>
        <p className="mb-4 leading-relaxed text-steel">
          I rebuilt the site from the ground up on Squarespace and wrote all of the
          copy, working directly with the team to put their story and their brand
          partnerships front and center. The build covers:
        </p>
        <ul className="list-disc space-y-2 pl-5 leading-relaxed text-steel">
          <li>A homepage built around their core message — built for brands, trusted by retailers</li>
          <li>An About page introducing the team and the agency's history since 2016</li>
          <li>A territory page showing the 17 states they serve across three regions</li>
          <li>A brand partners section showcasing Big Agnes, La Sportiva, Petzl, and Rab Equipment</li>
          <li>Clear service breakdowns — retail support, product training, and market insights</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-semibold text-navy">The result</h2>
        <p className="leading-relaxed text-steel">
          A clean, professional site that gives retailers everything they need to
          recognize and trust the agency at a glance — who they are, who they
          represent, and how to get in touch.
        </p>
      </section>

      <a
        href="https://end2endoutdoor.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="breezy-hover inline-block rounded-2xl border border-teal/50 px-6 py-3 font-semibold text-navy hover:border-teal hover:bg-teal/10"
      >
        View the live site →
      </a>
    </article>
  );
}

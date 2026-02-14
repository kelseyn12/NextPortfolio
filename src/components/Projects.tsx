import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';

const ACCENT_OVERLAYS = {
  teal: 'bg-teal/90',
  steel: 'bg-steel/90',
  coral: 'bg-coral/90',
  cream: 'bg-cream/90',
  navy: 'bg-navy/90',
} as const;

type OverlayKey = keyof typeof ACCENT_OVERLAYS;

function shortDescriptor(description: string, maxLength = 72) {
  if (description.length <= maxLength) {
    return description;
  }
  return `${description.slice(0, maxLength).trim()}…`;
}

function ProjectBlock({
  project,
  overlay,
  featured = false,
}: {
  project: { title: string; description: string; image: string; link: string; tech: string[] };
  overlay: string;
  featured?: boolean;
}) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`project-editorial group relative block w-full overflow-hidden rounded-sm ${featured ? 'aspect-[3/2] md:aspect-[16/9]' : 'aspect-[4/3] md:aspect-[6/5]'}`}
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover object-center transition-transform duration-400 ease-out group-hover:scale-[1.02]"
        sizes={featured ? '100vw' : '(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw'}
      />
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center px-6 py-8 text-center opacity-0 transition-opacity duration-300 ease-out group-focus-within:opacity-100 group-hover:opacity-100 ${overlay}`}
      >
        <h3 className="mb-2 text-2xl font-bold text-white md:text-3xl">
          {project.title}
        </h3>
        <p className="mb-6 max-w-md text-sm leading-relaxed text-white/95 md:text-base">
          {shortDescriptor(project.description)}
        </p>
        <span className="rounded-lg border border-white/80 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm">
          View case
        </span>
      </div>
    </a>
  );
}

export default function Projects() {
  const projects = [
    {
      title: 'Yosemite Climbing Association',
      description:
        'A Shopify app supporting Yosemite Climbing Association and the Yosemite Climbing Museum',
      image: '/images/yosemite.png',
      link: 'https://yosemiteclimbing.myshopify.com/',
      tech: ['Shopify', 'GiveCloud', 'SquareSpace', 'Google Analytics', 'HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Lets Connect',
      description:
        'A small web app experiment in digital serendipity. Type a word, and if someone else types the same one within a few minutes -you are instantly connected in a private, anonymous chat.',
      image: '/images/letsconnect.png',
      link: 'https://lets-connect-ebon.vercel.app/',
      tech: ['React + Vite + TypeScript', 'Tailwind CSS', 'React Router', 'Firebase (Auth + Firestore)', 'Firestore Subscriptions'],
    },
    {
      title: 'Continental Ski & Bike Website',
      description:
        'Built custom pages (About Us, Staff Bios, Rentals, Service) with personality-driven design for a local bike shop.',
      image: '/images/continental.png',
      link: 'https://www.continentalski.com/',
      tech: ['HTML', 'CSS', 'JavaScript', 'WorkStand'],
    },
    {
      title: 'Duluth Gear Exchange',
      description:
        'Originally built in Gatsby, later transitioned to Squarespace while keeping design consistent.',
      image: '/images/DGE.png',
      link: 'https://duluthgearexchange.netlify.app/',
      tech: ['Gatsby', 'React', 'Contentful', 'GraphQL', 'Squarespace'],
    },
    {
      title: 'Old Portfolio (React)',
      description:
        'My first portfolio site built in React, showcasing early web projects.',
      image: '/images/oldPortfolio.png',
      link: 'https://kelseynocek.netlify.app',
      tech: ['React', 'JavaScript', 'CSS'],
    },
    {
      title: 'Surf App (React Native, WIP)',
      description:
        'Mobile app pulling NOAA, NDBC, and Windy API data to deliver surf conditions and community features.',
      image: '/images/surfApp.png',
      link: 'https://github.com/kelseyn12/surfSUP',
      tech: [
        'React Native',
        'JavaScript',
        'APIs',
        'Expo',
        'Firebase',
        'Authentication',
      ],
    },
    {
      title: 'Bikepacker Board',
      description:
        'A full-stack CRUD application that allows the user to view bikepacking routes in the midwest, update, edit, and delete.',
      image: '/images/bikepacker.png',
      link: 'https://github.com/kelseyn12/Bikepacker-Board?tab=readme-ov-file',
      tech: ['React', 'JavaScript', 'CSS'],
    },
  ];

  const overlayKeys: OverlayKey[] = ['teal', 'steel', 'coral'];
  const getOverlay = (i: number): string => {
    const key: OverlayKey = overlayKeys[i % 3] ?? 'steel';
    return ACCENT_OVERLAYS[key];
  };

  const visibleProjects = projects.slice(0, 4);
  const featured = visibleProjects[0];
  const rest = visibleProjects.slice(1);
  if (!featured) {
    return null;
  }

  return (
    <section id="projects" className="relative px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-[90rem]">
        <ScrollReveal className="text-center">
          <h2 className="mb-10 text-[2.75rem] leading-tight font-bold text-navy md:mb-12 md:text-5xl lg:text-6xl">
            Selected Work
          </h2>
        </ScrollReveal>

        <div className="flex flex-col gap-12 md:gap-16">
          <ScrollReveal className="w-full" staggerIndex={0}>
            <ProjectBlock
              project={featured}
              overlay={getOverlay(0)}
              featured
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-14 lg:grid-cols-3 lg:gap-12">
            {rest.map((project, idx) => (
              <ScrollReveal key={project.title} staggerIndex={idx < 5 ? idx + 1 : undefined}>
                <ProjectBlock
                  project={project}
                  overlay={getOverlay(idx + 1)}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

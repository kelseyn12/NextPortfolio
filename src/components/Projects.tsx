import Image from 'next/image';

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

  // Rotate accents between teal, steel, coral
  const accents = ['teal', 'steel', 'coral', 'cream', 'navy'];

  return (
    <section id="projects" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-navy mb-12 text-4xl font-bold md:text-5xl">
          Featured Projects
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => {
            const accent = accents[idx % accents.length]; // cycle through colors
            return (
              <div
                key={project.title}
                className={`group relative h-[26rem] w-full overflow-hidden rounded-lg border-2 shadow-sm transition hover:shadow-xl
    ${accent === 'teal' ? 'border-teal bg-teal/5' : ''}
    ${accent === 'steel' ? 'border-steel bg-steel/5' : ''}
    ${accent === 'coral' ? 'border-coral bg-coral/5' : ''}
    ${accent === 'cream' ? 'border-cream bg-cream/5' : ''}
    ${accent === 'navy' ? 'border-navy bg-navy/5' : ''}`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain object-center p-2 transition-opacity duration-300 group-hover:opacity-90"
                  sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                />

                {/* Overlay */}
                <div
                  className={`absolute inset-0 flex flex-col items-center justify-center px-4 text-center opacity-0 transition duration-500 group-hover:opacity-100 ${accent === 'teal' ? 'bg-teal/90' : ''} ${accent === 'steel' ? 'bg-steel/90' : ''} ${accent === 'coral' ? 'bg-coral/90' : ''} ${accent === 'cream' ? 'bg-cream/90' : ''} ${accent === 'navy' ? 'bg-navy/90' : ''} `}
                >
                  <h3 className="mb-2 text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-white">{project.description}</p>
                  <div className="mb-4 flex flex-wrap justify-center gap-2">
                    {project.tech.map(tech => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/40 px-3 py-1 text-sm text-white/90"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-navy mt-4 inline-block rounded-lg border-2 border-white px-5 py-2 font-medium text-white transition hover:bg-white"
                  >
                    View Project
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

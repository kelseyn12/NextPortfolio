// src/components/Projects.tsx
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: 'Continental Ski & Bike Website',
      description:
        'Built custom pages (About Us, Staff Bios, Rentals, Service) with personality-driven design for a local bike shop.',
      image: '/images/continental.png',
      link: 'https://www.continentalski.com/',
      accent: 'gold',
      tech: ['HTML', 'CSS', 'JavaScript', 'WorkStand'],
    },
    {
      title: 'Village Programs Mockup',
      description:
        'Next.js mockup enabling people to search and filter through available programs.',
      image: '/images/village.png',
      link: 'https://github.com/kelseyn12/village-mock',
      accent: 'sage',
      tech: ['Next.js', 'JavaScript', 'Material UI', 'CSS'],
    },
    {
      title: 'Duluth Gear Exchange',
      description:
        'Originally built in Gatsby, later transitioned to Squarespace while keeping design consistent.',
      image: '/images/DGE.png',
      link: 'https://duluthgearexchange.netlify.app/',
      accent: 'coral',
      tech: ['Gatsby', 'React', 'Contentful', 'GraphQL', 'Squarespace'],
    },
    {
      title: 'Old Portfolio (React)',
      description:
        'My first portfolio site built in React, showcasing early web projects.',
      image: '/images/oldPortfolio.png',
      link: 'kelseynocek.netlify.app',
      accent: 'sky',
      tech: ['React', 'JavaScript', 'CSS'],
    },
    {
      title: 'Surf App (React Native, WIP)',
      description:
        'Mobile app pulling NOAA, NDBC, and Windy API data to deliver surf conditions and community features.',
      image: '/images/surfApp.png',
      link: 'https://github.com/kelseyn12/surfSUP',
      accent: 'navy',
      tech: ['React Native', 'JavaScript', 'APIs', 'Expo', 'Firebase', 'Authentication'],
    },
    {
      title: 'Bikepacker Board',
      description:
        'A full-stack CRUD application that allows the user to view bikepacking routes in the midwest, update, edit, and delete.',
      image: '/images/bikepacker.png',
      link: 'https://github.com/kelseyn12/Bikepacker-Board?tab=readme-ov-file',
      accent: 'coffee',
      tech: ['React', 'JavaScript', 'CSS'],
    },

  ];

  return (
    <section id="projects" className="bg-cream px-6 py-20">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mb-12 text-4xl font-bold text-navy md:text-5xl">
          Featured Projects
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(project => (
            <div
              key={project.title}
              className={`group relative h-80 w-full overflow-hidden rounded-lg shadow-md transition hover:shadow-xl
    ${project.accent === 'gold' ? 'bg-gold/80' : ''}
    ${project.accent === 'coral' ? 'bg-coral/80' : ''}
    ${project.accent === 'sky' ? 'bg-sky/80' : ''}
    ${project.accent === 'coffee' ? 'bg-coffee/80' : ''}
    ${project.accent === 'sage' ? 'bg-sage/80' : ''}
    ${project.accent === 'navy' ? 'bg-navy/80' : ''}
  `}
            >
              {/* Project Image Container */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain p-1 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Overlay */}
              <div
                className={`absolute inset-0 flex translate-y-4 flex-col items-center justify-center px-4
      text-center opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100
      ${project.accent === 'gold' ? 'bg-gold' : ''}
      ${project.accent === 'coral' ? 'bg-coral' : ''}
      ${project.accent === 'sky' ? 'bg-sky' : ''}
      ${project.accent === 'coffee' ? 'bg-coffee' : ''}
      ${project.accent === 'sage' ? 'bg-sage' : ''}
      ${project.accent === 'navy' ? 'bg-navy' : ''}`}
              >
                <h3 className="mb-2 text-2xl font-bold text-cream">{project.title}</h3>
                <p className="mb-4 text-cream">{project.description}</p>
                <div className="mb-4 flex flex-wrap justify-center gap-2">
                  {project.tech.map(tech => (
                    <span
                      key={tech}
                      className="rounded-full bg-white/20 px-3 py-1 text-sm text-cream"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block rounded-lg border-2 border-navy px-5 py-2 font-medium text-navy transition hover:bg-navy hover:text-cream"
                >
                  View Project
                </a>

              </div>
            </div>

          ))}
        </div>
      </div>
    </section>

  );
}

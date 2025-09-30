import { FaEnvelope, FaFileDownload, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="bg-navy px-6 py-20 text-cream">
      <div className="mx-auto max-w-4xl text-center">
        {/* Heading */}
        <h2 className="mb-8 inline-block border-b-4 border-teal pb-2 text-4xl font-bold md:text-5xl">
          Let’s Connect
        </h2>
        <p className="mb-10 text-lg text-cream/80 max-w-2xl mx-auto">
          I’d love to chat about projects, collaborations, or just share ideas.
        </p>

        {/* Icons Row */}
        <div className="mb-10 flex justify-center gap-10 text-3xl">
          <a
            href="https://www.linkedin.com/in/kelseynocek12"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="transition text-cream hover:text-teal transform hover:scale-110 hover:shadow-[0_0_15px_#64c7d1]"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/kelseyn12"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="transition text-cream hover:text-teal transform hover:scale-110 hover:shadow-[0_0_15px_#64c7d1]"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:kelseynocek12@gmail.com"
            aria-label="Email"
            className="transition text-cream hover:text-teal transform hover:scale-110 hover:shadow-[0_0_15px_#64c7d1]"
          >
            <FaEnvelope />
          </a>
          <a
            href="/resume.pdf"
            aria-label="Download Resume"
            download
            className="transition text-cream hover:text-teal transform hover:scale-110 hover:shadow-[0_0_15px_#64c7d1]"
          >
            <FaFileDownload />
          </a>
        </div>

        {/* Footer note */}
        <p className="text-sm text-cream/70">
          © {new Date().getFullYear()} Kelsey Nocek · Built with{' '}
          <span className="text-teal">Next.js</span> &{' '}
          <span className="text-teal">Tailwind CSS</span>
        </p>
      </div>
    </section>
  );
}

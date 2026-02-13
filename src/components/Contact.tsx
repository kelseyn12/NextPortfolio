import {
  FaEnvelope,
  FaFileDownload,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="bg-navy px-6 py-32 text-cream md:py-36">
      <div className="mx-auto max-w-4xl text-center">
        {/* Heading */}
        <h2 className="mb-8 inline-block border-b-4 border-teal pb-2 text-4xl font-bold md:text-5xl">
          Let’s Connect
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-cream/80">
          I’d love to chat about projects, collaborations, or just share ideas.
        </p>

        {/* Icons Row */}
        <div className="mb-10 flex justify-center gap-10 text-3xl">
          <a
            href="https://www.linkedin.com/in/kelseynocek12"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream transition duration-300 ease-in-out hover:scale-105 hover:text-teal/90"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/kelseyn12"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream transition duration-300 ease-in-out hover:scale-105 hover:text-teal/90"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:kelseynocek12@gmail.com"
            aria-label="Email"
            className="text-cream transition duration-300 ease-in-out hover:scale-105 hover:text-teal/90"
          >
            <FaEnvelope />
          </a>
          <a
            href="/resume.pdf"
            aria-label="Download Resume"
            download
            className="text-cream transition duration-300 ease-in-out hover:scale-105 hover:text-teal/90"
          >
            <FaFileDownload />
          </a>
        </div>

        {/* Footer note */}
        <p className="text-sm text-cream/70">
          ©
          {' '}
          {new Date().getFullYear()}
          {' '}
          Kelsey Nocek · Built with
          {' '}
          <span className="text-teal">Next.js</span>
          {' '}
          &amp;
          {' '}
          <span className="text-teal">Tailwind CSS</span>
        </p>
      </div>
    </section>
  );
}

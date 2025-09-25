import { FaEnvelope, FaFileDownload, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="bg-navy px-6 py-16 text-cream">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-6 text-4xl font-bold md:text-5xl">Let’s Connect!</h2>
        <p className="mb-10 text-lg opacity-90">
          I’d love to chat about projects, collaborations, or just share ideas.
        </p>

        {/* Icons Row */}
        <div className="mb-12 flex justify-center gap-8 text-3xl">
          <a
            href="https://www.linkedin.com/in/kelseynocek12"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-gold"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/kelseyn12"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-gold"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:kelseynocek12@gmail.com"
            className="transition hover:text-gold"
          >
            <FaEnvelope />
          </a>
          <a
            href="/resume.pdf"
            download
            className="transition hover:text-gold"
          >
            <FaFileDownload />
          </a>
        </div>

        {/* Footer note */}
        <p className="text-sm opacity-70">
          ©
          {' '}
          {new Date().getFullYear()}
          {' '}
          Kelsey Nocek · Built with Next.js & Tailwind CSS
        </p>
      </div>
    </section>
  );
}

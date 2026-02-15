import {
  FaEnvelope,
  FaFileDownload,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import ScrollReveal from '@/components/ScrollReveal';

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-16 md:py-20">
      <ScrollReveal className="floating-surface mx-auto max-w-4xl px-8 py-12 text-center md:px-10 md:py-14">
        <h2 className="mb-8 inline-block border-b-2 border-coral/70 pb-2 text-4xl font-bold text-navy md:text-5xl">
          Let’s Connect
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-steel">
          I’d love to chat about projects, collaborations, or just share ideas.
        </p>

        <div className="mb-10 flex justify-center gap-10 text-3xl">
          <a
            href="https://www.linkedin.com/in/kelseynocek12"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy transition-colors duration-200 hover:text-coral"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/kelseyn12"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy transition-colors duration-200 hover:text-coral"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:kelseynocek12@gmail.com"
            aria-label="Email"
            className="text-navy transition-colors duration-200 hover:text-coral"
          >
            <FaEnvelope />
          </a>
          <a
            href="/resume.pdf"
            aria-label="Download Resume"
            download
            className="text-navy transition-colors duration-200 hover:text-coral"
          >
            <FaFileDownload />
          </a>
        </div>

        <p className="text-sm text-steel">
          ©
          {' '}
          {new Date().getFullYear()}
          {' '}
          Kelsey Nocek · Built with
          {' '}
          <span className="text-steel">Next.js</span>
          {' '}
          &amp;
          {' '}
          <span className="text-steel">Tailwind CSS</span>
        </p>
      </ScrollReveal>
    </section>
  );
}

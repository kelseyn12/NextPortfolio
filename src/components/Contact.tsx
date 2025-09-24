import { FaLinkedin, FaGithub, FaEnvelope, FaFileDownload } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-navy text-cream py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Let’s Connect!</h2>
        <p className="mb-10 text-lg opacity-90">
          I’d love to chat about projects, collaborations, or just share ideas.
        </p>

        {/* Icons Row */}
        <div className="flex justify-center gap-8 mb-12 text-3xl">
          <a
            href="https://www.linkedin.com/in/kelseynocek12"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/kelseyn12"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:kelseynocek12@gmail.com"
            className="hover:text-gold transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="/resume.pdf"
            download
            className="hover:text-gold transition"
          >
            <FaFileDownload />
          </a>
        </div>

        {/* Footer note */}
        <p className="text-sm opacity-70">
          © {new Date().getFullYear()} Kelsey Nocek · Built with Next.js & Tailwind CSS
        </p>
      </div>
    </section>
  );
}

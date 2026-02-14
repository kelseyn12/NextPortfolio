import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center bg-gradient-to-b from-cream/40 to-white px-6 py-28 md:py-40"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[3fr_2fr] md:gap-20">
        {/* Left: Text */}
        <div className="mx-auto max-w-lg text-center md:mx-0 md:text-left">
          <h1 className="animate-fade-in-up mb-6 text-6xl leading-tight font-extrabold text-navy opacity-0 delay-200 md:mb-5 md:text-7xl md:whitespace-nowrap">
            Hello, I'm Kelsey!
          </h1>
          <h2 className="animate-fade-in-up mb-12 text-[1.95rem] leading-snug font-semibold tracking-wide text-steel/90 opacity-0 delay-400 md:mb-10 md:text-[2.34rem]">
            Digital Product Designer & Developer
          </h2>
          <p className="animate-fade-in-up mb-14 text-lg font-bold tracking-wide text-coral opacity-0 delay-400 md:mb-12 md:text-xl">
            I design and build digital experiences for surf, bike, climbing and adventure communities.
          </p>
          <p className="animate-fade-in-up mb-16 max-w-md text-xl leading-loose text-steel/70 opacity-0 delay-600 md:mb-14 md:text-2xl">
            Based in the Midwest, I design and develop websites and digital products.
            I’ve always been drawn to building—from music to code—and I care about
            things feeling thoughtful and functional.
          </p>
          <a
            href="#projects"
            className="animate-fade-in-up mt-2 inline-block transform rounded-xl border-2 border-teal px-10 py-4 font-semibold text-navy opacity-0 shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition delay-200 duration-200 ease-in-out hover:-translate-y-0.5 hover:bg-teal/90 hover:text-cream md:mt-4"
          >
            Start a project
          </a>
        </div>

        {/* Right: Photo */}
        <div className="relative flex justify-center">
          {/* Accent bars */}
          <div className="absolute top-12 -left-6 hidden h-40 w-2 bg-peach/50 md:block"></div>
          <div className="absolute top-20 -left-10 hidden h-48 w-2 bg-teal/50 md:block"></div>
          <div className="absolute top-16 -left-14 hidden h-44 w-2 bg-coral/50 md:block"></div>
          <div className="absolute top-24 -left-18 hidden h-52 w-2 bg-steel/50 md:block"></div>

          <Image
            src="/kelseyTwo.JPG"
            alt="Kelsey Nocek"
            width={420}
            height={520}
            priority
            className="animate-fade-in-scale relative z-10 w-full max-w-sm rounded-xl object-cover opacity-0 shadow-[0_4px_20px_rgba(0,0,0,0.1)] delay-600 md:max-w-md"
          />
        </div>
      </div>
    </section>
  );
}

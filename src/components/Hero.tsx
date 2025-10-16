import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="hero"
      className="from-cream/40 relative flex min-h-screen items-center bg-gradient-to-b to-white px-6"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-[3fr_2fr]">
        {/* Left: Text */}
        <div className="text-center md:text-left">
          <h1 className="text-navy animate-fade-in-up mb-4 text-6xl leading-tight font-extrabold opacity-0 delay-200 md:text-7xl">
            Hello, I'm Kelsey!
          </h1>
          <h2 className="text-steel animate-fade-in-up mb-8 text-3xl leading-snug font-semibold tracking-wide opacity-0 delay-400 md:text-4xl">
            Designer & Developer
          </h2>
          <p className="text-steel/80 animate-fade-in-up mb-12 max-w-xl text-xl leading-relaxed opacity-0 delay-600 md:text-2xl">
            I’m a
            {' '}
            <span className="text-coral">full stack engineer</span>
            {' '}
            (learning mobile too!) based in
            {' '}
            <span className="text-coral">Duluth, Minnesota</span>
            .
            From playing
            tunes on a stage to lines of code on a web page, creating brings me
            joy. By blending
            {' '}
            <span className="text-coral">logic with design</span>
            ,
            I craft
            functional, eye-catching, and user-friendly digital products.
          </p>
          <a
            href="#projects"
            className="animate-fade-in-up border-teal text-navy hover:bg-teal hover:text-cream inline-block transform rounded-md border-2 px-10 py-4 font-semibold opacity-0 shadow-sm transition delay-200 hover:-translate-y-0.5"
          >
            See My Work
          </a>
        </div>

        {/* Right: Photo */}
        <div className="relative flex justify-center">
          {/* Accent bars */}
          <div className="bg-peach absolute top-12 -left-6 hidden h-40 w-2 md:block"></div>
          <div className="bg-teal absolute top-20 -left-10 hidden h-48 w-2 md:block"></div>
          <div className="bg-coral absolute top-16 -left-14 hidden h-44 w-2 md:block"></div>
          <div className="bg-steel absolute top-24 -left-18 hidden h-52 w-2 md:block"></div>

          <Image
            src="/kelseyTwo.JPG"
            alt="Kelsey Nocek"
            width={420}
            height={520}
            priority
            className="animate-fade-in-scale relative z-10 w-full max-w-sm rounded-lg object-cover opacity-0 shadow-lg delay-600 md:max-w-md"
          />
        </div>
      </div>
    </section>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen items-center bg-cream px-6"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-[3fr_2fr]">
        {/* Left: Text */}
        <div className="text-center md:text-left">
          <h1 className="animate-fade-in-up mb-2 text-6xl leading-tight font-extrabold text-navy opacity-0 delay-200 md:text-7xl">
            Hello, I'm Kelsey!
          </h1>
          <h2 className="animate-fade-in-up mb-6 text-3xl leading-snug font-semibold text-navy opacity-0 delay-400 md:text-4xl">
            Designer & Developer.
          </h2>
          <p className="animate-fade-in-up mb-10 max-w-xl text-xl leading-relaxed text-coral opacity-0 delay-600 md:text-2xl">
            I am a full stack engineer (learning mobile too!) based in Duluth,
            Minnesota. From playing tunes on a stage to lines of code on a web
            page, creating brings me joy. By combining logic and design, I make
            functional, eye-catching, and user-friendly digital products.
          </p>
          <a
            href="#projects"
            className="animate-fade-in-up inline-block transform rounded-lg bg-gold px-6 py-3 font-semibold text-cream opacity-0 shadow-md transition delay-800 hover:-translate-y-0.5 hover:bg-sage"
          >
            See My Work
          </a>
        </div>

        {/* Right: Photo */}
        <div className="flex justify-center">
          <img
            src="../images/kelsey.jpeg"
            alt="Kelsey Nocek"
            className="animate-fade-in-scale w-full max-w-sm rounded-lg object-cover opacity-0 shadow-lg delay-600 md:max-w-md"
          />
        </div>
      </div>
    </section>
  );
}

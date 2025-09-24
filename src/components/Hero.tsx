export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-cream min-h-screen flex items-center px-6"
    >
      <div className="grid md:grid-cols-[3fr_2fr] gap-16 items-center max-w-6xl mx-auto">
        {/* Left: Text */}
        <div className="text-center md:text-left">
          <h1 className="text-6xl md:text-7xl font-extrabold text-navy mb-2 leading-tight opacity-0 animate-fade-in-up delay-200">
            Hello, I'm Kelsey!
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-navy mb-6 leading-snug opacity-0 animate-fade-in-up delay-400">
            Designer & Developer.
          </h2>
          <p className="text-xl md:text-2xl text-coral mb-10 leading-relaxed max-w-xl opacity-0 animate-fade-in-up delay-600">
            I am a full stack engineer (learning mobile too!) based in Duluth,
            Minnesota. From playing tunes on a stage to lines of code on a web
            page, creating brings me joy. By combining logic and design, I make
            functional, eye-catching, and user-friendly digital products.
          </p>
          <a
            href="#projects"
            className="inline-block bg-gold text-cream font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-sage transition transform hover:-translate-y-0.5 opacity-0 animate-fade-in-up delay-800"
          >
            See My Work
          </a>
        </div>

        {/* Right: Photo */}
        <div className="flex justify-center">
          <img
            src="../images/kelsey.jpeg"
            alt="Kelsey Nocek"
            className="rounded-lg shadow-lg w-full max-w-sm md:max-w-md object-cover opacity-0 animate-fade-in-scale delay-600"
          />
        </div>
      </div>
    </section>
  );
}




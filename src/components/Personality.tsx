// src/components/Personality.tsx
export default function Personality() {
  return (
    <section id="personality" className="bg-cream/60 px-6 py-20">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mb-12 text-4xl font-bold text-navy">
          My World Outside Work
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {[
            { emoji: '🎶', text: 'Playing music' },
            { emoji: '🚵🏻‍♀️', text: 'Bike-Boppin\' about' },
            { emoji: '🏄🏻‍♀️', text: 'Surfing' },
            { emoji: '🧗🏻‍♀️', text: 'Climbing rocks' },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="mb-3 text-4xl">{item.emoji}</span>
              <p className="text-lg font-medium text-navy">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
}

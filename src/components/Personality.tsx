// src/components/Personality.tsx
export default function Personality() {
  const activities = [
    { emoji: '🎶', text: 'Playing music' },
    { emoji: '🚵🏻‍♀️', text: 'Bike-Boppin about' },
    { emoji: '🏄🏻‍♀️', text: 'Surfing' },
    { emoji: '🧗🏻‍♀️', text: 'Climbing rocks' },
  ];

  return (
    <section id="personality" className="border-t border-steel/5 bg-cream/30 px-6 py-32 md:py-36">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mb-12 text-4xl font-bold text-navy md:text-5xl">
          My World Outside Work
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {activities.map(item => (
            <div
              key={item.text}
              className="flex flex-col items-center rounded-xl bg-white/70 p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition duration-300 ease-in-out hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)]"
            >
              <span className="mb-3 text-4xl text-coral">{item.emoji}</span>
              <p className="text-lg font-medium text-navy">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

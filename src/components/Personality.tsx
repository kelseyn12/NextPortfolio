// src/components/Personality.tsx
export default function Personality() {

  return (
   <section id="personality" className="bg-cream/60 py-20 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-navy mb-12">
      My World Outside Work
    </h2>

    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
      {[
        { emoji: "🎶", text: "Playing music" },
        { emoji: "🚵🏻‍♀️", text: "Bike-Boppin' about" },
        { emoji: "🏄🏻‍♀️", text: "Surfing" },
        { emoji: "🧗🏻‍♀️", text: "Climbing rocks" },
      ].map((item, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <span className="text-4xl mb-3">{item.emoji}</span>
          <p className="text-lg font-medium text-navy">{item.text}</p>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}

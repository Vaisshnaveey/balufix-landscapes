import Image from "next/image";

export default function HospitalityPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black text-white">
      {/* HERO */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src="/hero/hospitality.jpg"
          alt="Hospitality Landscape"
          fill
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold tracking-wide">
            Hospitality Design
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl">
            Luxury outdoor experiences crafted to inspire relaxation, elegance,
            and unforgettable guest impressions.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
          <Image
            src="/hero/hospitality.jpg"
            alt="Hospitality Design"
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-emerald-400">
            Crafted for Experience
          </h2>

          <p className="text-slate-300 leading-relaxed">
            From resort gardens to luxury pool decks, our hospitality designs
            blend sensory comfort, spatial flow, and premium materials to enhance
            guest engagement and brand identity.
          </p>

          <ul className="space-y-3 text-slate-300">
            <li>✔ Resort poolscapes & cabana layouts</li>
            <li>✔ Mood lighting environments</li>
            <li>✔ Natural stone pathways</li>
            <li>✔ Tropical & native planting palettes</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

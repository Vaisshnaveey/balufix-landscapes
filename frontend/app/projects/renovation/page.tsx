import Image from "next/image";

export default function RenovationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black text-white">
      {/* HERO */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src="/hero/residential.jpg"
          alt="Garden Renovation"
          fill
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold tracking-wide">
            Garden Renovation
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl">
            Transforming aging landscapes into refined outdoor masterpieces
            with modern design intelligence.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-emerald-400">
            Reimagining Spaces
          </h2>

          <p className="text-slate-300 leading-relaxed">
            Our renovation services revive outdated landscapes through smart
            zoning, material upgrades, irrigation redesign, and enhanced plant
            selection — delivering long-term beauty and usability.
          </p>

          <ul className="space-y-3 text-slate-300">
            <li>✔ Structural redesign & layout correction</li>
            <li>✔ Drainage & soil rehabilitation</li>
            <li>✔ Lighting modernization</li>
            <li>✔ Sustainable planting strategies</li>
          </ul>
        </div>

        <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
          <Image
            src="/hero/residential.jpg"
            alt="Renovation"
            fill
            className="object-cover"
          />
        </div>
      </section>
    </main>
  );
}

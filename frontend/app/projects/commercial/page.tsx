import Image from "next/image";

export default function CommercialPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black text-white">
      {/* HERO */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src="/hero/commercial.jpg"
          alt="Commercial Landscape"
          fill
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold tracking-wide">
            Commercial Landscapes
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl">
            Premium outdoor environments crafted for corporate excellence,
            productivity, and architectural elegance.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-emerald-400">
            Designed for Impact
          </h2>

          <p className="text-slate-300 leading-relaxed">
            Our commercial landscapes integrate modern architecture, climate-resilient
            planting, intelligent lighting systems, and functional spatial design to
            elevate corporate environments.
          </p>

          <ul className="space-y-3 text-slate-300">
            <li>✔ Corporate campus master planning</li>
            <li>✔ Sustainable water management systems</li>
            <li>✔ Executive outdoor lounge zones</li>
            <li>✔ Smart irrigation and lighting automation</li>
          </ul>
        </div>

        <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
          <Image
            src="/hero/commercial.jpg"
            alt="Commercial Design"
            fill
            className="object-cover"
          />
        </div>
      </section>
    </main>
  );
}

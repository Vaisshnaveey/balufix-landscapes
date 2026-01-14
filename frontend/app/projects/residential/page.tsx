import Image from "next/image";
import Link from "next/link";

export default function ResidentialPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black text-white overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative h-[75vh] overflow-hidden flex items-center">
        <Image
          src="/hero/residential.jpg"
          alt="Residential Landscape"
          fill
          className="object-cover opacity-70"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Residential Landscapes
          </h1>

          <p className="text-slate-300 max-w-2xl text-lg">
            Luxury outdoor spaces designed for comfort, beauty, and sustainability.
          </p>
        </div>
      </section>

      {/* ================= PHILOSOPHY GLASS ================= */}
      <section className="relative z-20 -mt-32 pb-28 px-6">
        <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl p-12">

          <h2 className="text-3xl font-semibold mb-6 text-emerald-400">
            Project Philosophy
          </h2>

          <p className="text-slate-200 leading-relaxed text-lg">
            Our residential landscapes seamlessly blend architecture, greenery,
            and lifestyle. Every space is carefully engineered to enhance privacy,
            promote relaxation, and integrate natural beauty into daily living.
            Sustainability guides every material choice, plant selection, and
            water feature design.
          </p>

        </div>
      </section>

      {/* ================= DESIGN HIGHLIGHTS ================= */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-16">
            Design Highlights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {[
              {
                title: "Sustainable Planting",
                desc: "Native species with low water consumption and long-term durability."
              },
              {
                title: "Modern Water Features",
                desc: "Pools, cascades, and reflective water bodies engineered for elegance."
              },
              {
                title: "Smart Lighting",
                desc: "Ambient lighting systems that enhance night aesthetics and safety."
              },
              {
                title: "Outdoor Living Zones",
                desc: "Lounges, decks, and pergolas optimized for relaxation and entertainment."
              },
              {
                title: "Natural Materials",
                desc: "Stone, wood, and textures that age beautifully over time."
              },
              {
                title: "Custom Design",
                desc: "Every project tailored uniquely to client lifestyle and architecture."
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-lg hover:scale-[1.03] transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-3 text-emerald-400">
                  {item.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

     {/* ================= PREMIUM CTA ================= */}
<section className="pb-32 px-6">
  <div className="max-w-5xl mx-auto relative">

    {/* Glow background */}
    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/40 via-teal-400/30 to-emerald-500/40 blur-3xl rounded-3xl" />

    {/* Card */}
    <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-black rounded-3xl p-16 border border-emerald-400/30 shadow-[0_0_80px_rgba(16,185,129,0.25)] text-center">

      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
        Ready to Design Your Dream Landscape?
      </h2>

      <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg">
        Let our experts transform your outdoor vision into a stunning reality
        tailored perfectly to your lifestyle.
      </p>

      <a
        href="/contact"
        className="inline-flex items-center justify-center px-14 py-4 rounded-full font-semibold text-lg
                   bg-gradient-to-r from-emerald-400 to-teal-400 text-black
                   hover:from-emerald-300 hover:to-teal-300
                   shadow-lg shadow-emerald-500/40
                   transition-all duration-300 hover:scale-105"
      >
        Start Your Project
      </a>

    </div>
  </div>
</section>
</main>

  );
}

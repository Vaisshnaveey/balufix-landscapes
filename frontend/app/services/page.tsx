import Image from "next/image";

const sections = [
  {
    heading: "Hard Landscapes",
    image: "/hero/commercial.jpg",
    items: [
      "Pergola",
      "Gazebo",
      "Deck",
      "Pathway & Driveway",
      "Ornamental Stone Work",
    ],
  },
  {
    heading: "Soft Landscapes",
    image: "/hero/residential.jpg",
    items: [
      "Lawn Development",
      "Edges & Hedges",
      "Shrubberies",
      "Flower Beds",
      "Palmettum",
      "Arboretum",
    ],
  },
  {
    heading: "Water Features",
    image: "/hero/hospitality.jpg",
    items: [
      "Fountains",
      "Water Cascade",
      "Swimming Pool",
      "Water Bodies",
    ],
  },
  {
    heading: "Landscape Lighting System",
    image: "/hero/commercial.jpg",
    items: [
      "Pathway Lighting",
      "Driveway Lighting",
      "Plant Focus Lights",
      "Waterscape Lights",
    ],
  },
  {
    heading: "Irrigation Systems",
    image: "/hero/residential.jpg",
    items: [
      "Sprinkler Irrigation",
      "Drip Irrigation",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black text-white overflow-x-hidden">

      {/* ===== HEADER ===== */}
      <section className="py-20 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Our Landscape Services
        </h1>

        <p className="max-w-2xl mx-auto text-slate-300 text-base">
          Premium outdoor environments crafted with precision and timeless design.
        </p>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="max-w-7xl mx-auto px-6 pb-20 space-y-20">
        {sections.map((section, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          >
            {/* IMAGE */}
            <div className="relative h-[280px] rounded-2xl overflow-hidden border border-white/10 shadow-xl">
              <Image
                src={section.image}
                alt={section.heading}
                fill
                className="object-cover hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/25" />
            </div>

            {/* CONTENT */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-emerald-400 mb-5">
                {section.heading}
              </h2>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-slate-300 text-sm md:text-base">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* ===== CTA ===== */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto relative">

          <div className="absolute inset-0 bg-emerald-500/30 blur-3xl rounded-3xl" />

          <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-black rounded-3xl p-12 border border-emerald-400/30 shadow-xl text-center">

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Outdoors?
            </h2>

            <p className="text-slate-300 mb-8 text-base max-w-xl mx-auto">
              Let our experts craft a landscape that elevates your lifestyle.
            </p>

            <a
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-3 rounded-full font-semibold
                         bg-gradient-to-r from-emerald-400 to-teal-400 text-black
                         hover:from-emerald-300 hover:to-teal-300
                         shadow-md shadow-emerald-500/30
                         transition-all duration-300 hover:scale-105"
            >
              Book Consultation
            </a>

          </div>
        </div>
      </section>

    </main>
  );
}

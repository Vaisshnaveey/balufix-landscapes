"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

/* ================= HERO SLIDES ================= */

const slides = [
  {
    title: "Balufix Landscapes",
    category: "Luxury Residential",
    description:
      "A complete landscape redesign featuring native plantings and sustainable water features.",
    image: "/hero/residential.jpg",
  },
  {
    title: "Commercial Landscapes",
    category: "Commercial",
    description:
      "Creating inspiring outdoor workspaces with drought-resistant planting and clean design.",
    image: "/hero/commercial.jpg",
  },
  {
    title: "Hospitality Design",
    category: "Hospitality",
    description:
      "Luxury outdoor environments crafted to elevate guest experience year-round.",
    image: "/hero/hospitality.jpg",
  },
];

/* ================= SERVICES ================= */

const services = [
  {
    title: "Residential Landscape Architecture",
    description:
      "Bespoke residential landscapes designed to balance beauty, comfort, and sustainability.",
    image: "/hero/residential.jpg",
    link: "/projects/residential",
  },
  {
    title: "Commercial & Corporate Landscaping",
    description:
      "Professional landscape solutions for offices, campuses, and commercial developments.",
    image: "/hero/commercial.jpg",
    link: "/projects/commercial",
  },
  {
    title: "Resort & Hospitality Design",
    description:
      "Luxury outdoor environments that enhance guest experience and brand identity.",
    image: "/hero/hospitality.jpg",
    link: "/projects/hospitality",
  },
  {
    title: "Garden Renovation & Restoration",
    description:
      "Thoughtful restoration and modernization of existing gardens and landscapes.",
    image: "/hero/residential.jpg",
    link: "/projects/renovation",
  },
];

export default function Page() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () =>
    setCurrent((prev) => (prev + 1) % slides.length);

  const prev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <main className="w-full bg-gradient-to-br from-black via-slate-900 to-black text-slate-100">

      {/* ================= HERO ================= */}
      {/* NEGATIVE MARGIN cancels layout padding-top */}
      <section className="relative h-[95vh] w-full overflow-hidden -mt-20">

        {/* Background */}
        <Image
          src={slides[current].image}
          alt={slides[current].title}
          fill
          priority
          className="object-cover scale-105"
        />

        {/* Luxury Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <p className="uppercase tracking-widest text-emerald-400 mb-3">
            {slides[current].category}
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {slides[current].title}
          </h1>

          <p className="text-lg text-slate-300 max-w-xl mb-10">
            {slides[current].description}
          </p>

          <div className="flex gap-6 flex-wrap justify-center">
            <Link
              href="/contact"
              className="px-10 py-4 rounded-full font-semibold text-black
                         bg-gradient-to-r from-emerald-400 to-teal-400
                         hover:from-emerald-300 hover:to-teal-300
                         shadow-xl shadow-emerald-500/30
                         transition-all duration-300 hover:scale-105"
            >
              Start Your Project
            </Link>

            <Link
              href="/projects"
              className="px-10 py-4 rounded-full border border-white/30
                         hover:bg-white/10 transition"
            >
              View Portfolio
            </Link>
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/60 text-white text-3xl px-3 py-1 rounded hover:bg-black/80"
        >
          ‹
        </button>

        <button
          onClick={next}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/60 text-white text-3xl px-3 py-1 rounded hover:bg-black/80"
        >
          ›
        </button>
      </section>

      {/* ================= OUR EXPERTISE ================= */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden
                           border border-white/10 hover:border-emerald-400/40
                           shadow-xl transition hover:scale-[1.02]"
              >
                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-emerald-400 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <Link
                    href={service.link}
                    className="text-emerald-400 font-semibold hover:underline"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="pb-32 px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">
          Discover Our Complete Landscape Solutions
        </h2>

        <Link
          href="/services"
          className="inline-flex items-center justify-center px-14 py-4 rounded-full font-semibold text-lg
                     bg-gradient-to-r from-emerald-400 to-teal-400 text-black
                     hover:from-emerald-300 hover:to-teal-300
                     shadow-xl shadow-emerald-500/40
                     transition-all duration-300 hover:scale-105"
        >
          Explore Services
        </Link>
      </section>

    </main>
  );
}

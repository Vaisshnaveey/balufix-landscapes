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

  /* Auto slide every 5 seconds */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const next = () =>
    setCurrent((prev) => (prev + 1) % slides.length);

  const prev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <main className="w-full bg-slate-950 text-white">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            fill
            priority
            className="object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            {slides[current].title}
          </h1>

          <p className="uppercase tracking-widest text-green-400 font-semibold mb-2">
            {slides[current].category}
          </p>

          <p className="text-lg text-slate-200 max-w-xl mb-8">
            {slides[current].description}
          </p>

          <div className="flex gap-4 flex-wrap justify-center">
            <Link
              href="/contact"
              className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition"
            >
              Start Your Project
            </Link>

            <Link
              href="/projects"
              className="px-6 py-3 border border-slate-400 text-slate-200 rounded hover:bg-white hover:text-black transition"
            >
              View Portfolio
            </Link>
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/60 text-white text-3xl px-3 py-1 rounded"
        >
          ‹
        </button>

        <button
          onClick={next}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/60 text-white text-3xl px-3 py-1 rounded"
        >
          ›
        </button>
      </section>

      {/* ================= OUR EXPERTISE ================= */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Our Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-900 rounded-2xl shadow-xl border border-slate-800 overflow-hidden hover:border-green-600 transition"
              >
                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-green-400 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <Link
                    href={service.link}
                    className="text-green-400 font-semibold hover:underline"
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
      <section className="py-20 bg-slate-900 text-center border-t border-slate-800">
        <h2 className="text-3xl font-bold text-white mb-6">
          Discover Our Complete Landscape Solutions
        </h2>

        <Link
          href="/services"
          className="inline-block px-10 py-4 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition"
        >
          Explore Services
        </Link>
      </section>
    </main>
  );
}

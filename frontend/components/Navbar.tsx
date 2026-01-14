"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link
          href="/"
          className="text-2xl font-bold text-green-400 tracking-wide"
        >
          Balufix Landscapes
        </Link>

        {/* NAV LINKS */}
        <nav className="hidden md:flex gap-8 text-slate-200 font-medium">
          <Link href="/" className="hover:text-green-400 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-green-400 transition">
            About
          </Link>
          <Link href="/services" className="hover:text-green-400 transition">
            Services
          </Link>
          <Link href="/projects" className="hover:text-green-400 transition">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-green-400 transition">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

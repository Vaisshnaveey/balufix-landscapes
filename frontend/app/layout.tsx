import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Balufix Landscapes",
  description: "Luxury Landscape Architecture & Outdoor Design",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 min-h-screen">
        {/* NAVBAR */}
        <header className="fixed top-0 left-0 w-full z-50 bg-slate-900/90 backdrop-blur border-b border-slate-800">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="text-2xl font-bold text-green-400 tracking-wide"
            >
              Balufix Landscapes
            </Link>

            {/* Menu */}
            <div className="flex gap-8 text-slate-300 font-medium">
              <Link href="/" className="hover:text-green-400 transition">
                Home
              </Link>
              <Link href="/projects" className="hover:text-green-400 transition">
                Projects
              </Link>
              <Link href="/contact" className="hover:text-green-400 transition">
                Contact
              </Link>
            </div>
          </nav>
        </header>

        {/* PAGE CONTENT */}
        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}

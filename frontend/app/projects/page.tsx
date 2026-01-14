import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Residential Landscapes",
    image: "/hero/residential.jpg",
    link: "/projects/residential",
  },
  {
    title: "Commercial & Corporate",
    image: "/hero/commercial.jpg",
    link: "/projects/commercial",
  },
  {
    title: "Hospitality Design",
    image: "/hero/hospitality.jpg",
    link: "/projects/hospitality",
  },
  {
    title: "Garden Renovation",
    image: "/hero/residential.jpg",
    link: "/projects/renovation",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            Our Projects
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Explore our portfolio of thoughtfully designed landscapes across
            residential, commercial, hospitality, and restoration projects.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.link}
              className="group relative rounded-2xl overflow-hidden border border-slate-800 hover:border-green-500 transition"
            >
              <div className="relative h-80">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition" />
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-3xl font-bold text-white tracking-wide">
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { projectImages } from "@/lib/projectImages";

export default function ProjectCard({ project, priority = false }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative flex flex-col h-full rounded-2xl overflow-hidden bg-black corner-brackets border border-white/5 shadow-sm hover:shadow-premium hover:-translate-y-1.5 transition-all duration-500 ease-out"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={projectImages[project.image]}
          alt={project.title}
          fill
          priority={priority}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          sizes="(min-width: 1024px) 33vw, 90vw"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/30 to-transparent" />

        {/* Subtle top sheen on hover */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Category badge */}
        <span className="absolute top-4 left-4 rounded-full bg-gold-500 text-navy-900 text-[11px] font-semibold tracking-wide uppercase px-3 py-1 shadow-sm">
          {project.category}
        </span>

        {/* Arrow icon chip, appears on hover */}
        <span className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-2.5">
          <MapPin className="h-3.5 w-3.5 text-gold-400 shrink-0" />
          <span className="truncate">{project.location}</span>
        </div>

        <h3 className="font-display text-lg font-semibold text-white leading-snug group-hover:text-gold-400 transition-colors duration-300">
          {project.title}
        </h3>

        <div className="mt-auto">
          <div className="flex items-center justify-between mt-5 pt-4 border-t border-white/10">
            <div className="flex flex-col">
              <span className="text-[11px] uppercase tracking-wide text-slate-500 mb-0.5">
                Project Value
              </span>
              <span className="tick-number text-sm font-medium text-slate-200">
                {project.value}
              </span>
            </div>

            <span className="flex items-center gap-1 text-xs font-semibold text-gold-400">
              View Project
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </div>
      </div>

      {/* Bottom gold accent line on hover */}
      <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gold-400 group-hover:w-full transition-all duration-500 ease-out" />
    </Link>
  );
}
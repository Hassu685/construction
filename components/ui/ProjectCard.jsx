import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { projectImages } from "@/lib/projectImages";

export default function ProjectCard({ project, priority = false }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative flex flex-col rounded-2xl overflow-hidden bg-navy-900 corner-brackets shadow-sm hover:shadow-premium transition-shadow duration-500"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={projectImages[project.image]}
          alt={project.title}
          fill
          priority={priority}
          className="object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-110"
          sizes="(min-width: 1024px) 33vw, 90vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/10 to-transparent" />
        <span className="absolute top-4 left-4 rounded-full bg-[#004ab7] text-white text-xs font-semibold px-3 py-1">
          {project.category}
        </span>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-2">
          <MapPin className="h-3.5 w-3.5 text-[#004ab7]" />
          {project.location}
        </div>
        <h3 className="font-display text-lg font-semibold text-white group-hover:text-[#004ab7] transition-colors">
          {project.title}
        </h3>
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
          <span className="tick-number text-sm text-slate-300">{project.value}</span>
          <span className="flex items-center gap-1 text-xs font-semibold text-[#004ab7]">
            View Project
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

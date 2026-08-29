import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { projects } from "@/lib/data";

export default function ProjectsPreview() {
  const featured = projects.slice(0, 3);

  return (
    <section className="relative bg-white py-24 lg:py-32 overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.slate.200)_1px,transparent_0)] bg-[length:32px_32px] opacity-40 pointer-events-none" />
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gold-400/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-black/5 blur-3xl pointer-events-none" />

      <div className="container-px relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <SectionHeading
            eyebrow="Selected Work"
            title="Projects estimated and delivered with precision."
            description="A cross-section of residential, commercial and industrial developments across our four regions."
          />
          <Reveal>
            <Button href="/projects" variant="outline" className="shrink-0">
              View All Projects
            </Button>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.12}>
              <div className="group h-full rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-gold-400/50 transition-all duration-500 ease-out overflow-hidden">
                <ProjectCard project={project} priority={i === 0} />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom accent line */}
        <div className="mt-16 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-gold-400/60" />
          <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
          <span className="h-px w-12 bg-gold-400/60" />
        </div>
      </div>
    </section>
  );
}
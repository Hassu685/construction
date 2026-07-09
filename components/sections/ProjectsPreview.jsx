import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { projects } from "@/lib/data";

export default function ProjectsPreview() {
  const featured = projects.slice(0, 3);

  return (
    <section className="relative bg-navy-950 py-24 lg:py-32">
      <div className="container-px">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <SectionHeading
            eyebrow="Selected Work"
            title="Projects estimated and delivered with precision."
            description="A cross-section of residential, commercial and industrial developments across our four regions."
            light
          />
          <Reveal>
            <Button href="/projects" variant="outline">
              View All Projects
            </Button>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <ProjectCard key={project.slug} project={project} priority={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

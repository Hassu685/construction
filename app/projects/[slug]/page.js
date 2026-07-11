import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin, Calendar, DollarSign, Ruler } from "lucide-react";
import { projects } from "@/lib/data";
import { projectImages } from "@/lib/projectImages";
import Reveal from "@/components/ui/Reveal";
import ProjectCard from "@/components/ui/ProjectCard";
import Button from "@/components/ui/Button";
import CTABand from "@/components/sections/CTABand";

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const related = projects.filter((p) => p.slug !== slug && p.category === project.category).slice(0, 3);

  const facts = [
    { icon: MapPin, label: "Location", value: project.location },
    { icon: Calendar, label: "Year", value: project.year },
    { icon: DollarSign, label: "Project Value", value: project.value },
    { icon: Ruler, label: "Size", value: project.size },
  ];

  return (
    <>
      <section className="relative bg-navy-950 pt-36 pb-0 overflow-hidden">
        <div className="container-px relative pb-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-[#004ab7] transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
          <Reveal>
            <span className="eyebrow text-[#004ab7]">{project.category}</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display font-semibold text-white text-4xl sm:text-5xl mt-4 leading-[1.1]">
              {project.title}
            </h1>
          </Reveal>
        </div>
        <div className="relative aspect-[16/8] w-full">
          <Image
            src={projectImages[project.image]}
            alt={project.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/10 to-transparent" />
        </div>
      </section>

      <section className="bg-surface py-20 lg:py-28">
        <div className="container-px grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-navy-900 mb-5">Project Overview</h2>
              <p className="text-slate-600 leading-relaxed text-base">{project.description}</p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10 grid sm:grid-cols-2 gap-4">
                {[
                  "Full quantity takeoff across all divisions of work",
                  "Trade-coordinated cost estimate with regional pricing",
                  "Bid package assembly and submission support",
                  "Ongoing budget tracking through construction",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl bg-white border border-navy-900/8 p-4">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#004ab7] mt-2 shrink-0" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal direction="left">
            <div className="rounded-2xl bg-navy-900 p-7 sticky top-28">
              <h3 className="font-display text-white font-semibold mb-6">Project Facts</h3>
              <div className="flex flex-col gap-5">
                {facts.map((fact) => (
                  <div key={fact.label} className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-[#004ab7]">
                      <fact.icon className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-xs text-slate-400">{fact.label}</div>
                      <div className="text-sm text-white font-medium mt-0.5 tick-number">{fact.value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Button href="/contact" variant="primary" className="w-full justify-center mt-8">
                Start Your Estimate
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-navy-950 py-20 lg:py-28">
          <div className="container-px">
            <h2 className="font-display text-2xl font-semibold text-white mb-10">More {project.category} Projects</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABand />
    </>
  );
}

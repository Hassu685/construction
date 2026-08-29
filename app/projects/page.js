import PageHero from "@/components/sections/PageHero";
import ProjectsFilterGrid from "@/components/sections/ProjectsFilterGrid";
import CTABand from "@/components/sections/CTABand";

export const metadata = {
  title: "Projects",
  description:
    "Browse residential, commercial and industrial projects estimated and delivered by BuildNova across the USA, Canada, Australia and the Middle East.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Projects"
        title="A portfolio built on accurate numbers."
        description="Residential, commercial and industrial work spanning four regions — filter by category to explore."
      />
      <ProjectsFilterGrid />
      <CTABand />
    </>
  );
}

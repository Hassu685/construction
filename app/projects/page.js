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
        sliderImages={[
          {
            src: "https://images.unsplash.com/photo-1590644365607-1c5a8b5f8c9c?q=80&w=1400&auto=format&fit=crop",
            alt: "Aerial view of a large construction project",
          },
          {
            src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1400&auto=format&fit=crop",
            alt: "Modern commercial office tower under construction",
          },
          {
            src: "https://images.unsplash.com/photo-1553413077-190483e1c1e0?q=80&w=1400&auto=format&fit=crop",
            alt: "Industrial warehouse construction project",
          },
        ]}
      />
      <ProjectsFilterGrid />
      <CTABand />
    </>
  );
}

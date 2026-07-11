import PageHero from "@/components/sections/PageHero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Process from "@/components/sections/Process";
import CTABand from "@/components/sections/CTABand";

export const metadata = {
  title: "Services",
  description:
    "Explore Sigma Estimations' full range of construction estimating services, from quantity takeoff to project management and bid preparation.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Every service your bid team needs, in one place."
        description="From first takeoff to submission-ready bid package, our services are built around your deadline, not ours."
        sliderImages={[
          {
            src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1400&auto=format&fit=crop",
            alt: "Blueprint and construction drawings on a desk",
          },
          {
            src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1400&auto=format&fit=crop",
            alt: "Estimator working on quantity takeoff software",
          },
          {
            src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1400&auto=format&fit=crop",
            alt: "Construction site coordination meeting",
          },
        ]}
      />
      <ServicesGrid />
      <Process />
      <CTABand />
    </>
  );
}

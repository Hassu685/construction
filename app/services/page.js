import PageHero from "@/components/sections/PageHero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Process from "@/components/sections/Process";
import CTABand from "@/components/sections/CTABand";

export const metadata = {
  title: "Services",
  description:
    "Explore BuildNova's full range of construction estimating services, from quantity takeoff to project management and bid preparation.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Every service your bid team needs, in one place."
        description="From first takeoff to submission-ready bid package, our services are built around your deadline, not ours."
      />
      <ServicesGrid />
      <Process />
      <CTABand />
    </>
  );
}

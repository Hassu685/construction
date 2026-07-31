import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import ServicesGrid from "@/components/sections/ServicesGrid";
import AboutPreview from "@/components/sections/AboutPreview";
import WhyChoose from "@/components/sections/WhyChoose";
import Process from "@/components/sections/Process";
import ProjectsPreview from "@/components/sections/ProjectsPreview";
import TestimonialsSlider from "@/components/sections/TestimonialsSlider";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CTABand from "@/components/sections/CTABand";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <ServicesGrid limit={10} />
      <AboutPreview />
      <WhyChoose />
      <Process />
      <ProjectsPreview />
      <TestimonialsSlider />
      <FAQAccordion limit={5} showCTA={false} />
      <ContactSection/>
      <CTABand />
    </>
  );
}

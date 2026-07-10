import PageHero from "@/components/sections/PageHero";
import ContactSection from "@/components/sections/ContactSection";
import { Phone, Mail, MessageCircle } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with BuildNova Estimating & Construction for a free construction estimate or quantity takeoff quote.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's talk about your next project."
        description="Whether you need a full estimate or just a quick question answered, our team responds within one business day."
        sliderImages={[
          {
            src: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1400&auto=format&fit=crop",
            alt: "Modern office building exterior",
          },
          {
            src: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=1400&auto=format&fit=crop",
            alt: "Office reception and workspace",
          },
          {
            src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1400&auto=format&fit=crop",
            alt: "Team collaborating in a meeting room",
          },
        ]}
      />
      <ContactSection />
    </>
  );
}

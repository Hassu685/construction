import PageHero from "@/components/sections/PageHero";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CTABand from "@/components/sections/CTABand";

export const metadata = {
  title: "FAQ",
  description: "Answers to common questions about Sigma Estimations' construction estimating, quantity takeoff and bid preparation services.",
};

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Answers before you ask."
        description="Everything builders and developers typically want to know before sending over a drawing set."
        sliderImages={[
          {
            src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1400&auto=format&fit=crop",
            alt: "Consultant answering client questions over documents",
          },
          {
            src: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1400&auto=format&fit=crop",
            alt: "Team discussing a project timeline",
          },
          {
            src: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1400&auto=format&fit=crop",
            alt: "Office consultation about a construction estimate",
          },
        ]}
      />
      <FAQAccordion showCTA={false} />
      <CTABand />
    </>
  );
}

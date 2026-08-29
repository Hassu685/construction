import PageHero from "@/components/sections/PageHero";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CTABand from "@/components/sections/CTABand";

export const metadata = {
  title: "FAQ",
  description: "Answers to common questions about BuildNova's construction estimating, quantity takeoff and bid preparation services.",
};

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Answers before you ask."
        description="Everything builders and developers typically want to know before sending over a drawing set."
      />
      <FAQAccordion showHeading={false} />
      <CTABand />
    </>
  );
}

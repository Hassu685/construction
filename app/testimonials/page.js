import PageHero from "@/components/sections/PageHero";
import TestimonialsSlider from "@/components/sections/TestimonialsSlider";
import Reveal from "@/components/ui/Reveal";
import CTABand from "@/components/sections/CTABand";
import { testimonials } from "@/lib/data";
import { Star } from "lucide-react";

export const metadata = {
  title: "Testimonials",
  description: "Hear from builders, developers and contractors who rely on BuildNova for accurate construction estimating.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Client Testimonials"
        title="What builders say after working with us."
        description="Real feedback from the developers, architects and contractors who trust our numbers on every bid."
      />
      <TestimonialsSlider showHeading={false} />

      <section className="bg-navy-950 py-24 lg:py-32">
        <div className="container-px grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.08}>
              <div className="rounded-2xl glass p-7 h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="h-3.5 w-3.5 fill-gold-500 text-gold-500" />
                  ))}
                </div>
                <p className="text-slate-200 text-sm leading-relaxed flex-1">"{t.quote}"</p>
                <div className="mt-6 pt-5 border-t border-white/10">
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-slate-400 text-xs mt-0.5">{t.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}

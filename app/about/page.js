import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import WhyChoose from "@/components/sections/WhyChoose";
import CTABand from "@/components/sections/CTABand";
import { stats, timeline } from "@/lib/data";
import { Target, Eye } from "lucide-react";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Sigma Estimations — our mission, our engineers, and fifteen years of accurate construction estimating.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Sigma Estimations"
        title="Estimators and engineers who understand the job site."
        description="Fifteen years of construction estimating, quantity takeoff and project management built for builders who bid to win."
        sliderImages={[
          {
            src: "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?q=80&w=1400&auto=format&fit=crop",
            alt: "Sigma Estimations engineering team on a construction site",
          },
          {
            src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1400&auto=format&fit=crop",
            alt: "Team reviewing structural drawings",
          },
          {
            src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1400&auto=format&fit=crop",
            alt: "Engineer inspecting a job site",
          },
        ]}
      />

      {/* Mission & Vision */}
      <section className="bg-surface py-24 lg:py-32">
        <div className="container-px grid lg:grid-cols-2 gap-16 items-center">
          <Reveal direction="right" className="relative  rounded-2xl overflow-hidden">
            <div className="relative aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop"
                alt="Construction team reviewing structural plans"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 90vw"
              />
            </div>
          </Reveal>

          <div className="flex flex-col gap-10">
            <SectionHeading
              eyebrow="Mission &amp; Vision"
              title="Numbers your project team can build on."
            />
            <div className="flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#001D49] text-white">
                <Target className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display font-semibold text-navy-900 text-lg">Our Mission</h3>
                <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                  To give every builder, developer and contractor we work with an estimate accurate
                  enough to bid on with confidence — delivered fast enough to meet any deadline.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#001D49] text-white">
                <Eye className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display font-semibold text-navy-900 text-lg">Our Vision</h3>
                <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                  To be the estimating partner of choice for construction teams across North
                  America, Australia and the Middle East, known for precision at every scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy-900 py-16">
        <div className="container-px grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl sm:text-4xl font-semibold text-white tick-number">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs sm:text-sm text-slate-400 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-surface py-24 lg:py-32 bg-dot-grid-light">
        <div className="container-px">
          <SectionHeading
            eyebrow="Our Growth"
            title="Fifteen years of estimating milestones."
            align="center"
            className="mx-auto mb-16"
          />

          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-navy-900/10" />
            <div className="flex flex-col gap-10">
              {timeline.map((item, i) => (
                <Reveal key={item.year} delay={i * 0.05} className="relative pl-10">
                  <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full bg-[#004ab7] ring-4 ring-gold-500/20" />
                  <span className="tick-number text-[#004ab7] text-sm font-semibold">{item.year}</span>
                  <h3 className="font-display font-semibold text-navy-900 text-lg mt-1">{item.title}</h3>
                  <p className="text-slate-600 text-sm mt-1.5 leading-relaxed">{item.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WhyChoose />
      <CTABand />
    </>
  );
}

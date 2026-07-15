import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Button from "@/components/ui/Button";
import { teamHighlights } from "@/lib/data";
import { getIcon } from "@/lib/icons";

export default function AboutPreview() {
  return (
    <section className="relative bg-navy-950 py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-blueprint opacity-30 pointer-events-none" />
      <div className="container-px relative grid lg:grid-cols-2 gap-16 items-center">
        <Reveal direction="right">
          <div className="relative  rounded-2xl overflow-hidden">
            <div className="relative aspect-[4/3.8] w-full">
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop"
                alt="Engineer reviewing blueprints on site"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 90vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-2 -right-6 hidden sm:block glass rounded-2xl p-8 w-64">
              <div className="font-display text-4xl font-semibold text-white tick-number">
                <AnimatedCounter value={15} suffix="+" />
              </div>
              <div className="text-sm text-slate-300 mt-2">Years delivering accurate estimates</div>
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="About Sigma Estimations"
            title="Precision estimating built by people who've worked the job site."
            description="Sigma Estimations was founded on a simple premise: estimates should be accurate enough to bid on with confidence, and fast enough to keep your team moving. Today we support builders, developers and contractors across four continents."
            light
            titleClassName="!text-3xl sm:!text-4xl lg:!text-[2rem] text-white"
            descriptionClassName="!text-[12px] sm:!text-[13px] lg:!text-sm"
          />

          <div className="mt-10 grid grid-cols-2 gap-6">
            {teamHighlights.map((item) => {
              const Icon = getIcon(item.icon);
              const numericValue = parseInt(String(item.value).replace(/[^0-9]/g, ""), 10) || 0;
              const suffix = String(item.value).replace(/[0-9]/g, "");
              return (
                <div key={item.label} className="group flex items-start gap-3">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-[#004AB7] transition-all duration-300 ease-out group-hover:bg-[#004AB7] group-hover:border-[#004AB7] group-hover:scale-110">
                    <Icon
                      className="h-10 w-10 transition-all duration-300 ease-out group-hover:text-white group-hover:rotate-6"
                      strokeWidth={1.8}
                    />
                  </span>
                  <div>
                    <div className="font-display text-2xl font-semibold text-white">
                      <AnimatedCounter value={numericValue} suffix={suffix} />
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">{item.label}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10">
            <Button href="/about" variant="outline">
              More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
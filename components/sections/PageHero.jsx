import Reveal from "@/components/ui/Reveal";
import HeroImageSlider from "@/components/ui/HeroImageSlider";

export default function PageHero({ eyebrow, title, description, sliderImages }) {
  return (
    <section className="relative bg-navy-950 pt-40 pb-24 lg:pt-48 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-blueprint opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/40 via-navy-950/70 to-navy-950" />
      <div className="absolute top-1/3 right-[10%] h-56 w-56 rounded-full bg-[#004ab7]/10 blur-3xl animate-float pointer-events-none" />

      <div className="container-px relative grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-10 items-center">
        <div className="max-w-2xl">
          <Reveal>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-[#004ab7]" />
              <span className="eyebrow text-[#004ab7]">{eyebrow}</span>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display font-semibold text-white text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] tracking-tight">
              {title}
            </h1>
          </Reveal>
          {description && (
            <Reveal delay={0.16}>
              <p className="mt-6 text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">{description}</p>
            </Reveal>
          )}
        </div>

        <Reveal direction="left" delay={0.15} className="hidden lg:block h-[360px]">
          <HeroImageSlider images={sliderImages} interval={4000} />
        </Reveal>
      </div>
    </section>
  );
}

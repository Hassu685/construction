import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Button from "@/components/ui/Button";
import { teamHighlights } from "@/lib/data";
import { getIcon } from "@/lib/icons";

export default function AboutPreview() {
  return (
    <section className="relative bg-black py-24 lg:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.12),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-blueprint opacity-[0.07] pointer-events-none" />

      <div className="container-px relative grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

        {/* LEFT - IMAGE - CHANGED */}
        <Reveal direction="right">
          <div className="relative">
            {/* Gold border accent */}
            <div className="absolute -inset-3 rounded- bg-gradient-to-br from-gold-500/20 to-transparent blur-xl pointer-events-none" />

            <div className="relative rounded- overflow-hidden border border-white/10">
              <div className="relative aspect-[4/4] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1600&auto=format&fit=crop"
                  alt="Engineer checking blueprint in office"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 90vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/10 to-transparent mix-blend-overlay" />
              </div>
            </div>
          </div>
        </Reveal>

        {/* RIGHT - CONTENT */}
        <div className="lg:pl-4">
          <SectionHeading
            eyebrow="About BuildNova"
            title="We don't just estimate. We help you win."
            description="BuildNova was built by estimators who've been in your boots. We know a bid is more than numbers — it's your reputation. That's why every takeoff we deliver is accurate to the last stud, formatted to win, and ready before your deadline."
            light
          />

          <div className="mt-10 grid grid-cols-2 gap-5">
            {teamHighlights.map((item) => {
              const Icon = getIcon(item.icon);
              return (
                <div key={item.label} className="group flex items-start gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4 hover:bg-white/[0.05] hover:border-gold-500/20 transition-all duration-300">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] border border-white/10 text-gold-400 group-hover:bg-gold-500 group-hover:text-black transition-colors duration-300">
                    <Icon className="h- w-" />
                  </span>
                  <div>
                    <div className="font-display text-xl font-semibold text-white">{item.value}</div>
                    <div className="text-[10px] tracking-widest uppercase text-slate-400 mt-1">{item.label}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex items-center gap-4">
            <Button href="/about" variant="primary">
              More About Us
            </Button>
            <div className="hidden sm:flex items-center gap-3 text-sm text-slate-400">
              <div className="flex -space-x-2">
                <div className="h-8 w-8 rounded-full bg-slate-700 border-2 border-black" />
                <div className="h-8 w-8 rounded-full bg-slate-600 border-2 border-black" />
                <div className="h-8 w-8 rounded-full bg-gold-500 border-2 border-black flex items-center justify-center text- text-black font-bold">4k+</div>
              </div>
              <span>Trusted by contractors</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
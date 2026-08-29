import Reveal from "@/components/ui/Reveal";

export default function PageHero({ eyebrow, title, description, image }) {
  return (
    <section className="relative bg-black pt-40 pb-24 lg:pt-48 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-blueprint opacity-30" />
      {image && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black" />
      <div className="absolute top-1/3 right-[10%] h-56 w-56 rounded-full bg-gold-500/10 blur-3xl animate-float pointer-events-none" />

      <div className="container-px relative max-w-3xl">
        <Reveal>
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-gold-500" />
            <span className="eyebrow text-gold-400">{eyebrow}</span>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="font-display font-semibold text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.16}>
            <p className="mt-6 text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">{description}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}

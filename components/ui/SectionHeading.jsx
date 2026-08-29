import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className = "",
}) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-5 max-w-2xl ${alignment} ${className}`}>
      {eyebrow && (
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-gold-500" />
            <span className={`eyebrow ${light ? "text-gold-400" : "text-gold-600"}`}>{eyebrow}</span>
            <span className="h-px w-8 bg-gold-500" />
          </div>
        </Reveal>
      )}
      {title && (
        <Reveal delay={0.08}>
          <h2
            className={`font-display font-semibold tracking-tight text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] ${
              light ? "text-white" : "text-navy-900"
            }`}
          >
            {title}
          </h2>
        </Reveal>
      )}
      {description && (
        <Reveal delay={0.16}>
          <p className={`text-base sm:text-lg leading-relaxed ${light ? "text-slate-300" : "text-slate-600"}`}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}

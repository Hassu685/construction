import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className = "",
   titleClassName = "",
  descriptionClassName = ""
}) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-5 max-w-2xl ${alignment} ${className}`}>
      {eyebrow && (
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#004ab7]" />
            <span className={`eyebrow ${light ? "text-[#004AB7]" : "text-[#004ab7]"}`}>{eyebrow}</span>
            <span className="h-px w-8 bg-[#004ab7]" />
          </div>
        </Reveal>
      )}
      {title && (
        <Reveal delay={0.08}>
          <h2
            style={{ lineHeight: 1.2 }}
            className={`font-display font-semibold text-3xl sm:text-4xl lg:text-[2.50rem] tracking-normal ${light ? "text-white" : "text-navy-900"
              }${titleClassName}`}
          >
            {title}
          </h2>
        </Reveal>
      )}
      {description && (
        <Reveal delay={0.16}>
          <p className={`text-base sm:text-lg leading-relaxed ${light ? "text-slate-300" : "text-slate-600"} ${descriptionClassName}`}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
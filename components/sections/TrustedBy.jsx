import { trustedCompanies } from "@/lib/data";

export default function TrustedBy() {
  const items = [...trustedCompanies, ...trustedCompanies];

  return (
    <section className="relative bg-black py-12 overflow-hidden border-y border-white/5">
      <div className="container-px mb-8">
        <p className="eyebrow text-center text-slate-500">Trusted by leading builders &amp; developers</p>
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-300 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-300 to-transparent z-10" />
        <div className="marquee-track animate-marquee">
          {items.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex items-center justify-center px-10 shrink-0 grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
            >
              <span className="font-display text-xl sm:text-2xl font-semibold text-slate-300 whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

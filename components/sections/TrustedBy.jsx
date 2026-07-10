import { trustedCompanies } from "@/lib/data";
import { getIcon } from "@/lib/icons";

export default function TrustedBy() {
  const items = [...trustedCompanies, ...trustedCompanies];

  return (
    <section className="relative bg-navy-900 py-12 overflow-hidden border-y border-white/5">
      <div className="container-px mb-8">
        <p className="eyebrow text-center text-slate-500">Trusted by leading builders &amp; developers</p>
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-navy-900 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-navy-900 to-transparent z-10" />
        <div className="marquee-track animate-marquee">
          {items.map((company, i) => {
            const Icon = getIcon(company.icon);
            return (
              <div
                key={`${company.name}-${i}`}
                className="flex items-center gap-3 px-10 shrink-0 grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-gold-400">
                  <Icon className="h-4 w-4" strokeWidth={1.8} />
                </span>
                <span className="font-display text-xl sm:text-2xl font-semibold text-slate-300 whitespace-nowrap">
                  {company.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

export default function CTABand() {
  return (
    <section className="relative bg-navy-950 py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/construction-site.jpg')" }}
      />
      <div className="absolute inset-0 bg-navy-950/85" />
      <div className="absolute inset-0 bg-blueprint opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-[#004ab7]/10 blur-3xl" />
      <div className="container-px relative text-center max-w-2xl mx-auto">
        <Reveal>
          <span className="eyebrow text-[#004ab7]">Ready When You Are</span>
        </Reveal>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[35px] font-semibold text-white mt-5 leading-[1.1] max-w-xl text-balance">
            Get an accurate estimate before your next bid deadline.
          </h2>
        <Reveal delay={0.16}>
          <p className="text-slate-300 mt-5 text-base sm:text-lg">
            Send us your drawing set and receive a detailed, reviewed estimate — most projects within 72 hours.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="primary" className="!text-white !bg-[#004AB7] hover:!bg-[#05408C]">
              Get Free Estimate
            </Button>
            <Button href="/services" variant="outline">
              Explore Services
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
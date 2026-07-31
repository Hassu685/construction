import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SampleCard from "@/components/ui/SampleCard";
import { samples } from "@/lib/data";

export default function SamplesPreview() {
  const featured = samples.slice(0, 4);

  return (
    <section className="relative bg-navy-950 py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-blueprint opacity-20 pointer-events-none" />
      <div className="container-px relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <SectionHeading
            eyebrow="Sample Reports"
            title="Real estimates and takeoffs, ready to download."
            description="Code-compliant sample reports across our core trades — see the level of detail your project team can expect on bid day."
            light
          />
          <Reveal>
            <Button href="/samples" variant="outline">
              View All Samples
            </Button>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((sample, i) => (
            <Reveal key={sample.title} delay={i * 0.08}>
              <SampleCard sample={sample} priority={i === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
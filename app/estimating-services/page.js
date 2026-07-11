import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import CTABand from "@/components/sections/CTABand";
import { CheckCircle2, FileSpreadsheet, LayoutGrid, ScanLine } from "lucide-react";

export const metadata = {
  title: "Estimating Services",
  description:
    "Preliminary, detailed and control estimates delivered by Sigma Estimations' engineering team, using digital takeoff software calibrated to regional pricing.",
};

const estimateTypes = [
  {
    icon: LayoutGrid,
    title: "Preliminary Estimates",
    accuracy: "±15–20% accuracy",
    description:
      "Early-stage budget ranges built from conceptual drawings, ideal for feasibility studies and initial developer decisions.",
    deliverables: ["Order-of-magnitude budget", "Cost per square foot benchmark", "Risk and contingency notes"],
  },
  {
    icon: ScanLine,
    title: "Detailed Estimates",
    accuracy: "±5–8% accuracy",
    description:
      "Line-item estimates built from full construction documents, used for competitive bidding and lender submissions.",
    deliverables: ["Full quantity takeoff", "Trade-by-trade cost breakdown", "Labor and material split"],
  },
  {
    icon: FileSpreadsheet,
    title: "Control Estimates",
    accuracy: "±2–5% accuracy",
    description:
      "Baseline budgets used to track cost performance throughout construction, updated as change orders occur.",
    deliverables: ["Cost-loaded schedule", "Change order tracking log", "Monthly variance reporting"],
  },
];

const tools = [
  "PlanSwift & Bluebeam takeoff",
  "Procore cost integration",
  "Revit / BIM 360 coordination",
  "RSMeans regional cost data",
  "Custom Excel cost models",
  "CSI MasterFormat structuring",
];

export default function EstimatingServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Estimating Services"
        title="Estimates calibrated to the stage your project is in."
        description="Not every estimate needs the same accuracy. We match the estimating method to your project phase, so you're never paying for more detail than the decision requires."
        sliderImages={[
          {
            src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1400&auto=format&fit=crop",
            alt: "Engineer measuring construction blueprints with a calculator",
          },
          {
            src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1400&auto=format&fit=crop",
            alt: "Cost estimator reviewing spreadsheets",
          },
          {
            src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1400&auto=format&fit=crop",
            alt: "Architectural plans and takeoff tools",
          },
        ]}
      />

      <section className="bg-surface py-24 lg:py-32 bg-dot-grid-light">
        <div className="container-px">
          <SectionHeading
            eyebrow="Estimate Types"
            title="Three estimate types, one consistent process."
            align="center"
            className="mx-auto mb-16"
          />

          <div className="grid lg:grid-cols-3 gap-6">
            {estimateTypes.map((type, i) => (
              <Reveal key={type.title} delay={i * 0.08}>
                <div className="rounded-2xl bg-white border border-navy-900/8 p-8 h-full flex flex-col">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-gold-400">
                    <type.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-navy-900 mt-6">{type.title}</h3>
                  <span className="eyebrow text-gold-600 mt-2">{type.accuracy}</span>
                  <p className="text-sm text-slate-600 mt-4 leading-relaxed">{type.description}</p>
                  <ul className="mt-6 flex flex-col gap-2.5">
                    {type.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0 mt-0.5" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-navy-950 py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-blueprint opacity-30" />
        <div className="container-px relative grid lg:grid-cols-2 gap-16 items-center">
          <SectionHeading
            eyebrow="Tools &amp; Standards"
            title="Built on the software your team already trusts."
            description="Our estimators work directly inside the platforms your project team uses, so handoff is seamless and nothing gets lost in translation."
            light
          />
          <div className="grid sm:grid-cols-2 gap-4">
            {tools.map((tool, i) => (
              <Reveal key={tool} delay={i * 0.06}>
                <div className="flex items-center gap-3 rounded-xl glass px-5 py-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-500 shrink-0" />
                  <span className="text-sm text-slate-200">{tool}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}

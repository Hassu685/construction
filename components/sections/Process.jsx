"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { processSteps } from "@/lib/data";
import { getIcon } from "@/lib/icons";

export default function Process() {
  return (
    <section className="relative bg-navy-900 py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-blueprint opacity-30 pointer-events-none" />
      <div className="container-px relative">
        <SectionHeading
          eyebrow="Our Process"
          title="Six steps from drawing set to bid-ready estimate."
          description="A repeatable, transparent process so you always know where your project stands."
          align="center"
          light
          className="mx-auto mb-20"
        />

        <div className="relative">
          <div className="hidden lg:block absolute top-[26px] left-0 right-0 h-px bg-white/10" />
          <div className="grid lg:grid-cols-6 gap-10 lg:gap-6">
            {processSteps.map((step, i) => {
              const Icon = getIcon(step.icon);
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative flex flex-col"
                >
                  <div className="relative z-10 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-navy-900 border border-gold-500/50 text-gold-400">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <span className="tick-number text-gold-500/70 text-xs mt-4">{step.number}</span>
                  <h3 className="font-display text-white text-base font-semibold mt-1.5">{step.title}</h3>
                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

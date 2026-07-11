"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { whyChoose } from "@/lib/data";
import { getIcon } from "@/lib/icons";

export default function WhyChoose() {
  return (
    <section className="relative bg-surface py-24 lg:py-32 bg-diagonal">
      <div className="container-px">
        <SectionHeading
          eyebrow="Why Sigma Estimations"
          title="The estimating partner your bid team can rely on."
          description="We built our process around the two things that matter most on a bid deadline: accuracy and speed."
          align="center"
          className="mx-auto mb-16"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChoose.map((item, i) => {
            const Icon = getIcon(item.icon);
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-2xl bg-white border border-navy-900/8 p-8 text-center flex flex-col items-center lift-hover hover:border-gold-500/40"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900/5 text-navy-900">
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </span>
                <h3 className="mt-6 font-display text-lg font-semibold text-navy-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

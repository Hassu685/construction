"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { whyChoose } from "@/lib/data";
import { getIcon } from "@/lib/icons";

export default function WhyChoose() {
  return (
    <section className="relative bg-[#F8F7F3] py-24 lg:py-32 overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="container-px relative">
        <SectionHeading
          eyebrow="Why BuildNova"
          title="The estimating partner your bid team can actually rely on."
          description="We engineered our workflow around what matters when the bid clock is ticking: pinpoint accuracy and on-time delivery."
          align="center"
          className="mx-auto mb-16 max-w-2xl"
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
                className="group relative rounded- bg-white border border-black/[0.06] p-8 flex flex-col items-start text-left overflow-hidden hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-500"
              >
                {/* Top gold line */}
                <div className="absolute top-0 left-8 right-8 h-px bg-black scale-x-0 group-hover:scale-x-100 group-hover:bg-gold-500 transition-all duration-500 origin-left" />

                {/* Icon - BLACK BG as you asked */}
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white group-hover:bg-gold-500 group-hover:text-black transition-colors duration-300">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </span>

                <h3 className="mt-6 font-display text- font-semibold leading-tight text-black">
                  {item.title}
                </h3>
                <p className="mt-3 text- text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                {/* Bottom number */}
                <div className="mt-8 flex items-center gap-2 text- tracking-widest uppercase text-black/30">
                  <span className="h-px w-6 bg-black/20 group-hover:bg-gold-500 group-hover:w-10 transition-all duration-300" />
                  0{i + 1} / 0{whyChoose.length}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
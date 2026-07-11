"use client";

import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data";

const categories = ["All", "Residential", "Commercial", "Industrial"];

export default function ProjectsFilterGrid() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="bg-surface py-24 lg:py-32 bg-diagonal">
      <div className="container-px">
        <LayoutGroup>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-500 ${
                  active === cat ? "text-navy-900" : "text-slate-500 hover:text-navy-900"
                }`}
              >
                {active === cat && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-[#004ab7]"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>

          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  );
}

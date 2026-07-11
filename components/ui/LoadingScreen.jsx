"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "@/components/ui/Logo";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy-950"
        >
          <div className="absolute inset-0 bg-blueprint opacity-50" />
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col items-center gap-5"
          >
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Logo className="h-16 w-16" />
            </motion.div>
            <div className="font-display text-2xl font-semibold text-white tracking-tight">
              Sigma <span className="text-[#004ab7]">Estimations</span>
            </div>
            <div className="relative h-[2px] w-40 bg-white/10 overflow-hidden rounded-full">
              <motion.span
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-gold-400 to-transparent"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

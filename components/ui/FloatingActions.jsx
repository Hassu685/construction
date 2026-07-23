"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { siteConfig } from "@/lib/data";

function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" {...props}>
      <path d="M16.02 2.667c-7.363 0-13.353 5.99-13.353 13.353 0 2.354.615 4.65 1.782 6.671L2.667 29.333l6.79-1.78a13.29 13.29 0 0 0 6.56 1.72h.006c7.362 0 13.353-5.99 13.353-13.353 0-3.567-1.389-6.92-3.91-9.44a13.26 13.26 0 0 0-9.44-3.913Zm0 24.42h-.005a11.08 11.08 0 0 1-5.65-1.548l-.405-.24-4.03 1.057 1.076-3.928-.264-.404a11.05 11.05 0 0 1-1.694-5.905c0-6.11 4.972-11.08 11.078-11.08a11 11 0 0 1 7.834 3.248 11 11 0 0 1 3.24 7.837c0 6.11-4.972 11.078-11.08 11.078v-.115Zm6.077-8.294c-.333-.167-1.97-.972-2.276-1.083-.305-.111-.527-.167-.75.167-.222.333-.86 1.083-1.054 1.305-.194.222-.389.25-.722.083-.333-.167-1.406-.518-2.678-1.652-.99-.883-1.658-1.973-1.852-2.306-.194-.334-.02-.514.146-.68.15-.15.334-.389.5-.583.167-.195.222-.334.333-.556.111-.223.056-.417-.028-.584-.083-.166-.75-1.805-1.027-2.472-.27-.65-.545-.562-.75-.573l-.639-.011c-.222 0-.583.083-.888.417-.306.333-1.166 1.14-1.166 2.778s1.194 3.222 1.36 3.444c.166.223 2.35 3.588 5.694 5.03.795.344 1.415.55 1.899.703.798.254 1.523.218 2.098.132.64-.095 1.97-.805 2.247-1.583.278-.778.278-1.445.194-1.584-.083-.14-.305-.222-.638-.389Z" />
    </svg>
  );
}

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 16, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.8 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={scrollToTop}
            aria-label="Back to top"
            data-cursor-hover
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="group flex h-14 w-14 items-center justify-center rounded-full bg-navy-900 text-[#004ab7] border border-white/10 shadow-premium hover:bg-[#004ab7] hover:border-[#004ab7] hover:text-white hover:shadow-[0_16px_40px_-10px_rgba(0,74,183,0.5)] transition-colors duration-500 ease-out"
          >
            <motion.span
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              className="flex"
            >
              <ArrowUp className="h-[18px] w-[18px] transition-transform duration-300 ease-out group-hover:-translate-y-0.5" />
            </motion.span>
          </motion.button>
        )}
      </AnimatePresence>

      <motion.a
        href={`https://wa.me/${siteConfig.phone.replace(/[^\d]/g, "")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        data-cursor-hover
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 1.08, y: -3 }}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_36px_-12px_rgba(37,211,102,0.6)] transition-shadow duration-500 hover:shadow-[0_18px_44px_-12px_rgba(37,211,102,0.75)]"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <WhatsAppIcon className="h-7 w-7 relative" />
      </motion.a>
    </div>
  );
}

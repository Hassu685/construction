"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const defaultImages = [
  {
    src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1400&auto=format&fit=crop",
    alt: "High-rise steel frame construction at dusk",
  },
  {
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1400&auto=format&fit=crop",
    alt: "Engineer reviewing blueprints on site",
  },
  {
    src: "https://images.unsplash.com/photo-1590644365607-1c5a8b5f8c9c?q=80&w=1400&auto=format&fit=crop",
    alt: "Crane on a commercial construction site",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop",
    alt: "Modern residential construction project",
  },
];

export default function HeroImageSlider({ interval = 4500, images = defaultImages }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [images]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [interval, images.length]);

  return (
    <div className="relative w-full h-full rounded-[2rem] overflow-hidden corner-brackets">
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.12 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.4, ease: [0.16, 1, 0.3, 1] },
            scale: { duration: interval / 1000 + 1.4, ease: "easeOut" },
          }}
          className="absolute inset-0"
        >
          <Image
            src={images[index].src}
            alt={images[index].alt}
            fill
            priority={index === 0}
            className="object-cover"
            sizes="(min-width: 1024px) 45vw, 100vw"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-navy-950/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/30 via-transparent to-transparent" />

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Show slide ${i + 1}`}
            data-cursor-hover
            className="relative h-1.5 rounded-full bg-white/30 overflow-hidden transition-all duration-500"
            style={{ width: i === index ? 28 : 6 }}
          >
            {i === index && (
              <motion.span
                layoutId="slider-dot"
                className="absolute inset-0 bg-[#004ab7] rounded-full"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

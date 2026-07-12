"use client";

import { useRef, useState } from "react";
import Image from "next/image";

export default function HeroColorReveal() {
  const containerRef = useRef(null);
  const [pos, setPos] = useState({ x: 50, y: 30 });
  const [active, setActive] = useState(false);

  const handleMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMove}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      data-cursor-hover
      className="relative w-full h-full rounded-[2rem] overflow-hidden "
    >
      {/* Grayscale base image — always visible */}
      <Image
        src="/images/hero-building-bw.jpg"
        alt="Modern architecture in black and white"
        fill
        priority
        className="object-cover"
        sizes="(min-width: 1024px) 45vw, 100vw"
      />

      {/* Color image, revealed only inside a soft circle that follows the cursor */}
      <div
        className="absolute inset-0 transition-opacity duration-500 ease-out"
        style={{
          opacity: active ? 1 : 0,
          maskImage: `radial-gradient(circle 230px at ${pos.x}% ${pos.y}%, black 40%, transparent 78%)`,
          WebkitMaskImage: `radial-gradient(circle 230px at ${pos.x}% ${pos.y}%, black 40%, transparent 78%)`,
        }}
      >
        <Image
          src="/images/hero-building-color.jpg"
          alt="Modern architecture in color"
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 45vw, 100vw"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-navy-950/10 pointer-events-none" />
    </div>
  );
}

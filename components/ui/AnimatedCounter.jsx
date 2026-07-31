"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

export default function AnimatedCounter({ value, suffix = "", duration = 1.6, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView || !ref.current) return;

    const node = ref.current;
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(latest) {
        node.textContent = Math.round(latest).toString();
      },
      onComplete() {
        // guarantee it always lands exactly on the real value, no off-by-one
        node.textContent = value.toString();
      },
    });

    return () => controls.stop();
  }, [isInView, value, duration]);

  return (
    <span className={className}>
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
}
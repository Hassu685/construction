"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const [nativeCursor, setNativeCursor] = useState(false);

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useSpring(dotX, { stiffness: 260, damping: 28, mass: 0.6 });
  const ringY = useSpring(dotY, { stiffness: 260, damping: 28, mass: 0.6 });

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    setEnabled(isFinePointer);
    if (!isFinePointer) return;

    const move = (e) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const over = (e) => {
      const navLink = e.target.closest?.("nav a, nav button");
      if (navLink) {
        setNativeCursor(true);
        setHovering(false);
        return;
      }
      setNativeCursor(false);

      const target = e.target.closest?.(
        "a, button, input, textarea, select, [role='button'], [data-cursor-hover]"
      );
      setHovering(Boolean(target));
    };

    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    document.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.removeEventListener("mouseleave", leave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.body.classList.toggle("cursor-native-active", nativeCursor);
    return () => document.body.classList.remove("cursor-native-active");
  }, [nativeCursor]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="cursor-dot"
        style={{ x: dotX, y: dotY }}
        animate={{ opacity: visible && !nativeCursor ? 1 : 0, scale: 1 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      />
      <motion.div
        className="cursor-ring"
        style={{ x: ringX, y: ringY }}
        animate={{
          opacity: visible && !nativeCursor ? 1 : 0,
          scale: hovering ? 1.4 : 1,
          backgroundColor: hovering ? "rgba(47,102,222,0.12)" : "rgba(47,102,222,0)",
          borderColor: hovering ? "rgba(47,102,222,0.85)" : "rgba(47,102,222,0.55)",
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      />
    </>
  );
}
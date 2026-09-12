"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffectiveReducedMotion } from "@/components/accessibility-provider";

const SIZE = 420;

export function CursorGlow() {
  const reduceMotion = useEffectiveReducedMotion();
  const [enabled, setEnabled] = useState(false);

  const x = useMotionValue(-SIZE);
  const y = useMotionValue(-SIZE);
  const springX = useSpring(x, { stiffness: 200, damping: 30, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 200, damping: 30, mass: 0.5 });
  const left = useTransform(springX, (v) => v - SIZE / 2);
  const top = useTransform(springY, (v) => v - SIZE / 2);

  useEffect(() => {
    if (reduceMotion) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);

    function handleMove(e: PointerEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
    }
    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, [reduceMotion, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed z-40 rounded-full"
      style={{
        left,
        top,
        width: SIZE,
        height: SIZE,
        background:
          "radial-gradient(circle, rgba(0,240,217,0.28) 0%, rgba(0,240,217,0.10) 45%, transparent 72%)",
        mixBlendMode: "screen",
      }}
    />
  );
}

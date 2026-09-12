"use client";

import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffectiveReducedMotion } from "@/components/accessibility-provider";

/**
 * Page-wide circuit backdrop that powers up as the visitor scrolls: dark and
 * inert at the top, fully lit by the footer. Only opacity and transform are
 * animated (both GPU-composited) — the dim base layer's filter is static.
 */
export function NeonBackdrop() {
  const reduceMotion = useEffectiveReducedMotion();
  const { scrollYProgress } = useScroll();
  const power = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 26,
    restDelta: 0.0005,
  });

  const driftX = useMotionValue(0);
  const driftY = useMotionValue(0);
  const smoothX = useSpring(driftX, { stiffness: 40, damping: 24, mass: 0.9 });
  const smoothY = useSpring(driftY, { stiffness: 40, damping: 24, mass: 0.9 });

  useEffect(() => {
    if (reduceMotion) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    function handleMove(e: PointerEvent) {
      driftX.set((e.clientX / window.innerWidth - 0.5) * -28);
      driftY.set((e.clientY / window.innerHeight - 0.5) * -20);
    }
    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, [reduceMotion, driftX, driftY]);

  // Deliberately back-loaded: the middle of the page carries the most body
  // copy, so the circuit stays a faint texture there and saves the real
  // ignition for the closing stretch, where the scrims protect contrast.
  const litOpacity = useTransform(
    power,
    [0, 0.35, 0.72, 0.9, 1],
    [0.05, 0.12, 0.24, 0.52, 0.82],
  );
  const bloomOpacity = useTransform(power, [0, 0.7, 0.92, 1], [0, 0.06, 0.26, 0.46]);
  const scale = useTransform(power, [0, 1], [0.93, 1.06]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 flex items-center justify-center overflow-hidden"
    >
      <motion.div
        className="relative aspect-square w-[min(155vw,1150px)]"
        style={
          reduceMotion
            ? undefined
            : { x: smoothX, y: smoothY, scale }
        }
      >
        {/* unpowered: etched into the background, no animation */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/neon-circuit.webp"
          alt=""
          width={800}
          height={800}
          decoding="async"
          fetchPriority="low"
          className="absolute inset-0 h-full w-full object-contain opacity-20 [filter:grayscale(1)_brightness(0.4)]"
        />
        {/* powered: opacity rises with scroll depth */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <motion.img
          src="/brand/neon-circuit.webp"
          alt=""
          width={800}
          height={800}
          decoding="async"
          fetchPriority="low"
          className="absolute inset-0 h-full w-full object-contain"
          style={{ opacity: reduceMotion ? 0.34 : litOpacity }}
        />
      </motion.div>

      {/* ambient bloom once the circuit is carrying current */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_54%,rgba(0,240,217,0.20),transparent_60%)]"
        style={{ opacity: reduceMotion ? 0.12 : bloomOpacity }}
      />
    </div>
  );
}

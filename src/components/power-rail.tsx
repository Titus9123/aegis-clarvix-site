"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffectiveReducedMotion } from "@/components/accessibility-provider";

/**
 * Instrument readout for the backdrop's power level. It reads as a system
 * gauge rather than a progress bar: the page is a scan that energises as you
 * go, and this says how far along it is.
 */
export function PowerRail() {
  const reduceMotion = useEffectiveReducedMotion();
  const { scrollYProgress } = useScroll();
  const power = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 26,
    restDelta: 0.0005,
  });
  const fillScale = useTransform(power, [0, 1], [0.02, 1]);
  const glowOpacity = useTransform(power, [0, 0.5, 1], [0.25, 0.6, 1]);
  const labelRef = useRef<HTMLSpanElement>(null);
  // The gauge is desktop-only. Gating on state rather than just a `hidden`
  // class keeps phones from running a per-frame scroll subscription for an
  // element they never see.
  const [onWideScreen, setOnWideScreen] = useState(false);

  useEffect(() => {
    // The gauge sits in the page margin. The content column is max-w-6xl
    // (1152px), so below ~1280px there is no margin and it would overlap the
    // text — in RTL it lands directly on top of it.
    const query = window.matchMedia("(min-width: 1280px) and (pointer: fine)");
    const sync = () => setOnWideScreen(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!onWideScreen || reduceMotion) return;
    // Written straight to the DOM: a percentage that changes every frame
    // should not re-render React on every frame.
    const unsubscribe = power.on("change", (v) => {
      if (labelRef.current) {
        labelRef.current.textContent = `${Math.round(Math.min(Math.max(v, 0), 1) * 100)}`;
      }
    });
    return unsubscribe;
  }, [power, onWideScreen, reduceMotion]);

  if (reduceMotion || !onWideScreen) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed start-4 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-center gap-3 rounded-full border border-border/50 bg-background/60 px-2.5 py-4 backdrop-blur-sm xl:flex"
    >
      <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
        PWR
      </span>

      <div className="relative h-40 w-px bg-border">
        <motion.div
          className="absolute inset-x-0 bottom-0 h-full origin-bottom bg-gradient-to-t from-primary/30 via-primary/80 to-primary"
          style={{ scaleY: fillScale }}
        />
        <motion.div
          className="absolute -inset-x-[3px] bottom-0 h-full origin-bottom rounded-full bg-primary/40 blur-[3px]"
          style={{ scaleY: fillScale, opacity: glowOpacity }}
        />
      </div>

      <span className="font-mono text-[10px] tabular-nums text-primary/80">
        <span ref={labelRef}>0</span>%
      </span>
    </div>
  );
}

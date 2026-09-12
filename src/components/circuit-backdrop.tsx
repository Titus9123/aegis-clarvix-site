"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffectiveReducedMotion } from "@/components/accessibility-provider";

export function CircuitBackdrop({ className }: { className?: string }) {
  const reduceMotion = useEffectiveReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [interactive, setInteractive] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 60, damping: 20, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 60, damping: 20, mass: 0.6 });

  useEffect(() => {
    if (reduceMotion) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setInteractive(true);

    function handleMove(e: PointerEvent) {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      const relY = (e.clientY - rect.top) / rect.height - 0.5;
      x.set(relX * -18);
      y.set(relY * -14);
    }
    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, [reduceMotion, x, y]);

  return (
    <div ref={containerRef} className={className}>
      <motion.svg
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="h-full w-full"
        style={interactive ? { x: springX, y: springY } : undefined}
        initial={{ opacity: 0.35 }}
        animate={reduceMotion ? { opacity: 0.35 } : { opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <g stroke="#00F0D9" strokeWidth="1.5" opacity="0.35">
          <path d="M0 120H220V60H460V180H800" />
          <path d="M0 340H160V420H520V300H800" />
          <path d="M60 0V220H340V420" />
          <path d="M720 0V160H480V500H720V600" />
          <path d="M180 600V480H620" />
        </g>
        <g fill="#00F0D9">
          <circle cx="220" cy="120" r="4" />
          <circle cx="460" cy="60" r="4" />
          <circle cx="460" cy="180" r="4" />
          <circle cx="160" cy="340" r="4" />
          <circle cx="160" cy="420" r="4" />
          <circle cx="520" cy="420" r="4" />
          <circle cx="520" cy="300" r="4" />
          <circle cx="60" cy="220" r="4" />
          <circle cx="480" cy="160" r="4" />
          <circle cx="480" cy="500" r="4" />
          <circle cx="720" cy="160" r="4" />
          <circle cx="720" cy="500" r="4" />
          <circle cx="180" cy="480" r="4" />
        </g>
        {/* accent nodes: bronze against the turquoise circuit for palette contrast */}
        <g fill="#C68C53">
          <circle cx="340" cy="220" r="4.5" />
          <circle cx="340" cy="420" r="4.5" />
          <circle cx="620" cy="480" r="4.5" />
        </g>
      </motion.svg>
    </div>
  );
}

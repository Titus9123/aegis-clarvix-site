"use client";

import { useEffect, useRef, useState } from "react";
import { useEffectiveReducedMotion } from "@/components/accessibility-provider";

const HEBREW_GLYPHS = "אבגדהוזחטיכלמנסעפצקרשת0123456789";
const LATIN_GLYPHS = "ABCDEFGHJKLMNPQRSTUVWXYZ0123456789/\\<>#$%&*";

/**
 * Resolves the headline out of noise on load, the way a decryption readout
 * would. The scramble alphabet follows the script of the text itself so RTL
 * headlines don't jitter between bidi directions mid-animation.
 */
export function DecryptText({
  text,
  className,
  durationMs = 850,
}: {
  text: string;
  className?: string;
  durationMs?: number;
}) {
  const reduceMotion = useEffectiveReducedMotion();
  // Starts as the real text so the prerendered HTML is the readable headline.
  const [display, setDisplay] = useState(text);
  const frameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (reduceMotion) {
      setDisplay(text);
      return;
    }

    const glyphs = /[֐-׿]/.test(text) ? HEBREW_GLYPHS : LATIN_GLYPHS;
    const chars = Array.from(text);
    // Each character locks in at its own moment, left to right.
    const resolveAt = chars.map(
      (_, i) => (i / Math.max(chars.length - 1, 1)) * durationMs * 0.72,
    );
    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      let settled = true;

      const next = chars
        .map((char, i) => {
          if (char === " " || char === "\n") return char;
          if (elapsed >= resolveAt[i] + durationMs * 0.28) return char;
          settled = false;
          return glyphs[Math.floor(Math.random() * glyphs.length)];
        })
        .join("");

      setDisplay(next);

      if (settled) {
        setDisplay(text);
        return;
      }
      frameRef.current = requestAnimationFrame(tick);
    }

    frameRef.current = requestAnimationFrame(tick);
    return () => {
      if (frameRef.current !== undefined) cancelAnimationFrame(frameRef.current);
    };
  }, [text, durationMs, reduceMotion]);

  return (
    <span aria-hidden="true" className={className}>
      {display}
    </span>
  );
}

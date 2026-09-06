"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useLanguage } from "@/components/language-provider";

const TYPE_SPEED_MS = 28;
const LINE_PAUSE_MS = 260;
const LOOP_PAUSE_MS = 2200;

export function ScanDemo() {
  const { t } = useLanguage();
  const lines = t.scanDemo.lines;
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: false, margin: "-100px" });

  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (!inView) return;

    let cancelled = false;
    let lineIndex = 0;
    let charIndex = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    function typeNextChar() {
      if (cancelled) return;
      const currentLine = lines[lineIndex];

      if (charIndex <= currentLine.length) {
        setTyped(currentLine.slice(0, charIndex));
        charIndex += 1;
        timeoutId = setTimeout(typeNextChar, TYPE_SPEED_MS);
        return;
      }

      // line finished: commit it, move to the next one
      setVisibleLines((prev) => [...prev, currentLine]);
      setTyped("");
      lineIndex += 1;
      charIndex = 0;

      if (lineIndex < lines.length) {
        timeoutId = setTimeout(typeNextChar, LINE_PAUSE_MS);
      } else {
        timeoutId = setTimeout(() => {
          if (cancelled) return;
          setVisibleLines([]);
          lineIndex = 0;
          charIndex = 0;
          typeNextChar();
        }, LOOP_PAUSE_MS);
      }
    }

    setVisibleLines([]);
    setTyped("");
    timeoutId = setTimeout(typeNextChar, 400);

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, lines.join("|")]);

  return (
    <div ref={containerRef} className="mx-auto max-w-2xl px-6">
      <div className="overflow-hidden rounded-xl border border-border/60 bg-card/80 shadow-[0_0_40px_rgba(0,240,217,0.08)]">
        <div dir="ltr" className="flex items-center gap-1.5 border-b border-border/60 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
          <span className="ms-2 font-mono text-xs text-muted-foreground">
            aegis-scan
          </span>
        </div>
        <div className="min-h-[220px] p-5 font-mono text-sm leading-relaxed">
          {visibleLines.map((line, i) => (
            <div key={i} dir="auto" className={lineColor(line)}>
              {line}
            </div>
          ))}
          <div dir="auto" className={lineColor(typed)}>
            {typed}
            <span className="ms-0.5 inline-block h-4 w-2 animate-pulse bg-primary align-middle" />
          </div>
        </div>
      </div>
    </div>
  );
}

function lineColor(line: string) {
  if (line.startsWith("✓")) return "text-primary";
  if (line.startsWith("⚠")) return "text-accent";
  if (line.startsWith("$")) return "text-foreground font-semibold";
  return "text-muted-foreground";
}

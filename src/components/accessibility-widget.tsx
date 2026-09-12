"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Accessibility,
  Contrast,
  Minus,
  Palette,
  Pause,
  Plus,
  RotateCcw,
  Underline,
  X,
} from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { useAccessibility } from "@/components/accessibility-provider";
import { localePath } from "@/lib/seo";

/**
 * Floating accessibility control. Pinned to the physical bottom-left corner
 * in both languages (not the logical inline-start) — that's the near-
 * universal placement on Israeli sites regardless of RTL/LTR, and matching
 * it across locales keeps the control in the same spot when a visitor
 * switches language.
 */
export function AccessibilityWidget() {
  const { t, lang } = useLanguage();
  const [open, setOpen] = useState(false);
  const a11y = useAccessibility();
  const a = t.a11y;

  return (
    <div className="fixed bottom-4 left-4 z-50">
      {open && (
        <div
          role="dialog"
          aria-label={a.title}
          className="absolute bottom-14 left-0 w-72 rounded-2xl border border-border/60 bg-card/95 p-4 text-card-foreground shadow-2xl backdrop-blur-md"
        >
          <div className="flex items-center justify-between">
            <h2 className="font-heading text-base font-semibold">{a.title}</h2>
            <button
              type="button"
              aria-label={a.closeLabel}
              onClick={() => setOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-muted"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span>{a.fontSize}</span>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  aria-label={a.decrease}
                  onClick={a11y.decreaseFont}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-border/60 hover:border-primary/50 hover:text-primary"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  aria-label={a.increase}
                  onClick={a11y.increaseFont}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-border/60 hover:border-primary/50 hover:text-primary"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <ToggleRow
              icon={<Contrast className="h-4 w-4" />}
              label={a.contrast}
              pressed={a11y.highContrast}
              onClick={a11y.toggleHighContrast}
            />
            <ToggleRow
              icon={<Palette className="h-4 w-4" />}
              label={a.grayscale}
              pressed={a11y.grayscale}
              onClick={a11y.toggleGrayscale}
            />
            <ToggleRow
              icon={<Underline className="h-4 w-4" />}
              label={a.underlineLinks}
              pressed={a11y.underlineLinks}
              onClick={a11y.toggleUnderlineLinks}
            />
            <ToggleRow
              icon={<Pause className="h-4 w-4" />}
              label={a.reduceMotion}
              pressed={a11y.reduceMotion}
              onClick={a11y.toggleReduceMotion}
            />

            <button
              type="button"
              onClick={a11y.reset}
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-border/60 py-2 text-sm text-muted-foreground hover:border-primary/50 hover:text-primary"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              {a.reset}
            </button>
          </div>

          <Link
            href={localePath(lang, "/accessibility")}
            className="mt-4 block text-center text-xs text-muted-foreground underline underline-offset-2 hover:text-primary"
          >
            {a.statementLink}
          </Link>
        </div>
      )}

      <button
        type="button"
        aria-label={a.openLabel}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-primary text-primary-foreground shadow-[0_4px_20px_rgba(0,240,217,0.35)] transition-transform hover:scale-105 active:scale-95"
      >
        <Accessibility className="h-6 w-6" />
      </button>
    </div>
  );
}

function ToggleRow({
  icon,
  label,
  pressed,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  pressed: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={`flex w-full items-center gap-2.5 rounded-lg border px-3 py-2 text-sm transition-colors ${
        pressed
          ? "border-primary/50 bg-primary/10 text-primary"
          : "border-border/60 text-foreground/90 hover:border-primary/40"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

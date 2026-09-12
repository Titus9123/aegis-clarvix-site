"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useReducedMotion as useSystemReducedMotion } from "framer-motion";

const STORAGE_KEY = "aegis-a11y-prefs";
const FONT_SCALES = [1, 1.125, 1.25, 1.4] as const;

type Prefs = {
  fontStep: number; // index into FONT_SCALES
  highContrast: boolean;
  grayscale: boolean;
  underlineLinks: boolean;
  reduceMotion: boolean;
};

const DEFAULT_PREFS: Prefs = {
  fontStep: 0,
  highContrast: false,
  grayscale: false,
  underlineLinks: false,
  reduceMotion: false,
};

type AccessibilityContextValue = Prefs & {
  increaseFont: () => void;
  decreaseFont: () => void;
  toggleHighContrast: () => void;
  toggleGrayscale: () => void;
  toggleUnderlineLinks: () => void;
  toggleReduceMotion: () => void;
  reset: () => void;
};

const AccessibilityContext = createContext<AccessibilityContextValue | null>(null);

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [prefs, setPrefs] = useState<Prefs>(DEFAULT_PREFS);
  const [hydrated, setHydrated] = useState(false);

  // Read stored prefs once on mount. Skipped during SSR so the static export
  // never guesses at a visitor's saved choice.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setPrefs({ ...DEFAULT_PREFS, ...JSON.parse(raw) });
    } catch {
      // Corrupt or blocked storage — fall back to defaults silently.
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    } catch {
      // Storage full or blocked — the toggle still works for this visit.
    }

    const root = document.documentElement;
    root.style.setProperty("--a11y-font-scale", String(FONT_SCALES[prefs.fontStep]));
    root.classList.toggle("a11y-contrast", prefs.highContrast);
    root.classList.toggle("a11y-grayscale", prefs.grayscale);
    root.classList.toggle("a11y-underline-links", prefs.underlineLinks);
  }, [prefs, hydrated]);

  const value: AccessibilityContextValue = {
    ...prefs,
    increaseFont: () =>
      setPrefs((p) => ({ ...p, fontStep: Math.min(p.fontStep + 1, FONT_SCALES.length - 1) })),
    decreaseFont: () => setPrefs((p) => ({ ...p, fontStep: Math.max(p.fontStep - 1, 0) })),
    toggleHighContrast: () => setPrefs((p) => ({ ...p, highContrast: !p.highContrast })),
    toggleGrayscale: () => setPrefs((p) => ({ ...p, grayscale: !p.grayscale })),
    toggleUnderlineLinks: () => setPrefs((p) => ({ ...p, underlineLinks: !p.underlineLinks })),
    toggleReduceMotion: () => setPrefs((p) => ({ ...p, reduceMotion: !p.reduceMotion })),
    reset: () => setPrefs(DEFAULT_PREFS),
  };

  return (
    <AccessibilityContext.Provider value={value}>{children}</AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const ctx = useContext(AccessibilityContext);
  if (!ctx) throw new Error("useAccessibility must be used within an AccessibilityProvider");
  return ctx;
}

/**
 * Every scroll/cursor-linked animation in this app should defer to this
 * instead of calling framer-motion's useReducedMotion() directly — it
 * honors both the OS-level prefers-reduced-motion setting AND the widget's
 * manual "stop animations" toggle, which a visitor may need even when their
 * system preference doesn't request it.
 */
export function useEffectiveReducedMotion() {
  const systemPref = useSystemReducedMotion();
  const ctx = useContext(AccessibilityContext);
  return Boolean(systemPref) || Boolean(ctx?.reduceMotion);
}

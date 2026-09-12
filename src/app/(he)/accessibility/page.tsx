import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { localeAlternates, localePath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "הצהרת נגישות — Aegis by Clarvix",
  description:
    "הצהרת הנגישות של Aegis by Clarvix: התאמות הנגישות באתר, מגבלות ידועות, ופרטי יצירת קשר לנושא נגישות.",
  alternates: localeAlternates("he", "/accessibility"),
  openGraph: { url: localePath("he", "/accessibility") },
};

export default function AccessibilityPage() {
  return <LegalPage doc="accessibility" />;
}

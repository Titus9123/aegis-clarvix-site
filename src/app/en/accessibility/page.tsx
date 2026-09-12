import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { localeAlternates, localePath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Accessibility Statement — Aegis by Clarvix",
  description:
    "Aegis by Clarvix's accessibility statement: the accessibility features on this site, known limitations, and how to contact us about accessibility.",
  alternates: localeAlternates("en", "/accessibility"),
  openGraph: { url: localePath("en", "/accessibility") },
};

export default function AccessibilityPage() {
  return <LegalPage doc="accessibility" />;
}

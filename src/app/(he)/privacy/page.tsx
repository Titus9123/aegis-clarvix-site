import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { localeAlternates, localePath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "מדיניות פרטיות — Aegis by Clarvix",
  description: "כיצד Aegis by Clarvix אוספת, משתמשת ושומרת על המידע שלכם.",
  alternates: localeAlternates("he", "/privacy"),
  openGraph: { url: localePath("he", "/privacy") },
};

export default function PrivacyPage() {
  return <LegalPage doc="privacy" />;
}

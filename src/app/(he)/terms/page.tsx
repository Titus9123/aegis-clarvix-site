import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { localeAlternates, localePath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "תנאי שימוש — Aegis by Clarvix",
  description:
    "תנאי השימוש בשירותי הערכת אבטחת המידע של Aegis by Clarvix.",
  alternates: localeAlternates("he", "/terms"),
  openGraph: { url: localePath("he", "/terms") },
};

export default function TermsPage() {
  return <LegalPage doc="terms" />;
}

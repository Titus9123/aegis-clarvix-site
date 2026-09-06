import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { localeAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "תנאי שימוש — Aegis by Clarvix",
  description:
    "תנאי השימוש בשירותי הערכת אבטחת המידע של Aegis by Clarvix.",
  alternates: localeAlternates("he", "/terms"),
};

export default function TermsPage() {
  return <LegalPage doc="terms" />;
}

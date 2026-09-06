import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { localeAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy Policy — Aegis by Clarvix",
  description: "How Aegis by Clarvix collects, uses, and protects your data.",
  alternates: localeAlternates("en", "/privacy"),
};

export default function PrivacyPage() {
  return <LegalPage doc="privacy" />;
}

import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { localeAlternates, localePath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Terms of Use — Aegis by Clarvix",
  description: "Terms of use for Aegis by Clarvix's security assessment service.",
  alternates: localeAlternates("en", "/terms"),
  openGraph: { url: localePath("en", "/terms") },
};

export default function TermsPage() {
  return <LegalPage doc="terms" />;
}

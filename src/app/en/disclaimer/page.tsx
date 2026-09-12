import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { localeAlternates, localePath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Disclaimer — Aegis by Clarvix",
  description:
    "No guarantee of absolute security or formal certification — the limitations of our security assessment service.",
  alternates: localeAlternates("en", "/disclaimer"),
  openGraph: { url: localePath("en", "/disclaimer") },
};

export default function DisclaimerPage() {
  return <LegalPage doc="disclaimer" />;
}

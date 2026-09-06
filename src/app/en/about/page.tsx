import type { Metadata } from "next";
import { AboutPage } from "@/components/about-page";
import { localeAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Who runs Aegis — Albert, independent cybersecurity professional",
  description:
    "Albert, an independent cybersecurity professional, runs Aegis by Clarvix. Every finding is reviewed by a person before it reaches you — not raw scanner output.",
  alternates: localeAlternates("en", "/about"),
};

export default function Page() {
  return <AboutPage />;
}

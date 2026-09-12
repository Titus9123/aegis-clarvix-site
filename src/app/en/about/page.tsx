import type { Metadata } from "next";
import { AboutPage } from "@/components/about-page";
import { localeAlternates, localePath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Who runs Aegis — Albert Neumann, independent cybersecurity professional",
  description:
    "Albert Neumann, an independent cybersecurity professional, runs Aegis by Clarvix. Every finding is reviewed by a person before it reaches you — not raw scanner output.",
  alternates: localeAlternates("en", "/about"),
  openGraph: { url: localePath("en", "/about") },
};

export default function Page() {
  return <AboutPage />;
}

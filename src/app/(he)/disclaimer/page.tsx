import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { localeAlternates, localePath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "כתב ויתור — Aegis by Clarvix",
  description:
    "אין הבטחת אבטחה מוחלטת ואין תעודת הסמכה רשמית — המגבלות של שירות הערכת אבטחת המידע שלנו.",
  alternates: localeAlternates("he", "/disclaimer"),
  openGraph: { url: localePath("he", "/disclaimer") },
};

export default function DisclaimerPage() {
  return <LegalPage doc="disclaimer" />;
}

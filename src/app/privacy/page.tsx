import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "מדיניות פרטיות | Privacy Policy — Aegis by Clarvix",
  description:
    "כיצד Aegis by Clarvix אוספת, משתמשת ושומרת על המידע שלכם. How Aegis by Clarvix collects, uses, and protects your data.",
};

export default function PrivacyPage() {
  return <LegalPage doc="privacy" />;
}

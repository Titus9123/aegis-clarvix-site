import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "תנאי שימוש | Terms of Use — Aegis by Clarvix",
  description:
    "תנאי השימוש בשירותי הערכת אבטחת המידע של Aegis by Clarvix. Terms of use for Aegis by Clarvix's security assessment service.",
};

export default function TermsPage() {
  return <LegalPage doc="terms" />;
}

import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "כתב ויתור | Disclaimer — Aegis by Clarvix",
  description:
    "אין הבטחת אבטחה מוחלטת ואין תעודת הסמכה רשמית — המגבלות של שירות הערכת אבטחת המידע שלנו. No guarantee of absolute security or formal certification — the limitations of our security assessment service.",
};

export default function DisclaimerPage() {
  return <LegalPage doc="disclaimer" />;
}

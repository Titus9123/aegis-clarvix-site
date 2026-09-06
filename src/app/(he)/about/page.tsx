import type { Metadata } from "next";
import { AboutPage } from "@/components/about-page";
import { localeAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "מי עומד מאחורי Aegis — אלברט נוימן, מומחה אבטחת מידע עצמאי",
  description:
    "אלברט נוימן, מומחה אבטחת מידע עצמאי, מפעיל את Aegis by Clarvix. כל ממצא עובר סקירה אנושית לפני שהוא מגיע אליכם — לא פלט אוטומטי של סורק.",
  alternates: localeAlternates("he", "/about"),
};

export default function Page() {
  return <AboutPage />;
}

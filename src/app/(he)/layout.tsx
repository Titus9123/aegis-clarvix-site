import type { Metadata } from "next";
import { Heebo, Rubik } from "next/font/google";
import { LanguageProvider } from "@/components/language-provider";
import { organizationJsonLd, localeAlternates, SITE_URL } from "@/lib/seo";
import "../globals.css";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Aegis by Clarvix — אבטחת סייבר לעסקים קטנים ובינוניים",
  description:
    "מגלים מה חשוף מהעסק שלכם באינטרנט, מסבירים בעברית פשוטה, ומוודאים שהתיקון עבד. בדיקת אבטחה לעסקים קטנים בישראל — מחיר קבוע ₪1,990, כולל בדיקה חוזרת.",
  keywords: [
    "אבטחת מידע לעסקים קטנים",
    "בדיקת חשיפה חיצונית",
    "תיקון 13 לחוק הגנת הפרטיות",
    "cybersecurity for small business Israel",
    "external exposure assessment",
    "Amendment 13 privacy law compliance",
    "vibe coding security",
  ],
  authors: [{ name: "Clarvix" }],
  alternates: localeAlternates("he", "/"),
  openGraph: {
    title: "Aegis by Clarvix",
    description: "גלו מה מהעסק שלכם חשוף באינטרנט — לפני שמישהו אחר יגלה.",
    type: "website",
    url: SITE_URL,
    siteName: "Aegis by Clarvix",
    locale: "he_IL",
    alternateLocale: "en_US",
    // PNG estático en public/ y no la convención opengraph-image.tsx: GitHub
    // Pages deduce el content-type por la extensión, y un archivo sin
    // extensión se sirve como application/octet-stream, que los crawlers de
    // WhatsApp y LinkedIn descartan.
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Aegis by Clarvix" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aegis by Clarvix",
    description: "גלו מה מהעסק שלכם חשוף באינטרנט — לפני שמישהו אחר יגלה.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HebrewRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = organizationJsonLd("he");

  return (
    <html
      lang="he"
      dir="rtl"
      className={`${heebo.variable} ${rubik.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider lang="he">{children}</LanguageProvider>
      </body>
    </html>
  );
}

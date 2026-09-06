import type { Metadata } from "next";
import { Heebo, Rubik } from "next/font/google";
import { LanguageProvider } from "@/components/language-provider";
import "./globals.css";

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
  metadataBase: new URL("https://aegis.clarvix.net"),
  title: "Aegis by Clarvix — אבטחת סייבר לעסקים קטנים ובינוניים",
  description:
    "מגלים מה חשוף מהעסק שלכם באינטרנט, מסבירים בעברית פשוטה, ומוודאים שהתיקון עבד. בדיקות אבטחה לעסקים קטנים ולסטארטאפים בודדים בישראל, כולל בדיקת עמידה בתיקון 13 לחוק הגנת הפרטיות.",
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
  alternates: { canonical: "/" },
  openGraph: {
    title: "Aegis by Clarvix",
    description:
      "גלו מה מהעסק שלכם חשוף באינטרנט — לפני שמישהו אחר יגלה.",
    type: "website",
    url: "https://aegis.clarvix.net",
    siteName: "Aegis by Clarvix",
    locale: "he_IL",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Aegis by Clarvix",
  description:
    "External cybersecurity exposure assessments for small and mid-size businesses and solo founders in Israel, including Amendment 13 privacy law readiness checks.",
  url: "https://aegis.clarvix.net",
  areaServed: {
    "@type": "Country",
    name: "Israel",
  },
  parentOrganization: {
    "@type": "Organization",
    name: "Clarvix",
    url: "https://clarvix.net",
  },
  priceRange: "₪1,990",
  email: "contact@clarvix.net",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

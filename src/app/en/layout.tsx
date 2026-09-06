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
  title: "Aegis by Clarvix — Cybersecurity for Small and Mid-Size Businesses",
  description:
    "We find what's exposed about your business online, explain it in plain language, and verify the fix. Fixed price ₪1,990 for Israeli SMBs and solo founders.",
  keywords: [
    "cybersecurity for small business Israel",
    "external exposure assessment",
    "Amendment 13 privacy law compliance",
    "vibe coding security",
    "Supabase Firebase security audit",
    "SMB security assessment Israel",
  ],
  authors: [{ name: "Clarvix" }],
  alternates: localeAlternates("en", "/"),
  openGraph: {
    title: "Aegis by Clarvix",
    description: "Find out what's exposed about your business online — before someone else does.",
    type: "website",
    url: `${SITE_URL}/en`,
    siteName: "Aegis by Clarvix",
    locale: "en_US",
    alternateLocale: "he_IL",
    // Static PNG in public/ rather than the opengraph-image.tsx convention:
    // GitHub Pages infers content-type from the file extension, and an
    // extensionless file is served as application/octet-stream, which the
    // WhatsApp and LinkedIn crawlers discard.
    images: [{ url: "/og-en.png", width: 1200, height: 630, alt: "Aegis by Clarvix" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aegis by Clarvix",
    description: "Find out what's exposed about your business online — before someone else does.",
    images: ["/og-en.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EnglishRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = organizationJsonLd("en");

  return (
    <html
      lang="en"
      dir="ltr"
      className={`${heebo.variable} ${rubik.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider lang="en">{children}</LanguageProvider>
      </body>
    </html>
  );
}

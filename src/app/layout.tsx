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
  title: "Aegis by Clarvix — אבטחת סייבר לעסקים קטנים ובינוניים",
  description:
    "מגלים מה חשוף מהעסק שלכם באינטרנט, מסבירים בעברית פשוטה, ומוודאים שהתיקון עבד. בדיקות אבטחה לעסקים קטנים ולסטארטאפים בודדים בישראל.",
  openGraph: {
    title: "Aegis by Clarvix",
    description:
      "גלו מה מהעסק שלכם חשוף באינטרנט — לפני שמישהו אחר יגלה.",
    type: "website",
  },
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
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

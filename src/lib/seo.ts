import type { Lang } from "./content";
import { CONTACT } from "./content";

export const SITE_URL = "https://aegis.clarvix.net";

/** Persona real detrás del servicio. Se usa como autor y fundador en el schema. */
export const AUTHOR = {
  name: "Albert",
  jobTitle: { he: "מומחה אבטחת מידע עצמאי", en: "Independent cybersecurity professional" },
  url: `${SITE_URL}/about`,
};

/** Absolute path for a given locale + site-relative sub-path ("/" or "/terms"). */
export function localePath(lang: Lang, sub: string = "/") {
  if (lang === "he") return sub;
  return sub === "/" ? "/en" : `/en${sub}`;
}

/** `alternates` block for the Metadata API: canonical + hreflang siblings. */
export function localeAlternates(lang: Lang, sub: string = "/") {
  return {
    canonical: localePath(lang, sub),
    languages: {
      he: localePath("he", sub),
      en: localePath("en", sub),
      "x-default": localePath("he", sub),
    },
  };
}

const ORG_DESCRIPTION: Record<Lang, string> = {
  he: "בדיקות חשיפה חיצוניות באבטחת מידע לעסקים קטנים ובינוניים ולסטארטאפים בודדים בישראל, כולל בדיקת עמידה בתיקון 13 לחוק הגנת הפרטיות.",
  en: "External cybersecurity exposure assessments for small and mid-size businesses and solo founders in Israel, including Amendment 13 privacy law readiness checks.",
};

const OFFER_NAME: Record<Lang, string> = {
  he: "בדיקת חשיפה חיצונית",
  en: "External Exposure Assessment",
};

/** Entidad principal del negocio. Se emite una vez por página, en el layout raíz. */
export function organizationJsonLd(lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": `${SITE_URL}/#business`,
    name: "Aegis by Clarvix",
    description: ORG_DESCRIPTION[lang],
    url: `${SITE_URL}${localePath(lang)}`,
    inLanguage: lang,
    logo: `${SITE_URL}/brand/aegis-shield.png`,
    image: `${SITE_URL}${lang === "en" ? "/og-en.png" : "/og.png"}`,
    email: CONTACT.email,
    telephone: `+${CONTACT.whatsapp}`,
    address: {
      "@type": "PostalAddress",
      addressCountry: "IL",
    },
    areaServed: {
      "@type": "Country",
      name: "Israel",
    },
    parentOrganization: {
      "@type": "Organization",
      name: "Clarvix",
      url: "https://clarvix.net",
    },
    founder: {
      "@type": "Person",
      name: AUTHOR.name,
      jobTitle: AUTHOR.jobTitle[lang],
      url: `${SITE_URL}${localePath(lang, "/about")}`,
    },
    sameAs: ["https://clarvix.net"],
    priceRange: "₪1,990",
    makesOffer: {
      "@type": "Offer",
      name: OFFER_NAME[lang],
      price: "1990",
      priceCurrency: "ILS",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}${localePath(lang)}#services`,
      seller: { "@id": `${SITE_URL}/#business` },
    },
  };
}

/** Persona: sostiene la señal de E-E-A-T (quién firma los informes). */
export function personJsonLd(lang: Lang) {
  const description =
    lang === "he"
      ? "מומחה אבטחת מידע עצמאי, מייסד Aegis by Clarvix. עובד עם עסקים קטנים ובינוניים ועם מייסדים בודדים בישראל: מגלה מה חשוף באינטרנט, מסביר את הסיכון בשפה פשוטה, ומוודא שהתיקון עבד."
      : "Independent cybersecurity professional and founder of Aegis by Clarvix. Works with small and mid-size businesses and solo founders in Israel: finds what's exposed online, explains the risk in plain language, and verifies the fix actually worked.";

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#author`,
    name: AUTHOR.name,
    jobTitle: AUTHOR.jobTitle[lang],
    description,
    url: `${SITE_URL}${localePath(lang, "/about")}`,
    email: CONTACT.email,
    telephone: `+${CONTACT.whatsapp}`,
    worksFor: { "@id": `${SITE_URL}/#business` },
    knowsAbout:
      lang === "he"
        ? [
            "בדיקות חשיפה חיצונית",
            "אבטחת אפליקציות ווב",
            "תיקון 13 לחוק הגנת הפרטיות",
            "אבטחת Supabase ו-Firebase",
            "אבטחת סוכני בינה מלאכותית",
          ]
        : [
            "External exposure assessment",
            "Web application security",
            "Israel Privacy Protection Law Amendment 13",
            "Supabase and Firebase security",
            "AI agent security",
          ],
  };
}

/** HowTo: el método de la evaluación, paso a paso (material natural para AEO). */
export function howToJsonLd(lang: Lang) {
  const steps =
    lang === "he"
      ? [
          ["גילוי", "ממפים כל דומיין, תת-דומיין ושירות של העסק שגלוי מהאינטרנט."],
          ["אימות", "כל ממצא אוטומטי עובר בדיקה אנושית כדי לסנן התראות שווא."],
          ["תעדוף", "מדרגים לפי הסיכון העסקי האמיתי, לא לפי חומרה טכנית בלבד."],
          ["הסבר", "מוסרים דוח מנהלים בשפה פשוטה ודוח טכני לצד שמתקן."],
          ["אימות התיקון", "אחרי התיקון מריצים בדיקה חוזרת ומוודאים שהבעיה נסגרה."],
        ]
      : [
          ["Discovery", "We map every domain, subdomain and service of the business that is visible from the internet."],
          ["Validation", "Every automated finding is reviewed by a person to filter out false positives."],
          ["Prioritisation", "Findings are ranked by real business risk, not by technical severity alone."],
          ["Explanation", "You get an executive report in plain language plus a technical report for whoever applies the fix."],
          ["Verification", "After the fix we run a retest and confirm the issue is actually closed."],
        ];

  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name:
      lang === "he"
        ? "איך עובדת בדיקת חשיפה חיצונית של Aegis"
        : "How an Aegis external exposure assessment works",
    description: ORG_DESCRIPTION[lang],
    totalTime: "P5D",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "ILS",
      value: "1990",
    },
    step: steps.map(([name, text], i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name,
      text,
    })),
  };
}

/** BreadcrumbList para páginas internas. */
export function breadcrumbJsonLd(lang: Lang, sub: string, label: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: lang === "he" ? "דף הבית" : "Home",
        item: `${SITE_URL}${localePath(lang)}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: label,
        item: `${SITE_URL}${localePath(lang, sub)}`,
      },
    ],
  };
}

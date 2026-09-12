import type { Lang } from "./content";
import { CONTACT } from "./content";

export const SITE_URL = "https://aegis.clarvix.net";

/** The real person behind the service — used as founder/author across the schema. */
export const AUTHOR = {
  name: "Albert Neumann",
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

const SERVICE_NAME: Record<Lang, string> = {
  he: "בדיקת חשיפה חיצונית",
  en: "External Exposure Check",
};

const SERVICE_DESCRIPTION: Record<Lang, string> = {
  he: "מגלים אילו דומיינים, שירותים ומידע של העסק שלכם חשופים באינטרנט, ומה לתקן קודם. כולל דוח מנהלים, דוח טכני ובדיקה חוזרת אחת.",
  en: "We find which of your business's domains, services, and information are exposed online, and what to fix first. Includes an executive report, a technical report, and one retest.",
};

const KNOWS_ABOUT: Record<Lang, string[]> = {
  he: [
    "בדיקות חשיפה חיצונית",
    "אבטחת אפליקציות ווב",
    "תיקון 13 לחוק הגנת הפרטיות",
    "אבטחת Supabase ו-Firebase",
    "אבטחת סוכני בינה מלאכותית",
  ],
  en: [
    "External exposure assessment",
    "Web application security",
    "Israel Privacy Protection Law Amendment 13",
    "Supabase and Firebase security",
    "AI agent security",
  ],
};

/**
 * One `@graph` per locale. The Organization keeps a locale-agnostic `@id`
 * because it is the same legal entity on both pages; Service and WebSite are
 * locale-scoped because their URLs differ.
 *
 * The fixed ₪1,990 price lives on an Offer, not on `priceRange` — that
 * property is a free-text band ("$$"), so a definite price there is unusable
 * by consumers of the markup.
 */
export function siteJsonLd(lang: Lang) {
  const pageUrl = `${SITE_URL}${localePath(lang)}`;
  const orgId = `${SITE_URL}/#organization`;
  const founderId = `${SITE_URL}/#founder`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        additionalType: "https://schema.org/ProfessionalService",
        name: "Aegis by Clarvix",
        description: ORG_DESCRIPTION[lang],
        url: pageUrl,
        email: CONTACT.email,
        telephone: `+${CONTACT.whatsapp}`,
        logo: `${SITE_URL}/brand/aegis-shield.png`,
        image: `${SITE_URL}${lang === "en" ? "/og-en.png" : "/og.png"}`,
        areaServed: { "@type": "Country", name: "Israel" },
        // "Osek Patur" registration number — Clarvix's registered business
        // status in Israel.
        taxID: CONTACT.businessId,
        sameAs: [CONTACT.linkedin, "https://clarvix.net"],
        founder: { "@id": founderId },
        employee: { "@id": founderId },
        parentOrganization: {
          "@type": "Organization",
          name: "Clarvix",
          url: "https://clarvix.net",
          sameAs: [CONTACT.linkedin],
        },
      },
      {
        "@type": "Person",
        "@id": founderId,
        name: AUTHOR.name,
        jobTitle: AUTHOR.jobTitle[lang],
        url: `${SITE_URL}${localePath(lang, "/about")}`,
        worksFor: { "@id": orgId },
        knowsAbout: KNOWS_ABOUT[lang],
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certificate",
          name: "Offensive Security Expert",
          educationalLevel: "professional certificate",
          recognizedBy: { "@type": "CollegeOrUniversity", name: "Ecom School" },
          dateCreated: "2025-07",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${pageUrl}#website`,
        url: pageUrl,
        name: "Aegis by Clarvix",
        inLanguage: lang,
        publisher: { "@id": orgId },
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: SERVICE_NAME[lang],
        description: SERVICE_DESCRIPTION[lang],
        serviceType: "Cybersecurity exposure assessment",
        provider: { "@id": orgId },
        areaServed: { "@type": "Country", name: "Israel" },
        offers: {
          "@type": "Offer",
          price: "1990",
          priceCurrency: "ILS",
          availability: "https://schema.org/InStock",
          url: pageUrl,
        },
      },
    ],
  };
}

/**
 * Standalone, fuller Person document for the About page — same `@id` as the
 * Person node inside `siteJsonLd`, so the two are understood as one entity,
 * plus a long-form description that only makes sense on that page.
 */
export function personJsonLd(lang: Lang) {
  const description =
    lang === "he"
      ? "מומחה אבטחת מידע עצמאי, מייסד Aegis by Clarvix. עובד עם עסקים קטנים ובינוניים ועם מייסדים בודדים בישראל: מגלה מה חשוף באינטרנט, מסביר את הסיכון בשפה פשוטה, ומוודא שהתיקון עבד."
      : "Independent cybersecurity professional and founder of Aegis by Clarvix. Works with small and mid-size businesses and solo founders in Israel: finds what's exposed online, explains the risk in plain language, and verifies the fix actually worked.";

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#founder`,
    name: AUTHOR.name,
    jobTitle: AUTHOR.jobTitle[lang],
    description,
    url: `${SITE_URL}${localePath(lang, "/about")}`,
    email: CONTACT.email,
    telephone: `+${CONTACT.whatsapp}`,
    worksFor: { "@id": `${SITE_URL}/#organization` },
    knowsAbout: KNOWS_ABOUT[lang],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certificate",
      name: "Offensive Security Expert",
      educationalLevel: "professional certificate",
      recognizedBy: { "@type": "CollegeOrUniversity", name: "Ecom School" },
      dateCreated: "2025-07",
    },
  };
}

/** HowTo: the assessment's process, step by step — natural AEO material. */
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

/** BreadcrumbList for internal pages. */
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

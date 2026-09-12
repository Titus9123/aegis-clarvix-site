import type { Lang } from "./content";

export const SITE_URL = "https://aegis.clarvix.net";

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
        email: "contact@clarvix.net",
        telephone: "+972-53-437-7718",
        logo: `${SITE_URL}/brand/aegis-shield.png`,
        image: `${SITE_URL}/brand/og-image.png`,
        areaServed: { "@type": "Country", name: "Israel" },
        // "Osek Patur" registration number — Clarvix's registered business
        // status in Israel.
        taxID: "321411589",
        sameAs: ["https://www.linkedin.com/company/115794167"],
        founder: { "@id": founderId },
        employee: { "@id": founderId },
        parentOrganization: {
          "@type": "Organization",
          name: "Clarvix",
          url: "https://clarvix.net",
          sameAs: ["https://www.linkedin.com/company/115794167"],
        },
      },
      {
        "@type": "Person",
        "@id": founderId,
        name: "Albert Neumann",
        jobTitle: "Founder",
        worksFor: { "@id": orgId },
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

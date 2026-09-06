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

export function organizationJsonLd(lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Aegis by Clarvix",
    description: ORG_DESCRIPTION[lang],
    url: `${SITE_URL}${localePath(lang)}`,
    inLanguage: lang,
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
}

export type Lang = "he" | "en";

export const content = {
  he: {
    dir: "rtl" as const,
    nav: {
      services: "שירותים",
      builders: "לבעלי סטארטאפ",
      trust: "למה לבחור בנו",
      contact: "יצירת קשר",
    },
    hero: {
      eyebrow: "אבטחת סייבר לעסקים קטנים ובינוניים",
      headline: "לגלות מה מעסקך חשוף באינטרנט לפני שמישהו אחר יגלה",
      subheadline:
        "אנחנו מוצאים את הסיכונים האמיתיים, מסבירים אותם בעברית פשוטה, ועוזרים לכם לתקן אותם.",
      ctaPrimary: "לתיאום שיחה בוואטסאפ",
      ctaSecondary: "שליחת מייל",
    },
    regulatory: {
      title: "תיקון 13 לחוק הגנת הפרטיות כבר בתוקף",
      body: "תקופת החסד למינוי ממונה הגנת פרטיות הסתיימה באוקטובר 2025. רשות הגנת הפרטיות יכולה כעת להטיל קנסות של עד 5% מהמחזור השנתי.",
    },
    services: {
      eyebrow: "השירות שלנו",
      title: "בדיקת אבטחה לעסק שלך",
      item: {
        title: "בדיקת חשיפה חיצונית",
        desc: "מגלים אילו דומיינים, שירותים ומידע של העסק שלכם חשופים באינטרנט, ומה לתקן קודם.",
        bullets: [
          "דומיין ותת-דומיינים",
          "הגדרות מייל (SPF, DKIM, DMARC)",
          "תעודות אבטחה ו-TLS",
          "אתר ו-CMS ציבורי",
          "בדיקת עמידה בתיקון 13 לחוק הגנת הפרטיות",
          "דוח מנהלים + דוח טכני",
          "בדיקה חוזרת אחת",
        ],
        price: "₪1,990",
        priceNote: "מחיר קבוע, חד פעמי",
      },
    },
    builders: {
      eyebrow: "לבעלי סטארטאפ בודדים",
      title: "בניתם משהו עם Lovable, Base44 או Replit?",
      body: "98% מהאפליקציות שנבנו עם כלי AI מכילות לפחות פרצת אבטחה אחת — הרוב בגלל מפתחות API חשופות או הרשאות Supabase שגויות. אנחנו בודקים את זה, ומישהו אמיתי מסביר לכם מה לתקן.",
      price: "₪450 · מחיר קבוע",
      cta: "בדקו את האפליקציה שלי",
    },
    trust: {
      eyebrow: "למה לבחור בנו",
      title: "לא רק דוח אוטומטי",
      items: [
        {
          title: "בקרת איכות אנושית",
          desc: "כל ממצא עובר בדיקה אנושית לפני שהוא מגיע אליכם — לא מעתיקים פלט גולמי של כלי סריקה.",
        },
        {
          title: "בדיקה חוזרת כלולה",
          desc: "אחרי שתתקנו, אנחנו בודקים שוב ומוודאים שהתיקון אכן עבד.",
        },
        {
          title: "בלי הבטחות מוגזמות",
          desc: "אף אחד לא יכול להבטיח אבטחה מוחלטת, ואנחנו לא מתיימרים להבטיח את זה.",
        },
      ],
    },
    scanDemo: {
      label: "כך זה נראה",
      lines: [
        "$ aegis scan clarvix.net",
        "מאתר דומיין ותת-דומיינים...",
        "בודק SPF, DKIM, DMARC...",
        "בודק תעודות TLS...",
        "✓ נמצאו 6 תת-דומיינים",
        "✓ TLS: ציון A+",
        "⚠ 3 ממצאים דורשים תשומת לב",
        "בונה דוח...",
        "✓ הדוח מוכן",
      ],
    },
    cta: {
      title: "מוכנים לדעת מה חשוף?",
      body: "שיחת היכרות קצרה, בלי עלות ובלי התחייבות.",
      ctaPrimary: "לתיאום שיחה בוואטסאפ",
    },
    footer: {
      tagline: "אבטחת סייבר לעסקים קטנים ובינוניים, מוסברת בשפה פשוטה.",
      disclaimer:
        "השירות אינו כולל ניצול פרצות פעיל ואינו מהווה ערובה לאבטחה מוחלטת.",
      rights: "כל הזכויות שמורות",
    },
  },
  en: {
    dir: "ltr" as const,
    nav: {
      services: "Services",
      builders: "For Builders",
      trust: "Why Us",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Cybersecurity for small and mid-size businesses",
      headline:
        "Find out what's exposed about your business online — before someone else does.",
      subheadline:
        "We find the real risks, explain them in plain language, and help you fix them.",
      ctaPrimary: "Chat on WhatsApp",
      ctaSecondary: "Send an email",
    },
    regulatory: {
      title: "Amendment 13 to Israel's Privacy Law is already in effect",
      body: "The grace period to appoint a privacy officer ended in October 2025. The Privacy Protection Authority can now fine up to 5% of annual revenue.",
    },
    services: {
      eyebrow: "What we offer",
      title: "A security check for your business",
      item: {
        title: "External Exposure Check",
        desc: "We find out which domains, services, and information about your business are exposed online, and what to fix first.",
        bullets: [
          "Domain and subdomains",
          "Email configuration (SPF, DKIM, DMARC)",
          "Certificates and TLS",
          "Public website and CMS",
          "Readiness check against Amendment 13 of Israel's Privacy Law",
          "Executive + technical report",
          "One retest included",
        ],
        price: "₪1,990",
        priceNote: "fixed price, one-time",
      },
    },
    builders: {
      eyebrow: "For solo founders",
      title: "Built something with Lovable, Base44, or Replit?",
      body: "98% of apps built with AI tools ship with at least one security flaw — most from exposed API keys or misconfigured Supabase permissions. We check for that, and a real person explains what to fix.",
      price: "₪450 · fixed price",
      cta: "Check my app",
    },
    trust: {
      eyebrow: "Why us",
      title: "Not just an automated report",
      items: [
        {
          title: "Human quality control",
          desc: "Every finding is reviewed by a person before it reaches you — never raw scanner output.",
        },
        {
          title: "Retest included",
          desc: "Once you fix something, we check again to confirm it actually worked.",
        },
        {
          title: "No overblown promises",
          desc: "Nobody can guarantee absolute security, and we won't pretend to.",
        },
      ],
    },
    scanDemo: {
      label: "Here's what it looks like",
      lines: [
        "$ aegis scan clarvix.net",
        "resolving domain and subdomains...",
        "checking SPF, DKIM, DMARC...",
        "checking TLS certificates...",
        "✓ found 6 subdomains",
        "✓ TLS: grade A+",
        "⚠ 3 findings need attention",
        "building report...",
        "✓ report ready",
      ],
    },
    cta: {
      title: "Ready to find out what's exposed?",
      body: "A short intro call, no cost, no commitment.",
      ctaPrimary: "Chat on WhatsApp",
    },
    footer: {
      tagline: "Cybersecurity for small and mid-size businesses, explained in plain language.",
      disclaimer:
        "This service does not include active exploitation and is not a guarantee of absolute security.",
      rights: "All rights reserved",
    },
  },
} as const;

export const CONTACT = {
  whatsapp: "972534377718",
  whatsappDisplay: "053-437-7718",
  email: "contact@clarvix.net",
};

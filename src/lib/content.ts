export type Lang = "he" | "en";

export const content = {
  he: {
    dir: "rtl" as const,
    nav: {
      services: "שירותים",
      builders: "לבעלי סטארטאפ",
      coverage: "מה אנחנו בודקים",
      trust: "למה לבחור בנו",
      faq: "שאלות נפוצות",
      about: "מי אנחנו",
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
      sourceLabel: "מקור: Library of Congress — Global Legal Monitor",
      sourceUrl:
        "https://www.loc.gov/item/global-legal-monitor/2025-11-17/israel-amendment-to-privacy-protection-law-goes-into-effect/",
    },
    definition: {
      question: "מה זה בדיקת חשיפה חיצונית?",
      answer:
        "בדיקת חשיפה חיצונית היא סקירה של כל מה שהעסק שלכם חושף לאינטרנט הפתוח — דומיינים ותת-דומיינים, הגדרות מייל, תעודות אבטחה, אתר ציבורי ומפתחות שדלפו — שמבוצעת מבחוץ, בלי סיסמאות ובלי גישה למערכות שלכם, ומסתיימת ברשימה מתועדפת של מה לתקן קודם.",
    },
    comparison: {
      eyebrow: "השוואה",
      title: "איפה זה יושב מול האפשרויות האחרות",
      note: "טווחי המחירים של פנטסט מלא בישראל ושל סורקים אוטומטיים לקוחים ממחקר שוק פומבי.",
      sourceLabel: "מקור למחירי פנטסט בישראל: Astra",
      sourceUrl: "https://www.getastra.com/pentest-services/israel",
      columns: ["", "Aegis", "פנטסט מלא", "סורק אוטומטי"],
      rows: [
        ["מחיר", "₪1,990 קבוע", "₪15,000–150,000", "9–29$ לחודש"],
        ["בקרה אנושית על כל ממצא", "כן", "כן", "לא"],
        ["הסבר בשפה של בעל העסק", "כן", "בדרך כלל לא", "לא"],
        ["בדיקה חוזרת כלולה", "כן", "לפעמים", "לא"],
        ["ניסיון פריצה פעיל", "לא", "כן", "לא"],
        ["זמן עד לתוצאות", "2–5 ימי עסקים", "שבועות", "מיידי"],
      ],
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
          "מפתחות API חשופים והרשאות Supabase/Firebase (לאפליקציות שנבנו עם AI)",
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
      body: "98% מהאפליקציות שנבנו עם כלי AI מכילות לפחות פרצת אבטחה אחת — הרוב בגלל מפתחות API חשופות או הרשאות Supabase שגויות. אותה בדיקת אבטחה שלנו מכסה גם את זה.",
      sourceLabel: "מקור: Symbiotic Security, סריקה של 1,072 אפליקציות",
      sourceUrl:
        "https://www.symbioticsec.ai/blog/we-scanned-1-072-vibe-coded-apps-98-had-security-flaws",
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
    faq: {
      eyebrow: "שאלות נפוצות",
      title: "שאלות שכדאי לשאול לפני שמתחילים",
      items: [
        {
          q: "מה זה בדיקת חשיפה חיצונית?",
          a: "בדיקה שמגלה מה מהעסק שלכם נראה מבחוץ באינטרנט — דומיינים ותת-דומיינים, הגדרות מייל, תעודות אבטחה, ואתר ציבורי — ומראה מה מכל זה מהווה סיכון אמיתי, לפי סדר עדיפות.",
        },
        {
          q: "האם הבדיקה כוללת ניסיון פריצה פעיל?",
          a: "לא. הבדיקה מבוצעת בשיטות פסיביות ושמרניות בלבד. אנחנו לא מנסים לנצל פרצות, לא שולחים פישינג, ולא עלולים להשבית שירות. אם בעתיד תרצו בדיקה אקטיבית מלאה, זה שירות נפרד עם היקף והרשאה שונים לגמרי.",
        },
        {
          q: "כמה זמן לוקח לקבל תוצאות?",
          a: "בדרך כלל בין יומיים לחמישה ימי עסקים, תלוי בהיקף הנכסים הדיגיטליים שלכם.",
        },
        {
          q: "אנחנו עסק קטן בלי איש IT — זה מתאים לנו?",
          a: "בדיוק בשביל זה נבנה השירות. הדוח כתוב בעברית פשוטה, בלי ז'רגון, ומיועד לבעל העסק ולא רק לאיש טכני.",
        },
        {
          q: "מה ההבדל בין זה לסריקת אבטחה אוטומטית וחינמית?",
          a: "סריקה אוטומטית נותנת רשימה גולמית של ממצאים בלי הקשר. אצלנו כל ממצא עובר בדיקה אנושית לפני שהוא מגיע אליכם, מתועדף לפי סיכון עסקי אמיתי, ומגיע עם בדיקה חוזרת שמוודאת שהתיקון עבד.",
        },
        {
          q: "האם זה כולל בדיקת עמידה בתיקון 13 לחוק הגנת הפרטיות?",
          a: "כן, זה חלק מובנה מהבדיקה — לא צריך לרכוש שירות נפרד בשביל זה.",
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
      links: {
        terms: "תנאי שימוש",
        privacy: "מדיניות פרטיות",
        disclaimer: "כתב ויתור",
      },
    },
  },
  en: {
    dir: "ltr" as const,
    nav: {
      services: "Services",
      builders: "For Builders",
      coverage: "What We Check",
      trust: "Why Us",
      faq: "FAQ",
      about: "About",
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
      sourceLabel: "Source: Library of Congress — Global Legal Monitor",
      sourceUrl:
        "https://www.loc.gov/item/global-legal-monitor/2025-11-17/israel-amendment-to-privacy-protection-law-goes-into-effect/",
    },
    definition: {
      question: "What is an external exposure assessment?",
      answer:
        "An external exposure assessment is a review of everything your business exposes to the open internet — domains and subdomains, email configuration, security certificates, your public site, and leaked keys — performed from the outside, with no passwords and no access to your systems, ending in a prioritised list of what to fix first.",
    },
    comparison: {
      eyebrow: "Comparison",
      title: "Where this sits against the alternatives",
      note: "Price ranges for full penetration tests in Israel and for self-serve scanners are taken from public market research.",
      sourceLabel: "Source for Israeli pentest pricing: Astra",
      sourceUrl: "https://www.getastra.com/pentest-services/israel",
      columns: ["", "Aegis", "Full pentest", "Self-serve scanner"],
      rows: [
        ["Price", "₪1,990 fixed", "₪15,000–150,000", "$9–29 / month"],
        ["Human review of every finding", "Yes", "Yes", "No"],
        ["Explained in the owner's language", "Yes", "Usually not", "No"],
        ["Retest included", "Yes", "Sometimes", "No"],
        ["Active exploitation attempts", "No", "Yes", "No"],
        ["Time to results", "2–5 business days", "Weeks", "Instant"],
      ],
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
          "Exposed API keys and Supabase/Firebase permissions (for AI-built apps)",
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
      body: "98% of apps built with AI tools ship with at least one security flaw — most from exposed API keys or misconfigured Supabase permissions. The same security check we run for any business covers this too.",
      sourceLabel: "Source: Symbiotic Security, scan of 1,072 apps",
      sourceUrl:
        "https://www.symbioticsec.ai/blog/we-scanned-1-072-vibe-coded-apps-98-had-security-flaws",
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
    faq: {
      eyebrow: "FAQ",
      title: "Questions worth asking before you start",
      items: [
        {
          q: "What is an external exposure check?",
          a: "An assessment that finds out what your business looks like from the outside on the internet — domains and subdomains, email configuration, security certificates, and your public website — and shows which of that is a real risk, in priority order.",
        },
        {
          q: "Does it include active exploitation attempts?",
          a: "No. The assessment uses passive, conservative methods only. We don't attempt to exploit vulnerabilities, send phishing emails, or risk disrupting your service. If you ever want a full active penetration test, that's a separate service with a very different scope and authorization.",
        },
        {
          q: "How long does it take to get results?",
          a: "Usually between two and five business days, depending on the size of your digital footprint.",
        },
        {
          q: "We're a small business with no IT staff — is this for us?",
          a: "That's exactly who this was built for. The report is written in plain language, no jargon, for the business owner, not just a technical team.",
        },
        {
          q: "What's the difference between this and a free automated scanner?",
          a: "An automated scan gives you a raw list of findings with no context. Every finding we deliver is reviewed by a person first, prioritized by real business risk, and comes with a retest confirming the fix actually worked.",
        },
        {
          q: "Does it cover Amendment 13 of Israel's Privacy Law?",
          a: "Yes, that's built into the assessment — no separate service needed for it.",
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
      links: {
        terms: "Terms of Use",
        privacy: "Privacy Policy",
        disclaimer: "Disclaimer",
      },
    },
  },
} as const;

export const CONTACT = {
  whatsapp: "972534377718",
  whatsappDisplay: "053-437-7718",
  email: "contact@clarvix.net",
};

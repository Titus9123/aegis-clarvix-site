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
      body: "התיקון בתוקף מאז 14 באוגוסט 2025, ותקופת החסד למינוי ממונה הגנת פרטיות הסתיימה ב-31 באוקטובר 2025. רשות הגנת הפרטיות מוסמכת כעת להטיל עיצומים כספיים בעצמה, בלי בית משפט: עד 5% מהמחזור השנתי, ולעסקים קטנים עד ₪140,000 בשנה. ביולי 2026 הוטל העיצום הראשון מכוח התיקון, ₪256,000, על דיווח באיחור על אירוע אבטחה.",
      sources: [
        {
          label: "IAPP — סקירת תיקון 13",
          url: "https://iapp.org/news/a/israel-marks-a-new-era-in-privacy-law-amendment-13-ushers-in-sweeping-reform",
        },
        {
          label: "Pearl Cohen — העיצום הראשון",
          url: "https://www.pearlcohen.com/israel-issues-first-of-its-kind-administrative-fine-for-failure-to-report-a-data-security-incident/",
        },
      ],
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
      note: "לפי דוח IBM לשנת 2025, לוקח לארגונים 158 ימים בממוצע רק כדי לזהות שדלף מידע, ועוד 83 ימים עד להכלת האירוע. הבדיקה הזו נועדה לכך שתדעו ראשונים.",
      noteSources: [
        {
          label: "IBM — Cost of a Data Breach 2025",
          url: "https://www.ibm.com/think/x-force/2025-cost-of-a-data-breach-navigating-ai",
        },
      ],
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
      body: "סריקה של Symbiotic Security על 1,072 אפליקציות שנבנו בשיטת vibe coding מצאה שב-98% מהן יש לפחות פרצת אבטחה אחת. ביולי 2025 חוקרי Wiz מצאו ב-Base44 עצמה ליקוי שאיפשר לעקוף SSO ולהיכנס לאפליקציות פרטיות, עם ה-app_id שגלוי בכתובת האתר בלבד. אותה בדיקת אבטחה שלנו מכסה בדיוק את הדברים האלה.",
      cta: "בדקו את האפליקציה שלי",
      sources: [
        {
          label: "Symbiotic Security — סריקת 1,072 אפליקציות",
          url: "https://www.symbioticsec.ai/blog/we-scanned-1-072-vibe-coded-apps-98-had-security-flaws",
        },
        {
          label: "Wiz Research — Base44",
          url: "https://www.wiz.io/blog/critical-vulnerability-base44",
        },
      ],
    },
    trust: {
      eyebrow: "למה לבחור בנו",
      title: "לא רק דוח אוטומטי",
      items: [
        {
          title: "בקרת איכות אנושית",
          desc: "כל ממצא נסקר אישית על ידי אלברט נוימן, מייסד Clarvix ובעל תעודת Offensive Security Expert ממכללת איקום (360 שעות לימוד, 2025) — לא מעתיקים פלט גולמי של כלי סריקה.",
        },
        {
          title: "בדיקה חוזרת כלולה",
          desc: "אחרי התיקונים, אנחנו בודקים שוב ומוודאים שהתיקון אכן עבד.",
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
        accessibility: "הצהרת נגישות",
      },
    },
    a11y: {
      openLabel: "אפשרויות נגישות",
      closeLabel: "סגירת תפריט הנגישות",
      title: "נגישות",
      fontSize: "גודל טקסט",
      increase: "הגדלת טקסט",
      decrease: "הקטנת טקסט",
      contrast: "ניגודיות גבוהה",
      grayscale: "גווני אפור",
      underlineLinks: "הדגשת קישורים",
      reduceMotion: "עצירת אנימציות",
      reset: "איפוס הגדרות",
      statementLink: "הצהרת נגישות מלאה",
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
      body: "The amendment has been in force since 14 August 2025, and the grace period to appoint a privacy officer ended on 31 October 2025. The Privacy Protection Authority can now impose fines itself, without going to court: up to 5% of annual turnover, capped at ₪140,000 a year for smaller businesses. In July 2026 it issued the first fine under the amendment, ₪256,000, for reporting a security incident late.",
      sources: [
        {
          label: "IAPP — Amendment 13 overview",
          url: "https://iapp.org/news/a/israel-marks-a-new-era-in-privacy-law-amendment-13-ushers-in-sweeping-reform",
        },
        {
          label: "Pearl Cohen — first administrative fine",
          url: "https://www.pearlcohen.com/israel-issues-first-of-its-kind-administrative-fine-for-failure-to-report-a-data-security-incident/",
        },
      ],
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
      note: "IBM's 2025 report puts the average time just to identify a data breach at 158 days, plus another 83 days to contain it. The point of this check is that you find out first.",
      noteSources: [
        {
          label: "IBM — Cost of a Data Breach 2025",
          url: "https://www.ibm.com/think/x-force/2025-cost-of-a-data-breach-navigating-ai",
        },
      ],
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
      body: "A Symbiotic Security scan of 1,072 vibe-coded apps found that 98% had at least one security flaw. In July 2025, Wiz researchers found a flaw in Base44 itself that let anyone bypass SSO and reach private apps using only the app_id visible in the URL. The same security check we run for any business covers exactly this.",
      cta: "Check my app",
      sources: [
        {
          label: "Symbiotic Security — scan of 1,072 apps",
          url: "https://www.symbioticsec.ai/blog/we-scanned-1-072-vibe-coded-apps-98-had-security-flaws",
        },
        {
          label: "Wiz Research — Base44",
          url: "https://www.wiz.io/blog/critical-vulnerability-base44",
        },
      ],
    },
    trust: {
      eyebrow: "Why us",
      title: "Not just an automated report",
      items: [
        {
          title: "Human quality control",
          desc: "Every finding is personally reviewed by Albert Neumann, Clarvix's founder and holder of an Offensive Security Expert certificate from Ecom School (360 academic hours, 2025) — never raw scanner output.",
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
        accessibility: "Accessibility Statement",
      },
    },
    a11y: {
      openLabel: "Accessibility options",
      closeLabel: "Close accessibility menu",
      title: "Accessibility",
      fontSize: "Text size",
      increase: "Increase text size",
      decrease: "Decrease text size",
      contrast: "High contrast",
      grayscale: "Grayscale",
      underlineLinks: "Underline links",
      reduceMotion: "Stop animations",
      reset: "Reset settings",
      statementLink: "Full accessibility statement",
    },
  },
} as const;

export const CONTACT = {
  whatsapp: "972534377718",
  whatsappDisplay: "053-437-7718",
  email: "contact@clarvix.net",
  businessId: "321411589",
  businessIdLabel: { he: "עוסק פטור", en: "Registered business (Osek Patur)" },
  linkedin: "https://www.linkedin.com/company/115794167",
  facebook: "https://www.facebook.com/profile.php?id=61594013503989",
};

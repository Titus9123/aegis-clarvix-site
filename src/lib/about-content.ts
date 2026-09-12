export const about = {
  he: {
    eyebrow: "מי עומד מאחורי הבדיקה",
    title: "שלום, אני אלברט נוימן",
    role: "מומחה אבטחת מידע עצמאי",
    lead: "אני מפעיל את Aegis, שירות של Clarvix שבודק מה מהעסק שלכם חשוף באינטרנט. כל דוח שיוצא מכאן עובר דרכי אישית לפני שהוא מגיע אליכם — זה לא פלט אוטומטי עם לוגו.",
    sections: [
      {
        h: "למה הקמתי את Aegis",
        p: "עסקים קטנים בישראל נופלים בין שתי אפשרויות. מצד אחד חברות אבטחה שמתמחרות לפי תקציב של ארגון גדול, עם תהליך מכירה ארוך ודוחות שנכתבו למחלקת IT שלכם אין. מצד שני סורקים אוטומטיים אנונימיים בכמה דולרים, שמחזירים רשימת אזהרות טכניות בלי הקשר, בלי תעדוף, ובלי אדם אחד שבדק אם זה בכלל רלוונטי אליכם. באמצע אין כמעט כלום, וזה בדיוק המקום שבו Aegis עובד.",
      },
      {
        h: "איך אני עובד",
        p: "הבדיקה נשענת על מתודולוגיות מוכרות בתעשייה — OWASP WSTG ו-PTES — ומשלבת כלים אוטומטיים עם סקירה אנושית. הכלים מוצאים מועמדים; אני מחליט מה מהווה סיכון אמיתי, מה התראת שווא, ומה סדר הטיפול הנכון לעסק הספציפי שלכם. ההבדל הזה הוא כל השירות: אתם מקבלים החלטות, לא ייצוא גולמי של סורק.",
      },
      {
        h: "מה אני לא עושה",
        p: "הבדיקה פסיבית ושמרנית לחלוטין. אני לא מנסה לנצל פרצות, לא שולח פישינג, ולא מבצע שום פעולה שעלולה להשבית שירות פעיל. אני גם לא גוף הסמכה: אני לא מנפיק תעודות תקן, ואף אחד — כולל אני — לא יכול להבטיח אבטחה מוחלטת. אם משהו נמצא מחוץ להיקף שלי, אני אומר את זה במקום להמציא תשובה.",
      },
      {
        h: "למי זה מתאים",
        p: "לעסקים קטנים ובינוניים בישראל שאין להם איש אבטחה פנימי, ולמייסדים בודדים שהשיקו מוצר עם כלי פיתוח מבוססי AI כמו Lovable, Base44 או Replit. שתי הקבוצות סובלות מאותה בעיה: מערכת שרצה בפרודקשן שאף אחד לא בדק מבחוץ.",
      },
    ],
    ctaTitle: "רוצים לדבר?",
    ctaBody: "שיחת היכרות קצרה, בלי עלות ובלי התחייבות. אני אגיד לכם ישירות אם הבדיקה רלוונטית לכם או לא.",
  },
  en: {
    eyebrow: "Who runs the assessment",
    title: "Hi, I'm Albert Neumann",
    role: "Independent cybersecurity professional",
    lead: "I run Aegis, a service by Clarvix that finds what's exposed about your business online. Every report that goes out passes through me personally before it reaches you — it isn't automated output with a logo on it.",
    sections: [
      {
        h: "Why I built Aegis",
        p: "Small businesses in Israel fall between two options. On one side, security firms priced for enterprise budgets, with long sales cycles and reports written for an IT department you don't have. On the other, anonymous automated scanners for a few dollars that return a list of technical warnings with no context, no prioritisation, and nobody who checked whether any of it actually matters to you. There is almost nothing in the middle, and that gap is exactly where Aegis operates.",
      },
      {
        h: "How I work",
        p: "The assessment is grounded in recognised industry methodologies — OWASP WSTG and PTES — and combines automated tooling with human review. The tools surface candidates; I decide what is a real risk, what is a false positive, and what order things should be fixed in for your specific business. That distinction is the whole service: you get decisions, not a raw scanner export.",
      },
      {
        h: "What I don't do",
        p: "The assessment is entirely passive and conservative. I don't attempt to exploit vulnerabilities, I don't send phishing, and I don't perform any action that could disrupt a live service. I'm also not a certification body: I don't issue compliance certificates, and nobody — myself included — can guarantee absolute security. If something falls outside my scope, I say so instead of inventing an answer.",
      },
      {
        h: "Who this is for",
        p: "Small and mid-size businesses in Israel with no internal security lead, and solo founders who shipped a product using AI-assisted development tools like Lovable, Base44 or Replit. Both groups have the same problem: a system running in production that nobody has ever looked at from the outside.",
      },
    ],
    ctaTitle: "Want to talk?",
    ctaBody: "A short intro call, no cost and no commitment. I'll tell you straight whether the assessment is relevant for you or not.",
  },
} as const;

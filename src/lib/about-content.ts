export const about = {
  he: {
    eyebrow: "מי עומד מאחורי הבדיקה",
    title: "שלום, אני אלברט נוימן",
    role: "מומחה אבטחת מידע עצמאי",
    lead: "אני מפעיל את Aegis, שירות של Clarvix שבודק מה מהעסק שלכם חשוף באינטרנט. כל דוח שיוצא מכאן עובר דרכי אישית לפני שהוא מגיע אליכם — זה לא פלט אוטומטי עם לוגו מודבק עליו.",
    sections: [
      {
        h: "למה הקמתי את Aegis",
        p: "עסקים קטנים בישראל תקועים כל הזמן באותו פער. מצד אחד חברות אבטחה שמתמחרות לפי תקציב של ארגון גדול, עם תהליך מכירה ארוך ודוחות שנכתבים למחלקת IT. מצד שני סורקים אוטומטיים אנונימיים בכמה דולרים לחודש, שמחזירים רשימת אזהרות טכניות בלי הקשר, בלי תעדוף, ובלי אף אחד שבדק אם משהו מזה בכלל רלוונטי אליכם. כמעט שום דבר לא נבנה בשביל מה שנמצא באמצע — וזה בדיוק הפער ש-Aegis ממלא.",
      },
      {
        h: "איך אני עובד",
        p: "הבדיקה נשענת על מתודולוגיות שהתעשייה באמת מכירה — OWASP WSTG ו-PTES — יחד עם סקירה אנושית על גבי הכלים האוטומטיים. הכלים מוצאים מועמדים. אני זה שמחליט מה מהווה סיכון אמיתי, מה רעש, ובאיזה סדר לתקן דברים בעסק הספציפי שלכם. זה בעצם כל השירות: אתם מקבלים החלטה, לא ייצוא גולמי של סורק.",
      },
      {
        h: "מה אני לא עושה",
        p: "הבדיקה פסיבית לגמרי — שמרנית בכוונה. אני לא מנסה לנצל שום דבר, לא שולח פישינג, ולא עושה שום דבר שעלול להפיל שירות פעיל. אני גם לא גוף הסמכה: אני לא מנפיק תעודות תקן, ואף אחד — כולל אני — לא יכול להבטיח אבטחה מוחלטת. אם משהו נמצא מחוץ למה שאני יכול לומר לכם, אני אומר את זה במקום להמציא תשובה.",
      },
      {
        h: "למי זה מתאים",
        p: "עסקים קטנים ובינוניים בישראל בלי מישהו שמוקדש לאבטחה, ומייסדים בודדים שהשיקו משהו עם כלים מבוססי AI כמו Lovable, Base44 או Replit. נקודות התחלה שונות, אותה בעיה: מערכת שרצה בפרודקשן שאף אחד לא הסתכל עליה מבחוץ.",
      },
    ],
    ctaTitle: "רוצים לדבר?",
    ctaBody: "שיחת היכרות קצרה — בלי עלות, בלי התחייבות. אני אגיד לכם ישר אם זה בכלל רלוונטי אליכם.",
  },
  en: {
    eyebrow: "Who runs the assessment",
    title: "Hi, I'm Albert Neumann",
    role: "Independent cybersecurity professional",
    lead: "I run Aegis, a service by Clarvix that finds what's exposed about your business online. Every report that goes out passes through me personally before it reaches you — this isn't automated output with a logo slapped on it.",
    sections: [
      {
        h: "Why I built Aegis",
        p: "Small businesses in Israel keep landing in the same gap. On one end, security firms priced for enterprise budgets, long sales cycles, and reports written for an IT department. On the other, anonymous scanners for a few dollars a month that spit out a list of technical warnings with zero context, no sense of priority, and nobody checking whether any of it actually applies to you. Almost nothing is built for what sits in between — that's the gap Aegis fills.",
      },
      {
        h: "How I work",
        p: "The assessment leans on methodologies the industry actually recognizes — OWASP WSTG and PTES — combined with human review on top of the automated tooling. The tools surface candidates. I'm the one who decides what's a real risk, what's noise, and what order to fix things in for your specific setup. That's really the whole service: you get a decision, not a raw export from a scanner.",
      },
      {
        h: "What I don't do",
        p: "The assessment is entirely passive — conservative by design. I don't try to exploit anything, I don't send phishing emails, and I won't do anything that risks knocking a live service offline. I'm not a certification body either: I don't issue compliance stamps, and nobody, myself included, can promise absolute security. If something's outside what I can tell you, I'll say so rather than make something up.",
      },
      {
        h: "Who this is for",
        p: "Small and mid-size businesses in Israel without anyone dedicated to security, and solo founders who shipped something using AI-assisted tools like Lovable, Base44, or Replit. Different starting points, same problem: a system running in production that nobody has ever looked at from the outside.",
      },
    ],
    ctaTitle: "Want to talk?",
    ctaBody: "A short intro call — no cost, no commitment. I'll tell you straight whether this is actually relevant for you or not.",
  },
} as const;

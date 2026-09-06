export type SecurityTopic = {
  title: string;
  problem: string;
  mitigation: string;
};

export type SecurityCategory = {
  name: string;
  items: SecurityTopic[];
};

export const securityTopics = {
  he: {
    eyebrow: "מה בדיוק אנחנו בודקים",
    title: "כל הנקודות שהבדיקה שלנו מכסה",
    intro:
      "לא רשימת באזוורדים — הסבר קצר על כל בעיה שאנחנו בודקים: מה הסיכון בפועל, ואיך מתקנים אותו. בלי לשלם לפני שאתם מבינים מה קניתם.",
    categories: [
      {
        name: "דואר, דומיין ותעודות אבטחה",
        items: [
          {
            title: "תת-דומיינים ונכסים נשכחים",
            problem:
              "כל תת-דומיין ישן שנשאר פעיל — אתר בדיקות, פרויקט צד שממשיך לרוץ, שרת שכבר לא בשימוש — הוא דרך כניסה שאף אחד לא בודק. תוקפים סורקים בדיוק את מה שכולם שכחו.",
            mitigation:
              "מיפוי מלא של כל תת-דומיין פעיל, השוואה מול מה שבאמת בשימוש, וסימון כל מה שנשאר חשוף בלי סיבה.",
          },
          {
            title: "זיוף כתובת השולח (Email Spoofing)",
            problem:
              "בלי SPF, DKIM ו-DMARC מוגדרים נכון, כל אחד יכול לשלוח מייל שנראה כאילו הגיע מהדומיין שלכם — ללקוחות, לספקים ואפילו לעובדים. זה הבסיס לרוב מתקפות הפישינג המכוונות לעסקים.",
            mitigation:
              "בדיקת שלוש הרשומות מול הסטנדרט, איתור קונפיגורציה חלקית או שגויה, והמלצה מדויקת לתיקון בלי לשבור מיילים שכן אמורים לצאת.",
          },
          {
            title: "תעודות אבטחה ו-TLS חלשים",
            problem:
              "תעודה שפג תוקפה, או הגדרת הצפנה ישנה, גורמת לדפדפן להציג אזהרה למבקרים — פוגעת באמון — ובמקרים חמורים מאפשרת ליירט תקשורת.",
            mitigation:
              "בדיקת תוקף התעודה, פרוטוקולי ההצפנה הנתמכים, ודירוג מול הסטנדרט המקובל בתעשייה.",
          },
          {
            title: "שירותי ניהול חשופים לאינטרנט",
            problem:
              "פאנל ניהול, ממשק מסד נתונים או שירות פנימי שנשאר נגיש מבחוץ בטעות — נקודת כניסה ישירה למי שמוצא אותו, בלי צורך לפרוץ שום דבר.",
            mitigation:
              "זיהוי כל שירות פתוח, הערכת רגישותו, והמלצה להגביל גישה לרשת פנימית או VPN בלבד.",
          },
        ],
      },
      {
        name: "האתר והאפליקציה",
        items: [
          {
            title: "הגדרת CORS מתירנית מדי",
            problem:
              "אם השרת עונה \"כן\" לכל אתר שמבקש גישה למידע, כל אתר זר יכול לקרוא מידע רגיש ישירות מהדפדפן של משתמש מחובר.",
            mitigation:
              "בדיקת תגובת השרת מול מקורות שונים, והגבלתו לרשימת דומיינים מפורשת שבאמת צריכה גישה.",
          },
          {
            title: "היעדר הגנת CSRF",
            problem:
              "בלי טוקן הגנה בטפסים, אתר זדוני יכול לגרום לדפדפן של משתמש מחובר לשלוח פעולה בלי שהוא ידע — שינוי הגדרות, רכישה או מחיקה.",
            mitigation:
              "בדיקת נוכחות טוקן הגנה בכל טופס שמבצע פעולה, והמלצה להוסיף אותו היכן שחסר.",
          },
          {
            title: "כותרות אבטחה חסרות",
            problem:
              "בלי כותרות כמו Strict-Transport-Security, X-Content-Type-Options ו-Content-Security-Policy, הדפדפן לא מקבל את ההנחיות הבסיסיות להגנה — פותח דלת ל-clickjacking ולהתקפות דומות.",
            mitigation:
              "רשימה מלאה של הכותרות החסרות, מדורגת לפי חשיבות, עם ההגדרה המדויקת להוספה.",
          },
          {
            title: "WordPress ורכיבים לא מעודכנים",
            problem:
              "תוסף או תבנית ישנה ב-WordPress היא אחת הדרכים הנפוצות ביותר לפרוץ לאתרים קטנים — עם חולשות ידועות ומתועדות שכל תוקף יכול לחפש.",
            mitigation:
              "זיהוי גרסת הליבה, התוספים והתבניות הפעילים, והשוואה מול מאגר חולשות ידועות (CVE).",
          },
          {
            title: "קבצים וסודות שנחשפו בטעות",
            problem:
              "קובץ הגדרות, .git, .env או קובץ תלויות שנשאר נגיש בפומבי חושף מבנה פנימי, ולפעמים ממש סיסמאות או מפתחות.",
            mitigation:
              "סריקה שיטתית של נתיבים ידועים לבעייתיות, וזיהוי כל קובץ שלא אמור להיות ציבורי.",
          },
          {
            title: "נתיבי ניהול ותיקיות רגישות חשופות",
            problem:
              "תיקיות כמו /admin, /backup או /internal שנגישות בלי הגנה מזמינות ניסיונות גישה — גם בלי חולשה ישירה, הן מרחיבות את מה שתוקף יודע עליכם.",
            mitigation:
              "מיפוי נתיבים בעלי שם רגיש, וסימון כל אחד מהם לבדיקה ידנית.",
          },
          {
            title: "הזרקת SQL (SQL Injection)",
            problem:
              "כשקלט של משתמש מגיע ישירות לשאילתת מסד הנתונים בלי סינון, תוקף יכול לשנות את השאילתה ולחלץ, לשנות או למחוק מידע — כולל נתוני לקוחות.",
            mitigation:
              "בדיקה בטוחה עם סימן בדיקה שפיר, ללא חילוץ מידע אמיתי — כל ממצא עובר אימות אנושי לפני שנחשב מאושר.",
          },
          {
            title: "XSS משתקף (Cross-Site Scripting)",
            problem:
              "אם קלט שהמשתמש מזין חוזר לדף בלי סינון, תוקף יכול להזריק קוד שירוץ בדפדפן של קורבן אחר — גניבת עוגיות או השתלטות על חשבון.",
            mitigation:
              "בדיקה עם סמן שפיר בלבד, וזיהוי היכן הפלט לא עובר בריחה (escaping) לפני הצגה.",
          },
          {
            title: "חולשות ידועות ברכיבים (CVE)",
            problem:
              "כל ספרייה, פלאגין או שרת עם גרסה ישנה עלול לשאת חולשה ידועה ומתועדת בפומבי — אלפי כלים אוטומטיים סורקים בדיוק את זה.",
            mitigation:
              "השוואת כל רכיב וגרסה מול מאגר CVE עדכני, ותעדוף לפי חומרה אמיתית.",
          },
          {
            title: "SSRF, XXE ו-LFI — ניצול פרמטרים לגישה פנימית",
            problem:
              "פרמטר שמקבל כתובת URL, קובץ XML או נתיב קובץ בלי בדיקה עלול לאפשר לתוקף לגרום לשרת לגשת למשאבים פנימיים שלא אמורים להיות נגישים מבחוץ.",
            mitigation:
              "זיהוי דפוס חשוד בפרמטרים, בלי ניצול בפועל, וסימון לבדיקה ידנית מדויקת.",
          },
        ],
      },
      {
        name: "אפליקציות שנבנו עם AI (Supabase / Firebase)",
        items: [
          {
            title: "מפתחות API חשופים בקוד שרץ בדפדפן",
            problem:
              "כלים כמו Lovable ו-Replit מקלים על הפרסום, אבל לפעמים גם על השארת מפתח API בקוד שנשלח לדפדפן — כל מי שפותח את כלי הפיתוח רואה אותו.",
            mitigation:
              "סריקת חבילת הקוד שנשלחת לדפדפן, וזיהוי כל מפתח שאמור להיות בשרת בלבד.",
          },
          {
            title: "Row Level Security כבוי או מוגדר לא נכון ב-Supabase",
            problem:
              "כשה-RLS כבוי, כל מי שיש לו את המפתח האנונימי הציבורי (שנמצא ממילא בכל דפדפן) יכול לקרוא — ולפעמים לכתוב — ישירות לטבלאות שאמורות להיות פרטיות.",
            mitigation:
              "בדיקה קריאה-בלבד מול המפתח האנונימי החשוף ממילא: האם טבלה שלא אמורה להיות ציבורית מחזירה מידע.",
          },
          {
            title: "מפתח service_role של Supabase נחשף בצד הלקוח",
            problem:
              "המפתח הזה עוקף לחלוטין את כל הגדרות ה-RLS — אם הוא נמצא בקוד שנשלח לדפדפן, כל מי שמוצא אותו קיבל גישה מלאה למסד הנתונים.",
            mitigation:
              "זיהוי המפתח לפי המבנה הייחודי שלו, ודגל קריטי מיידי לרוטציה.",
          },
          {
            title: "כללי Firestore / Realtime Database מתירניים מדי",
            problem:
              "בלי כללי הרשאה מוגדרים, מסד הנתונים של Firebase עונה לכל בקשה — אפילו בלי שום אימות.",
            mitigation:
              "בדיקה פסיבית: פנייה לנקודת הקצה הציבורית בלי טוקן, ובדיקה אם היא מחזירה מידע אמיתי.",
          },
        ],
      },
      {
        name: "סוכני בינה מלאכותית וצ'אטבוטים",
        items: [
          {
            title: "ניצול מכסת ה-API בתשלום (\"Denial of Wallet\")",
            problem:
              "אם נקודת הקצה של הצ'אט לא דורשת התחברות, כל אחד יכול לפנות אליה ישירות ולנצל את מכסת ה-API בתשלום שלכם — בלי לגנוב כלום, רק לחייב אתכם.",
            mitigation:
              "בדיקה עם קריאה מינימלית אחת: האם נקודת הקצה עונה בלי שום אימות.",
          },
          {
            title: "הזרקת הנחיות (Prompt Injection) וחשיפת הוראות פנימיות",
            problem:
              "הודעה פשוטה כמו \"התעלם מההוראות הקודמות\" יכולה לגרום למודל לחשוף את ההנחיות שקיבל — ולפעמים לוגיקה עסקית או מידע שלא אמור להיות פומבי.",
            mitigation:
              "בדיקה עם הודעה שפירה אחת, מחפשת סימנים לשוניים אופייניים להנחיה פנימית — רק כשיש הרשאה מפורשת לבדיקה כזו, כי היא צורכת שימוש אמיתי בתשלום.",
          },
          {
            title: "פלט של המודל שמוצג בלי סינון",
            problem:
              "אם התשובה של הבינה המלאכותית מוצגת בדף בלי בריחה (escaping), והצלחה להזריק תוכן למודל הופכת ל-XSS מלא נגד כל מי שרואה את אותה שיחה.",
            mitigation:
              "בדיקה סטטית של הקוד לאיתור הצגה לא בטוחה של תשובות, בתוספת המלצה לסנן HTML לפני הצגה.",
          },
          {
            title: "סוכן AI עם הרשאות יתר (\"Excessive Agency\")",
            problem:
              "אם לסוכן יש הרשאה לכתוב למסד הנתונים או לשלוח מיילים בלי אישור אנושי, הזרקת הוראות מוצלחת יכולה לגרום לו לבצע פעולה אמיתית בלי שאף אחד התכוון לזה.",
            mitigation:
              "לא בודקים ישירות — בדיקה שמצליחה כבר תגרום לנזק אמיתי. במקום זה, שואלים בפגישת התוצאות ומייעצים על אישור אנושי לפני כל פעולה בלתי הפיכה.",
          },
        ],
      },
    ],
  },
  en: {
    eyebrow: "What we actually check",
    title: "Every point our assessment covers",
    intro:
      "Not a buzzword list — a short explanation of each issue we check: what the real risk is, and how it gets fixed. So you know exactly what you're paying for before you pay for it.",
    categories: [
      {
        name: "Email, domain & certificates",
        items: [
          {
            title: "Forgotten subdomains and assets",
            problem:
              "Every old subdomain left running — a test site, a side project, a server nobody uses anymore — is an entry point nobody's watching. Attackers scan for exactly what everyone forgot.",
            mitigation:
              "Full mapping of every active subdomain, cross-checked against what's actually in use, flagging anything left exposed for no reason.",
          },
          {
            title: "Email spoofing",
            problem:
              "Without SPF, DKIM, and DMARC configured correctly, anyone can send an email that looks like it came from your domain — to customers, vendors, even employees. It's the base of most phishing attacks targeting businesses.",
            mitigation:
              "Checking all three records against the standard, spotting partial or incorrect configuration, and giving the exact fix without breaking mail you actually need to send.",
          },
          {
            title: "Weak TLS and certificates",
            problem:
              "An expired certificate or an outdated encryption setup makes the browser show visitors a warning — damaging trust — and in serious cases allows communication to be intercepted.",
            mitigation:
              "Checking certificate validity, supported encryption protocols, and grading against the industry standard.",
          },
          {
            title: "Exposed admin services",
            problem:
              "An admin panel, database interface, or internal service left reachable from the internet by mistake is a direct entry point for whoever finds it — no breach required.",
            mitigation:
              "Identifying every exposed service, assessing its sensitivity, and recommending it be restricted to an internal network or VPN.",
          },
        ],
      },
      {
        name: "Website & application",
        items: [
          {
            title: "Overly permissive CORS configuration",
            problem:
              "If the server says \"yes\" to any site asking for access to its data, any external site can read sensitive data directly from a logged-in user's browser.",
            mitigation:
              "Testing the server's response against different origins, and restricting it to an explicit list of domains that actually need access.",
          },
          {
            title: "Missing CSRF protection",
            problem:
              "Without a protection token in forms, a malicious site can get a logged-in user's browser to submit an action without them knowing — changing settings, a purchase, or a deletion.",
            mitigation:
              "Checking every state-changing form for a protection token, and recommending one wherever it's missing.",
          },
          {
            title: "Missing security headers",
            problem:
              "Without headers like Strict-Transport-Security, X-Content-Type-Options, and Content-Security-Policy, the browser never gets the basic instructions to protect the user — opening the door to clickjacking and similar attacks.",
            mitigation:
              "A full list of missing headers, ranked by importance, with the exact configuration to add.",
          },
          {
            title: "Outdated WordPress and components",
            problem:
              "An old plugin or theme in WordPress is one of the most common ways small sites get breached — with known, publicly documented vulnerabilities any attacker can look up.",
            mitigation:
              "Identifying the core version, active plugins, and themes, cross-checked against a known vulnerability (CVE) database.",
          },
          {
            title: "Accidentally exposed files and secrets",
            problem:
              "A config file, .git, .env, or dependency manifest left publicly accessible reveals internal structure — and sometimes actual passwords or keys.",
            mitigation:
              "Systematic scanning of known problem paths, flagging anything that shouldn't be public.",
          },
          {
            title: "Exposed admin paths and sensitive folders",
            problem:
              "Folders like /admin, /backup, or /internal left reachable without protection invite probing — even without a direct flaw, they hand an attacker more of a map of your system.",
            mitigation:
              "Mapping paths with sensitive-sounding names, and flagging each one for manual review.",
          },
          {
            title: "SQL Injection",
            problem:
              "When user input reaches a database query unfiltered, an attacker can alter the query to extract, change, or delete data — including customer data.",
            mitigation:
              "Testing safely with a benign marker, no real data extraction — every finding gets human confirmation before it counts as validated.",
          },
          {
            title: "Reflected XSS (Cross-Site Scripting)",
            problem:
              "If user input is reflected back on a page unfiltered, an attacker can inject code that runs in another victim's browser — stealing cookies or hijacking an account.",
            mitigation:
              "Testing with a benign marker only, identifying where output isn't escaped before being displayed.",
          },
          {
            title: "Known vulnerabilities in components (CVEs)",
            problem:
              "Any library, plugin, or server running an outdated version can carry a publicly known, documented vulnerability — thousands of automated tools scan for exactly this.",
            mitigation:
              "Cross-checking every component and version against an up-to-date CVE database, prioritized by real-world severity.",
          },
          {
            title: "SSRF, XXE and LFI — exploiting parameters for internal access",
            problem:
              "A parameter that accepts a URL, an XML payload, or a file path without validation can let an attacker make the server reach internal resources that were never meant to be reachable from outside.",
            mitigation:
              "Detecting a suspicious pattern in parameters, without real exploitation, and flagging it for precise manual review.",
          },
        ],
      },
      {
        name: "Apps built with AI (Supabase / Firebase)",
        items: [
          {
            title: "API keys exposed in browser-facing code",
            problem:
              "Tools like Lovable and Replit make shipping fast — but sometimes also make it easy to leave an API key in code sent to the browser, visible to anyone who opens dev tools.",
            mitigation:
              "Scanning the bundle sent to the browser, identifying any key that should only ever live on a server.",
          },
          {
            title: "Row Level Security off or misconfigured in Supabase",
            problem:
              "With RLS off, anyone holding the public anonymous key (already present in every browser) can read — sometimes write — directly to tables that were meant to be private.",
            mitigation:
              "A read-only test against the already-public anonymous key: does a table that shouldn't be public return data.",
          },
          {
            title: "Supabase service_role key exposed client-side",
            problem:
              "This key completely bypasses every RLS rule — if it's in code sent to the browser, whoever finds it has full access to the database.",
            mitigation:
              "Identifying the key by its distinct structure, and flagging it as critical for immediate rotation.",
          },
          {
            title: "Overly permissive Firestore / Realtime Database rules",
            problem:
              "Without security rules configured, a Firebase database answers any request — even with zero authentication.",
            mitigation:
              "A passive check: hitting the public endpoint with no token, and checking whether it returns real data.",
          },
        ],
      },
      {
        name: "AI agents and chatbots",
        items: [
          {
            title: "Paid API quota abuse (\"denial of wallet\")",
            problem:
              "If a chat endpoint doesn't require login, anyone can hit it directly and burn through your paid API quota — no data stolen, just a bill run up.",
            mitigation:
              "A single minimal call to check whether the endpoint responds with zero authentication.",
          },
          {
            title: "Prompt injection and system prompt leakage",
            problem:
              "A simple message like \"ignore your previous instructions\" can get a model to reveal the instructions it was given — sometimes business logic or information that was never meant to be public.",
            mitigation:
              "A single benign message checking for language typical of an internal prompt — only run with explicit authorization, since it uses real paid usage.",
          },
          {
            title: "Unsanitized AI output",
            problem:
              "If the model's response is rendered on the page without escaping, and an attacker manages to get the model to include content in that response, it becomes full XSS against anyone who sees that conversation.",
            mitigation:
              "Static code review to find unsafe rendering of responses, plus a recommendation to sanitize HTML before display.",
          },
          {
            title: "AI agent with excessive permissions (\"excessive agency\")",
            problem:
              "If an agent can write to a database or send emails without human confirmation, a successful injection can make it take a real action nobody actually intended.",
            mitigation:
              "Not tested directly — a successful test would already be real damage. Instead, it's raised directly in the results meeting, with a recommendation to require human confirmation before any irreversible action.",
          },
        ],
      },
    ],
  },
} as const;

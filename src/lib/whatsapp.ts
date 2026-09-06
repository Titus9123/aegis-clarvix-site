import { CONTACT } from "@/lib/content";
import type { Lang } from "@/lib/content";

export function whatsappHref(lang: Lang) {
  const message =
    lang === "he"
      ? "שלום, אני רוצה לדעת יותר על הבדיקה של Aegis"
      : "Hi, I'd like to know more about the Aegis assessment";
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function mailtoHref() {
  return `mailto:${CONTACT.email}`;
}

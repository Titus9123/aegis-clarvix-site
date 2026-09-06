"use client";

import { Mail, MessageCircle } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Logo } from "@/components/logo";
import { CONTACT } from "@/lib/content";
import { whatsappHref, mailtoHref } from "@/lib/whatsapp";

export function Footer() {
  const { t, lang } = useLanguage();

  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">{t.footer.tagline}</p>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <a
              href={whatsappHref(lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground/90 hover:text-primary"
            >
              <MessageCircle className="h-4 w-4" />
              {CONTACT.whatsappDisplay}
            </a>
            <a
              href={mailtoHref()}
              className="flex items-center gap-2 text-foreground/90 hover:text-primary"
            >
              <Mail className="h-4 w-4" />
              {CONTACT.email}
            </a>
          </div>
        </div>

        <p className="mt-10 max-w-2xl text-xs leading-relaxed text-muted-foreground">
          {t.footer.disclaimer}
        </p>

        <div className="mt-8 border-t border-border/60 pt-6 text-center text-xs text-muted-foreground">
          <span>
            © {new Date().getFullYear()} Aegis by Clarvix — {t.footer.rights}
          </span>
        </div>
      </div>
    </footer>
  );
}

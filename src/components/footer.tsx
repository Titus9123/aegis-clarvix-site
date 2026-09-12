"use client";

import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Logo } from "@/components/logo";
import { CONTACT } from "@/lib/content";
import { whatsappHref, mailtoHref } from "@/lib/whatsapp";
import { trackWhatsAppClick, trackEmailClick } from "@/lib/analytics";
import { localePath } from "@/lib/seo";

export function Footer() {
  const { t, lang } = useLanguage();

  return (
    // Frosted rather than opaque: the fully-powered circuit stays visible as a
    // diffuse glow behind the footer without fighting the text for contrast.
    // backdrop-filter over a moving backdrop is expensive on phone GPUs, so
    // small screens get a slightly heavier scrim instead of the blur.
    <footer className="relative border-t border-border/60 bg-background/85 sm:bg-background/75 sm:backdrop-blur-md">
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
              onClick={trackWhatsAppClick}
              className="flex min-h-11 items-center gap-2 text-foreground/90 hover:text-primary"
            >
              <MessageCircle className="h-4 w-4" />
              {CONTACT.whatsappDisplay}
            </a>
            <a
              href={mailtoHref()}
              onClick={trackEmailClick}
              className="flex min-h-11 items-center gap-2 text-foreground/90 hover:text-primary"
            >
              <Mail className="h-4 w-4" />
              {CONTACT.email}
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-11 items-center gap-2 text-foreground/90 hover:text-primary"
            >
              {/* lucide-react has no LinkedIn glyph; inline is lighter than an
                  extra icon package for one icon. */}
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
              </svg>
              Clarvix
            </a>
            <a
              href={CONTACT.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-11 items-center gap-2 text-foreground/90 hover:text-primary"
            >
              {/* lucide-react has no Facebook glyph either; same inline pattern. */}
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M13.5 21v-7.7h2.6l.4-3h-3v-1.9c0-.87.24-1.46 1.5-1.46h1.6V4.28C15.9 4.19 15 4.1 13.9 4.1c-2.3 0-3.9 1.4-3.9 4v2.2H7.4v3h2.6V21h3.5z" />
              </svg>
              Aegis by Clarvix
            </a>
          </div>
        </div>

        <p className="mt-10 max-w-2xl text-xs leading-relaxed text-muted-foreground">
          {t.footer.disclaimer}
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <span>
            © {new Date().getFullYear()} Aegis by Clarvix — {t.footer.rights} ·{" "}
            {CONTACT.businessIdLabel[lang]} {CONTACT.businessId}
          </span>
          {/* -my-3 keeps the visual rhythm while the padding gives each link a
              44px touch target. */}
          <nav className="-my-3 flex items-center gap-4">
            <Link
              href={localePath(lang, "/about")}
              className="inline-flex min-h-11 items-center hover:text-foreground"
            >
              {t.nav.about}
            </Link>
            <Link
              href={localePath(lang, "/terms")}
              className="inline-flex min-h-11 items-center hover:text-foreground"
            >
              {t.footer.links.terms}
            </Link>
            <Link
              href={localePath(lang, "/privacy")}
              className="inline-flex min-h-11 items-center hover:text-foreground"
            >
              {t.footer.links.privacy}
            </Link>
            <Link
              href={localePath(lang, "/disclaimer")}
              className="inline-flex min-h-11 items-center hover:text-foreground"
            >
              {t.footer.links.disclaimer}
            </Link>
            <Link
              href={localePath(lang, "/accessibility")}
              className="inline-flex min-h-11 items-center hover:text-foreground"
            >
              {t.footer.links.accessibility}
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

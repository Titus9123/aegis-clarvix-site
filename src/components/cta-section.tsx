"use client";

import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/magnetic";
import { whatsappHref } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";

export function CtaSection() {
  const { t, lang } = useLanguage();

  // No local circuit texture here: by this scroll depth the page-wide backdrop
  // is near full power and a second one only muddies it.
  return (
    <section className="relative overflow-hidden border-y border-border/60 bg-secondary/15">
      {/* Pools darkness under the copy so the lit circuit reads as a halo
          around it rather than noise behind it. */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_70%_at_50%_50%,rgba(0,0,0,0.9),rgba(0,0,0,0.45)_55%,transparent_85%)]" />
      <div className="relative mx-auto max-w-2xl px-6 py-24 text-center">
        <h2 className="text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {t.cta.title}
        </h2>
        <p className="mt-3 text-muted-foreground">{t.cta.body}</p>
        <Magnetic className="mt-8 inline-block">
          <Button
            size="lg"
            className="h-11 gap-2 bg-primary px-5 text-primary-foreground shadow-[0_0_24px_rgba(0,240,217,0.35)] transition-transform duration-200 hover:scale-[1.03] hover:bg-primary/90 active:scale-[0.97] sm:h-9 sm:px-2.5"
            nativeButton={false}
            render={
              <a
                href={whatsappHref(lang)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackWhatsAppClick}
              />
            }
          >
            <MessageCircle className="h-4 w-4" />
            {t.cta.ctaPrimary}
          </Button>
        </Magnetic>
      </div>
    </section>
  );
}

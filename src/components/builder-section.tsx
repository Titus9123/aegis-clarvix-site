"use client";

import { Code2, MessageCircle } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { SourceNote } from "@/components/source-note";
import { whatsappHref } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";

export function BuilderSection() {
  const { t, lang } = useLanguage();

  return (
    <section id="builders" className="relative overflow-hidden border-y border-border/60 bg-secondary/40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_100%_at_30%_50%,rgba(0,0,0,0.55),transparent_80%)]"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-[auto_1fr]">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10">
          <Code2 className="h-8 w-8 text-primary" />
        </div>

        <div>
          <span className="text-sm font-medium tracking-wide text-primary">
            {t.builders.eyebrow}
          </span>
          <h2 className="mt-2 text-balance font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {t.builders.title}
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">{t.builders.body}</p>
          <SourceNote sources={t.builders.sources} className="mt-2 max-w-2xl" />

          <div className="mt-6">
            <Button
              className="h-11 gap-2 bg-primary px-5 text-primary-foreground transition-transform duration-200 hover:scale-[1.03] hover:bg-primary/90 active:scale-[0.97] sm:h-8 sm:px-2.5"
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
              {t.builders.cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

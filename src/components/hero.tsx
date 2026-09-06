"use client";

import { Mail, MessageCircle } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { CircuitBackdrop } from "@/components/circuit-backdrop";
import { whatsappHref, mailtoHref } from "@/lib/whatsapp";

export function Hero() {
  const { t, lang } = useLanguage();

  return (
    <section id="top" className="relative overflow-hidden">
      <CircuitBackdrop className="pointer-events-none absolute inset-0 h-full w-full opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background to-background" />

      <div className="relative mx-auto max-w-4xl px-6 py-28 text-center sm:py-36">
        <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium tracking-wide text-primary">
          {t.hero.eyebrow}
        </span>

        <h1 className="mt-6 text-balance font-heading text-4xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-5xl md:text-6xl">
          {t.hero.headline}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
          {t.hero.subheadline}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            size="lg"
            className="gap-2 bg-primary text-primary-foreground shadow-[0_0_24px_rgba(0,240,217,0.35)] transition-transform duration-200 hover:scale-[1.03] hover:bg-primary/90 active:scale-[0.97]"
            nativeButton={false}
            render={<a href={whatsappHref(lang)} target="_blank" rel="noopener noreferrer" />}
          >
            <MessageCircle className="h-4 w-4" />
            {t.hero.ctaPrimary}
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="gap-2 border-border/60"
            nativeButton={false}
            render={<a href={mailtoHref()} />}
          >
            <Mail className="h-4 w-4" />
            {t.hero.ctaSecondary}
          </Button>
        </div>
      </div>
    </section>
  );
}

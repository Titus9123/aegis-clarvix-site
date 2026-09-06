"use client";

import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { CircuitBackdrop } from "@/components/circuit-backdrop";
import { whatsappHref } from "@/lib/whatsapp";

export function CtaSection() {
  const { t, lang } = useLanguage();

  return (
    <section className="relative overflow-hidden border-y border-border/60 bg-secondary/30">
      <CircuitBackdrop className="pointer-events-none absolute inset-0 h-full w-full opacity-25" />
      <div className="relative mx-auto max-w-2xl px-6 py-24 text-center">
        <h2 className="text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {t.cta.title}
        </h2>
        <p className="mt-3 text-muted-foreground">{t.cta.body}</p>
        <Button
          size="lg"
          className="mt-8 gap-2 bg-primary text-primary-foreground shadow-[0_0_24px_rgba(0,240,217,0.35)] transition-transform duration-200 hover:scale-[1.03] hover:bg-primary/90 active:scale-[0.97]"
          nativeButton={false}
          render={<a href={whatsappHref(lang)} target="_blank" rel="noopener noreferrer" />}
        >
          <MessageCircle className="h-4 w-4" />
          {t.cta.ctaPrimary}
        </Button>
      </div>
    </section>
  );
}

"use client";

import { ShieldAlert } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export function RegulatoryBanner() {
  const { t } = useLanguage();

  return (
    <section className="border-y border-primary/20 bg-primary/[0.06]">
      <div className="mx-auto flex max-w-4xl flex-col items-start gap-4 px-6 py-8 sm:flex-row sm:items-center">
        <ShieldAlert className="h-8 w-8 shrink-0 text-primary" />
        <div>
          <p className="font-heading text-lg font-semibold text-foreground">
            {t.regulatory.title}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">{t.regulatory.body}</p>
          <a
            href={t.regulatory.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-xs text-muted-foreground/80 underline underline-offset-2 hover:text-foreground"
          >
            {t.regulatory.sourceLabel}
          </a>
        </div>
      </div>
    </section>
  );
}

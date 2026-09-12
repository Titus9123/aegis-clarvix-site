"use client";

import { ShieldAlert } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { SourceNote } from "@/components/source-note";

export function RegulatoryBanner() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden border-y border-primary/20 bg-primary/[0.06]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_100%_at_20%_50%,rgba(0,0,0,0.7),transparent_75%)]"
      />
      <div className="relative mx-auto flex max-w-4xl flex-col items-start gap-4 px-6 py-8 sm:flex-row sm:items-center">
        <ShieldAlert className="h-8 w-8 shrink-0 text-primary" />
        <div>
          <p className="font-heading text-lg font-semibold text-foreground">
            {t.regulatory.title}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">{t.regulatory.body}</p>
          <SourceNote sources={t.regulatory.sources} className="mt-2" />
        </div>
      </div>
    </section>
  );
}

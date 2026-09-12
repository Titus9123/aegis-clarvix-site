"use client";

import { UserCheck, RotateCcw, ShieldOff } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

const icons = [UserCheck, RotateCcw, ShieldOff];

export function TrustSection() {
  const { t } = useLanguage();

  return (
    <section id="trust" className="relative mx-auto max-w-6xl px-6 py-24">
      {/* By this scroll depth the backdrop circuit is bright enough to
          compete with the three-column copy below; pool darkness under it
          the same way the coverage and CTA sections do. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_82%_68%_at_50%_45%,rgba(0,0,0,0.88),rgba(0,0,0,0.55)_60%,transparent_90%)]"
      />
      <div className="relative mx-auto max-w-2xl text-center">
        <span className="text-sm font-medium tracking-wide text-primary">
          {t.trust.eyebrow}
        </span>
        <h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {t.trust.title}
        </h2>
      </div>

      <div className="relative mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-3">
        {t.trust.items.map((item, i) => {
          const Icon = icons[i];
          return (
            <div key={item.title} className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

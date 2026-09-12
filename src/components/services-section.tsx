"use client";

import { Check } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SourceNote } from "@/components/source-note";

export function ServicesSection() {
  const { t } = useLanguage();
  const item = t.services.item;

  return (
    <section id="services" className="relative mx-auto max-w-6xl px-6 py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_65%_at_50%_35%,rgba(0,0,0,0.82),rgba(0,0,0,0.45)_55%,transparent_88%)]"
      />
      <div className="relative mx-auto max-w-2xl text-center">
        <span className="text-sm font-medium tracking-wide text-primary">
          {t.services.eyebrow}
        </span>
        <h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {t.services.title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-sm text-muted-foreground">
          {t.services.note}
        </p>
        <SourceNote sources={t.services.noteSources} className="mt-2" />
      </div>

      <div className="relative mx-auto mt-14 max-w-xl">
        <Card className="border-border/60 bg-card/60 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_12px_40px_rgba(0,240,217,0.12)]">
          <CardHeader>
            <CardTitle className="font-heading text-xl">{item.title}</CardTitle>
            <CardDescription className="text-base">{item.desc}</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2.5 text-sm text-foreground/90">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <Separator className="my-6" />
            <div className="flex items-baseline gap-2">
              <span className="font-heading text-3xl font-bold text-foreground">
                {item.price}
              </span>
              <span className="text-sm text-muted-foreground">{item.priceNote}</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

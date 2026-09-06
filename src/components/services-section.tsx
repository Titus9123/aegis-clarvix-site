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

export function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-medium tracking-wide text-primary">
          {t.services.eyebrow}
        </span>
        <h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {t.services.title}
        </h2>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {t.services.items.map((item) => (
          <Card
            key={item.title}
            className="border-border/60 bg-card/60 transition-colors hover:border-primary/40"
          >
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
                <span className="font-heading text-2xl font-bold text-foreground">
                  {item.price}
                </span>
                <span className="text-sm text-muted-foreground">{item.priceNote}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

"use client";

import { useLanguage } from "@/components/language-provider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
  const { t } = useLanguage();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-24">
      {/* FAQPage structured data — mirrors the visible accordion below,
          keyed to the active language so it never drifts from what's on screen. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="text-center">
        <span className="text-sm font-medium tracking-wide text-primary">
          {t.faq.eyebrow}
        </span>
        <h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {t.faq.title}
        </h2>
      </div>

      <Accordion className="mt-10">
        {t.faq.items.map((item, i) => (
          <AccordionItem key={item.q} value={`item-${i}`} className="border-border/60">
            <AccordionTrigger className="text-start font-heading text-base font-semibold text-foreground hover:no-underline">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="leading-relaxed text-muted-foreground">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

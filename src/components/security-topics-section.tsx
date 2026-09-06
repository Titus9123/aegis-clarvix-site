"use client";

import { useLanguage } from "@/components/language-provider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { securityTopics } from "@/lib/security-topics-content";

export function SecurityTopicsSection() {
  const { lang } = useLanguage();
  const content = securityTopics[lang];
  const labels =
    lang === "he"
      ? { problem: "הבעיה:", mitigation: "איך מתקנים:" }
      : { problem: "The problem:", mitigation: "How it's mitigated:" };

  return (
    <section id="coverage" className="mx-auto max-w-4xl px-6 py-24">
      <div className="text-center">
        <span className="text-sm font-medium tracking-wide text-primary">
          {content.eyebrow}
        </span>
        <h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {content.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
          {content.intro}
        </p>
      </div>

      <div className="mt-12 space-y-10">
        {content.categories.map((category, ci) => (
          <div key={category.name}>
            <h3 className="font-heading text-lg font-semibold text-foreground">
              {category.name}
            </h3>
            <Accordion className="mt-4">
              {category.items.map((item, ii) => (
                <AccordionItem
                  key={item.title}
                  value={`cat${ci}-item${ii}`}
                  className="border-border/60"
                >
                  <AccordionTrigger className="text-start font-heading text-base font-semibold text-foreground hover:no-underline">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="space-y-3 leading-relaxed text-muted-foreground">
                    <p>
                      <span className="font-medium text-foreground">{labels.problem}</span>{" "}
                      {item.problem}
                    </p>
                    <p>
                      <span className="font-medium text-foreground">{labels.mitigation}</span>{" "}
                      {item.mitigation}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </section>
  );
}

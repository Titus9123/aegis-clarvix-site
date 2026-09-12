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

  // Every checked topic as a Question/Answer pair. This list is the most
  // fact-dense, most citable content on the site; without markup an answer
  // engine has no structured way to pull "what does Aegis check for X".
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: content.title,
    itemListElement: content.categories.flatMap((category) =>
      category.items.map((item) => ({
        "@type": "ListItem",
        item: {
          "@type": "Question",
          name: item.title,
          answerCount: 1,
          acceptedAnswer: {
            "@type": "Answer",
            text: `${labels.problem} ${item.problem} ${labels.mitigation} ${item.mitigation}`,
          },
        },
      })),
    ).map((entry, i) => ({ ...entry, position: i + 1 })),
  };

  return (
    <section id="coverage" className="relative mx-auto max-w-4xl px-6 py-24">
      {/* The densest block of copy on the page needs its own ground, or the
          backdrop competes with it once the circuit starts carrying current. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_78%_62%_at_50%_50%,rgba(0,0,0,0.88),rgba(0,0,0,0.55)_62%,transparent_92%)]"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="relative text-center">
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

      <div className="relative mt-12 space-y-10">
        {content.categories.map((category, ci) => (
          <div key={category.name}>
            <h3 className="font-heading text-lg font-semibold text-foreground">
              {category.name}
            </h3>
            {/* hiddenUntilFound keeps every answer in the served HTML (via
                hidden="until-found") instead of mounting it on click. Without
                it none of this copy reaches a crawler or an AI engine, which
                is most of the substance on the page. */}
            <Accordion className="mt-4" hiddenUntilFound>
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

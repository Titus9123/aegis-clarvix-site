"use client";

import { useLanguage } from "@/components/language-provider";
import { securityTopics } from "@/lib/security-topics-content";

export function SecurityTopicsSection() {
  const { lang } = useLanguage();
  const content = securityTopics[lang];
  const labels =
    lang === "he"
      ? { problem: "הבעיה:", mitigation: "איך מתקנים:" }
      : { problem: "The problem:", mitigation: "How it's mitigated:" };

  return (
    <section id="coverage" className="relative mx-auto max-w-5xl px-6 py-24">
      {/* The densest block of copy on the page needs its own ground, or the
          backdrop competes with it once the circuit starts carrying current. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_78%_62%_at_50%_50%,rgba(0,0,0,0.88),rgba(0,0,0,0.55)_62%,transparent_92%)]"
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

      {/* Always visible, never collapsed: this is reference material meant
          for reading and for indexing — nothing depends on a click, and it
          sidesteps any browser's support quirks with hidden="until-found". */}
      <div className="relative mt-14 space-y-12">
        {content.categories.map((category) => (
          <div key={category.name}>
            <h3 className="border-b border-border/60 pb-3 font-heading text-lg font-semibold text-primary">
              {category.name}
            </h3>
            <div className="mt-6 grid gap-x-8 gap-y-8 md:grid-cols-2">
              {category.items.map((item) => (
                <article key={item.title}>
                  <h4 className="font-heading text-base font-semibold text-foreground">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    <span className="font-medium text-foreground/90">{labels.problem}</span>{" "}
                    {item.problem}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    <span className="font-medium text-foreground/90">{labels.mitigation}</span>{" "}
                    {item.mitigation}
                  </p>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

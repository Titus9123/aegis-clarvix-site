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
    <section id="coverage" className="mx-auto max-w-5xl px-6 py-24">
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

      {/* Contenido siempre visible, no colapsado: es material de referencia
          pensado para lectura y para indexación — nada depende de un clic. */}
      <div className="mt-14 space-y-12">
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

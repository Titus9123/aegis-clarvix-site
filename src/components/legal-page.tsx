"use client";

import { useLanguage } from "@/components/language-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { legal } from "@/lib/legal-content";
import { breadcrumbJsonLd } from "@/lib/seo";

export function LegalPage({ doc }: { doc: "terms" | "privacy" | "disclaimer" }) {
  const { lang } = useLanguage();
  const content = legal[lang][doc];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd(lang, `/${doc}`, content.title)),
        }}
      />
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {content.title}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">{content.updated}</p>

        <div className="mt-10 space-y-8">
          {content.sections.map((section) => (
            <section key={section.h}>
              <h2 className="font-heading text-lg font-semibold text-foreground">
                {section.h}
              </h2>
              <p className="mt-2 leading-relaxed text-muted-foreground">{section.p}</p>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

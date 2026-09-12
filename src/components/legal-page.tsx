"use client";

import { useLanguage } from "@/components/language-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { legal, LEGAL_UPDATED_ISO } from "@/lib/legal-content";
import { SITE_URL, localePath } from "@/lib/seo";

export function LegalPage({
  doc,
}: {
  doc: "terms" | "privacy" | "disclaimer" | "accessibility";
}) {
  const { lang } = useLanguage();
  const content = legal[lang][doc];
  const url = `${SITE_URL}${localePath(lang, `/${doc}`)}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": url,
    url,
    name: content.title,
    inLanguage: lang,
    dateModified: LEGAL_UPDATED_ISO,
    isPartOf: { "@id": `${SITE_URL}${localePath(lang)}#website` },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {content.title}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          <time dateTime={LEGAL_UPDATED_ISO}>{content.updated}</time>
        </p>

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

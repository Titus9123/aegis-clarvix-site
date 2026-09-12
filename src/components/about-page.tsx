"use client";

import { useLanguage } from "@/components/language-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { about } from "@/lib/about-content";
import { personJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { whatsappHref } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";

export function AboutPage() {
  const { lang } = useLanguage();
  const content = about[lang];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd(lang)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd(lang, "/about", content.title)),
        }}
      />

      <Header />
      <main className="mx-auto max-w-3xl px-6 py-20">
        <span className="text-sm font-medium tracking-wide text-primary">
          {content.eyebrow}
        </span>
        <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {content.title}
        </h1>
        <p className="mt-2 text-sm font-medium text-accent">{content.role}</p>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{content.lead}</p>

        <div className="mt-12 space-y-10">
          {content.sections.map((section) => (
            <section key={section.h}>
              <h2 className="font-heading text-xl font-semibold text-foreground">
                {section.h}
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{section.p}</p>
            </section>
          ))}
        </div>

        <div className="mt-14 rounded-xl border border-border/60 bg-card/40 p-8 text-center">
          <h2 className="font-heading text-xl font-semibold text-foreground">
            {content.ctaTitle}
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">{content.ctaBody}</p>
          <Button
            className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90"
            nativeButton={false}
            render={
              <a
                href={whatsappHref(lang)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackWhatsAppClick}
              />
            }
          >
            {lang === "he" ? "לתיאום שיחה בוואטסאפ" : "Chat on WhatsApp"}
          </Button>
        </div>
      </main>
      <Footer />
    </>
  );
}

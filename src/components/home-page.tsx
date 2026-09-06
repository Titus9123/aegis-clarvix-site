import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { RegulatoryBanner } from "@/components/regulatory-banner";
import { ScanDemo } from "@/components/scan-demo";
import { ServicesSection } from "@/components/services-section";
import { BuilderSection } from "@/components/builder-section";
import { TrustSection } from "@/components/trust-section";
import { FaqSection } from "@/components/faq-section";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Reveal>
          <RegulatoryBanner />
        </Reveal>
        <div className="py-20">
          <ScanDemo />
        </div>
        <Reveal>
          <ServicesSection />
        </Reveal>
        <Reveal>
          <BuilderSection />
        </Reveal>
        <Reveal>
          <TrustSection />
        </Reveal>
        <Reveal>
          <FaqSection />
        </Reveal>
        <Reveal>
          <CtaSection />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}

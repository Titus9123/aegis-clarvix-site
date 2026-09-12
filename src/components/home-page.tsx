import { CursorGlow } from "@/components/cursor-glow";
import { NeonBackdrop } from "@/components/neon-backdrop";
import { PowerRail } from "@/components/power-rail";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { RegulatoryBanner } from "@/components/regulatory-banner";
import { ScanDemo } from "@/components/scan-demo";
import { ServicesSection } from "@/components/services-section";
import { BuilderSection } from "@/components/builder-section";
import { DefinitionBlock } from "@/components/definition-block";
import { ComparisonSection } from "@/components/comparison-section";
import { SecurityTopicsSection } from "@/components/security-topics-section";
import { TrustSection } from "@/components/trust-section";
import { FaqSection } from "@/components/faq-section";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";

export function HomePage() {
  return (
    <>
      <NeonBackdrop />
      <CursorGlow />
      <PowerRail />
      <Header />
      <main>
        <Hero />
        <Reveal>
          <RegulatoryBanner />
        </Reveal>
        <Reveal>
          <DefinitionBlock />
        </Reveal>
        <div className="py-20">
          <ScanDemo />
        </div>
        <Reveal>
          <ServicesSection />
        </Reveal>
        <Reveal>
          <ComparisonSection />
        </Reveal>
        <Reveal>
          <BuilderSection />
        </Reveal>
        <Reveal>
          <SecurityTopicsSection />
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

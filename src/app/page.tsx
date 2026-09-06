import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { RegulatoryBanner } from "@/components/regulatory-banner";
import { ServicesSection } from "@/components/services-section";
import { BuilderSection } from "@/components/builder-section";
import { TrustSection } from "@/components/trust-section";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <RegulatoryBanner />
        <ServicesSection />
        <BuilderSection />
        <TrustSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

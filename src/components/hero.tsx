"use client";

import { useRef } from "react";
import { Mail, MessageCircle } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffectiveReducedMotion } from "@/components/accessibility-provider";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { CircuitBackdrop } from "@/components/circuit-backdrop";
import { DecryptText } from "@/components/decrypt-text";
import { Magnetic } from "@/components/magnetic";
import { whatsappHref, mailtoHref } from "@/lib/whatsapp";
import { trackWhatsAppClick, trackEmailClick } from "@/lib/analytics";

export function Hero() {
  const { t, lang } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useEffectiveReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const backdropY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 70]);
  const backdropOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section id="top" ref={sectionRef} className="relative overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{ y: backdropY, opacity: backdropOpacity }}
      >
        <CircuitBackdrop className="pointer-events-none absolute inset-0 h-full w-full opacity-60" />
      </motion.div>
      {/* Lets the unpowered circuit read faintly through the hero instead of
          burying it under solid black. */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/85 to-background/70" />

      <div className="relative mx-auto max-w-4xl px-6 py-28 text-center sm:py-36">
        <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium tracking-wide text-primary">
          {t.hero.eyebrow}
        </span>

        <h1
          aria-label={t.hero.headline}
          className="mt-6 text-balance font-heading text-4xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-5xl md:text-6xl"
        >
          <DecryptText text={t.hero.headline} />
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
          {t.hero.subheadline}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Magnetic>
            <Button
              size="lg"
              className="h-11 gap-2 bg-primary px-5 text-primary-foreground shadow-[0_0_24px_rgba(0,240,217,0.35)] transition-transform duration-200 hover:scale-[1.03] hover:bg-primary/90 active:scale-[0.97] sm:h-9 sm:px-2.5"
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
              <MessageCircle className="h-4 w-4" />
              {t.hero.ctaPrimary}
            </Button>
          </Magnetic>
          <Magnetic strength={0.2}>
            <Button
              variant="outline"
              size="lg"
              className="h-11 gap-2 border-border/60 px-5 sm:h-9 sm:px-2.5"
              nativeButton={false}
              render={<a href={mailtoHref()} onClick={trackEmailClick} />}
            >
              <Mail className="h-4 w-4" />
              {t.hero.ctaSecondary}
            </Button>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}

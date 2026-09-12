"use client";

import { useLanguage } from "@/components/language-provider";

/**
 * Respuesta directa y extraíble a la pregunta principal, alto en la página.
 * Es el patrón que buscan los motores de respuesta: encabezado en forma de
 * pregunta seguido inmediatamente de una definición de 40-70 palabras.
 */
export function DefinitionBlock() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <div className="rounded-xl border border-border/60 bg-card/40 p-8">
        <h2 className="font-heading text-xl font-semibold text-foreground sm:text-2xl">
          {t.definition.question}
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          {t.definition.answer}
        </p>
      </div>
    </section>
  );
}

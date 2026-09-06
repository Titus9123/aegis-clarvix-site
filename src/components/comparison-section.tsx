"use client";

import { useLanguage } from "@/components/language-provider";

export function ComparisonSection() {
  const { t } = useLanguage();
  const c = t.comparison;

  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <div className="text-center">
        <span className="text-sm font-medium tracking-wide text-primary">{c.eyebrow}</span>
        <h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {c.title}
        </h2>
      </div>

      {/* Tabla real (no divs): extraíble como table snippet y legible por lectores de pantalla. */}
      <div className="mt-10 overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse text-sm">
          <thead>
            <tr>
              {c.columns.map((col, i) => (
                <th
                  key={col || `col-${i}`}
                  scope="col"
                  className={`border-b border-border/60 px-4 py-3 text-start font-heading font-semibold ${
                    i === 1 ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {c.rows.map((row) => (
              <tr key={row[0]}>
                {row.map((value, i) => (
                  <td
                    key={`${row[0]}-${i}`}
                    className={`border-b border-border/40 px-4 py-3 align-top ${
                      i === 0
                        ? "font-medium text-foreground"
                        : i === 1
                          ? "text-foreground"
                          : "text-muted-foreground"
                    }`}
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
        {c.note}{" "}
        <a
          href={c.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-foreground"
        >
          {c.sourceLabel}
        </a>
      </p>
    </section>
  );
}

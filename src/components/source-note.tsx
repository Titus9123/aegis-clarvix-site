/**
 * Citation line for a factual claim. Every statistic on this site carries one:
 * unsourced numbers on a security page are both a credibility problem for
 * readers and a discount signal for AI answer engines deciding what to cite.
 */
export function SourceNote({
  sources,
  className,
}: {
  sources: ReadonlyArray<{ label: string; url: string }>;
  className?: string;
}) {
  return (
    <p className={`text-xs text-muted-foreground/80 ${className ?? ""}`}>
      {sources.map((source, i) => (
        <span key={source.url}>
          {i > 0 && <span aria-hidden="true"> · </span>}
          <a
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-primary"
          >
            {source.label}
          </a>
        </span>
      ))}
    </p>
  );
}

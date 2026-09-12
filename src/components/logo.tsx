import Image from "next/image";

export function LogoMark({ className }: { className?: string }) {
  return (
    // WebP at display resolution. The source PNGs stay in public/ because
    // app/icon.tsx reads the shield at build time, but they are never served
    // to a browser: the originals are ~2.8MB for a 40px mark.
    <Image
      src="/brand/aegis-shield.webp"
      alt="Aegis"
      width={128}
      height={128}
      className={className}
      priority
    />
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    // w-fit keeps this box exactly as wide as the AEGIS row, regardless of a
    // wider sibling in the parent (the footer's tagline paragraph stretches
    // its column well past the logo's own width). Without it "by Clarvix"
    // centers under that wider box instead of under the AEGIS lockup itself.
    <div className={`w-fit ${className ?? ""}`}>
      <div className="flex items-center gap-2">
        <LogoMark className="h-10 w-10 shrink-0 object-contain" />
        <Image
          src="/brand/aegis-wordmark.webp"
          alt="Aegis"
          width={360}
          height={120}
          className="h-6 w-auto object-contain"
          priority
        />
      </div>
      {/* Centered under the whole AEGIS lockup rather than anchored to an
          edge — on the Hebrew pages the row above reads right-to-left
          (shield on the right), so pinning "by" to either edge lines it up
          with the wrong end of the wordmark. dir="ltr" keeps the internal
          reading order "by [mark] Clarvix" without affecting where it sits. */}
      <span
        dir="ltr"
        className="-mt-1 flex items-center justify-center gap-1 text-[11px] font-medium tracking-wide text-muted-foreground"
      >
        by
        <Image
          src="/brand/clarvix-mark.svg"
          alt="Clarvix"
          width={12}
          height={15}
          className="inline-block h-[11px] w-auto opacity-80"
        />
        Clarvix
      </span>
    </div>
  );
}

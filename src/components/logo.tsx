import Image from "next/image";

export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src="/brand/aegis-shield.png"
      alt="Aegis"
      width={64}
      height={64}
      className={className}
      priority
    />
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="flex items-center gap-2">
        <LogoMark className="h-10 w-10 shrink-0 object-contain" />
        <Image
          src="/brand/aegis-wordmark.png"
          alt="Aegis"
          width={2172}
          height={724}
          className="h-6 w-auto object-contain"
          priority
        />
      </div>
      <span className="ms-12 -mt-1 block text-[11px] font-medium tracking-wide text-muted-foreground">
        by Clarvix
      </span>
    </div>
  );
}

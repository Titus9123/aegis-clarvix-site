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
        <LogoMark className="h-9 w-9 shrink-0 object-contain" />
        <span className="font-heading text-xl font-bold tracking-tight text-foreground">
          Aegis
        </span>
      </div>
      <span className="ms-11 -mt-1 block text-[11px] font-medium tracking-wide text-muted-foreground">
        by Clarvix
      </span>
    </div>
  );
}

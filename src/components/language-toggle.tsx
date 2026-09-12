"use client";

import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";

/** Same page, other language — a real navigation, not a client-side state flip. */
function counterpartHref(lang: "he" | "en", pathname: string) {
  if (lang === "he") {
    return pathname === "/" ? "/en" : `/en${pathname}`;
  }
  const stripped = pathname.replace(/^\/en/, "");
  return stripped === "" ? "/" : stripped;
}

export function LanguageToggle() {
  const { lang } = useLanguage();
  const pathname = usePathname();
  const href = counterpartHref(lang, pathname);

  return (
    <Button
      variant="outline"
      size="sm"
      className="h-11 min-w-11 border-border/60 font-medium sm:h-7 sm:min-w-0"
      nativeButton={false}
      render={
        <a href={href} aria-label={lang === "he" ? "Switch to English" : "עברית"} />
      }
    >
      {lang === "he" ? "EN" : "עברית"}
    </Button>
  );
}

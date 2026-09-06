"use client";

import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLang(lang === "he" ? "en" : "he")}
      className="border-border/60 font-medium"
      aria-label={lang === "he" ? "Switch to English" : "עברית"}
    >
      {lang === "he" ? "EN" : "עברית"}
    </Button>
  );
}

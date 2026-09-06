"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Logo } from "@/components/logo";
import { LanguageToggle } from "@/components/language-toggle";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { whatsappHref } from "@/lib/whatsapp";

export function Header() {
  const { t, lang } = useLanguage();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#services", label: t.nav.services },
    { href: "#builders", label: t.nav.builders },
    { href: "#coverage", label: t.nav.coverage },
    { href: "#trust", label: t.nav.trust },
    { href: "#faq", label: t.nav.faq },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="shrink-0">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageToggle />
          <Button
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            nativeButton={false}
            render={<a href={whatsappHref(lang)} target="_blank" rel="noopener noreferrer" />}
          >
            {t.nav.contact}
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={<Button variant="ghost" size="icon" aria-label="Menu" />}
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side={lang === "he" ? "left" : "right"} className="w-72">
              <SheetHeader>
                <SheetTitle>
                  <Logo />
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-muted"
                  >
                    {link.label}
                  </a>
                ))}
                <Button
                  className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90"
                  nativeButton={false}
                  render={
                    <a href={whatsappHref(lang)} target="_blank" rel="noopener noreferrer" />
                  }
                >
                  {t.nav.contact}
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

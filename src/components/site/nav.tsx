import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const ids = site.nav.map((n) => n.href.slice(1));
      let current = "#home";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= window.innerHeight * 0.32) current = `#${id}`;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-200",
          scrolled && !open ? "bg-void/85 shadow-border" : "bg-transparent",
        )}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-[4.5rem] sm:px-6">
          <a href="#home" className="font-display text-lg font-bold tracking-tight text-fg">
            {site.short}
            <span className="text-primary">Dave</span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors duration-150",
                  active === item.href ? "text-primary" : "text-muted hover:text-fg",
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button asChild size="sm">
              <a href="#contact">Let’s talk</a>
            </Button>
          </div>

          <button
            type="button"
            className="relative z-50 inline-flex size-11 items-center justify-center rounded-full border border-line text-fg lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </header>

      {open ? (
        <div
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="fixed inset-0 z-40 flex flex-col bg-void px-6 pt-24 pb-8 lg:hidden"
        >
          <nav className="flex flex-1 flex-col justify-center gap-2">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "font-display text-4xl font-semibold tracking-tight sm:text-5xl",
                  active === item.href ? "text-primary" : "text-fg",
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <Button asChild className="mt-auto w-full">
            <a href="#contact" onClick={() => setOpen(false)}>
              Let’s talk
            </a>
          </Button>
        </div>
      ) : null}
    </>
  );
}

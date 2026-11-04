"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { CloseIcon, MailIcon, MenuIcon } from "@/components/icons";
import { NAV_LINKS, SITE } from "@/content";
import { useActiveSection } from "@/lib/hooks/use-active-section";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const ids = useMemo(
    () => NAV_LINKS.map((link) => link.href.split("#")[1]),
    [],
  );
  const active = useActiveSection(ids);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper">
      <div className="container-edge flex h-16 items-center justify-between gap-6">
        <Link
          href="/#home"
          aria-label={`${SITE.name}, home`}
          className="inline-flex items-baseline gap-1.5"
        >
          <span className="font-display text-[1.15rem] tracking-tight text-ink">
            {SITE.name}
          </span>
          <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const id = link.href.split("#")[1];
            const isActive = active === id;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "font-mono text-[0.8125rem] uppercase tracking-[0.1em] transition-colors",
                  isActive ? "text-accent" : "text-muted hover:text-ink",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${SITE.email}`}
            aria-label={`Email ${SITE.name}`}
            className="hidden size-10 items-center justify-center rounded-full border border-line-strong text-muted transition-colors hover:border-accent hover:text-accent md:inline-flex"
          >
            <MailIcon className="size-4" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-10 items-center justify-center rounded-full border border-line-strong text-ink transition-colors hover:border-accent hover:text-accent md:hidden"
          >
            {open ? (
              <CloseIcon className="size-5" />
            ) : (
              <MenuIcon className="size-5" />
            )}
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-line bg-paper md:hidden">
          <nav aria-label="Mobile" className="container-edge flex flex-col py-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-3.5 font-mono text-[0.8125rem] uppercase tracking-[0.1em] text-ink transition-colors last:border-b-0 hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`mailto:${SITE.email}`}
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center gap-2 text-[0.9375rem] text-muted transition-colors hover:text-accent"
            >
              <MailIcon className="size-4" />
              {SITE.email}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

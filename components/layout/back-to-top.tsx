"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { ArrowUpIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Link
      href="/#home"
      aria-label="Back to top"
      className={cn(
        "fixed bottom-5 right-5 z-40 inline-flex size-10 items-center justify-center rounded-full border border-line bg-paper text-ink shadow-sm transition-all duration-200 hover:border-accent hover:text-accent",
        visible ? "opacity-100" : "pointer-events-none opacity-0",
      )}
    >
      <ArrowUpIcon className="size-4" />
    </Link>
  );
}

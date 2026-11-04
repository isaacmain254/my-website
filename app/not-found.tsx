import type { Metadata } from "next";
import Link from "next/link";

import { SITE } from "@/content";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section aria-labelledby="not-found-heading" className="scroll-mt-24">
      <div className="container-edge flex min-h-[62vh] flex-col justify-center py-24 md:py-32">
        <p className="meta">
          <span className="text-accent">404</span> · Page not found
        </p>

        <h1
          id="not-found-heading"
          className="mt-4 max-w-2xl font-display text-[clamp(2rem,4.8vw,3.25rem)] leading-[1.06] tracking-[-0.01em] text-ink"
        >
          This page doesn&apos;t exist.
        </h1>

        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
          The link may be broken, or the page may have moved. Head back to the
          homepage, or jump straight to the work.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-base font-medium text-paper transition-colors hover:bg-accent"
          >
            Back to home
          </Link>
        </div>

        <p className="mt-8 text-[0.9375rem] text-muted">
          Or email{" "}
          <a
            href={`mailto:${SITE.email}`}
            className="text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
          >
            {SITE.email}
          </a>
          .
        </p>
      </div>
    </section>
  );
}

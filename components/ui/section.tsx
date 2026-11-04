import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  index: string;
  label: string;
  title: ReactNode;
  intro?: string;
  children: ReactNode;
  contentFullWidth?: boolean;
  className?: string;
};

export function Section({
  id,
  index,
  label,
  title,
  intro,
  children,
  contentFullWidth = false,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn(
        "scroll-mt-24 border-t border-line py-16 md:py-20 lg:py-24",
        className,
      )}
    >
      <div className="container-edge">
        {contentFullWidth ? (
          <>
            <div className="max-w-3xl">
              <p className="meta">
                <span className="text-accent">{index}</span> · {label}
              </p>
              <h2
                id={`${id}-heading`}
                className="mt-3 max-w-2xl font-display text-[1.75rem] leading-[1.1] text-ink sm:text-[2.05rem] lg:text-[2.5rem]"
              >
                {title}
              </h2>
              {intro ? (
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
                  {intro}
                </p>
              ) : null}
            </div>
            <div className="mt-12 lg:mt-14">{children}</div>
          </>
        ) : (
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <header className="lg:col-span-4">
              <div className="lg:sticky lg:top-24">
                <p className="meta">
                  <span className="text-accent">{index}</span> · {label}
                </p>
                <h2
                  id={`${id}-heading`}
                  className="mt-3 max-w-md font-display text-[1.75rem] leading-[1.1] text-ink sm:text-[2.05rem] lg:text-[2.5rem]"
                >
                  {title}
                </h2>
                {intro ? (
                  <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
                    {intro}
                  </p>
                ) : null}
              </div>
            </header>
            <div className="lg:col-span-8">{children}</div>
          </div>
        )}
      </div>
    </section>
  );
}

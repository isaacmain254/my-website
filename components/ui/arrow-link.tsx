import type { ReactNode } from "react";

import { ArrowUpRightIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

export function ArrowLink({
  href,
  children,
  external = false,
  className,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      {...(external
        ? { target: "_blank", rel: "noreferrer noopener" }
        : undefined)}
      className={cn(
        "group inline-flex items-center gap-1.5 text-[0.9375rem] font-medium text-ink underline decoration-line-strong decoration-1 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent",
        className,
      )}
    >
      {children}
      <ArrowUpRightIcon className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

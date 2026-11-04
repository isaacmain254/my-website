"use client";

import { useEffect, useRef, useState } from "react";

import { ArrowUpRightIcon, CloseIcon } from "@/components/icons";
import { ProjectVisual } from "@/components/work/project-visual";
import type { Project } from "@/content";
import { useFocusTrap } from "@/lib/hooks/use-focus-trap";
import { cn } from "@/lib/utils";

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-line pt-7">
      <h3 className="meta">{title}</h3>
      <div className="mt-3.5 space-y-3 text-[1.0625rem] leading-relaxed text-body">
        {children}
      </div>
    </section>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            aria-hidden="true"
            className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  const [copied, setCopied] = useState(false);

  useFocusTrap(panelRef, true, onClose);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const copyLink = async () => {
    const url = `${window.location.origin}${window.location.pathname}#project-${project.slug}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-stretch justify-center sm:items-center sm:p-6">
      <div
        aria-hidden="true"
        onClick={onClose}
        className={cn(
          "absolute inset-0 bg-ink/40 transition-opacity duration-200",
          shown ? "opacity-100" : "opacity-0",
        )}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${project.slug}-title`}
        className={cn(
          "relative z-10 flex max-h-full w-full flex-col overflow-hidden bg-paper transition-all duration-200 sm:max-h-[88vh] sm:max-w-3xl sm:rounded-xl sm:border sm:border-line",
          shown ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0 sm:translate-y-3",
        )}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close case study"
          className="absolute right-3 top-3 z-20 inline-flex size-10 items-center justify-center rounded-full border border-line-strong bg-paper/90 text-ink transition-colors hover:border-accent hover:text-accent"
        >
          <CloseIcon className="size-4" />
        </button>

        <header className="shrink-0 border-b border-line px-5 pb-5 pt-6 sm:px-9">
          <p className="meta">
            <span className="text-accent">{project.index}</span> · {project.category}
          </p>
          <h2
            id={`${project.slug}-title`}
            className="mt-2.5 pr-12 font-display text-[1.7rem] leading-tight text-ink sm:text-[2rem]"
          >
            {project.title}
          </h2>
        </header>

        <div className="overflow-y-auto overscroll-contain px-5 py-7 sm:px-9">
          <p className="text-lg leading-relaxed text-ink">{project.summary}</p>

          <div className="mt-7 space-y-7">
            {project.context ? (
              <Block title="Context">
                <p>{project.context}</p>
              </Block>
            ) : null}

            {project.problem ? (
              <Block title="Problem">
                <p>{project.problem}</p>
              </Block>
            ) : null}

            {project.motivation ? (
              <Block title="Why I built it">
                <p>{project.motivation}</p>
              </Block>
            ) : null}

            {project.contribution?.length ? (
              <Block title="Contribution">
                <Bullets items={project.contribution} />
              </Block>
            ) : null}

            {project.approach?.length ? (
              <Block title="Approach">
                <Bullets items={project.approach} />
              </Block>
            ) : null}

            <Block title="Engineering decisions">
              <dl className="space-y-4">
                {project.engineeringDecisions.map((decision) => (
                  <div key={decision.title}>
                    <dt className="font-medium text-ink">{decision.title}</dt>
                    <dd className="mt-1 text-muted">{decision.detail}</dd>
                  </div>
                ))}
              </dl>
            </Block>

            {project.challenges?.length ? (
              <Block title="Challenges">
                <Bullets items={project.challenges} />
              </Block>
            ) : null}

            <Block title="Outcome">
              <p>{project.outcome}</p>
            </Block>

            {project.visual.type !== "typographic" ? (
              <Block title="System">
                <ProjectVisual project={project} className="mt-1" />
              </Block>
            ) : null}

            <Block title="Stack">
              <ul className="flex flex-wrap gap-2.5">
                {project.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-full border border-line px-3 py-1.5 font-mono text-[0.8125rem] uppercase tracking-[0.05em] text-muted"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </Block>

            <Block title="Links">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                {project.links.length > 0 ? (
                  project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group inline-flex items-center gap-1.5 text-[0.9375rem] font-medium text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                    >
                      {link.label}
                      <ArrowUpRightIcon className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  ))
                ) : (
                  <p className="text-[0.9375rem] text-muted">
                    Client work. No public links.
                  </p>
                )}
                <button
                  type="button"
                  onClick={copyLink}
                  className="inline-flex items-center gap-1.5 text-[0.9375rem] font-medium text-muted underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                >
                  {copied ? "Link copied" : "Copy link"}
                </button>
              </div>
            </Block>
          </div>
        </div>
      </div>
    </div>
  );
}

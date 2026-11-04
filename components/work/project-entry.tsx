"use client";

import { ArrowUpRightIcon } from "@/components/icons";
import { TagList } from "@/components/ui/tag";
import { ProjectVisual } from "@/components/work/project-visual";
import { useProjectModal } from "@/components/work/project-modal-provider";
import type { Project } from "@/content";
import { cn } from "@/lib/utils";

export function ProjectEntry({
  project,
  reversed = false,
}: {
  project: Project;
  reversed?: boolean;
}) {
  const { openProject } = useProjectModal();

  return (
    <article className="grid items-center gap-8 py-12 lg:grid-cols-2 lg:gap-14">
      <div className={cn(reversed && "lg:order-2")}>
        <ProjectVisual project={project} />
      </div>

      <div className={cn(reversed && "lg:order-1")}>
        <p className="meta">
          <span className="text-accent">{project.index}</span> · {project.category}
        </p>

        <h3 className="mt-3.5 font-display text-[1.6rem] leading-tight text-ink sm:text-[1.9rem]">
          <button
            type="button"
            onClick={(event) => openProject(project.slug, event.currentTarget)}
            className="text-left transition-colors hover:text-accent"
          >
            {project.title}
          </button>
        </h3>

        <p className="mt-4 max-w-xl text-[1.0625rem] leading-relaxed text-muted">
          {project.shortDescription}
        </p>

        <TagList items={project.technologies} className="mt-6" />

        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
          <button
            type="button"
            onClick={(event) => openProject(project.slug, event.currentTarget)}
            className="group inline-flex items-center gap-1.5 text-[0.9375rem] font-medium text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
          >
            Read case study
            <ArrowUpRightIcon className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {project.links.map((link) => (
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
          ))}
        </div>
      </div>
    </article>
  );
}

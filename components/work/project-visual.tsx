import Image from "next/image";

import { ProjectDiagram } from "@/components/diagrams";
import type { Project } from "@/content";
import { cn } from "@/lib/utils";

function TypographicVisual({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex aspect-[16/10] w-full flex-col justify-between rounded-lg border border-line bg-raised p-7",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-[0.75rem] uppercase tracking-[0.14em] text-accent">
          {project.index}
        </span>
        <span className="text-right font-mono text-[0.72rem] uppercase tracking-[0.06em] text-muted">
          {project.category}
        </span>
      </div>
      <div>
        <p className="font-display text-[1.6rem] leading-tight text-ink">
          {project.title}
        </p>
        <p className="mt-2.5 font-mono text-[0.72rem] uppercase tracking-[0.05em] text-muted">
          {project.technologies.slice(0, 4).join(" · ")}
        </p>
      </div>
    </div>
  );
}

export function ProjectVisual({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  const { visual } = project;

  if (visual.type === "image") {
    return (
      <div
        className={cn(
          "relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-line bg-raised",
          className,
        )}
      >
        <Image
          src={visual.src}
          alt={visual.alt}
          fill
          sizes="(min-width: 1024px) 560px, 100vw"
          className="object-cover object-top"
        />
      </div>
    );
  }

  if (visual.type === "diagram") {
    return (
      <div className={className}>
        <ProjectDiagram diagram={visual.key} />
      </div>
    );
  }

  return <TypographicVisual project={project} className={className} />;
}

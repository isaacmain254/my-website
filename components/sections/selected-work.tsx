import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { ProjectEntry } from "@/components/work/project-entry";
import { ProjectModalProvider } from "@/components/work/project-modal-provider";
import { PROJECTS } from "@/content";

export function SelectedWork() {
  return (
    <Section
      id="work"
      index="02"
      label="Selected work"
      title="Projects I've designed, built and shipped."
      intro="A curated set, not a full archive. Each has a case study covering the problem, the approach and the engineering decisions behind it."
      contentFullWidth
    >
      <ProjectModalProvider>
        {PROJECTS.map((project, index) => (
          <Reveal
            key={project.slug}
            className="border-t border-line first:border-t-0"
          >
            <ProjectEntry project={project} reversed={index % 2 === 1} />
          </Reveal>
        ))}
      </ProjectModalProvider>
    </Section>
  );
}

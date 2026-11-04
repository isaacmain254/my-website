import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { Tag } from "@/components/ui/tag";
import { INTERESTS, TOOLBOX } from "@/content";

export function Toolbox() {
  return (
    <Section
      id="toolbox"
      index="04"
      label="Toolbox"
      title="What I build with."
      intro="A curated set of tools I reach for, not a claim of expert-level mastery in each."
    >
      <Reveal>
        <div className="grid gap-9 sm:grid-cols-2">
          {TOOLBOX.map((group) => (
            <div key={group.label}>
              <h3 className="meta">{group.label}</h3>
              <ul className="mt-3.5 flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <li key={item}>
                    <Tag>{item}</Tag>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className="mt-11 border-t border-line pt-7">
        <h3 className="meta">Currently exploring</h3>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
          Areas I&apos;m deliberately growing into, rather than areas I claim as
          expertise.
        </p>
        <ul className="mt-4 flex flex-wrap gap-2.5">
          {INTERESTS.map((interest) => (
            <li key={interest}>
              <Tag className="border-accent/40 text-accent">{interest}</Tag>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}

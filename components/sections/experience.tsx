import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { EXPERIENCE } from "@/content";

export function Experience() {
  return (
    <Section
      id="experience"
      index="03"
      label="Experience"
      title="Where I've worked."
      intro="Product and client work across SaaS, business applications and API-driven systems."
    >
      <Reveal>
        <ol className="divide-y divide-line border-t border-line">
          {EXPERIENCE.map((item) => (
            <li
              key={`${item.company}-${item.period}`}
              className="grid gap-3 py-7 sm:grid-cols-[11rem_1fr] sm:gap-8"
            >
              <p className="meta pt-1">{item.period}</p>
              <div>
                <h3 className="font-display text-xl leading-snug text-ink">
                  {item.role}
                </h3>
                <p className="mt-1.5 font-mono text-[0.8125rem] uppercase tracking-[0.08em] text-accent">
                  {item.company}
                </p>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Reveal>
    </Section>
  );
}

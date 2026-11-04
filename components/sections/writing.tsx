import { ArrowUpRightIcon } from "@/components/icons";
import { ArrowLink } from "@/components/ui/arrow-link";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { MEDIUM_PROFILE, WRITING } from "@/content";

export function Writing() {
  return (
    <Section
      id="writing"
      index="05"
      label="Writing"
      title="Notes and guides I've published."
      intro="Technical writing on deployment, frontend, payments and authentication, published on Medium."
    >
      <Reveal>
        <ol className="divide-y divide-line border-t border-line">
          {WRITING.map((post) => (
            <li key={post.href}>
              <a
                href={post.href}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-start justify-between gap-6 py-7"
              >
                <div>
                  <p className="meta flex items-center gap-2">
                    <span className="text-accent">{post.topic}</span>
                    <span aria-hidden="true">·</span>
                    <span>Medium</span>
                  </p>
                  <h3 className="mt-2.5 font-display text-xl leading-snug text-ink transition-colors group-hover:text-accent sm:text-[1.4rem]">
                    {post.title}
                  </h3>
                  <p className="mt-2.5 max-w-2xl text-base leading-relaxed text-muted">
                    {post.description}
                  </p>
                </div>
                <ArrowUpRightIcon className="mt-1 size-4 shrink-0 text-muted transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
              </a>
            </li>
          ))}
        </ol>
      </Reveal>

      <div className="mt-7">
        <ArrowLink href={MEDIUM_PROFILE} external>
          All writing on Medium
        </ArrowLink>
      </div>
    </Section>
  );
}

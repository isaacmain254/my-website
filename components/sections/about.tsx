import Image from "next/image";

import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import portrait from "@/public/mainawambui.jpg";

const FACTS = [
  { label: "Based in", value: "Nairobi, Kenya" },
  {
    label: "Education",
    value: "BSc Mathematics and Computer Science",
  },
  { label: "Focus", value: "Full-stack, backend and systems" },
];

export function About() {
  return (
    <Section
      id="about"
      index="01"
      label="About"
      title={
        <>
          A <span className="whitespace-nowrap">full-stack</span> engineer,
          closer to the systems.
        </>
      }
    >
      <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_17rem] xl:gap-14">
        <Reveal className="measure space-y-5 text-[1.0625rem] leading-relaxed text-body">
          <p>
            I&apos;m a full-stack software engineer based in Kenya. I build web
            products and backend systems, from the interfaces people interact with
            to the APIs, data models and integrations that power them.
          </p>
          <p>
            I&apos;ve worked across SaaS products, business applications and
            API-driven systems. I enjoy taking a problem from its first
            requirements through architecture, implementation and deployment,
            making deliberate decisions about how the different parts fit
            together.
          </p>
          <p>
            Lately I&apos;ve been spending more time on event-driven architecture,
            distributed systems and infrastructure. I&apos;m interested in
            understanding not just how to build software, but how to make it
            dependable, maintainable and easier to operate.
          </p>
          <p>
            I value practical engineering, clear communication and solutions that
            solve actual problems.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="overflow-hidden rounded-lg border border-line">
            <Image
              src={portrait}
              alt="Portrait of Isaac Maina"
              placeholder="blur"
              sizes="(min-width: 1280px) 17rem, 60vw"
              className="h-auto w-full object-cover"
            />
          </div>
          <dl className="mt-6 space-y-4">
            {FACTS.map((fact) => (
              <div key={fact.label}>
                <dt className="meta">{fact.label}</dt>
                <dd className="mt-1.5 text-[0.9375rem] leading-snug text-body">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}

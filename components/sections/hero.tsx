import Link from "next/link";

import { MailIcon, SOCIAL_ICONS } from "@/components/icons";
import { SITE, SOCIALS } from "@/content";

export function Hero() {
  return (
    <section id="home" aria-labelledby="home-heading" className="scroll-mt-24">
      <div className="container-edge pb-16 pt-32 md:pb-24 md:pt-40 lg:pt-44">
        <p className="meta flex items-center gap-3">
          <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
          {SITE.role} · {SITE.location}
        </p>

        <h1
          id="home-heading"
          className="mt-6 max-w-4xl font-display text-[clamp(2.5rem,7vw,4.75rem)] leading-[1.02] tracking-[-0.02em] text-ink"
        >
          I build products and the systems behind them.
        </h1>

        <div className="mt-8 max-w-2xl space-y-4 text-lg leading-relaxed text-body">
          <p>
            I&apos;m Isaac, a full-stack software engineer based in Kenya. I build
            web products and backend systems, from the interfaces people use to
            the APIs, data models and integrations that hold them together.
          </p>
          <p>
            I enjoy taking ideas from first requirements through architecture,
            implementation and deployment, with a growing interest in reliable
            systems, infrastructure and developer tooling.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-base font-medium text-paper transition-colors hover:bg-accent"
          >
            View selected work
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-3 text-base font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Get in touch
          </Link>
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-line pt-6">
          <span className="meta">{SITE.availability}</span>
          {SOCIALS.map((social) => {
            const Icon = SOCIAL_ICONS[social.icon];
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={social.ariaLabel}
                className="inline-flex items-center gap-2 text-[0.9375rem] text-muted transition-colors hover:text-accent"
              >
                <Icon className="size-4" />
                {social.label}
              </a>
            );
          })}
          <a
            href={`mailto:${SITE.email}`}
            aria-label={`Email ${SITE.name}`}
            className="inline-flex items-center gap-2 text-[0.9375rem] text-muted transition-colors hover:text-accent"
          >
            <MailIcon className="size-4" />
            Email
          </a>
        </div>
      </div>
    </section>
  );
}

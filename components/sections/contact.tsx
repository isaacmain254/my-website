import { ArrowUpRightIcon, SOCIAL_ICONS } from "@/components/icons";
import { SITE, SOCIALS } from "@/content";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 border-t border-line py-16 md:py-20 lg:py-24"
    >
      <div className="container-edge">
        <p className="meta">
          <span className="text-accent">06</span> · Contact
        </p>

        <h2
          id="contact-heading"
          className="mt-5 max-w-3xl font-display text-[clamp(2rem,4.6vw,3.25rem)] leading-[1.08] tracking-[-0.01em] text-ink"
        >
          Have a project in mind, or an interesting engineering problem? I&apos;d
          be glad to hear from you.
        </h2>

        <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-base font-medium text-paper transition-colors hover:bg-accent"
          >
            Email {SITE.email}
          </a>
          <span className="meta">{SITE.availability}</span>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-line pt-8">
          {SOCIALS.map((social) => {
            const Icon = SOCIAL_ICONS[social.icon];
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={social.ariaLabel}
                className="group inline-flex items-center gap-2 text-[0.9375rem] text-ink transition-colors hover:text-accent"
              >
                <Icon className="size-4 text-muted transition-colors group-hover:text-accent" />
                {social.label}
                <ArrowUpRightIcon className="size-3.5 text-muted transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

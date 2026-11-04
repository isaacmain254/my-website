import { SOCIAL_ICONS } from "@/components/icons";
import { NAV_LINKS, SITE, SOCIALS } from "@/content";

export function Footer({ currentYear }: { currentYear: number }) {
  return (
    <footer className="border-t border-line">
      <div className="container-edge py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-xl text-ink">{SITE.name}</p>
            <p className="mt-2 max-w-xs text-[0.9375rem] leading-relaxed text-muted">
              {SITE.role} · {SITE.location}
            </p>
          </div>

          <nav aria-label="Footer" className="md:col-span-3">
            <p className="meta">Sections</p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[0.9375rem] text-ink transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <p className="meta">Elsewhere</p>
            <ul className="mt-4 space-y-2.5">
              {SOCIALS.map((social) => {
                const Icon = SOCIAL_ICONS[social.icon];
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 text-[0.9375rem] text-ink transition-colors hover:text-accent"
                    >
                      <Icon className="size-4" />
                      {social.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-[0.8125rem] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {SITE.name}
          </p>
          <p>Built with Next.js and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BarChart3,
  Box,
  Check,
  ChevronRight,
  Code2,
  Database,
  FileText,
  Globe,
  Layers,
  MessageSquare,
  Phone,
  Star,
  Workflow,
} from "lucide-react";
import type { ComponentType } from "react";

type IconType = ComponentType<{ className?: string }>;

type Service = {
  title: string;
  description: string;
  icon: IconType;
};

const services: Service[] = [
  {
    title: "Zoho CRM Setup & Customization",
    description:
      "Sales pipelines, modules, layouts, roles, automation, and reports aligned to your process.",
    icon: Database,
  },
  {
    title: "Zoho One Implementation",
    description:
      "Connect sales, finance, support, inventory, and operations into one working system.",
    icon: Layers,
  },
  {
    title: "Zoho Creator Custom Apps",
    description:
      "Build internal tools, forms, workflows, and custom apps for your exact operations.",
    icon: Code2,
  },
  {
    title: "Workflow Automation",
    description:
      "Automate approvals, task routing, reminders, and repetitive work across teams.",
    icon: Workflow,
  },
  {
    title: "Zoho Books & Finance",
    description:
      "Set up invoicing, records, taxes, and financial visibility with clean accounting flows.",
    icon: FileText,
  },
  {
    title: "Inventory & Integrations",
    description:
      "Manage stock and connect Zoho to websites, payments, WhatsApp, and external APIs.",
    icon: Box,
  },
];

const heroProducts = [
  "Zoho CRM",
  "Zoho Creator",
  "Zoho Books",
  "Zoho Inventory",
  "Zoho Analytics",
  "Zoho Desk",
];

const reviews = [
  {
    description:
      "Isaac helped us replace manual lead tracking and disconnected reports with a clean Zoho CRM flow. We now see pipeline performance in real time.",
    reviewer: "Grace Wanjiru",
    company: "Apex Homes",
    rating: 5,
  },
  {
    description:
      "Our operations were spread across spreadsheets and email threads. The Zoho setup brought structure, automation, and accountability across teams.",
    reviewer: "Daniel Otieno",
    company: "Soko Distributors",
    rating: 5,
  },
  {
    description:
      "From discovery to training, the implementation was smooth. We cut manual work and improved reporting turnaround significantly.",
    reviewer: "Mercy Njeri",
    company: "Nuru Healthcare",
    rating: 5,
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <span className="inline-block rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">
        {eyebrow}
      </span>
      <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">{title}</h2>
      {description ? (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-zinc-400">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function ProductPill({ name }: { name: string }) {
  return (
    <div className="flex min-w-[170px] items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
      <span className="grid size-8 place-items-center rounded-md bg-violet-500/20 text-xs font-bold text-violet-200">
        Z
      </span>
      <span className="text-sm font-medium text-zinc-200">{name}</span>
    </div>
  );
}

export function Consulting() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] pt-24 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,#7c3aed25,transparent_40%)]"
      />

      <section className="relative mx-auto max-w-7xl px-6 pb-16 pt-8 md:px-10 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <span className="inline-flex items-center rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            Zoho Consulting Services
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
            Stop Running Your Business on
            <span className="block text-violet-400">
              Spreadsheets & Disconnected Tools
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-zinc-300">
            Build a connected Zoho ecosystem that automates sales, operations,
            finance, reporting, and customer support.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-violet-600 px-7 text-sm font-semibold text-white transition hover:bg-violet-500"
            >
              Book Free Consultation
              <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="#services"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/15 bg-white/[0.04] px-7 text-sm font-semibold text-zinc-100 transition hover:bg-white/[0.08]"
            >
              View Services
            </Link>
          </div>
        </motion.div>

        <div className="mt-12 overflow-hidden">
          <div
            className="flex w-max gap-4"
            style={{ animation: "marquee 20s linear infinite" }}
          >
            {[...heroProducts, ...heroProducts].map((product, index) => (
              <ProductPill key={`${product}-${index}`} name={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02] px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Common Challenges"
            title="Growing businesses hit these blockers"
            description="When tools are disconnected, teams lose time, visibility, and control."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Database,
                title: "Data Everywhere",
                text: "Information is spread across spreadsheets, inboxes, and siloed apps.",
              },
              {
                icon: Workflow,
                title: "Manual Processes",
                text: "Daily operations depend on repetitive handoffs and copy-paste workflows.",
              },
              {
                icon: BarChart3,
                title: "Lack of Visibility",
                text: "Reporting is delayed, inconsistent, and hard to trust for decisions.",
              },
            ].map((challenge) => {
              const Icon = challenge.icon;
              return (
                <article
                  key={challenge.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-7"
                >
                  <div className="mb-4 inline-flex rounded-lg bg-violet-500/15 p-3 text-violet-300">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-xl font-semibold">{challenge.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {challenge.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="From Chaos To Clarity"
            title="What changes after implementation"
          />
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-red-400/20 bg-red-500/5 p-8">
              <h3 className="text-2xl font-bold text-red-300">Before Zoho</h3>
              <ul className="mt-6 space-y-3 text-zinc-300">
                {[
                  "Excel sheets and duplicate data",
                  "Manual reports and follow-ups",
                  "Disconnected teams and tools",
                  "No clear sales pipeline visibility",
                  "Slow, inconsistent customer support",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 text-red-300">-</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-2xl border border-emerald-400/20 bg-emerald-500/5 p-8">
              <h3 className="text-2xl font-bold text-emerald-300">After Zoho</h3>
              <ul className="mt-6 space-y-3 text-zinc-200">
                {[
                  "Unified CRM, finance, and operations",
                  "Automated workflows and approvals",
                  "Real-time dashboards and reporting",
                  "Structured customer journey tracking",
                  "Scalable systems for team growth",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="mt-0.5 size-4 text-emerald-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section id="services" className="border-y border-white/10 bg-white/[0.02] px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Services"
            title="End-to-end Zoho consulting services"
            description="Everything needed to design, implement, and optimize your Zoho ecosystem."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-lg bg-violet-500/15 text-violet-200">
                      <Icon className="size-5" />
                    </span>
                    <span className="text-xs text-zinc-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Client Reviews"
            title="What clients say"
            description="Feedback from teams that streamlined operations with Zoho."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {reviews.map((review) => (
              <article
                key={review.reviewer}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="mb-4 flex items-center gap-1 text-amber-300">
                  {Array.from({ length: review.rating }).map((_, idx) => (
                    <Star key={idx} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-zinc-300">
                  "{review.description}"
                </p>
                <p className="mt-5 font-semibold text-white">{review.reviewer}</p>
                <p className="text-sm text-zinc-400">{review.company}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="zoho-contact" className="px-6 pb-24 pt-10 md:px-10">
        <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-r from-violet-700 to-violet-500 p-8 md:p-12">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">
                Ready To Streamline Your Business?
              </h2>
              <p className="mt-4 max-w-2xl text-base text-white/85 md:text-lg">
                Let&apos;s build a Zoho ecosystem that saves time, improves
                visibility, and scales with your growth.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-white px-7 text-sm font-semibold text-black transition hover:bg-zinc-100"
            >
              Book Free Consultation
              <ChevronRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02] px-6 py-14 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold">Navigation</h3>
            <div className="mt-4 grid gap-2 text-sm text-zinc-300">
              <Link href="/">Home</Link>
              <Link href="/zoho-consulting">Zoho Consulting</Link>
              <Link href="/#projects">Projects</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="mt-4 grid gap-2 text-sm text-zinc-300">
              <a href="mailto:isaacmain72@gmail.com">isaacmain72@gmail.com</a>
              <a href="tel:+254748923894">+254 748 923 894</a>
              <p>Kenya · Serving clients globally</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Social</h3>
            <div className="mt-4 grid gap-2 text-sm text-zinc-300">
              <a href="https://www.linkedin.com/in/isaac-maina-wambui/" target="_blank" rel="noreferrer noopener">
                LinkedIn
              </a>
              <a href="https://github.com/isaacmain254" target="_blank" rel="noreferrer noopener">
                GitHub
              </a>
              <a href="https://wa.me/254748923894" target="_blank" rel="noreferrer noopener">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#050816]/95 px-4 py-3 backdrop-blur-lg md:hidden">
        <div className="mx-auto flex max-w-md gap-3">
          <Link
            href="/contact"
            className="inline-flex min-h-11 flex-1 items-center justify-center rounded-lg bg-violet-600 text-sm font-semibold text-white"
          >
            Book Consultation
          </Link>
          <Link
            href="https://wa.me/254748923894"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact on WhatsApp"
            className="grid min-h-11 w-12 place-items-center rounded-lg border border-white/20 bg-white/[0.06] text-white"
          >
            <MessageSquare className="size-5" />
          </Link>
          <Link
            href="tel:+254748923894"
            aria-label="Call for consultation"
            className="grid min-h-11 w-12 place-items-center rounded-lg border border-white/20 bg-white/[0.06] text-white"
          >
            <Phone className="size-5" />
          </Link>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </main>
  );
}


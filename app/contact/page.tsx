import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageSquare, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Book Zoho Consultation",
  description:
    "Book a free Zoho consultation to streamline your business operations, automate workflows, and connect your tools.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050816] px-6 pb-24 pt-28 text-white md:px-10">
      <div className="mx-auto max-w-4xl">
        <span className="inline-flex rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">
          Book Consultation
        </span>
        <h1 className="mt-6 text-4xl font-bold md:text-5xl">
          Ready To Streamline Your Business?
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-300">
          Let&apos;s build a Zoho ecosystem that saves time, improves visibility,
          and scales with your growth.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <Link
            href="mailto:isaacmain72@gmail.com?subject=Zoho%20Consultation%20Request"
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-5 transition hover:bg-white/[0.08]"
          >
            <Mail className="size-5 text-violet-300" />
            <span>Email for Consultation</span>
          </Link>
          <Link
            href="tel:+254748923894"
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-5 transition hover:bg-white/[0.08]"
          >
            <Phone className="size-5 text-violet-300" />
            <span>Call +254 748 923 894</span>
          </Link>
          <Link
            href="https://wa.me/254748923894"
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-5 transition hover:bg-white/[0.08] sm:col-span-2"
          >
            <MessageSquare className="size-5 text-violet-300" />
            <span>Chat on WhatsApp</span>
          </Link>
        </div>
      </div>
    </main>
  );
}


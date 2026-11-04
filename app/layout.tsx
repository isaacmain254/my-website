import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import type { PropsWithChildren } from "react";
import { Analytics } from "@vercel/analytics/next";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { SkipLink } from "@/components/ui/skip-link";
import { siteConfig } from "@/config";
import { SITE, SOCIALS } from "@/content";
import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
});

export const viewport: Viewport = {
  themeColor: "#faf8f4",
  colorScheme: "light",
};

export const metadata: Metadata = siteConfig;

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  url: SITE.url,
  jobTitle: SITE.role,
  email: `mailto:${SITE.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  sameAs: SOCIALS.filter((social) => social.icon !== "whatsapp").map(
    (social) => social.href,
  ),
};

export default function RootLayout({ children }: PropsWithChildren) {
  const currentYear = new Date().getFullYear();

  return (
    <html
      lang="en"
      className={cn(
        inter.variable,
        fraunces.variable,
        jetbrains.variable,
      )}
    >
      <body className="min-h-dvh bg-paper font-sans text-ink antialiased">
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        <SkipLink />
        <Navbar />
        <main id="main">{children}</main>
        <Footer currentYear={currentYear} />
        {process.env.VERCEL ? <Analytics /> : null}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}

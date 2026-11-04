import type { Metadata } from "next";

import { SITE } from "@/content/site";

const TITLE = `${SITE.name} · Full-stack Software Engineer`;
const DESCRIPTION =
  "Isaac Maina is a full-stack software engineer building web products, backend systems and API-driven applications.";

export const siteConfig: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: TITLE,
    template: `%s · ${SITE.name}`,
  },
  description: DESCRIPTION,
  keywords: [
    "Isaac Maina",
    "full-stack software engineer",
    "software engineer Kenya",
    "backend engineer",
    "Node.js developer",
    "Django developer",
    "Go developer",
    "React developer",
    "Next.js developer",
    "API development",
    "event-driven architecture",
    "distributed systems",
    "PostgreSQL",
    "developer tooling",
  ],
  authors: [{ name: SITE.name, url: "https://github.com/isaacmain254" }],
  creator: SITE.name,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: SITE.name,
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_KE",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    creator: "@isaacmain3",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "lszFf5NAaVZmyOT-qKPfhEX706OvCpwivkdCFGFyZqg",
  },
};

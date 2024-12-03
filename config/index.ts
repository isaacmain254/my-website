import type { Metadata } from "next";

export const siteConfig: Metadata = {
  title:
    "Isaac Maina |  Freelance Full-Stack Developer in Kenya | React Django | MERN stack Developer",
  description:
    "Isaac is an experienced software developer from Kenya. Specializing in Webflow websites, custom web and mobile application development. Hire for tailored web development services!",
  keywords: [
    "Full-stack software developer in Kenya",
    "Freelance web developer Kenya",
    "Professional Webflow designer",
    "React.js developer",
    "Next.js full-stack development",
    "Webflow website creation",
    "Django and React full-stack developer",
    "Custom web application development",
    "Responsive website design Kenya",
    "Freelance front-end and back-end developer",
  ] as Array<string>,
  openGraph: {
    title: "Isaac Maina",
    siteName: "My website",
    type: "website",
    url:
      process.env.NODE_ENV === "production"
        ? "https://isaacmiana.vercel.app"
        : "http://localhost:3000",
    description: "Fullstack Software Engineer based in Kenya",
    // images: ["/logo.png"],
    images: [
      {
        url: "https://isaacmiana.vercel.app/logo.png",
        width: 1200,
        height: 630,
        alt: "Isaac Miana - Software Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Isaac Miana - Software Developer Portfolio",
    description: "Fullstack Software Engineer based in Kenya",
    images: ["https://isaacmiana.vercel.app/logo.png"],
  },
  alternates: {
    canonical: "https://isaacmiana.vercel.app/",
  },
  authors: {
    name: "Isaac Maina",
    url: "https://github.com/isaacmain254",
  },
  verification: {
    google: "lszFf5NAaVZmyOT-qKPfhEX706OvCpwivkdCFGFyZqg",
  },
} as const;

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
        ? "https://isaacmaina.vercel.app/"
        : "http://localhost:3000",
    description: "Fullstack Software Engineer based in Kenya",
    // images: ["/logo.png"],
    images: [
      {
        url: "https://isaacmaina.vercel.app/logo.png",
        width: 1200,
        height: 630,
        alt: "Isaac Maina - Software Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Isaac Maina - Fullstack Software Developer",
    description: "Fullstack Software Engineer based in Kenya",
    images: ["https://isaacmaina.vercel.app/logo.png"],
  },
  alternates: {
    canonical: "https://isaacmaina.vercel.app/",
  },
  authors: {
    name: "Isaac Maina",
    url: "https://github.com/isaacmain254",
  },
  verification: {
    google: "lszFf5NAaVZmyOT-qKPfhEX706OvCpwivkdCFGFyZqg",
  },
} as const;

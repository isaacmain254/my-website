import type { NavLink, Social } from "./types";

export const SITE = {
  name: "Isaac Maina",
  role: "Full-stack Software Engineer",
  location: "Nairobi, Kenya",
  availability: "Open to new work",
  email: "isaacmain72@gmail.com",
  url: "https://isaacmaina.vercel.app",
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/#home" },
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "About", href: "/#about" },
  { label: "Writing", href: "/#writing" },
  { label: "Contact", href: "/#contact" },
];

export const SOCIALS: Social[] = [
  {
    label: "GitHub",
    href: "https://github.com/isaacmain254",
    icon: "github",
    ariaLabel: "Isaac Maina on GitHub",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/isaac-maina-wambui/",
    icon: "linkedin",
    ariaLabel: "Isaac Maina on LinkedIn",
  },
  {
    label: "X",
    href: "https://x.com/isaacmain3",
    icon: "x",
    ariaLabel: "Isaac Maina on X",
  },
  {
    label: "Medium",
    href: "https://medium.com/@isaacmain72",
    icon: "medium",
    ariaLabel: "Isaac Maina on Medium",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/254748923894",
    icon: "whatsapp",
    ariaLabel: "Chat with Isaac Maina on WhatsApp",
  },
];

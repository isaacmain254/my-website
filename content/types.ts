export type ProjectLink = {
  label: string;
  href: string;
  kind?: "live" | "repo";
};

export type ProjectVisual =
  | { type: "image"; src: string; alt: string }
  | { type: "diagram"; key: "webhook" | "notification" | "ticketing" }
  | { type: "typographic" };

export type EngineeringDecision = {
  title: string;
  detail: string;
};

export type Project = {
  slug: string;
  index: string;
  title: string;
  category: string;
  shortDescription: string;
  summary: string;
  // Client work uses context + contribution instead of problem + motivation.
  context?: string;
  problem?: string;
  motivation?: string;
  contribution?: string[];
  approach?: string[];
  engineeringDecisions: EngineeringDecision[];
  challenges?: string[];
  outcome: string;
  technologies: string[];
  links: ProjectLink[];
  visual: ProjectVisual;
  featured: boolean;
  visibility: "public";
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  description: string;
};

export type WritingPost = {
  title: string;
  description: string;
  topic: string;
  href: string;
  external: boolean;
  // Reserved for future native posts published on this site:
  slug?: string;
  content?: string;
};

export type ToolGroup = {
  label: string;
  items: string[];
};

export type SocialIcon = "github" | "linkedin" | "x" | "medium" | "whatsapp";

export type Social = {
  label: string;
  href: string;
  icon: SocialIcon;
  ariaLabel: string;
};

export type NavLink = {
  label: string;
  href: string;
};

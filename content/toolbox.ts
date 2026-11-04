import type { ToolGroup } from "./types";

export const TOOLBOX: ToolGroup[] = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Vue.js", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: ["Python", "Django", "Django REST Framework", "Node.js", "Express", "Go"],
  },
  {
    label: "Data & Messaging",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "RabbitMQ", "BullMQ"],
  },
  {
    label: "Infrastructure & Tooling",
    items: ["Docker", "Linux", "Git", "GitHub Actions", "AWS", "Nginx"],
  },
];

export const INTERESTS: string[] = [
  "Event-driven architecture",
  "Distributed systems",
  "Platform engineering",
  "Infrastructure reliability",
  "Developer tooling",
];

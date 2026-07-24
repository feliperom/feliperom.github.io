import type { CapabilityGroup } from "./types";

/** Technical scope taken from Felipe's CV. */
export const CAPABILITIES: CapabilityGroup[] = [
  {
    id: "frontend",
    title: "Front-end",
    accent: "lime",
    items: [
      "React.js",
      "Angular (AngularJS → 12+)",
      "Vue.js",
      "Nuxt.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "SCSS / Sass / Less",
      "Tailwind",
      "Bootstrap",
      "Quasar",
      "Material Design",
      "Vite",
      "Webpack",
    ],
  },
  {
    id: "backend",
    title: "Back-end",
    accent: "lime",
    items: ["Node.js", "Nest.js", "TypeORM", "PHP", "REST", "GraphQL", "BFF"],
  },
  {
    id: "architecture",
    title: "Architecture",
    accent: "lime",
    items: [
      "Design Systems",
      "Micro-frontends",
      "BFF",
      "Clean Architecture",
      "DDD",
      "SOLID",
      "Microservices",
      "Messaging",
    ],
  },
  {
    id: "ai",
    title: "AI & Automation",
    accent: "electric",
    items: ["LLMs", "RAG", "n8n", "Claude Code", "Cursor", "Codex"],
  },
  {
    id: "quality",
    title: "Quality",
    accent: "lime",
    items: ["Jest", "Jasmine", "Cypress", "React Testing Library", "Selenium", "TDD", "Code review"],
  },
  {
    id: "devops",
    title: "DevOps & Cloud",
    accent: "lime",
    items: ["Docker", "Kubernetes", "Jenkins", "GitHub", "GitLab", "BitBucket", "AWS", "Google Cloud", "Azure"],
  },
  {
    id: "design",
    title: "Design",
    accent: "lime",
    items: ["Figma", "Adobe XD", "Zeplin", "Photoshop"],
  },
];

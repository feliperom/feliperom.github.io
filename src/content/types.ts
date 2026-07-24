import type { Localized } from "@/i18n/config";

export type ProjectStatus = "confirmed" | "placeholder";

export interface CaseBlock {
  challenge: Localized<string>;
  strategy: Localized<string[]>;
  solution: Localized<string[]>;
  impact: Localized<string[]>;
  learnings: Localized<string>;
}

export interface Project {
  slug: string;
  index: string;
  name: string;
  status: ProjectStatus;
  categories: Localized<string>;
  year: string;
  role: Localized<string>;
  stack: string[];
  accent: "lime" | "electric";
  summary: Localized<string>;
  problem: Localized<string>;
  result: Localized<string>;
  overview: {
    client: string;
    context: Localized<string>;
    period: string;
    team: Localized<string>;
  };
  image: string;
  case: CaseBlock;
}

export interface Experience {
  company: string;
  role: Localized<string>;
  period: string;
  present?: boolean;
  context: Localized<string>;
  highlights: Localized<string[]>;
  stack: string[];
}

export interface CapabilityGroup {
  id: string;
  title: string;
  accent: "lime" | "electric";
  items: string[];
}

export interface Education {
  title: string;
  institution: string;
  period: string;
  inProgress?: boolean;
  detail?: Localized<string>;
}

export interface Language {
  name: Localized<string>;
  level: Localized<string>;
}

export type LabTag = "Motion" | "UI" | "Code" | "AI" | "3D" | "Open source";

export interface LabItem {
  title: string;
  tags: LabTag[];
  year: string;
  description: Localized<string>;
  href?: string;
}

import type { Education, Language } from "./types";

/** Education and certifications from Felipe's CV. */
export const EDUCATION: Education[] = [
  {
    title: "Data Science",
    institution: "Universidade Anhanguera",
    period: "Feb 2025 — Nov 2027",
    inProgress: true,
  },
  {
    title: "Full Cycle 3.0 — Software Architecture",
    institution: "Full Cycle",
    period: "2022 — 2024",
    detail: {
      en: "Clean Architecture, DDD, SOLID, microservices, Kubernetes, observability.",
      pt: "Clean Architecture, DDD, SOLID, microsserviços, Kubernetes, observabilidade.",
    },
  },
  {
    title: "Fullstack Angular + Spring · REST Specialist",
    institution: "Algaworks",
    period: "2020",
  },
  {
    title: "Vue.js, JavaScript ES6, CSS Flexbox & Grid",
    institution: "Origamid",
    period: "2017",
  },
  {
    title: "Web Development Technician",
    institution: "Impacta Treinamentos",
    period: "2006 — 2008",
  },
];

export const LANGUAGES: Language[] = [
  {
    name: { en: "Portuguese", pt: "Português" },
    level: { en: "Native", pt: "Nativo" },
  },
  {
    name: { en: "English", pt: "Inglês" },
    level: {
      en: "B2 — technical fluency for remote work",
      pt: "B2 — fluência técnica para projetos remotos",
    },
  },
  {
    name: { en: "Spanish", pt: "Espanhol" },
    level: { en: "Basic", pt: "Básico" },
  },
];

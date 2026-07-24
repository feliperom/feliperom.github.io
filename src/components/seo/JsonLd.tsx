import type { Locale } from "@/i18n/config";
import { SITE } from "@/content/site";
import type { Project } from "@/content/types";

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Static, trusted content built at compile time.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function PersonJsonLd({ locale }: { locale: Locale }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Person",
        name: SITE.name,
        url: `${SITE.url}/${locale}`,
        email: `mailto:${SITE.email}`,
        jobTitle: "Senior Full Stack Developer",
        address: {
          "@type": "PostalAddress",
          addressLocality: SITE.location.city,
          addressCountry: SITE.location.country,
        },
        sameAs: [SITE.socials.linkedin, SITE.socials.github],
        alumniOf: [
          { "@type": "EducationalOrganization", name: "Universidade Anhanguera" },
          { "@type": "EducationalOrganization", name: "Impacta Treinamentos" },
        ],
        knowsLanguage: ["pt-BR", "en"],
        knowsAbout: [
          "Front-end Engineering",
          "Angular",
          "React",
          "Vue.js",
          "Nuxt.js",
          "TypeScript",
          "Node.js",
          "NestJS",
          "GraphQL",
          "Backend for Frontend",
          "Design Systems",
          "Micro-frontends",
          "Clean Architecture",
          "AI-driven development",
          "LLMs",
          "RAG",
          "Workflow automation",
        ],
      }}
    />
  );
}

export function CreativeWorkJsonLd({ project, locale }: { project: Project; locale: Locale }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: project.name,
        creator: { "@type": "Person", name: SITE.name },
        dateCreated: project.year,
        about: project.categories[locale],
        description: project.summary[locale],
        url: `${SITE.url}/${locale}/work/${project.slug}`,
      }}
    />
  );
}

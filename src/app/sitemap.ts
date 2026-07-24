import type { MetadataRoute } from "next";
import { LOCALES } from "@/i18n/config";
import { SITE } from "@/content/site";
import { PROJECTS } from "@/content/projects";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "about", "lab", "contact"];
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    for (const route of routes) {
      entries.push({
        url: `${SITE.url}/${locale}${route ? `/${route}` : ""}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: route === "" ? 1 : 0.7,
      });
    }
    for (const project of PROJECTS) {
      entries.push({
        url: `${SITE.url}/${locale}/work/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 0.6,
      });
    }
  }

  return entries;
}

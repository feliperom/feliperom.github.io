import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCALES, isLocale } from "@/i18n/config";
import { SITE } from "@/content/site";
import { PROJECTS, getProject } from "@/content/projects";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { CreativeWorkJsonLd } from "@/components/seo/JsonLd";

export function generateStaticParams() {
  return LOCALES.flatMap((locale) => PROJECTS.map((project) => ({ locale, slug: project.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProject(slug);
  if (!project || !isLocale(locale)) return {};

  return {
    title: `${project.name} — ${project.categories[locale]}`,
    description: project.summary[locale],
    alternates: { canonical: `${SITE.url}/${locale}/work/${slug}` },
    openGraph: {
      title: project.name,
      description: project.summary[locale],
      // Falls back to the shared social image; drop /og/<slug>.png to override.
      images: [{ url: "/og/default.png", width: 1200, height: 630, alt: project.name }],
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <CreativeWorkJsonLd project={project} locale={locale} />
      <CaseStudy slug={slug} />
    </>
  );
}

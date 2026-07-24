import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCALES, isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { SITE } from "@/content/site";
import { Providers } from "@/components/providers/Providers";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Preloader } from "@/components/layout/Preloader";
import { PersonJsonLd } from "@/components/seo/JsonLd";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  const alternates = Object.fromEntries(LOCALES.map((code) => [code, `${SITE.url}/${code}`]));

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `${SITE.url}/${locale}`,
      languages: alternates,
    },
    openGraph: {
      type: "website",
      locale: locale === "pt" ? "pt_BR" : "en_US",
      title: dict.meta.title,
      description: dict.meta.description,
      url: `${SITE.url}/${locale}`,
      siteName: "Felipe Romero",
      images: [{ url: "/og/default.png", width: 1200, height: 630, alt: "Felipe Romero" }],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: ["/og/default.png"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale: Locale = locale;
  const dict = getDictionary(typedLocale);

  return (
    <Providers locale={typedLocale} dict={dict}>
      <PersonJsonLd locale={typedLocale} />
      <Preloader />
      <Nav />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[300] focus:bg-lime focus:px-4 focus:py-2 focus:text-obsidian"
      >
        Skip to content
      </a>
      <main id="main">{children}</main>
      <Footer />
    </Providers>
  );
}

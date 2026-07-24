"use client";

import { useLocale } from "@/i18n/context";
import { SITE } from "@/content/site";
import { EDUCATION, LANGUAGES } from "@/content/education";
import { formatPeriod } from "@/lib/period";
import { SplitText } from "@/components/ui/SplitText";
import { useReveal } from "@/hooks/useReveal";
import { useBrokenImage } from "@/hooks/useBrokenImage";

const BIO = {
  en: [
    "I'm Felipe Romero, a Senior Full Stack Developer based in Santos, Brazil, working remotely. Sixteen years in, most of them spent in high-criticality sectors — banking, insurance and health.",
    "I've worked on platforms with more than a million users, led the migration of legacy AngularJS to modern Angular, and sat on the core team that created a documented Design System. Angular and Vue/Nuxt are home ground; React is production experience; Node.js, BFF and GraphQL are where the full-stack work happens.",
    "Today I apply AI and automation — LLMs, RAG, n8n — to the operation of my own digital products, which keeps software engineering tied to reading the business rather than floating above it.",
    "Fast code matters. Code that stays healthy after years matters more. Experience is not time on a résumé — it is knowing which problems not to create.",
  ],
  pt: [
    "Sou Felipe Romero, Desenvolvedor Full Stack sênior, baseado em Santos, Brasil, atuando remotamente. Dezesseis anos de carreira, a maior parte em setores de alta criticidade — bancário, seguros e saúde.",
    "Atuei em plataformas com mais de um milhão de usuários, conduzi a migração de legado AngularJS para Angular moderno e integrei o núcleo de criação de um Design System documentado. Angular e Vue/Nuxt são terreno de casa; React é experiência em produto; Node.js, BFF e GraphQL são onde acontece o trabalho full-stack.",
    "Hoje aplico IA e automação — LLMs, RAG, n8n — na operação de produtos digitais próprios, o que mantém a engenharia de software colada à leitura de negócio em vez de pairando acima dela.",
    "Código rápido importa. Código que continua saudável depois de anos importa mais. Experiência não é tempo de currículo — é saber quais problemas não criar.",
  ],
} as const;

export function About() {
  const { locale, dict } = useLocale();
  const ref = useReveal<HTMLDivElement>({ childSelector: "[data-p]", stagger: 0.12, y: 24 });
  const educationRef = useReveal<HTMLDivElement>({ childSelector: "[data-item]", stagger: 0.07, y: 20 });
  const portrait = useBrokenImage();

  return (
    <section className="px-5 pb-24 pt-28 md:px-10 md:pt-40">
      <div className="mx-auto max-w-grid">
        <span className="mb-8 block text-xs uppercase tracking-[0.28em] text-gray">— About</span>
        <SplitText
          text={locale === "pt" ? "PRECISÃO HUMANA.\nVELOCIDADE COM IA." : "HUMAN PRECISION.\nMACHINE VELOCITY."}
          as="h1"
          className="font-display text-giant font-medium"
          lineClassName="odd:text-offwhite even:text-gray"
        />

        <div className="mt-20 grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          {/* B&W editorial photo slot — drop a treated portrait at the path below. */}
          <figure className="relative">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-graphite grayscale">
              {!portrait.broken ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  ref={portrait.ref}
                  src="/images/felipe-portrait.jpg"
                  alt="Felipe Romero"
                  onError={portrait.onError}
                  className="h-full w-full object-cover contrast-[1.05]"
                />
              ) : (
                <div className="grain grid h-full w-full place-items-center">
                  <span className="font-display text-8xl text-offwhite/10">FR</span>
                  <span className="absolute bottom-4 left-4 text-[10px] uppercase tracking-widest text-gray">
                    B&amp;W portrait — placeholder
                  </span>
                </div>
              )}
            </div>
            <figcaption className="mt-3 flex justify-between text-[10px] uppercase tracking-widest text-gray">
              <span>
                {SITE.location.city}, {dict.nav.country}
              </span>
              <span>
                {SITE.location.lat} / {SITE.location.lng}
              </span>
            </figcaption>
          </figure>

          <div ref={ref} className="flex flex-col gap-6 self-center">
            {BIO[locale].map((paragraph, index) => (
              <p
                key={index}
                data-p
                className={
                  index === 0
                    ? "text-2xl leading-relaxed text-offwhite md:text-3xl"
                    : "text-lg leading-relaxed text-gray"
                }
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div ref={educationRef} className="mt-24 grid gap-12 border-t border-offwhite/10 pt-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <div>
            <h2 className="mb-8 text-xs uppercase tracking-[0.28em] text-gray">{dict.experience.education}</h2>
            <ul className="flex flex-col">
              {EDUCATION.map((item) => (
                <li
                  key={item.title}
                  data-item
                  className="grid gap-1 border-t border-offwhite/10 py-5 md:grid-cols-[150px_1fr] md:gap-8"
                >
                  <span className="font-display text-sm tabular-nums text-gray">
                    {formatPeriod(item.period, locale)}
                  </span>
                  <div>
                    <p className="text-offwhite">
                      {item.title}
                      {item.inProgress && (
                        <span className="ml-3 text-[10px] uppercase tracking-widest text-lime">
                          {dict.experience.inProgress}
                        </span>
                      )}
                    </p>
                    <p className="mt-1 text-sm text-gray">{item.institution}</p>
                    {item.detail && <p className="mt-2 text-sm text-gray">{item.detail[locale]}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-8 text-xs uppercase tracking-[0.28em] text-gray">{dict.experience.languages}</h2>
            <ul className="flex flex-col">
              {LANGUAGES.map((language) => (
                <li key={language.name.en} data-item className="border-t border-offwhite/10 py-5">
                  <p className="font-display text-xl text-offwhite">{language.name[locale]}</p>
                  <p className="mt-1 text-sm text-gray">{language.level[locale]}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

# Felipe Romero — Portfolio

**Engineering Digital Experiences** · *Human precision. Machine velocity.*

An authorial, cinematic portfolio for Felipe Romero — Senior Full Stack
Developer. Built as a static Next.js site: editorial typography, a WebGL hero,
scroll-driven reveals, bilingual content (PT/EN), and full case studies.

---

## Stack

- **Next.js 15** (App Router, `output: "export"` — static)
- **TypeScript** (strict, no `any`)
- **Tailwind CSS**
- **GSAP** (reveals, counters, magnetic buttons)
- **Lenis** (smooth scroll)
- **Three.js** (hero lattice, dynamically imported, graceful no-WebGL fallback)
- **IntersectionObserver** drives all scroll reveals (reliable, driver-independent)
- Self-hosted fonts via `next/font` (Space Grotesk, Inter, Instrument Serif)

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000  (redirects to /en or /pt)
```

Other scripts:

```bash
npm run build        # static export to ./out
npm run typecheck    # tsc --noEmit
npm run lint         # next lint
```

## Project structure

```
src/
  app/
    layout.tsx                 Root <html>, fonts, base metadata
    page.tsx                   "/" → client redirect to /en or /pt
    [locale]/
      layout.tsx               Providers, Nav, Footer, Preloader, SEO, i18n metadata
      page.tsx                 Home (Hero → Statement → Work → Capabilities → AI → Experience → Lab → Contact)
      work/[slug]/page.tsx     Case study (6 blocks)
      about/page.tsx           Bio + timeline
      lab/page.tsx             Filterable experiments
      contact/page.tsx         Contact
    sitemap.ts / robots.ts     Static SEO files
  components/
    layout/                    Nav, Footer, Cursor, SmoothScroll, Preloader, RootRedirect
    sections/                  Hero, Statement, Work, ProjectChapter, Capabilities, AiFlow,
                               Experience, LabTeaser, Contact, About, CaseStudy, Lab
    ui/                        SplitText, Counter, MagneticButton, MediaBlock, LocalTime,
                               LocaleSwitcher, SectionHeader
    hero/                      HeroVisual (WebGL gate + fallback), HeroCanvas (three.js)
    seo/                       JsonLd (Person + CreativeWork)
    providers/                 Providers (locale context, cursor, smooth scroll)
  content/                     site, projects, experience, capabilities, lab, types  ← EDIT HERE
  i18n/                        config, en, pt, dictionaries, context
  hooks/                       useReveal, useInView, usePrefersReducedMotion
  lib/                         gsap
```

## Editing content

All content is typed data — no CMS required.

| What | File |
|---|---|
| Contact, socials, location, résumé path | `src/content/site.ts` |
| Projects & case studies | `src/content/projects.ts` |
| Experience timeline | `src/content/experience.ts` |
| Capabilities | `src/content/capabilities.ts` |
| Education, certifications, languages | `src/content/education.ts` |
| Lab experiments | `src/content/lab.ts` |
| UI strings (PT/EN) | `src/i18n/en.ts` + `src/i18n/pt.ts` |
| Bio paragraphs | `src/components/sections/About.tsx` (`BIO`) |

Periods are written once in English (`"Aug 2018 — Present"`) and localized at render
time by `src/lib/period.ts` — don't duplicate them per language.

Localized fields use `{ en, pt }`. The English dictionary (`en.ts`) is the source
of truth for the `Dictionary` type; `pt.ts` must match its shape (the compiler enforces this).

### Media

Drop assets into `public/`:

- Project images → `public/images/works/<slug>.jpg` (paths set in `projects.ts`).
  Missing images render a designed placeholder — nothing breaks.
- Portrait → `public/images/felipe-portrait.jpg` (B&W editorial). Missing → placeholder.
- Résumé → `public/felipe-romero-resume.pdf` (currently a placeholder PDF).
- Social image → `public/og/default.png` (1200×630, already generated).

## Placeholders to replace

All six case studies, the timeline, capabilities and education come from Felipe's
real CV. What is still outstanding:

- **Lab items** in `lab.ts` — the only `[PLACEHOLDER]` content left. Replace with
  real experiments and links.
- **Résumé PDF** at `public/felipe-romero-resume.pdf` — currently a stub; export
  the real CV to PDF and overwrite it.
- **Project images** (`public/images/works/*.jpg`) and the **B&W portrait**
  (`public/images/felipe-portrait.jpg`). Both degrade to designed placeholders.

Figures used in copy are the ones stated in the CV — 1M+ users, 15+ documented
components, ~15 client companies, 16 years. Nothing else is quantified: where no
public number exists, impact is written qualitatively.

## Deployment — GitHub Pages

The repo is `feliperom/feliperom.github.io` (a user page, served at the domain root,
so no `basePath` is needed).

1. Push to `master`.
2. In **Settings → Pages**, set **Source = GitHub Actions**.
3. The workflow at `.github/workflows/deploy.yml` builds and deploys `./out` on every push.

`public/.nojekyll` is included so GitHub Pages serves the `_next/` folder.

To preview the export locally:

```bash
npm run build
npx serve out
```

## Motion

- Ease `power3.out`, durations 0.6–1.2s, staggered entrances.
- Reveals via IntersectionObserver → fire reliably above and below the fold.
- Full `prefers-reduced-motion` support: animations are skipped and all content is shown.
- Preloader runs once per session (`sessionStorage`), ~2s, and is skipped under reduced motion.
- WebGL is feature-detected; without it the hero shows a static `FR` monogram.

---

## Checklists

### SEO
- [x] Per-page `<title>` / description (PT + EN)
- [x] Canonical URLs + `hreflang` alternates
- [x] Open Graph + Twitter cards (1200×630 image)
- [x] `sitemap.xml` (all locales, pages, projects)
- [x] `robots.txt`
- [x] JSON-LD `Person` (home) + `CreativeWork` (case studies)
- [x] Semantic headings, single `<h1>` per page
- [ ] Per-project OG images (optional; falls back to default)

### Accessibility (WCAG 2.x AA)
- [x] Semantic HTML (`header`, `nav`, `main`, `section`, `article`, `footer`)
- [x] Skip-to-content link
- [x] Visible focus states (`:focus-visible`)
- [x] Keyboard-operable nav, filters, accordions (native buttons/links)
- [x] `aria-label` on split text; decorative visuals `aria-hidden`
- [x] Custom cursor never replaces the native cursor on touch; content usable without it
- [x] Color contrast: off-white / lime on obsidian
- [x] `prefers-reduced-motion` respected
- [ ] Manual screen-reader pass before launch

### Performance
- [x] Static export (zero server cost)
- [x] Three.js dynamically imported (out of the initial bundle)
- [x] WebGL disabled when unsupported; DPR capped at 1.75
- [x] Fonts self-hosted + `display: swap`
- [x] Lazy-loaded images, graceful placeholders
- [x] Animations suspended off-screen (IntersectionObserver)
- [ ] Add real optimized images (AVIF/WebP) and run Lighthouse before launch

---

Designed and engineered by Felipe Romero. Built with Next.js, TypeScript, GSAP and curiosity.

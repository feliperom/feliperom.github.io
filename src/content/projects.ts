import type { Project } from "./types";

/**
 * Every project below is drawn from Felipe's real trajectory.
 * Figures quoted (1M+ users, 15+ documented components, ~15 client companies)
 * come straight from his CV. Where no public number exists, impact is stated
 * qualitatively — nothing is invented.
 */
export const PROJECTS: Project[] = [
  {
    slug: "safrapay-internet-banking",
    index: "01",
    name: "SafraPay & Internet Banking",
    status: "confirmed",
    categories: {
      en: "Fintech / Banking / Legacy Migration",
      pt: "Fintech / Bancário / Migração de Legado",
    },
    year: "2018 — 2019",
    role: {
      en: "Front-end Architecture & Development",
      pt: "Arquitetura & Desenvolvimento Front-end",
    },
    stack: ["Angular 6/7/8", "AngularJS", "Node.js", "BFF", "GraphQL", "TypeScript"],
    accent: "lime",
    summary: {
      en: "Web and mobile products for Banco Safra's SafraPay and Internet Banking — a platform with more than 1 million users — plus the migration that moved it off AngularJS.",
      pt: "Produtos web e mobile do SafraPay e do Internet Banking do Banco Safra — plataforma com mais de 1 milhão de usuários — e a migração que tirou o sistema do AngularJS.",
    },
    problem: {
      en: "A banking platform serving over a million people was anchored to AngularJS, with load times and bundle size growing against it.",
      pt: "Uma plataforma bancária atendendo mais de um milhão de pessoas estava presa ao AngularJS, com tempo de carregamento e tamanho de bundle jogando contra.",
    },
    result: {
      en: "Modules migrated to Angular 6/7/8 with lower load time and a smaller bundle — without interrupting a product people use to move their money.",
      pt: "Módulos migrados para Angular 6/7/8 com menor tempo de carregamento e bundle reduzido — sem interromper um produto que as pessoas usam para movimentar dinheiro.",
    },
    overview: {
      client: "Banco Safra (via Sysmap Solutions)",
      context: {
        en: "Allocated as a consultant at Banco Safra, working across SafraPay and Internet Banking for web and mobile.",
        pt: "Alocado como consultor no Banco Safra, atuando no SafraPay e no Internet Banking para web e mobile.",
      },
      period: "Aug 2018 — Nov 2019",
      team: {
        en: "Corporate product squads (product, design, back-end, QA).",
        pt: "Squads de produto corporativas (produto, design, back-end, QA).",
      },
    },
    image: "/images/works/safrapay.jpg",
    case: {
      challenge: {
        en: "Migrating a live banking platform off AngularJS while it kept serving more than a million users — no big-bang rewrite, no downtime, no regression in a domain where a bug is a financial incident.",
        pt: "Migrar uma plataforma bancária em produção para fora do AngularJS enquanto ela seguia atendendo mais de um milhão de usuários — sem reescrita big-bang, sem downtime e sem regressão em um domínio onde um bug é um incidente financeiro.",
      },
      strategy: {
        en: [
          "Module-by-module migration to Angular 6/7/8 instead of a single high-risk rewrite.",
          "A BFF layer with Node.js and GraphQL to shape exactly the data each screen needed, shrinking payloads.",
          "Load time and bundle size treated as acceptance criteria on every delivery, not a later clean-up.",
        ],
        pt: [
          "Migração módulo a módulo para Angular 6/7/8 em vez de uma reescrita única de alto risco.",
          "Camada BFF com Node.js e GraphQL para moldar exatamente o dado que cada tela precisava, reduzindo payloads.",
          "Tempo de carregamento e tamanho de bundle tratados como critério de aceite a cada entrega, não como faxina posterior.",
        ],
      },
      solution: {
        en: [
          "SafraPay and Internet Banking flows delivered for both web and mobile.",
          "Angular modules rebuilt with typed, reusable components aligned to the bank's design language.",
          "BFF integration consolidating back-end services behind a single front-end-shaped contract.",
        ],
        pt: [
          "Fluxos do SafraPay e do Internet Banking entregues para web e mobile.",
          "Módulos Angular reconstruídos com componentes tipados e reutilizáveis, alinhados à linguagem de design do banco.",
          "Integração BFF consolidando serviços de back-end atrás de um contrato único moldado para o front-end.",
        ],
      },
      impact: {
        en: [
          "Reduced application load time and bundle size on a platform with 1M+ users.",
          "Legacy AngularJS modules retired progressively, with no service interruption.",
        ],
        pt: [
          "Redução do tempo de carregamento e do tamanho do bundle em uma plataforma com mais de 1 milhão de usuários.",
          "Módulos legados em AngularJS aposentados progressivamente, sem interrupção de serviço.",
        ],
      },
      learnings: {
        en: "At this scale, migration is a product decision before it is a technical one. Shipping it in slices is what makes it survivable — and performance only holds if it is a criterion, never a phase.",
        pt: "Nessa escala, migração é decisão de produto antes de ser decisão técnica. Entregar em fatias é o que a torna sobrevivível — e performance só se sustenta quando é critério, nunca uma fase.",
      },
    },
  },
  {
    slug: "hdi-design-system",
    index: "02",
    name: "HDI Insurance Design System",
    status: "confirmed",
    categories: {
      en: "Insurance / Design System / Front-end Architecture",
      pt: "Seguros / Design System / Arquitetura Front-end",
    },
    year: "2020 — 2021",
    role: {
      en: "Design System Core Team",
      pt: "Núcleo do Design System",
    },
    stack: ["Angular 12", "TypeScript", "Storybook", "Node.js", "BFF", "Jenkins"],
    accent: "electric",
    summary: {
      en: "Part of the core team that defined HDI Seguros' Design System — 15+ components documented in Storybook, turning scattered interface decisions into a shared contract.",
      pt: "Integrei o núcleo que definiu o Design System da HDI Seguros — mais de 15 componentes documentados em Storybook, transformando decisões de interface dispersas em um contrato compartilhado.",
    },
    problem: {
      en: "An insurance platform where each squad re-decided the same interface questions, and consistency depended on who happened to build the screen.",
      pt: "Uma plataforma de seguros onde cada squad redecidia as mesmas questões de interface, e a consistência dependia de quem por acaso construía a tela.",
    },
    result: {
      en: "A documented component library that made the platform's interface language explicit, reviewable and reusable across teams.",
      pt: "Uma biblioteca de componentes documentada que tornou a linguagem de interface da plataforma explícita, revisável e reutilizável entre times.",
    },
    overview: {
      client: "HDI Seguros (via Sysmap Solutions)",
      context: {
        en: "Insurance platform modernisation, with the Design System as the shared foundation across product squads.",
        pt: "Modernização da plataforma de seguros, com o Design System como base compartilhada entre as squads de produto.",
      },
      period: "Apr 2020 — Jul 2021",
      team: {
        en: "Design System core team, serving multiple product squads.",
        pt: "Núcleo do Design System, atendendo múltiplas squads de produto.",
      },
    },
    image: "/images/works/hdi.jpg",
    case: {
      challenge: {
        en: "Insurance products carry dense forms, regulated copy and long-lived screens. Without a shared system, every squad drifts — and the drift compounds into rework nobody scheduled.",
        pt: "Produtos de seguros carregam formulários densos, textos regulados e telas de vida longa. Sem um sistema compartilhado, cada squad desvia — e o desvio se acumula em retrabalho que ninguém planejou.",
      },
      strategy: {
        en: [
          "Define the component contract first — API, states and accessibility — before styling anything.",
          "Documentation in Storybook as the single source of truth, so adoption never depended on tribal knowledge.",
          "Angular 12 with typed inputs and outputs, making misuse a compile error instead of a bug report.",
        ],
        pt: [
          "Definir primeiro o contrato do componente — API, estados e acessibilidade — antes de estilizar qualquer coisa.",
          "Documentação em Storybook como fonte única de verdade, para que a adoção nunca dependesse de conhecimento tribal.",
          "Angular 12 com inputs e outputs tipados, transformando uso indevido em erro de compilação em vez de relatório de bug.",
        ],
      },
      solution: {
        en: [
          "15+ components built and documented in Storybook, each with states and usage guidance.",
          "A BFF layer in Node.js feeding the interfaces with data already shaped for the screen.",
          "Jenkins pipeline delivering the library and its documentation together.",
        ],
        pt: [
          "Mais de 15 componentes construídos e documentados em Storybook, cada um com estados e orientação de uso.",
          "Camada BFF em Node.js alimentando as interfaces com dados já moldados para a tela.",
          "Pipeline Jenkins entregando a biblioteca e sua documentação em conjunto.",
        ],
      },
      impact: {
        en: [
          "15+ documented components adopted as the platform's shared interface language.",
          "Less rework and fewer re-decisions per squad — consistency stopped being a matter of who built the screen.",
        ],
        pt: [
          "Mais de 15 componentes documentados adotados como linguagem de interface compartilhada da plataforma.",
          "Menos retrabalho e menos redecisões por squad — consistência deixou de depender de quem construía a tela.",
        ],
      },
      learnings: {
        en: "A design system is adopted for its documentation, not its code. The components were the easy part; making the decisions legible to everyone else was the work.",
        pt: "Um design system é adotado pela documentação, não pelo código. Os componentes foram a parte fácil; o trabalho foi tornar as decisões legíveis para todo o resto do time.",
      },
    },
  },
  {
    slug: "welav-emide",
    index: "03",
    name: "WeLav & Emidê",
    status: "confirmed",
    categories: {
      en: "Own Products / SaaS / AI Automation",
      pt: "Produtos Próprios / SaaS / Automação com IA",
    },
    year: "2025 — Present",
    role: {
      en: "Product, Architecture & Full Stack Development",
      pt: "Produto, Arquitetura & Desenvolvimento Full Stack",
    },
    stack: ["Vue.js", "Nuxt.js", "Node.js", "TypeScript", "n8n", "LLMs"],
    accent: "lime",
    summary: {
      en: "Two businesses of my own, built and operated end to end — and the AI automation layer that runs their support, SDR and sales without adding headcount.",
      pt: "Dois negócios próprios, construídos e operados de ponta a ponta — e a camada de automação com IA que roda atendimento, SDR e vendas sem aumentar o time.",
    },
    problem: {
      en: "Running your own product means the manual work is yours too: answering, qualifying, following up. Hours a week that scale badly and get worse as the business grows.",
      pt: "Tocar produto próprio significa que o trabalho manual também é seu: responder, qualificar, fazer follow-up. Horas por semana que escalam mal e pioram conforme o negócio cresce.",
    },
    result: {
      en: "Support, SDR and sales flows automated with n8n and LLMs, removing hours of manual work every week and making the commercial process repeatable.",
      pt: "Fluxos de atendimento, SDR e vendas automatizados com n8n e LLMs, eliminando horas semanais de trabalho manual e tornando o processo comercial repetível.",
    },
    overview: {
      client: "WeLav & Emidê — own products",
      context: {
        en: "Two digital businesses I own and operate, from front-end to production and commercial operation.",
        pt: "Dois negócios digitais que possuo e opero, do front-end à produção e à operação comercial.",
      },
      period: "Oct 2025 — Present",
      team: {
        en: "Solo product and engineering, with automation doing the repetitive work.",
        pt: "Produto e engenharia solo, com automação fazendo o trabalho repetitivo.",
      },
    },
    image: "/images/works/welav.jpg",
    case: {
      challenge: {
        en: "Operate two products alone without the operation becoming the job. Every manual step had to justify itself or be handed to a machine.",
        pt: "Operar dois produtos sozinho sem que a operação virasse o trabalho. Cada passo manual tinha que se justificar ou ser entregue a uma máquina.",
      },
      strategy: {
        en: [
          "Map the commercial process end to end first — automating an undefined process only multiplies the mess.",
          "n8n as the orchestration layer, with LLMs called where judgement is needed and plain logic everywhere else.",
          "Keep a human decision point on anything that touches a customer commitment.",
        ],
        pt: [
          "Mapear o processo comercial de ponta a ponta primeiro — automatizar um processo indefinido só multiplica a bagunça.",
          "n8n como camada de orquestração, chamando LLMs onde há julgamento e lógica simples em todo o resto.",
          "Manter um ponto de decisão humano em tudo que envolve compromisso com o cliente.",
        ],
      },
      solution: {
        en: [
          "Vue.js and Nuxt.js front-ends with a Node.js and TypeScript back-end, deployed and operated by me.",
          "n8n workflows integrated with LLMs handling support, lead qualification (SDR) and sales follow-up.",
          "Full product cycle owned: architecture, API integration, deploy and evolution driven by business metrics.",
        ],
        pt: [
          "Front-ends em Vue.js e Nuxt.js com back-end em Node.js e TypeScript, publicados e operados por mim.",
          "Workflows n8n integrados a LLMs cuidando de atendimento, qualificação de leads (SDR) e follow-up de vendas.",
          "Ciclo completo do produto sob minha responsabilidade: arquitetura, integração de APIs, deploy e evolução por métrica de negócio.",
        ],
      },
      impact: {
        en: [
          "Hours of manual work eliminated every week across support and sales.",
          "A standardised commercial process that runs the same way whether or not I am at the keyboard.",
        ],
        pt: [
          "Horas de trabalho manual eliminadas toda semana em atendimento e vendas.",
          "Processo comercial padronizado, que roda igual estando eu no teclado ou não.",
        ],
      },
      learnings: {
        en: "Automation is only as good as the process underneath it. AI amplified a process I had already made explicit — it would have amplified the chaos just as efficiently.",
        pt: "Automação só é tão boa quanto o processo embaixo dela. A IA amplificou um processo que eu já tinha tornado explícito — ela teria amplificado o caos com a mesma eficiência.",
      },
    },
  },
  {
    slug: "odontoprev-dentist-portal",
    index: "04",
    name: "OdontoPrev Dentist Portal",
    status: "confirmed",
    categories: {
      en: "Health / Corporate Platform / Refactor",
      pt: "Saúde / Plataforma Corporativa / Refatoração",
    },
    year: "2024 — 2025",
    role: {
      en: "Full Stack Development",
      pt: "Desenvolvimento Full Stack",
    },
    stack: ["Vue.js", "Nuxt.js", "Node.js", "TypeScript", "SCSS", "Tailwind"],
    accent: "electric",
    summary: {
      en: "Maintenance and refactor of the Dentist Portal at OdontoPrev — a platform serving tens of thousands of members — modernising a codebase that had to keep running while it changed.",
      pt: "Sustentação e refatoração do Portal do Dentista na OdontoPrev — plataforma que atende dezenas de milhares de beneficiários — modernizando uma base de código que precisava continuar rodando enquanto mudava.",
    },
    problem: {
      en: "A production portal where every change cost more than the last: accumulated maintenance rework was eating the team's capacity to deliver anything new.",
      pt: "Um portal em produção onde cada mudança custava mais que a anterior: o retrabalho acumulado de manutenção consumia a capacidade do time de entregar qualquer coisa nova.",
    },
    result: {
      en: "A modernised codebase with lower maintenance rework, giving the squad room to build instead of only to patch.",
      pt: "Base de código modernizada com menos retrabalho de manutenção, devolvendo à squad espaço para construir em vez de apenas remendar.",
    },
    overview: {
      client: "OdontoPrev (via Sis-it)",
      context: {
        en: "Digital platforms for one of the largest dental care providers, serving tens of thousands of members.",
        pt: "Plataformas digitais de uma das maiores operadoras de planos odontológicos, atendendo dezenas de milhares de beneficiários.",
      },
      period: "Aug 2024 — Oct 2025",
      team: {
        en: "Squad of up to 8 people.",
        pt: "Squad de até 8 pessoas.",
      },
    },
    image: "/images/works/odontoprev.jpg",
    case: {
      challenge: {
        en: "Refactor a portal that dentists depend on daily. The system could not pause, and the people using it could not absorb surprises.",
        pt: "Refatorar um portal do qual dentistas dependem diariamente. O sistema não podia parar, e quem o usa não podia absorver surpresas.",
      },
      strategy: {
        en: [
          "Refactor alongside support: pay down debt in the same areas already being touched.",
          "Vue.js and Nuxt.js with TypeScript to make contracts explicit and regressions visible earlier.",
          "Standardise styling on SCSS and Tailwind instead of letting each screen invent its own rules.",
        ],
        pt: [
          "Refatorar junto com a sustentação: pagar dívida nas mesmas áreas que já estavam sendo tocadas.",
          "Vue.js e Nuxt.js com TypeScript para tornar contratos explícitos e regressões visíveis mais cedo.",
          "Padronizar estilo em SCSS e Tailwind em vez de deixar cada tela inventar as próprias regras.",
        ],
      },
      solution: {
        en: [
          "Dentist Portal refactored and kept in support without interrupting its users.",
          "Corporate product interfaces built and evolved on a consistent component model.",
          "Front-end integrated with back-end services through Node.js.",
        ],
        pt: [
          "Portal do Dentista refatorado e mantido em sustentação sem interromper seus usuários.",
          "Interfaces de produtos corporativos construídas e evoluídas sobre um modelo de componentes consistente.",
          "Front-end integrado a serviços de back-end através de Node.js.",
        ],
      },
      impact: {
        en: [
          "Reduced maintenance rework on the Dentist Portal.",
          "A modernised codebase that a squad of up to 8 people could work in without stepping on each other.",
        ],
        pt: [
          "Redução do retrabalho de manutenção no Portal do Dentista.",
          "Base de código modernizada, na qual uma squad de até 8 pessoas conseguia trabalhar sem atropelo.",
        ],
      },
      learnings: {
        en: "The best refactor is the one nobody outside the team notices. Doing it inside the support flow, area by area, beat asking for a rewrite window that was never going to come.",
        pt: "A melhor refatoração é a que ninguém fora do time percebe. Fazê-la dentro do fluxo de sustentação, área por área, funcionou melhor que pedir uma janela de reescrita que nunca viria.",
      },
    },
  },
  {
    slug: "epoc-erp-scheduling",
    index: "05",
    name: "ERP Scheduling & Reservations",
    status: "confirmed",
    categories: {
      en: "ERP / Product / Technical Leadership",
      pt: "ERP / Produto / Liderança Técnica",
    },
    year: "2022 — 2024",
    role: {
      en: "Lead Developer — Architecture & Delivery",
      pt: "Desenvolvedor Líder — Arquitetura & Entrega",
    },
    stack: ["Vue.js", "TypeScript", "PHP", "JavaScript", "Bootstrap"],
    accent: "lime",
    summary: {
      en: "A Scheduling & Reservations module designed and delivered from scratch for an ERP, now used by roughly 15 client companies — built while leading a team of three.",
      pt: "Módulo de Agendamentos e Reservas desenhado e entregue do zero para um ERP, hoje utilizado por aproximadamente 15 empresas clientes — construído enquanto liderava um time de três.",
    },
    problem: {
      en: "The ERP had no scheduling capability, and each client company handled reservations its own way — outside the system that was supposed to run their operation.",
      pt: "O ERP não tinha capacidade de agendamento, e cada empresa cliente resolvia reservas do seu jeito — fora do sistema que deveria rodar a operação delas.",
    },
    result: {
      en: "A scheduling module in production across roughly 15 client companies, plus a team working to shared standards it did not have before.",
      pt: "Módulo de agendamento em produção em cerca de 15 empresas clientes, além de um time trabalhando com padrões compartilhados que antes não existiam.",
    },
    overview: {
      client: "Epoc Tech",
      context: {
        en: "ERP product serving multiple client companies, with scheduling as a missing core capability.",
        pt: "Produto ERP atendendo múltiplas empresas clientes, com agendamento como capacidade central ausente.",
      },
      period: "Nov 2022 — Mar 2024",
      team: {
        en: "Technical lead of 3 developers, in direct contact with stakeholders and clients.",
        pt: "Liderança técnica de 3 desenvolvedores, em contato direto com stakeholders e clientes.",
      },
    },
    image: "/images/works/epoc.jpg",
    case: {
      challenge: {
        en: "Design a scheduling domain generic enough for roughly 15 different companies and specific enough to be useful to each — while leading the team building it and negotiating scope directly with clients.",
        pt: "Desenhar um domínio de agendamento genérico o bastante para cerca de 15 empresas diferentes e específico o bastante para ser útil a cada uma — liderando o time que o construía e negociando escopo direto com os clientes.",
      },
      strategy: {
        en: [
          "Model the scheduling domain before writing screens: resources, availability, conflicts and rules.",
          "Establish architecture, coding standards and code review as the team's baseline, not as later corrections.",
          "Act as the direct technical counterpart to stakeholders, so scope decisions carried their real cost.",
        ],
        pt: [
          "Modelar o domínio de agendamento antes de escrever telas: recursos, disponibilidade, conflitos e regras.",
          "Estabelecer arquitetura, padrões de código e code review como linha de base do time, não como correção posterior.",
          "Atuar como interlocutor técnico direto dos stakeholders, para que decisões de escopo carregassem seu custo real.",
        ],
      },
      solution: {
        en: [
          "Scheduling & Reservations module delivered from zero to production.",
          "Full-stack implementation in PHP, Vue.js and TypeScript.",
          "Team practices established: code review, sprint planning and technical interviews.",
        ],
        pt: [
          "Módulo de Agendamentos e Reservas entregue do zero à produção.",
          "Implementação full-stack em PHP, Vue.js e TypeScript.",
          "Práticas de time estabelecidas: code review, planejamento de sprint e entrevistas técnicas.",
        ],
      },
      impact: {
        en: [
          "Module adopted by roughly 15 client companies.",
          "A 3-developer team operating on shared architecture and review standards.",
        ],
        pt: [
          "Módulo adotado por aproximadamente 15 empresas clientes.",
          "Time de 3 desenvolvedores operando sobre arquitetura e padrões de review compartilhados.",
        ],
      },
      learnings: {
        en: "Leading changed what I optimise for. The best architectural decision is the one the rest of the team can extend without asking me — and talking to clients directly is what keeps that decision honest.",
        pt: "Liderar mudou o que eu otimizo. A melhor decisão de arquitetura é a que o resto do time consegue estender sem me perguntar — e falar direto com o cliente é o que mantém essa decisão honesta.",
      },
    },
  },
  {
    slug: "natura-global-sales",
    index: "06",
    name: "Natura Global Sales Platform",
    status: "confirmed",
    categories: {
      en: "Global Retail / React / BFF & GraphQL",
      pt: "Varejo Global / React / BFF & GraphQL",
    },
    year: "2020",
    role: {
      en: "Front-end Development",
      pt: "Desenvolvimento Front-end",
    },
    stack: ["React", "Node.js", "BFF", "GraphQL", "JavaScript"],
    accent: "electric",
    summary: {
      en: "Front-end of Natura's global sales platform, built on React with a Node.js BFF and GraphQL — delivered during a simultaneous allocation alongside HDI Seguros.",
      pt: "Front-end da plataforma global de vendas da Natura, sobre React com BFF em Node.js e GraphQL — entregue durante alocação simultânea com a HDI Seguros.",
    },
    problem: {
      en: "A sales platform operating across markets needs interfaces that stay coherent while the data behind them varies by region and back-end service.",
      pt: "Uma plataforma de vendas que opera entre mercados precisa de interfaces que se mantenham coerentes enquanto o dado por trás varia por região e por serviço de back-end.",
    },
    result: {
      en: "React interfaces fed by a GraphQL BFF, so the front-end consumed one predictable contract instead of many shifting services.",
      pt: "Interfaces React alimentadas por um BFF GraphQL, para que o front-end consumisse um contrato previsível em vez de muitos serviços instáveis.",
    },
    overview: {
      client: "Natura (via Sysmap Solutions)",
      context: {
        en: "Global sales platform, developed during a simultaneous allocation with HDI Seguros.",
        pt: "Plataforma global de vendas, desenvolvida durante alocação simultânea com a HDI Seguros.",
      },
      period: "Mar 2020 — Jul 2020",
      team: {
        en: "Global platform product team.",
        pt: "Time de produto da plataforma global.",
      },
    },
    image: "/images/works/natura.jpg",
    case: {
      challenge: {
        en: "Build front-end for a global platform while allocated to a second client at the same time — which made disciplined architecture the only way to keep both deliveries honest.",
        pt: "Construir front-end de uma plataforma global enquanto alocado em um segundo cliente ao mesmo tempo — o que fez da arquitetura disciplinada a única forma de manter as duas entregas honestas.",
      },
      strategy: {
        en: [
          "GraphQL through a BFF so each screen asked for exactly the data it rendered.",
          "React component composition kept small and predictable, to stay reviewable by others.",
          "Clear contracts over clever abstractions — the cheapest thing to hand over.",
        ],
        pt: [
          "GraphQL através de um BFF para que cada tela pedisse exatamente o dado que renderizava.",
          "Composição de componentes React mantida pequena e previsível, para permanecer revisável por outros.",
          "Contratos claros em vez de abstrações espertas — o mais barato de passar adiante.",
        ],
      },
      solution: {
        en: [
          "React front-end for the global sales platform.",
          "Node.js BFF with GraphQL consolidating back-end services for the interface.",
          "Components structured for handover between people and markets.",
        ],
        pt: [
          "Front-end React para a plataforma global de vendas.",
          "BFF em Node.js com GraphQL consolidando serviços de back-end para a interface.",
          "Componentes estruturados para transferência entre pessoas e mercados.",
        ],
      },
      impact: {
        en: [
          "Front-end delivered for a platform operating across international markets.",
          "A single GraphQL contract replacing direct coupling to multiple services.",
        ],
        pt: [
          "Front-end entregue para uma plataforma que opera em mercados internacionais.",
          "Um único contrato GraphQL substituindo o acoplamento direto a múltiplos serviços.",
        ],
      },
      learnings: {
        en: "Two clients at once teaches you fast which of your habits actually scale. Explicit contracts survived the context switching; cleverness did not.",
        pt: "Dois clientes ao mesmo tempo ensinam rápido quais dos seus hábitos realmente escalam. Contratos explícitos sobreviveram à troca de contexto; esperteza não.",
      },
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}

import type { Experience } from "./types";

/** Real trajectory from Felipe's CV (Jun 2010 → present). */
export const EXPERIENCE: Experience[] = [
  {
    company: "WeLav & Emidê — Own Digital Products",
    role: {
      en: "Consultant & Full Stack Developer",
      pt: "Consultor & Desenvolvedor Full Stack",
    },
    period: "Oct 2025 — Present",
    present: true,
    context: {
      en: "I build and operate the digital platforms of two businesses of my own, from front-end to production.",
      pt: "Construo e opero as plataformas digitais de dois negócios próprios, do front-end à publicação.",
    },
    highlights: {
      en: [
        "Own the full product cycle: front-end architecture, API integration, deploy and metric-driven evolution.",
        "Designed and shipped support, SDR and sales automations with n8n wired to LLMs, cutting hours of manual work every week.",
        "Standardised the commercial process around automation instead of headcount.",
      ],
      pt: [
        "Responsável pelo ciclo completo do produto: arquitetura front-end, integração de APIs, deploy e evolução orientada a métrica de negócio.",
        "Projetei e implementei automações de atendimento, SDR e vendas com n8n integrado a LLMs, eliminando horas semanais de trabalho manual.",
        "Padronizei o processo comercial com automação, não com headcount.",
      ],
    },
    stack: ["Vue.js", "Nuxt.js", "Node.js", "TypeScript", "n8n", "LLMs"],
  },
  {
    company: "OdontoPrev (via Sis-it)",
    role: {
      en: "Full Stack Developer",
      pt: "Desenvolvedor Full Stack",
    },
    period: "Aug 2024 — Oct 2025",
    context: {
      en: "Squad of up to 8 people building the digital platforms of OdontoPrev, serving tens of thousands of members.",
      pt: "Squad de até 8 pessoas no desenvolvimento das plataformas digitais da OdontoPrev, que atende dezenas de milhares de beneficiários.",
    },
    highlights: {
      en: [
        "Led the maintenance and refactor of the Dentist Portal, modernising the codebase and cutting maintenance rework.",
        "Built and evolved interfaces for corporate digital products.",
      ],
      pt: [
        "Conduzi a sustentação e a refatoração do Portal do Dentista, modernizando a base de código e reduzindo o retrabalho de manutenção.",
        "Construí e evoluí interfaces de produtos digitais corporativos.",
      ],
    },
    stack: ["Vue.js", "Nuxt.js", "Node.js", "TypeScript", "SCSS", "Tailwind"],
  },
  {
    company: "Epoc Tech",
    role: {
      en: "Lead Developer",
      pt: "Desenvolvedor Líder",
    },
    period: "Nov 2022 — Mar 2024",
    context: {
      en: "Technical lead of a 3-developer team, owning architecture, standards and delivery.",
      pt: "Liderança técnica de equipe de 3 desenvolvedores, responsável por arquitetura, padrões e entrega.",
    },
    highlights: {
      en: [
        "Designed and delivered the ERP's Scheduling & Reservations module from scratch, used by roughly 15 client companies.",
        "Owned code review, architecture decisions, coding standards, sprint planning and technical interviews.",
        "Acted as the direct technical counterpart to stakeholders and clients on scope and prioritisation.",
      ],
      pt: [
        "Desenhei e entreguei do zero o módulo de Agendamentos e Reservas do ERP, utilizado por aproximadamente 15 empresas clientes.",
        "Responsável por code review, definição de arquitetura, padrões de código, planejamento de sprint e entrevistas técnicas.",
        "Atuei como interlocutor técnico direto com stakeholders e clientes na definição de escopo e priorização.",
      ],
    },
    stack: ["PHP", "Vue.js", "TypeScript", "JavaScript", "Bootstrap"],
  },
  {
    company: "DOMVS IT",
    role: {
      en: "Full Stack Developer",
      pt: "Desenvolvedor Full Stack",
    },
    period: "Jul 2021 — Nov 2022",
    context: {
      en: "Corporate applications across two parallel product fronts.",
      pt: "Aplicações corporativas em duas frentes de produto paralelas.",
    },
    highlights: {
      en: [
        "Built corporate applications on two parallel fronts — one in Angular 10+, one in Vue.js.",
        "Integrated front-end interfaces with services and APIs through Node.js and GraphQL.",
      ],
      pt: [
        "Desenvolvi aplicações corporativas em duas frentes paralelas — uma em Angular 10+, outra em Vue.js.",
        "Integrei interfaces front-end a serviços e APIs através de Node.js e GraphQL.",
      ],
    },
    stack: ["Angular 10+", "Vue.js", "Node.js", "GraphQL", "TypeScript"],
  },
  {
    company: "Sysmap Solutions",
    role: {
      en: "Full Stack / Front-end Developer — consultant at four corporate clients",
      pt: "Desenvolvedor Full Stack / Front-end — consultor em quatro clientes corporativos",
    },
    period: "Aug 2018 — Jul 2021",
    context: {
      en: "Allocated as a consultant at HDI Seguros, Natura, Sompo Seguros and Banco Safra — insurance, global retail and banking.",
      pt: "Alocado como consultor na HDI Seguros, Natura, Sompo Seguros e Banco Safra — seguros, varejo global e bancário.",
    },
    highlights: {
      en: [
        "HDI Seguros (Apr 2020 – Jul 2021): part of the core team that defined the insurance platform's Design System, shipping 15+ components documented in Storybook. Angular 12, BFF, Node.js, Jenkins.",
        "Natura (Mar – Jul 2020, simultaneous allocation): front-end of the global sales platform with React, Node.js, BFF and GraphQL.",
        "Sompo Seguros (Nov 2019 – Mar 2020): delivered the Transport Claims system with Angular 8/10 and a Jenkins pipeline.",
        "Banco Safra (Aug 2018 – Nov 2019): web and mobile products for SafraPay and Internet Banking, 1M+ users. Migrated modules from AngularJS to Angular 6/7/8 and reduced load time and bundle size.",
      ],
      pt: [
        "HDI Seguros (Abr/2020 – Jul/2021): integrei o núcleo que definiu o Design System da plataforma de seguros, entregando mais de 15 componentes documentados em Storybook. Angular 12, BFF, Node.js, Jenkins.",
        "Natura (Mar – Jul/2020, alocação simultânea): front-end da plataforma global de vendas com React, Node.js, BFF e GraphQL.",
        "Sompo Seguros (Nov/2019 – Mar/2020): entreguei o sistema de Sinistro Transporte com Angular 8/10 e pipeline Jenkins.",
        "Banco Safra (Ago/2018 – Nov/2019): produtos web e mobile do SafraPay e do Internet Banking, com mais de 1 milhão de usuários. Conduzi a migração de módulos de AngularJS para Angular 6/7/8 e reduzi o tempo de carregamento e o tamanho do bundle.",
      ],
    },
    stack: ["Angular", "React", "Node.js", "BFF", "GraphQL", "TypeScript", "Jenkins", "Storybook"],
  },
  {
    company: "123 Carros",
    role: {
      en: "Front-end Developer",
      pt: "Desenvolvedor Front-end",
    },
    period: "Apr 2018 — Aug 2018",
    context: {
      en: "Platform and product dashboard for an automotive marketplace.",
      pt: "Plataforma e dashboard do produto para um marketplace automotivo.",
    },
    highlights: {
      en: ["Built the customer platform and the product dashboard on a shared component model."],
      pt: ["Desenvolvi a plataforma e o dashboard do produto sobre um modelo de componentes compartilhado."],
    },
    stack: ["Vue.js", "JavaScript ES6", "Bootstrap", "Materialize"],
  },
  {
    company: "Agência Questa Comunicação",
    role: {
      en: "Full Stack Developer",
      pt: "Desenvolvedor Full Stack",
    },
    period: "Nov 2012 — Apr 2018",
    context: {
      en: "Five and a half years delivering systems, sites and apps for a diverse client portfolio.",
      pt: "Cinco anos e meio entregando sistemas, sites e aplicativos para uma carteira diversa de clientes.",
    },
    highlights: {
      en: [
        "Shipped systems, sites and apps across many client contexts, adapting to different scopes and deadlines.",
        "Rode the front-end transition first-hand, from AngularJS to Angular 2 and Vue.js.",
      ],
      pt: [
        "Entreguei sistemas, sites e aplicativos em múltiplos contextos de cliente, adaptando-me a escopos e prazos diferentes.",
        "Acompanhei de perto a transição do front-end, do AngularJS para Angular 2 e Vue.js.",
      ],
    },
    stack: ["AngularJS", "Angular 2", "Vue.js", "Node.js", "Ionic", "PHP", "WordPress"],
  },
  {
    company: "Jurujuba Publicidade",
    role: {
      en: "Full Stack Developer",
      pt: "Desenvolvedor Full Stack",
    },
    period: "Jun 2010 — Nov 2012",
    context: {
      en: "Where it started: institutional sites, blogs and portals.",
      pt: "Onde tudo começou: sites institucionais, blogs e portais.",
    },
    highlights: {
      en: ["Built sites, blogs and institutional portals from the ground up.", "Foundations in semantic HTML, CSS and JavaScript."],
      pt: ["Desenvolvi sites, blogs e portais institucionais do zero.", "Fundamentos em HTML semântico, CSS e JavaScript."],
    },
    stack: ["HTML", "CSS", "JavaScript", "jQuery", "PHP", "WordPress"],
  },
];

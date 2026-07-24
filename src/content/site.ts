export const SITE = {
  name: "Felipe Romero",
  url: "https://feliperom.github.io",
  email: "feliperom87@gmail.com",
  whatsapp: "+55 13 99144-6371",
  whatsappHref: "https://wa.me/5513991446371",
  location: {
    city: "Santos",
    state: "SP",
    country: "Brazil",
    // Remote-first; Santos/SP is the home base.
    remote: true,
    lat: "-23.9608",
    lng: "-46.3336",
    timezone: "America/Sao_Paulo",
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/felipe-romero",
    github: "https://github.com/feliperom",
  },
  resumePath: "/felipe-romero-resume.pdf",
  /** Career start — drives the "years building for the web" figure. */
  careerStartYear: 2010,
} as const;

export const YEARS_OF_EXPERIENCE = new Date().getFullYear() - SITE.careerStartYear;

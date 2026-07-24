import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#070809",
        graphite: "#111315",
        offwhite: "#F1EFE8",
        gray: "#8B8F97",
        lime: "#B6FF4A",
        electric: "#397CFF",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      fontSize: {
        // Fluid display scale — words occupy large parts of the viewport.
        mega: ["clamp(2.6rem, 12vw, 15rem)", { lineHeight: "0.88", letterSpacing: "-0.03em" }],
        giant: ["clamp(2.75rem, 9vw, 8rem)", { lineHeight: "0.9", letterSpacing: "-0.025em" }],
        huge: ["clamp(2rem, 6vw, 5rem)", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
      },
      maxWidth: {
        grid: "1600px",
      },
      transitionTimingFunction: {
        power3: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;

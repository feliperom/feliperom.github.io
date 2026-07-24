import { Space_Grotesk, Inter, Instrument_Serif } from "next/font/google";

// Self-hosted at build time by next/font — no runtime request to Google.
export const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-display",
  display: "swap",
});

export const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

import type { Metadata } from "next";
import { body, display, serif } from "./fonts";
import { SITE } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Felipe Romero — Engineering Digital Experiences",
    template: "%s — Felipe Romero",
  },
  description:
    "Senior Full Stack Developer building scalable products, interactive interfaces and AI-powered solutions.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${serif.variable}`}>
      <body className="min-h-screen bg-obsidian text-offwhite antialiased">{children}</body>
    </html>
  );
}

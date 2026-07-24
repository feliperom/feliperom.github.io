import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registered once on the client; safe to import from any client module.
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const EASE = "power3.out";

export { gsap, ScrollTrigger };

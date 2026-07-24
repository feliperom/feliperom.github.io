import { Hero } from "@/components/sections/Hero";
import { Statement } from "@/components/sections/Statement";
import { Work } from "@/components/sections/Work";
import { Capabilities } from "@/components/sections/Capabilities";
import { AiFlow } from "@/components/sections/AiFlow";
import { Experience } from "@/components/sections/Experience";
import { LabTeaser } from "@/components/sections/LabTeaser";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Statement />
      <Work />
      <Capabilities />
      <AiFlow />
      <Experience />
      <LabTeaser />
      <Contact />
    </>
  );
}

import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Faq from "@/components/Faq";
import { FigmaCursor } from "@/components/FigmaCursor";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream font-sans text-ink antialiased">
      <Hero />
      <Projects />
      <Faq />
      <FigmaCursor name="Projects" />
    </main>
  );
}

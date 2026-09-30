import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream font-sans text-ink antialiased">
      <Hero />
      <Projects />
      <Faq />
    </main>
  );
}

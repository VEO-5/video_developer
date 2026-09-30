import { FaqList } from "@/components/FaqItem";
import { faqs } from "@/data/content";

export default function Faq() {
  return (
    <section id="faq" className="bg-cream text-ink">
      <div className="mx-auto w-full max-w-3xl scroll-mt-8 px-6 py-14 sm:py-16">
        <h2 className="text-[16px] font-normal text-muted">FAQs</h2>
        <FaqList faqs={faqs} />
      </div>
    </section>
  );
}

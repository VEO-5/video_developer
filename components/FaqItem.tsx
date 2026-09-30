"use client";

import { useState } from "react";
import type { Faq } from "@/data/content";

export default function FaqItem({
  faq,
  open,
  onToggle,
}: {
  faq: Faq;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 py-2 text-left text-[19px] font-medium leading-snug text-ink"
      >
        <span>{faq.question}</span>
        <span
          aria-hidden="true"
          className="shrink-0 text-[20px] font-light leading-none text-muted transition-transform duration-300"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl pb-2 pt-3 text-[16px] leading-[1.7] text-muted">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FaqList({ faqs }: { faqs: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mt-8 flex flex-col gap-9">
      {faqs.map((faq, i) => (
        <FaqItem
          key={faq.question}
          faq={faq}
          open={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
}

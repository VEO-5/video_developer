"use client";

import { ChromeButton } from "@/components/evil-buttons/chrome-button";

export default function BookCallButton({ href }: { href: string }) {
  return (
    <ChromeButton
      tone="auto"
      size="default"
      speed={2}
      interactive
      onClick={() => {
        window.location.assign(href);
      }}
    >
      Book a call
    </ChromeButton>
  );
}

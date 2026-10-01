"use client";

import { ChromeButton } from "@/components/evil-buttons/chrome-button";

export default function BookCallButton({ href }: { href: string }) {
  return (
    <ChromeButton
      tone="auto"
      size="default"
      speed={1.25}
      interactive
      onClick={() => {
        window.location.assign(href);
      }}
    >
      Book a call
    </ChromeButton>
  );
}

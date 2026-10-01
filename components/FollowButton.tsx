"use client";

import { ChromeButton } from "@/components/evil-buttons/chrome-button";

export default function FollowButton({ href }: { href: string }) {
  const isExternal = href.startsWith("http");

  return (
    <ChromeButton
      tone="light"
      size="default"
      speed={1.25}
      interactive
      onClick={() => {
        if (isExternal) {
          window.open(href, "_blank", "noopener,noreferrer");
        } else {
          window.location.assign(href);
        }
      }}
    >
      Follow me
    </ChromeButton>
  );
}

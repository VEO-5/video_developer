"use client";

import { useEffect, useRef } from "react";

export default function AutoplayVideo({
  src,
  title,
  speed = 1,
}: {
  src: string;
  title: string;
  speed?: number;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.playbackRate = speed;
    const tryPlay = () => {
      video.playbackRate = speed;
      video.play().catch(() => {
        /* autoplay blocked — stays on first frame until user interacts */
      });
    };
    if (video.readyState >= 2) {
      tryPlay();
    } else {
      video.addEventListener("canplay", tryPlay, { once: true });
      return () => video.removeEventListener("canplay", tryPlay);
    }
  }, [src, speed]);

  return (
    <video
      ref={ref}
      src={src}
      aria-label={title}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className="h-full w-full object-cover"
    />
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

interface FigmaCursorProps {
  name?: string;
  color?: string;
  size?: number;
  ease?: number;
  point?: { x: number; y: number };
}

export function FigmaCursor({
  name = "you",
  color = "#111110",
  size = 22,
  ease = 0.34,
  point,
}: FigmaCursorProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only on fine pointers (mouse/trackpad) — never on touch.
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const k = reduceMotion ? 1 : ease;

    let mx = point?.x ?? -100;
    let my = point?.y ?? -100;
    let x = mx;
    let y = my;
    let id = 0;

    const insideProjects = (cx: number, cy: number) => {
      const el = document.getElementById("projects");
      if (!el) return false;
      const r = el.getBoundingClientRect();
      return cx >= r.left && cx <= r.right && cy >= r.top && cy <= r.bottom;
    };

    const setActive = (on: boolean) => {
      setVisible((prev) => (prev === on ? prev : on));
      document.documentElement.classList.toggle(
        "projects-cursor-active",
        on,
      );
    };

    const move = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!point) setActive(insideProjects(mx, my));
    };

    const onScroll = () => {
      if (!point) setActive(insideProjects(mx, my));
    };

    const onLeave = () => setActive(false);

    if (!point) {
      window.addEventListener("pointermove", move, { passive: true });
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
      document.documentElement.addEventListener("pointerleave", onLeave);
    } else {
      setActive(true);
    }

    const loop = () => {
      if (point) {
        mx = point.x;
        my = point.y;
      }
      x += (mx - x) * k;
      y += (my - y) * k;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${x}px,${y}px,0)`;
      }
      id = requestAnimationFrame(loop);
    };
    id = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      document.documentElement.classList.remove("projects-cursor-active");
      cancelAnimationFrame(id);
    };
  }, [ease, point]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none fixed top-0 left-0 z-[100] transition-opacity duration-150 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.35))" }}
      >
        <path
          d="M5 2l14 7-6 1.7L11 18z"
          fill={color}
          stroke="#ffffff"
          strokeWidth={1.5}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
      <span
        className="ml-3 inline-block rounded-full px-2 py-0.5 text-[11px] font-medium text-white"
        style={{ background: color }}
      >
        {name}
      </span>
    </div>
  );
}

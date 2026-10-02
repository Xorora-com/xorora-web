"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const rafRef = useRef(0);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => setReduceMotion(media.matches);
    syncMotion();
    media.addEventListener("change", syncMotion);

    const update = () => {
      rafRef.current = 0;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const next = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
      setProgress(next);
    };

    const schedule = () => {
      if (rafRef.current) return;
      rafRef.current = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });

    return () => {
      media.removeEventListener("change", syncMotion);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 right-0 left-0 z-[110] h-[3px]"
      aria-hidden
    >
      <div
        className={cn(
          "h-full origin-left bg-tangerine-500",
          !reduceMotion && "transition-transform duration-75 ease-out",
        )}
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}

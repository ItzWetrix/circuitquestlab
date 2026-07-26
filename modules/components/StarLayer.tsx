"use client";

import { useEffect, useRef } from "react";

export default function StarLayer() {
  const layerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;

    let rafId: number | null = null;

    const updatePosition = () => {
      const offset = window.scrollY * 0.08;
      layer.style.transform = `translate3d(0, ${-offset}px, 0)`;
      rafId = null;
    };

    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(updatePosition);
    };

    updatePosition();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <div
      ref={layerRef}
      className="fixed left-0 right-0 top-0 z-0 pointer-events-none bg-repeat"
      style={{
        backgroundImage: "url('/images/bg-stars.svg')",
        backgroundSize: "500px 500px",
        backgroundPosition: "center top",
        opacity: 0.15,
        willChange: "transform",
        transform: "translate3d(0, 0, 0)",
        height: "130vh",
      }}
    />
  );
}
import React, { useEffect, useMemo, useState } from "react";
import "./ScrollProgress.css";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop || 0;
      const max = Math.max(1, doc.scrollHeight - doc.clientHeight);
      const p = Math.min(100, Math.max(0, (scrollTop / max) * 100));
      setProgress(p);
      setShowTop(scrollTop > 500);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <>
      <div className="sc-progress" aria-hidden="true">
        <div className="sc-progress__bar" style={{ width: `${progress}%` }} />
      </div>

      <button
        type="button"
        className={`sc-to-top ${showTop ? "is-visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <span className="sc-to-top__icon" aria-hidden="true">↑</span>
      </button>
    </>
  );
}


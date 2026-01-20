import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./StickyTalkCTA.css";

export default function StickyTalkCTA() {
  const [hasSeenHero, setHasSeenHero] = useState(false);
  const [footerInView, setFooterInView] = useState(false);

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    const heroEl = document.querySelector(".hero-slider");
    const footerEl = document.querySelector(".footer");

    // Only show on pages that actually have hero + footer in DOM
    if (!heroEl || !footerEl) return;

    const heroObs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) setHasSeenHero(true);
      },
      { threshold: 0.25 }
    );

    const footerObs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setFooterInView(Boolean(entry?.isIntersecting));
      },
      { threshold: 0.05 }
    );

    heroObs.observe(heroEl);
    footerObs.observe(footerEl);

    return () => {
      heroObs.disconnect();
      footerObs.disconnect();
    };
  }, []);

  const visible = hasSeenHero && !footerInView;

  return (
    <Link
      to="/contact"
      className={`sticky-talk ${visible ? "is-visible" : ""}`}
      aria-label="Let's Talk Business"
      data-reduced-motion={prefersReducedMotion ? "true" : "false"}
    >
      <span className="sticky-talk__label">Let&apos;s Talk Business</span>
      <span className="sticky-talk__glow" aria-hidden="true" />
    </Link>
  );
}


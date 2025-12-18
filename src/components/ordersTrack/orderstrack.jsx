import { useEffect, useRef, useState } from "react";
import "./orderstrack.css";

// Custom hook for smooth counter animation
function useCountUp(target, active, duration = 3000) {
  const [value, setValue] = useState(0);
  const startTs = useRef(null);

  useEffect(() => {
    if (!active) return;
    setValue(0);
    startTs.current = null;

    const step = (ts) => {
      if (!startTs.current) startTs.current = ts;
      const elapsed = ts - startTs.current;
      const progress = Math.min(elapsed / duration, 1);

      // Slower easing (easeOutQuart)
      const eased = 1 - Math.pow(1 - progress, 4);

      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setValue(target);
    };

    const r = requestAnimationFrame(step);
    return () => cancelAnimationFrame(r);
  }, [active, target, duration]);

  return value;
}

export default function OrdersTrack() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(false);

  // Trigger counters when section enters viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(true);
            observer.disconnect(); // run once
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Metrics data
  const metrics = [
    { label: "Global clients served", target: 1000, suffix: "+", duration: 3500 },
    { label: "Reduction in cost", target: 65, suffix: "%", duration: 3000 },
    { label: "Consumers served globally", target: 300, suffix: "M+", duration: 4000 },
    { label: "Growth in customer retention", target: 40, suffix: "%", duration: 3000 },
  ];

  return (
    <section className="orders-track" ref={sectionRef} aria-labelledby="orders-track-title">
      <div className="ot-container">
        <div className="ot-header">
          <h2 id="orders-track-title" className="ot-title">Delivering Results that Matter</h2>
          <p className="ot-desc">
            Our solutions have transformed industries and driven measurable growth, establishing us amongst globally
            leading software development firms.
          </p>
          <div className="ot-actions">
            <a href="#contact" className="ot-cta">Contact Us</a>
          </div>
        </div>

        <div className="ot-grid">
          {metrics.map((m, idx) => {
            const value = useCountUp(m.target, active, m.duration);
            const display = `${value}${m.suffix || ""}`;
            return (
              <div className="ot-card" key={idx}>
                <div className="ot-number">{display}</div>
                <div className="ot-label">{m.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

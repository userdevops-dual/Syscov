// src/components/pages/UiUxDesign.jsx
import React from "react";
import "./Uiux.css";
import { FiPenTool, FiLayout, FiUsers, FiMonitor, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function UiUxDesign() {
  return (
    <div className="uiux-container">
      {/* Hero */}
      <header className="hero container-max" aria-labelledby="uiux-hero-title">
        <div className="hero-left">
          <h1 id="uiux-hero-title" className="hero-title">UX / UI Design</h1>
          <p className="hero-sub">
            Designing human-centered products that are beautiful, usable, and aligned to business goals.
          </p>

          <div className="hero-actions">
            <div className="action action-primary" data-variant="primary" onClick={() => console.log("Start a Design Project")}>
              <span className="action-icon"><FiPenTool /></span>
              <span className="action-label"><Link to="./Contact">Start a Design Project</Link></span>
            </div>

            
          </div>
        </div>

        <aside className="hero-right" aria-hidden="true">
          <div className="kpis">
            <div className="kpi">
              <div className="kpi-num">95%</div>
              <div className="kpi-label">User Satisfaction</div>
            </div>
            <div className="kpi">
              <div className="kpi-num">120+</div>
              <div className="kpi-label">Design Systems</div>
            </div>
            <div className="kpi">
              <div className="kpi-num">8 yrs</div>
              <div className="kpi-label">Avg Experience</div>
            </div>
          </div>
        </aside>
      </header>

      {/* Services / Capabilities */}
      <section className="services container-max" aria-labelledby="uiux-services">
        <h2 id="uiux-services" className="section-title">What We Offer</h2>

        <div className="services-grid">
          <article className="service card">
            <div className="service-icon"><FiLayout /></div>
            <h3>Product Design</h3>
            <p>Create intuitive flows, wireframes, and high-fidelity interfaces that convert.</p>
            <ul className="service-list">
              <li>User flows</li>
              <li>Wireframes</li>
              <li>High-fidelity UI</li>
            </ul>
          </article>

          <article className="service card">
            <div className="service-icon"><FiUsers /></div>
            <h3>User Research</h3>
            <p>Qualitative and quantitative research to validate assumptions and prioritize features.</p>
            <ul className="service-list">
              <li>Interviews</li>
              <li>Usability testing</li>
              <li>Surveys & analytics</li>
            </ul>
          </article>

          <article className="service card">
            <div className="service-icon"><FiMonitor /></div>
            <h3>Design Systems</h3>
            <p>Scalable component libraries, tokens, and documentation for consistent product experiences.</p>
            <ul className="service-list">
              <li>Tokens & themes</li>
              <li>Component library</li>
              <li>Documentation</li>
            </ul>
          </article>

          <article className="service card">
            <div className="service-icon"><FiPenTool /></div>
            <h3>Visual & Motion</h3>
            <p>Brand-led visuals and micro-interactions that delight and guide users.</p>
            <ul className="service-list">
              <li>Brand UI</li>
              <li>Micro-interactions</li>
              <li>Prototyping</li>
            </ul>
          </article>
        </div>
      </section>

      {/* Process */}
      <section className="process container-max" aria-labelledby="uiux-process">
        <h2 id="uiux-process" className="section-title">Our Design Process</h2>

        <div className="process-steps">
          <div className="step">
            <div className="step-num">1</div>
            <div className="step-body">
              <h4>Discover</h4>
              <p>Stakeholder workshops, user research, and problem framing.</p>
            </div>
          </div>

          <div className="step">
            <div className="step-num">2</div>
            <div className="step-body">
              <h4>Define</h4>
              <p>Personas, journeys, and prioritized feature sets.</p>
            </div>
          </div>

          <div className="step">
            <div className="step-num">3</div>
            <div className="step-body">
              <h4>Design</h4>
              <p>Wireframes, UI, and interactive prototypes for validation.</p>
            </div>
          </div>

          <div className="step">
            <div className="step-num">4</div>
            <div className="step-body">
              <h4>Deliver</h4>
              <p>Handoff, design system integration, and post-launch iteration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="portfolio container-max" aria-labelledby="uiux-portfolio">
        <h2 id="uiux-portfolio" className="section-title">Selected Work</h2>
        <div className="portfolio-grid">
          <div className="portfolio-card">FinTech Dashboard — UX overhaul</div>
          <div className="portfolio-card">Healthcare App — Accessibility-first UI</div>
          <div className="portfolio-card">Marketplace — Conversion-focused flows</div>
        </div>
      </section>

      {/* How we work */}
      <section className="how-we-work container-max" aria-labelledby="uiux-how">
        <h2 id="uiux-how" className="section-title">How We Work</h2>

        <div className="how-grid">
          <div className="how-card">
            <div className="how-step">Collaborate</div>
            <p>We embed with your team and share progress every sprint.</p>
          </div>

          <div className="how-card">
            <div className="how-step">Validate</div>
            <p>Rapid prototypes and testing reduce risk and speed decisions.</p>
          </div>

          <div className="how-card">
            <div className="how-step">Scale</div>
            <p>Design systems and documentation keep teams aligned as you grow.</p>
          </div>

          <div className="how-card">
            <div className="how-step">Measure</div>
            <p>We track UX metrics and iterate based on real user data.</p>
          </div>
        </div>

        <div className="how-cta">
          <div className="action action-primary" data-variant="primary" onClick={() => console.log("Talk to a Designer")}>
            <span><Link to="./Contact">Talk to a Designer</Link></span>
            <span className="action-icon"><FiArrowRight /></span>
          </div>
        </div>
      </section>
    </div>
  );
}

// src/components/pages/About.jsx
import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="about-page">
      {/* Hero */}
      <section className="about-hero container" aria-labelledby="about-title">
        <div className="about-hero-left">
          <h1 id="about-title" className="about-title">Syscov — Your Global Digital Partner</h1>
          <p className="about-lead">
            Syscov is a global software and web development company delivering enterprise-grade
            digital products. We work with clients across the USA and multiple countries worldwide,
            completing over 3,000 projects for startups, scaleups, and large enterprises.
          </p>

          <div className="about-cta">
            <a className="btn primary" href="/contact"><Link to="./Contact">Contact Us</Link></a>
          </div>
        </div>

        <aside className="about-hero-right" aria-hidden="true">
          <ul className="quick-stats" aria-label="Company statistics">
            <li>
              <div className="num">3k+</div>
              <div className="label">Projects Delivered</div>
            </li>
            <li>
              <div className="num">USA +</div>
              <div className="label">International Clients</div>
            </li>
            <li>
              <div className="num">24/7</div>
              <div className="label">Support & Monitoring</div>
            </li>
          </ul>
        </aside>
      </section>

      {/* Mission */}
      <section className="about-mission container" aria-labelledby="mission-title">
        <h2 id="mission-title">Our Mission</h2>
        <p>
          We empower organizations with secure, scalable, and maintainable digital products.
          By combining modern engineering practices, human-centered design, and data-driven decision
          making, we deliver measurable outcomes that move businesses forward.
        </p>
      </section>

      {/* How we work */}
      <section className="about-how container" aria-labelledby="how-title">
        <h2 id="how-title">How We Work</h2>

        <div className="how-grid" role="list">
          <article className="how-card" role="listitem">
            <div className="how-step-num">1</div>
            <div>
              <h3>Consult & Discover</h3>
              <p>Stakeholder workshops, user research, and technical assessment to define scope and success metrics.</p>
            </div>
          </article>

          <article className="how-card" role="listitem">
            <div className="how-step-num">2</div>
            <div>
              <h3>Design & Prototype</h3>
              <p>Rapid prototypes and usability testing to validate UX before engineering begins.</p>
            </div>
          </article>

          <article className="how-card" role="listitem">
            <div className="how-step-num">3</div>
            <div>
              <h3>Engineer & Deliver</h3>
              <p>Iterative sprints, automated testing, and CI/CD pipelines for predictable, high-quality delivery.</p>
            </div>
          </article>

          <article className="how-card" role="listitem">
            <div className="how-step-num">4</div>
            <div>
              <h3>Launch & Support</h3>
              <p>Staged rollouts, monitoring, and 24/7 support to keep systems healthy and performant.</p>
            </div>
          </article>
        </div>
      </section>

      {/* Global presence */}
      <section className="about-global container" aria-labelledby="global-title">
        <h2 id="global-title">Global Presence</h2>
        <p>
          Syscov maintains a strong presence in the USA and serves clients across Europe, Asia, and MENA.
          We work with organizations in finance, healthcare, e‑commerce, education, and more. Our teams
          coordinate across time zones, adhere to local compliance requirements, and provide secure,
          localized solutions.
        </p>

        <div className="offices" aria-hidden="true">
          <div className="office">
            <strong>USA</strong>
            <span>New York · San Francisco</span>
          </div>
          <div className="office">
            <strong>Europe</strong>
            <span>London · Berlin</span>
          </div>
          <div className="office">
            <strong>Asia</strong>
            <span>Karachi · Lahore · Islamabad</span>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-values container" aria-labelledby="values-title">
        <h2 id="values-title">Our Values</h2>
        <ul className="values-list">
          <li><strong>Transparency</strong> — Clear communication and real-time updates at every stage.</li>
          <li><strong>Quality</strong> — Rigorous engineering, security, and performance standards.</li>
          <li><strong>Customer-first</strong> — We prioritize user experience and business outcomes.</li>
          <li><strong>Continuous improvement</strong> — We iterate using data and feedback to deliver better results.</li>
        </ul>
      </section>

      {/* Contact CTA */}
      <section className="about-contact container" aria-labelledby="contact-title">
        <h2 id="contact-title">Next Steps</h2>
        <p>
          Ready to start your project or learn how we can help? Schedule a discovery call and we’ll
          prepare a tailored plan and timeline.
        </p>
        <div className="about-cta">
          <a className="btn primary" href="/contact">Schedule a Discovery Call</a>
          <a className="btn ghost" href="/services"><Link to="./Contact">Explore Our Services</Link></a>
        </div>
      </section>
    </main>
  );
}

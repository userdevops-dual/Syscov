// src/components/pages/Insights.jsx
import React from "react";
import { FiSearch, FiFilter, FiCalendar, FiDownload } from "react-icons/fi";
import "./Insight.css";
import { Link } from "react-router-dom";

export default function Insights() {
  const processSteps = [
    {
      id: 1,
      title: "Discovery",
      desc:
        "We run stakeholder workshops, product interviews, and user research to define goals, constraints, and success metrics.",
    },
    {
      id: 2,
      title: "Planning & Roadmap",
      desc:
        "We translate findings into a prioritized roadmap, milestones, and a delivery plan with clear acceptance criteria.",
    },
    {
      id: 3,
      title: "Design & Prototype",
      desc:
        "UX flows, wireframes, and interactive prototypes are validated with users before engineering begins.",
    },
    {
      id: 4,
      title: "Engineering & QA",
      desc:
        "Iterative sprints, automated tests, code reviews, and CI/CD pipelines ensure predictable, high-quality delivery.",
    },
    {
      id: 5,
      title: "Launch & Monitor",
      desc:
        "Staged rollouts, observability, and performance tuning with runbooks and rollback plans for safe releases.",
    },
    {
      id: 6,
      title: "Support & Iterate",
      desc:
        "Post-launch support, analytics-driven improvements, and a continuous roadmap for product growth.",
    },
  ];

  return (
    <main className="ins-root">
      {/* Hero */}
      <section className="ins-hero ins-container" aria-labelledby="ins-hero-title">
        <div className="ins-hero-left">
          <h1 id="ins-hero-title" className="ins-hero-title">How We Build Your Project</h1>
          <p className="ins-hero-sub">
            A clear, repeatable process that turns ideas into reliable, scalable products. Below is how Syscov
            approaches projects — from discovery to continuous improvement.
          </p>

          <div className="ins-hero-actions">
            <a className="ins-btn ins-primary" href="/contact"><Link to="./Contact">Start a Project</Link></a>
          </div>
        </div>

        <aside className="ins-hero-right" aria-hidden="true">
          <ul className="ins-quick-stats" aria-label="insights stats">
            <li>
              <div className="ins-num">3k+</div>
              <div className="ins-label">Projects Delivered</div>
            </li>
            <li>
              <div className="ins-num">Global</div>
              <div className="ins-label">USA & Multiple Countries</div>
            </li>
            <li>
              <div className="ins-num">24/7</div>
              <div className="ins-label">Support & Monitoring</div>
            </li>
          </ul>
        </aside>
      </section>

      {/* Process Overview */}
      <section className="ins-process ins-container" aria-labelledby="ins-process-title">
        <h2 id="ins-process-title" className="ins-section-title">Project Process — Step by Step</h2>

        <div className="ins-steps-grid" role="list">
          {processSteps.map((s) => (
            <article key={s.id} className="ins-step-card" role="listitem">
              <div className="ins-step-num">{s.id}</div>
              <div className="ins-step-body">
                <h3 className="ins-step-title">{s.title}</h3>
                <p className="ins-step-desc">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>


      </section>

      {/* Tools & Deliverables */}
      <section className="ins-tools ins-container" aria-labelledby="ins-tools-title">
        <h2 id="ins-tools-title" className="ins-section-title">Tools, Deliverables & What You Get</h2>

        <div className="ins-tools-grid">
          <div className="ins-tool-card">
            <h4 className="ins-tool-title">Deliverables</h4>
            <ul className="ins-list">
              <li>Research summary & personas</li>
              <li>Roadmap & sprint plan</li>
              <li>Interactive prototypes</li>
              <li>Test reports & deployment scripts</li>
            </ul>
          </div>

          <div className="ins-tool-card">
            <h4 className="ins-tool-title">Tech & Practices</h4>
            <ul className="ins-list">
              <li>Modern stacks (React, Node, etc.)</li>
              <li>CI/CD, automated testing</li>
              <li>Observability & monitoring</li>
              <li>Security & compliance checks</li>
            </ul>
          </div>

          <div className="ins-tool-card">
            <h4 className="ins-tool-title">Collaboration</h4>
            <ul className="ins-list">
              <li>Weekly demos & sprint reviews</li>
              <li>Shared backlog and roadmap</li>
              <li>Dedicated Slack / Teams channel</li>
              <li>Transparent reporting and KPIs</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Example timeline */}
      <section className="ins-timeline ins-container" aria-labelledby="ins-timeline-title">
        <h2 id="ins-timeline-title" className="ins-section-title">Typical Timeline</h2>
        <p className="ins-timeline-lead">
          Small projects: 4–8 weeks. Medium: 3–6 months. Large/enterprise: phased delivery across quarters.
        </p>

        <div className="ins-timeline-bar" aria-hidden="true">
          <div className="ins-timeline-item">Discovery · 1–2 weeks</div>
          <div className="ins-timeline-item">Design · 2–4 weeks</div>
          <div className="ins-timeline-item">Build · Iterative sprints</div>
          <div className="ins-timeline-item">Launch · Staged rollout</div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="ins-contact ins-container" aria-labelledby="ins-contact-title">
        <h2 id="ins-contact-title" className="ins-section-title">Ready to Start?</h2>
        <p className="ins-contact-lead">
          Tell us about your idea and we’ll prepare a tailored plan, timeline, and cost estimate.
        </p>
        <div className="ins-contact-cta">
          <a className="ins-btn ins-primary" href="/contact"><Link to="./Contact">Start your project</Link></a>
        </div>
      </section>
    </main>
  );
}

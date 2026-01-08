// src/components/pages/CustomSoftware.jsx
import React from "react";
import "./SDevelopment.css";
import { FiCode, FiDatabase, FiCloud, FiShield, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function CustomSoftware() {
  return (
    <div className="csd-container">
      {/* HERO */}
      <header className="csd-hero container-max" aria-labelledby="csd-hero-title">
        <div className="csd-hero-left">
          <h1 id="csd-hero-title" className="csd-hero-title">Custom Software Development</h1>
          <p className="csd-hero-sub">
            Tailored software solutions that solve real business problems — built for scale, security, and speed.
          </p>

          <div className="csd-hero-actions">
            <div
              className="action action-primary"
              data-variant="primary"
              onClick={() => console.log("Start a Custom Project clicked")}
            >
              <span className="action-icon"><FiCode /></span>
              <span className="action-label"><Link to="./Contact"> Start a Custom Project</Link></span>
            </div>

           
          </div>
        </div>

        <aside className="csd-hero-right" aria-hidden="true">
          <div className="csd-quick">
            <div className="quick-item">
              <div className="quick-num">10+</div>
              <div className="quick-label">Years Experience</div>
            </div>
            <div className="quick-item">
              <div className="quick-num">200+</div>
              <div className="quick-label">Projects Delivered</div>
            </div>
            <div className="quick-item">
              <div className="quick-num">99%</div>
              <div className="quick-label">Client Satisfaction</div>
            </div>
          </div>
        </aside>
      </header>

      {/* Capabilities */}
      <section className="csd-capabilities container-max" aria-labelledby="csd-capabilities-title">
        <h2 id="csd-capabilities-title" className="section-title">Core Capabilities</h2>

        <div className="cap-grid">
          <article className="cap card">
            <div className="cap-icon"><FiCode /></div>
            <h3>Custom Applications</h3>
            <p>Domain-specific apps with clean architecture and maintainable codebases.</p>
            <ul className="cap-list">
              <li>Microservices</li>
              <li>Modular Architecture</li>
              <li>Domain Driven Design</li>
            </ul>
          </article>

          <article className="cap card">
            <div className="cap-icon"><FiDatabase /></div>
            <h3>Data & Analytics</h3>
            <p>Data pipelines, ETL, analytics dashboards and ML-ready platforms.</p>
            <ul className="cap-list">
              <li>Data Warehousing</li>
              <li>Real-time Streams</li>
              <li>BI Dashboards</li>
            </ul>
          </article>

          <article className="cap card">
            <div className="cap-icon"><FiCloud /></div>
            <h3>Cloud & DevOps</h3>
            <p>Cloud-native deployments, infra as code, and resilient operations.</p>
            <ul className="cap-list">
              <li>Containerization</li>
              <li>CI / CD</li>
              <li>Autoscaling</li>
            </ul>
          </article>

          <article className="cap card">
            <div className="cap-icon"><FiShield /></div>
            <h3>Security & Compliance</h3>
            <p>Secure-by-design systems with compliance and audit readiness.</p>
            <ul className="cap-list">
              <li>Threat Modeling</li>
              <li>Pen Testing</li>
              <li>GDPR / ISO Support</li>
            </ul>
          </article>
        </div>
      </section>

      {/* Process */}
      <section className="csd-process container-max" aria-labelledby="csd-process-title">
        <h2 id="csd-process-title" className="section-title">How We Deliver</h2>

        <div className="process-steps">
          <div className="proc">
            <div className="proc-num">1</div>
            <div className="proc-body">
              <h4>Discovery & Strategy</h4>
              <p>Business goals, KPIs, and technical feasibility aligned up front.</p>
            </div>
          </div>

          <div className="proc">
            <div className="proc-num">2</div>
            <div className="proc-body">
              <h4>Architecture & Design</h4>
              <p>Scalable architecture, API contracts, and UX prototypes.</p>
            </div>
          </div>

          <div className="proc">
            <div className="proc-num">3</div>
            <div className="proc-body">
              <h4>Iterative Build</h4>
              <p>Sprints, automated tests, and continuous integration for steady progress.</p>
            </div>
          </div>

          <div className="proc">
            <div className="proc-num">4</div>
            <div className="proc-body">
              <h4>Operate & Improve</h4>
              <p>Monitoring, feedback loops, and ongoing product evolution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="csd-showcase container-max" aria-labelledby="csd-showcase-title">
        <h2 id="csd-showcase-title" className="section-title">Selected Case Studies</h2>
        <div className="show-grid">
          <div className="show-card">Supply Chain Optimization Platform</div>
          <div className="show-card">Custom CRM for Field Teams</div>
          <div className="show-card">Automated Billing Engine</div>
        </div>
      </section>

      {/* How we work (compact) */}
      <section className="csd-how container-max" aria-labelledby="csd-how-title">
        <h2 id="csd-how-title" className="section-title">Working With Us</h2>

        <div className="how-grid">
          <div className="how">
            <div className="how-step">Plan</div>
            <p>Clear milestones, transparent estimates, and shared roadmap.</p>
          </div>

          <div className="how">
            <div className="how-step">Build</div>
            <p>Cross-functional teams delivering tested increments every sprint.</p>
          </div>

          <div className="how">
            <div className="how-step">Secure</div>
            <p>Security reviews and compliance checks integrated into delivery.</p>
          </div>

          <div className="how">
            <div className="how-step">Scale</div>
            <p>Operational readiness, autoscaling, and cost optimization.</p>
          </div>
        </div>

        <div className="how-cta">
          <div
            className="action action-primary"
            data-variant="primary"
            onClick={() => console.log("Contact for Custom Software clicked")}
          >
            <span><Link to="./Contact">Contact Us</Link></span>
            <span className="action-icon"><FiArrowRight /></span>
          </div>
        </div>
      </section>
    </div>
  );
}

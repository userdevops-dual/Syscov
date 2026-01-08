// src/components/pages/AppDevelopment.jsx
import React from "react";
import "./AppDevelopment.css";
import { FiSmartphone, FiServer, FiLayers, FiZap, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function AppDevelopment() {
  return (
    <div className="appdev-container">
      {/* Hero */}
      <header className="hero container-max" aria-labelledby="app-hero-title">
        <div className="hero-left">
          <h1 id="app-hero-title" className="hero-title">App Development</h1>
          <p className="hero-sub">
            Crafting delightful mobile and cross-platform experiences with performance, polish, and scale.
          </p>

          <div className="hero-actions">
            <div
              className="action action-hero"
              data-variant="hero"
              onClick={() => console.log("Start a Mobile Project clicked")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); console.log("Start a Mobile Project clicked"); } }}
            >
              <span className="btn-icon"><FiSmartphone /></span>
              <span className="action-label"><Link to="./Contact">Start a Mobile Project</Link></span>
            </div>

            
          </div>
        </div>

        <div className="hero-right" aria-hidden="true">
          <div className="stats">
            <div className="stat">
              <div className="stat-num">4.9</div>
              <div className="stat-label">Avg Rating</div>
            </div>
            <div className="stat">
              <div className="stat-num">99.99%</div>
              <div className="stat-label">Uptime</div>
            </div>
            <div className="stat">
              <div className="stat-num">50+</div>
              <div className="stat-label">Apps Launched</div>
            </div>
          </div>
        </div>
      </header>

      {/* Categories */}
      <section className="categories container-max" aria-labelledby="app-categories">
        <h2 id="app-categories" className="section-title">What We Build</h2>

        <div className="category-grid">
          <article className="category card-glass">
            <div className="cat-icon"><FiLayers /></div>
            <h3>Native Mobile</h3>
            <p className="cat-desc">iOS and Android apps built with Swift, Kotlin and native SDKs for maximum polish.</p>
            <ul className="tech-list">
              <li>Swift</li>
              <li>Kotlin</li>
              <li>ARKit</li>
            </ul>
          </article>

          <article className="category card-glass">
            <div className="cat-icon"><FiSmartphone /></div>
            <h3>Cross Platform</h3>
            <p className="cat-desc">React Native and Flutter apps that feel native while sharing code across platforms.</p>
            <ul className="tech-list">
              <li>React Native</li>
              <li>Flutter</li>
              <li>Expo</li>
            </ul>
          </article>

          <article className="category card-glass">
            <div className="cat-icon"><FiServer /></div>
            <h3>Backend for Apps</h3>
            <p className="cat-desc">Realtime APIs, push infrastructure, and scalable backend services tailored for mobile.</p>
            <ul className="tech-list">
              <li>Node.js</li>
              <li>GraphQL</li>
              <li>Firebase</li>
            </ul>
          </article>

          <article className="category card-glass">
            <div className="cat-icon"><FiZap /></div>
            <h3>Performance & QA</h3>
            <p className="cat-desc">Profiling, automated testing, and performance tuning to keep apps fast and reliable.</p>
            <ul className="tech-list">
              <li>Detox</li>
              <li>Jest</li>
              <li>Crashlytics</li>
            </ul>
          </article>
        </div>
      </section>

      {/* Process visual */}
      <section className="process container-max" aria-labelledby="app-process">
        <h2 id="app-process" className="section-title">Our App Process</h2>

        <div className="process-timeline">
          <div className="step">
            <div className="step-dot">1</div>
            <div className="step-body">
              <h4>Product Discovery</h4>
              <p>Workshops, user research, and a clear roadmap with measurable milestones.</p>
            </div>
          </div>

          <div className="step">
            <div className="step-dot">2</div>
            <div className="step-body">
              <h4>Design & Prototype</h4>
              <p>Interactive prototypes and motion design to validate UX before building.</p>
            </div>
          </div>

          <div className="step">
            <div className="step-dot">3</div>
            <div className="step-body">
              <h4>Engineering Sprint</h4>
              <p>Iterative sprints, CI/CD, and automated tests for predictable delivery.</p>
            </div>
          </div>

          <div className="step">
            <div className="step-dot">4</div>
            <div className="step-body">
              <h4>Launch & Monitor</h4>
              <p>App store releases, monitoring, and rapid post-launch improvements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section className="showcase container-max" aria-labelledby="app-showcase">
        <h2 id="app-showcase" className="section-title">Selected Apps</h2>
        <div className="show-grid">
          <div className="show-card">On‑demand Delivery App</div>
          <div className="show-card">Telehealth Mobile Portal</div>
          <div className="show-card">Real‑time Collaboration Tool</div>
        </div>
      </section>

      {/* How we work */}
      <section className="how-we-work container-max" aria-labelledby="app-how">
        <h2 id="app-how" className="section-title">How We Work</h2>

        <div className="how-grid">
          <div className="how-card">
            <div className="how-num">1</div>
            <div>
              <h4>Kickoff</h4>
              <p>Align on goals, users, and success metrics.</p>
            </div>
          </div>

          <div className="how-card">
            <div className="how-num">2</div>
            <div>
              <h4>Prototype</h4>
              <p>Clickable prototypes for fast validation with users.</p>
            </div>
          </div>

          <div className="how-card">
            <div className="how-num">3</div>
            <div>
              <h4>Build</h4>
              <p>Ship features in short cycles with continuous QA.</p>
            </div>
          </div>

          <div className="how-card">
            <div className="how-num">4</div>
            <div>
              <h4>Operate</h4>
              <p>Monitoring, analytics, and ongoing improvements.</p>
            </div>
          </div>
        </div>

        <div className="how-cta">
          <div
            className="action action-hero"
            data-variant="hero"
            onClick={() => console.log("Talk to an App Expert clicked")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); console.log("Talk to an App Expert clicked"); } }}
          >
            <span><Link to="./Contact">Talk to an App Expert</Link></span>
            <span className="btn-icon"><FiArrowRight /></span>
          </div>
        </div>
      </section>
    </div>
  );
}

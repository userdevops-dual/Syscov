// src/components/pages/WebDevelopment.jsx
import React from "react";
import "./WebDevelopment.css";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";


export default function WebDevelopment() {
  return (
    <div className="webdev-container">
      {/* HERO */}
      <section className="hero container-max" aria-labelledby="hero-title">
        <div className="hero-left">
          <h1 id="hero-title" className="hero-title">Web Development</h1>
          <p className="hero-desc">
            Transforming ideas into scalable, responsive, and enterprise‑grade digital experiences.
          </p>
        </div>

        <aside className="hero-aside" aria-hidden="true">
          <strong>Trusted by teams</strong>
          <p style={{ margin: 0, color: "#556070" }}>
            Enterprise integrations, secure deployments, 24/7 support.
          </p>
          
        </aside> <div className="how-cta-2">
          <button className="cta-btn small" type="button"><Link to="./Contact">Schedule Call</Link></button>
        </div>
        
      </section>

      {/* How we work — concise overview */}
    

      {/* How we work — detailed breakdown (duplicated section) */}
      <section className="how-we-work-2 container-max" aria-labelledby="how2-title">
        <h2 id="how2-title" className="section-title">How We Work — Detailed</h2>

        <div className="how-intro-2">
          <p>
            A more detailed look at each phase, deliverables, and what to expect from our team during the engagement.
          </p>
        </div>

        <div className="how-grid-2">
          <article className="how-step-2">
            <div className="step-num-2">1</div>
            <div className="step-body-2">
              <h3>Discovery</h3>
              <p>
                Stakeholder interviews, user research, competitive analysis, and a prioritized product backlog.
                Deliverables: research summary, personas, success metrics, and project roadmap.
              </p>
            </div>
          </article>

          <article className="how-step-2">
            <div className="step-num-2">2</div>
            <div className="step-body-2">
              <h3>Design</h3>
              <p>
                Low‑fidelity flows, interactive prototypes, and visual design iterations validated with users.
                Deliverables: wireframes, clickable prototype, and UI spec.
              </p>
            </div>
          </article>

          <article className="how-step-2">
            <div className="step-num-2">3</div>
            <div className="step-body-2">
              <h3>Build</h3>
              <p>
                Iterative sprints, automated testing, code reviews, and CI/CD pipelines to ensure quality and predictability.
                Deliverables: working increments, test reports, and deployment scripts.
              </p>
            </div>
          </article>

          <article className="how-step-2">
            <div className="step-num-2">4</div>
            <div className="step-body-2">
              <h3>Launch</h3>
              <p>
                Staged rollouts, monitoring setup, performance tuning, and runbooks for incident response.
                Deliverables: release checklist, monitoring dashboards, and rollback plan.
              </p>
            </div>
          </article>

          <article className="how-step-2">
            <div className="step-num-2">5</div>
            <div className="step-body-2">
              <h3>Support & Iterate</h3>
              <p>
                Post‑launch support, analytics review, and a roadmap for continuous improvement based on real user data.
                Deliverables: support SLA, analytics summary, and prioritized backlog for next cycle.
              </p>
            </div>
          </article>
        </div>

       
      </section>

      {/* Core Categories */}
      <section className="categories container-max" aria-labelledby="categories-title">
        <h2 id="categories-title" className="section-title">Core Categories</h2>

        <div className="category-grid">
          <div className="category">
            <h3>Frontend</h3>
            <p className="cat-desc">Modern, accessible, and high-performance user interfaces.</p>
            <ul className="tech-list">
              <li className="tech">React</li>
              <li className="tech">Next.js</li>
              <li className="tech">TypeScript</li>
              <li className="tech">Tailwind CSS</li>
            </ul>
            <div className="cat-features">
              <span>SSR & SSG</span>
              <span>Component Libraries</span>
            </div>
          </div>

          <div className="category">
            <h3>Backend</h3>
            <p className="cat-desc">APIs, microservices, and scalable server architectures.</p>
            <ul className="tech-list">
              <li className="tech">Node.js (Express)</li>
              <li className="tech">Ruby on Rails</li>
              <li className="tech">Python (Django / FastAPI)</li>
              <li className="tech">GraphQL</li>
            </ul>
            <div className="cat-features">
              <span>REST & GraphQL</span>
              <span>Authentication</span>
            </div>
          </div>

          <div className="category">
            <h3>Mobile / Full‑Stack</h3>
            <p className="cat-desc">Cross‑platform apps and end‑to‑end solutions.</p>
            <ul className="tech-list">
              <li className="tech">React Native</li>
              <li className="tech">Expo</li>
              <li className="tech">Flutter</li>
              <li className="tech">Progressive Web Apps</li>
            </ul>
            <div className="cat-features">
              <span>Offline Support</span>
              <span>Push Notifications</span>
            </div>
          </div>

          <div className="category">
            <h3>Tools & Infra</h3>
            <p className="cat-desc">DevOps, databases, and cloud integrations.</p>
            <ul className="tech-list">
              <li className="tech">Postgres / MySQL</li>
              <li className="tech">MongoDB</li>
              <li className="tech">Docker / Kubernetes</li>
              <li className="tech">AWS / GCP / Azure</li>
            </ul>
            <div className="cat-features">
              <span>CI / CD</span>
              <span>Monitoring</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features, Showcase, CTA (unchanged) */}
      <section className="features container-max" aria-labelledby="features-title">
        <h2 id="features-title" className="section-title">What We Deliver</h2>
        <div className="features-grid">
          <div className="feature">
            <h4>Custom APIs</h4>
            <p>Secure, versioned APIs with clear contracts and documentation.</p>
          </div>
          <div className="feature">
            <h4>Scalable Architecture</h4>
            <p>Microservices, event-driven systems, and horizontal scaling patterns.</p>
          </div>
          <div className="feature">
            <h4>Performance & Security</h4>
            <p>Audits, caching strategies, and hardened deployments.</p>
          </div>
        </div>
      </section>

      <section className="showcase container-max" aria-labelledby="showcase-title">
        <h2 id="showcase-title" className="section-title">Recent Projects</h2>
        <div className="project-grid">
          <div className="project">E‑commerce Platform</div>
          <div className="project">Healthcare Portal</div>
          <div className="project">FinTech Dashboard</div>
          <div className="project">Educational LMS</div>
        </div>
      </section>

      <section className="cta container-max" aria-labelledby="cta-title">
        <h2 id="cta-title" className="section-title">Ready to Build your first project?</h2>
        <p>Tell us which category you want to explore — frontend, backend, mobile, or infra.</p>
     <Link to="./Contact">   <button className="cta-btn" type="button">
          Contact Us <FiArrowRight style={{ marginLeft: 8 }} />
        </button></Link>
      </section>
    </div>
  );
}

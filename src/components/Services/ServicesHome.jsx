import React, { useEffect } from 'react';
import './ServicesHome.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const services = [
  {
    id: 'data-analytics',
    title: 'Data & Analytics',
    text: `We enable enterprises to transform data into a business advantage by tapping into ML, advanced analytics, generative AI, and connected intelligence.`,
    href: '#learn-data'
  },
  {
    id: 'digital',
    title: 'Digital',
    text: `We offer insights-driven digital transformation, modernize key systems, and deliver a design-led, unified, personalized experience.`,
    href: '#learn-digital'
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    text: `Cloud architecture, CI/CD pipelines, and scalable infra to keep your product reliable and cost-efficient.`,
    href: '#learn-cloud'
  },
  {
    id: 'mobile',
    title: 'Mobile Engineering',
    text: `Native and cross-platform mobile apps with performance-first approach and strong QA coverage.`,
    href: '#learn-mobile'
  }
];

const ServicesHome = () => {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic' });
  }, []);

  return (
    <section className="services-home" aria-labelledby="services-heading">
      <div className="services-wrap">
        <div className="services-header" data-aos="fade-up">
          <h2 id="services-heading">
            <span>Our Services</span><br />
            <span className="gradient-text">Redefining</span>{' '}
            <span className="gradient-text">possibilities</span>{' '}
            <span className="gradient-text">across the globe</span>
          </h2>
          <a href="#contact" className="get-in-touch">GET IN TOUCH →</a>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <article
              key={s.id}
              className="service-card"
              data-aos="fade-up"
              data-aos-delay={100 + i * 80}
              aria-labelledby={`${s.id}-title`}
            >
              <div className="service-top">
                <h3 id={`${s.id}-title`}>{s.title}</h3>
                <p className="service-text">{s.text}</p>
              </div>

              <div className="service-bottom">
                <a className="service-link" href={s.href} aria-label={`Learn more about ${s.title}`}>
                  LEARN MORE <span className="arrow">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesHome;

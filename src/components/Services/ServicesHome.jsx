import React, { useEffect } from 'react';
import './ServicesHome.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const services = [
 { id: 'web-development', title: 'Web Development', text: 'Building responsive, performant, and SEO-friendly websites and web apps using React, Next.js, and modern frontend tooling.', href: '#learn-web' }, { id: 'app-development', title: 'App Development', text: 'Native and cross-platform mobile apps with React Native or Flutter, focused on performance, reliability, and great UX.', href: '#learn-app' }, { id: 'custom-software', title: 'Custom Software Development', text: 'End-to-end custom software: backend systems, integrations, APIs, and bespoke platforms tailored to your business needs.', href: '#learn-custom' }, { id: 'ux-ui-design', title: 'UX/UI Design', text: 'Design-led product experiences: user research, interaction design, and pixel-perfect interfaces that convert and delight users.', href: '#learn-ux' }
];

const ServicesHome = () => {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic' });
  }, []);

  return (
    <section className="services-home" aria-labelledby="services-heading">
      <div className="services-wrap">
        {/* Header */}
        <div className="services-header" data-aos="fade-up">
          <h2 id="services-heading">
            <span>Our Services</span><br />
            <span className="gradient-text">Redefining</span>{' '}
            <span className="gradient-text">possibilities</span>{' '}
            <span className="gradient-text">across the globe</span>
          </h2>
        </div>

        {/* Services Grid */}
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
                <a className="service-link" href={s.href} aria-label={`Learn more about ${s.title}`}><Link to="./insight">
                  LEARN MORE </Link><span className="arrow">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Get in Touch button moved here */}
        <div className="get-in-touch-wrap" data-aos="fade-up">
          <a href="#contact" className="get-in-touch"><Link to="./Contact">GET IN TOUCH →</Link></a>
        </div>
      </div>
    </section>
  );
};

export default ServicesHome;

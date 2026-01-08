import React from 'react';
import './Insights.css';

const insightsData = [
  {
    step: "Discovery & Planning",
    description: "We  deeply understand your business goals, challenges, and requirements. Our team collaborates with you to define clear objectives and a roadmap.",
    icon: "📊"
  },
  {
    step: "Team Division",
    description: "We assign specialized squads — frontend, backend, QA, and design — ensuring every aspect of your project is handled by experts.",
    icon: "👥"
  },
  {
    step: "Design & Prototyping",
    description: "Our UI/UX team crafts wireframes and prototypes, validating ideas before development begins. This saves time and ensures alignment.",
    icon: "🎨"
  },
  {
    step: "Development Sprint",
    description: "Agile sprints bring your product to life. We write clean, scalable code and keep you updated with weekly demos.",
    icon: "⚡"
  },
  {
    step: "Testing & QA",
    description: "Rigorous testing ensures stability, performance, and security. Bugs are fixed before launch to guarantee reliability.",
    icon: "🛡️"
  },
  {
    step: "Deployment & Support",
    description: "We launch your product smoothly and continue to provide support, monitoring, and improvements as your business grows.",
    icon: "🚀"
  }
];

const Insights = () => {
  return (
    <section className="insights-section">
      <h2 className="insights-heading">Our Project Insights</h2>
      <p className="insights-subtitle">
        Here’s how Syscov ensures your project is delivered with dedication, precision, and teamwork.
      </p>
      <div className="insights-grid">
        {insightsData.map((item, index) => (
          <div className="insight-card" key={index}>
            <div className="insight-icon">{item.icon}</div>
            <h3 className="insight-step">{item.step}</h3>
            <p className="insight-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Insights;

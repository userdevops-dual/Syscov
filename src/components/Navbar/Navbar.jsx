import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav className="nav-container">
      <div className="logo">Syscov</div>

      <ul className={`nav-links ${mobileOpen ? "active" : ""}`}>
        {/* OUR SERVICES */}
        <li className="nav-item dropdown" onClick={() => toggleDropdown("services")}>
          Our Services
          <div className={`dropdown-menu ${openDropdown === "services" ? "show" : ""}`}>
            <div className="column">
              <h4>Capabilities</h4>
              <ul>
                <li>Digital Transformation</li>
                <li>Web Development</li>
                <li>App Development</li>
                <li>Custom Software Development</li>
                <li>UX/UI Design</li>
                <li>Enterprise Solutions</li>
                <li>API Development</li>
              </ul>
            </div>
            <div className="column">
              <h4>Business Applications</h4>
              <ul>
                <li>Dynamics 365 ERP</li>
                <li>Dynamics 365 CRM</li>
                <li>Power Apps</li>
                <li>Salesforce</li>
                <li>Zoho Suite</li>
                <li>HubSpot CRM</li>
              </ul>
            </div>
            <div className="column">
              <h4>Emerging Technologies</h4>
              <ul>
                <li>Metaverse</li>
                <li>Augmented Reality</li>
                <li>Blockchain & Cryptography</li>
                <li>Gen AI</li>
                <li>Data Analytics</li>
                <li>Machine Learning</li>
                <li>IoT Solutions</li>
              </ul>
            </div>
            <div className="column">
              <h4>Staff Augmentation</h4>
              <ul>
                <li>Quality Assurance</li>
                <li>DevOps</li>
                <li>Cybersecurity</li>
                <li>SaaS</li>
                <li>E-commerce</li>
                <li>Design & Development</li>
                <li>Maintenance & Support</li>
                <li>Automation & Apps</li>
                <li>Gaming</li>
                <li>Art & Design</li>
                <li>Web3</li>
                <li>AR/VR/XR</li>
                <li>Dedicated Teams</li>
              </ul>
            </div>
            <div className="column">
              <h4>Cloud</h4>
              <ul>
                <li>Cloud Application</li>
                <li>Cloud Ops & Migration</li>
                <li>Cloud Maintenance & Integration</li>
                <li>Multi-Cloud Strategy</li>
                <li>Serverless Architecture</li>
              </ul>
            </div>
          </div>
        </li>

        {/* HOW WE ARE DIFFERENT */}
        <li className="nav-item dropdown" onClick={() => toggleDropdown("different")}>
          How We Are Different
          <div className={`dropdown-menu ${openDropdown === "different" ? "show" : ""}`}>
            <div className="column">
              <h4>Approach</h4>
              <ul>
                <li>Proven Delivery Framework</li>
                <li>Transparent Communication</li>
                <li>Customer-Centric Approach</li>
                <li>Agile Methodology</li>
              </ul>
            </div>
            <div className="column">
              <h4>Expertise</h4>
              <ul>
                <li>Dedicated Technical Experts</li>
                <li>Scalable & Future-Ready Solutions</li>
                <li>Strong Data Security Standards</li>
                <li>Industry Certifications</li>
              </ul>
            </div>
            <div className="column">
              <h4>Performance</h4>
              <ul>
                <li>Fast Turnaround Time</li>
                <li>High Quality Assurance</li>
                <li>Continuous Improvement</li>
              </ul>
            </div>
          </div>
        </li>

        {/* CONSULTANCY */}
        <li className="nav-item dropdown" onClick={() => toggleDropdown("consultancy")}>
          Consultancy
          <div className={`dropdown-menu ${openDropdown === "consultancy" ? "show" : ""}`}>
            <div className="column">
              <h4>Strategy</h4>
              <ul>
                <li>IT Strategy & Planning</li>
                <li>Technology Roadmapping</li>
                <li>Infrastructure Assessment</li>
                <li>Digital Advisory</li>
              </ul>
            </div>
            <div className="column">
              <h4>Cloud & Risk</h4>
              <ul>
                <li>Cloud Migration Guidance</li>
                <li>Cyber Risk Advisory</li>
                <li>Disaster Recovery Planning</li>
              </ul>
            </div>
            <div className="column">
              <h4>Business</h4>
              <ul>
                <li>Business Process Optimization</li>
                <li>Startup & Product Consultation</li>
                <li>Operational Efficiency</li>
              </ul>
            </div>
          </div>
        </li>

        {/* INSIGHT */}
        <li className="nav-item dropdown" onClick={() => toggleDropdown("insight")}>
          Insight
          <div className={`dropdown-menu ${openDropdown === "insight" ? "show" : ""}`}>
            <div className="column">
              <h4>Knowledge</h4>
              <ul>
                <li>Case Studies</li>
                <li>Industry Reports</li>
                <li>Tech Trends</li>
                <li>Market Analysis</li>
              </ul>
            </div>
            <div className="column">
              <h4>Resources</h4>
              <ul>
                <li>Whitepapers</li>
                <li>Research & Analysis</li>
                <li>Blogs & Articles</li>
                <li>Success Stories</li>
                <li>Thought Leadership</li>
              </ul>
            </div>
          </div>
        </li>

        {/* ABOUT */}
        <li className="nav-item dropdown" onClick={() => toggleDropdown("about")}>
          About
          <div className={`dropdown-menu ${openDropdown === "about" ? "show" : ""}`}>
            <div className="column">
              <h4>Company</h4>
              <ul>
                <li>Who We Are</li>
                <li>Our Mission & Vision</li>
                <li>Our Journey</li>
                <li>Corporate Responsibility</li>
              </ul>
            </div>
            <div className="column">
              <h4>Team</h4>
              <ul>
                <li>Leadership Team</li>
                <li>Careers</li>
                <li>Culture & Values</li>
              </ul>
            </div>
            <div className="column">
              <h4>Partners</h4>
              <ul>
                <li>Partners & Certifications</li>
                <li>Contact Information</li>
                <li>Global Offices</li>
              </ul>
            </div>
          </div>
        </li>

        {/* RESOURCES */}
        
      </ul>

      {/* RIGHT CONTROLS */}
      <div className="right-controls">
        <div className="nav-actions">
          <button className="search-btn">Search</button>
          <button className="talk-btn">
            Contact Us
            <span className="shine" />
          </button>
        </div>

        <button
          className={`hamburger ${mobileOpen ? "is-active" : ""}`}
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}

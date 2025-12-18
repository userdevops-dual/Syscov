import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Company */}
        <div className="footer-col">
          <h4 className="footer-title">Syscov</h4>
          <p className="footer-desc">
            Delivering next-gen IT solutions with innovation, scalability, and security at the core.
          </p>
          <div className="footer-social">
            <a href="#" aria-label="LinkedIn" className="social-link">🔗</a>
            <a href="#" aria-label="Twitter" className="social-link">🐦</a>
            <a href="#" aria-label="GitHub" className="social-link">💻</a>
          </div>
        </div>
        
        {/* Column 2: Services */}
        <div className="footer-col">
          <h5 className="footer-heading">Services</h5>
          <ul className="footer-links">
            <li><a href="#">Custom Software</a></li>
            <li><a href="#">Cloud & DevOps</a></li>
            <li><a href="#">Cybersecurity</a></li>
            <li><a href="#">AI & Automation</a></li>
          </ul>
        </div>

        {/* Column 3: Resources */}
        <div className="footer-col">
          <h5 className="footer-heading">Resources</h5>
          <ul className="footer-links">
            <li><a href="#">Documentation</a></li>
            <li><a href="#">API Reference</a></li>
            <li><a href="#">Community Forum</a></li>
            <li><a href="#">Support Center</a></li>
          </ul>
        </div>

        {/* Column 4: Legal */}
        <div className="footer-col">
          <h5 className="footer-heading">Legal</h5>
          <ul className="footer-links">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Cookie Policy</a></li>
            <li><a href="#">GDPR Compliance</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Syscov. All rights reserved.</p>
        <p className="footer-credit">Made with ❤️ by Syscov IT Solutions</p>
      </div>
    </footer>
  );
}

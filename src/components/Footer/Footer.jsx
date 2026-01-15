import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

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
            <a
              href="https://www.linkedin.com/company/syscov/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Services */}
        <div className="footer-col">
          <h5 className="footer-heading">Services</h5>
          <ul className="footer-links">
            <li><Link to="./WebDevelopment">Web Development</Link></li>
            <li><Link to="./AppDevelopment">App Development</Link></li>
            <li><Link to="./SDevelopment">Custom Software Development</Link></li>
            <li><Link to="./Uiux">UX/UI Design</Link></li>
          </ul>
        </div>

        {/* Column 3: Resources */}


        <div className="footer-col">
          <h5 className="footer-heading">Legal</h5>
          <ul className="footer-links">
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service">Terms of Service</Link></li>
            <li><Link to="/cookie-policy">Cookie Policy</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Syscov. All rights reserved.</p>
      </div>
    </footer>
  );
}

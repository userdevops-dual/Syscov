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
            <a href="#" aria-label="LinkedIn" className="social-link">🔗</a>
            <a href="#" aria-label="Twitter" className="social-link">🐦</a>
            <a href="#" aria-label="GitHub" className="social-link">💻</a>
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
      </div>
    </footer>
  );
}

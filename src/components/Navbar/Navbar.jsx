import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FiSearch, FiChevronDown } from "react-icons/fi"; // 👈 Slim search icon + chevron
import logoImg from "./syscov.jpg";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav className="nav-container">
      <div className="logo">
        <Link to="./#" className="logo-wrap">
          <img src={logoImg} alt="Syscov Logo" className="logo-img" />
          <span className="logo-text">Syscov</span>
        </Link>
      </div>


      <ul className={`nav-links ${mobileOpen ? "active" : ""}`}>
        {/* OUR SERVICES */}
        <li className="nav-item dropdown" onClick={() => toggleDropdown("services")}>
          Our Services
          <FiChevronDown className={`dropdown-arrow ${openDropdown === "services" ? "rotate" : ""}`} />
          <div className={`dropdown-menu ${openDropdown === "services" ? "show" : ""}`}>
            <ul>
              <li><Link to="./WebDevelopment">Web Development</Link></li>
              <li><Link to="./AppDevelopment">App Development</Link></li>
              <li><Link to="./SDevelopment">Custom Software Development</Link></li>
              <li><Link to="./uiux"> UX/UI Design</Link></li>
            </ul>
          </div>
        </li>

        {/* INSIGHT */}
        <li className="nav-item">
          <Link to="./Insight">Insight</Link>
        </li>

        {/* ABOUT */}
        <li className="nav-item">
          <Link to="./about">About</Link>
        </li>
      </ul>

      {/* RIGHT CONTROLS */}
      <div className="right-controls">
        <div className="nav-actions">
          {/* 👇 Search button replaced with icon */}


          <button className="talk-btn"><Link to="./Contact">
            Contact Us
          </Link> <span className="shine" />
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

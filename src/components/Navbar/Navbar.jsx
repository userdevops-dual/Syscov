import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FiSearch, FiChevronDown } from "react-icons/fi"; // 👈 Slim search icon + chevron
import logoImg from "./syscov.jpg";
import ThemeToggle from "../FutureUI/ThemeToggle";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setOpenDropdown(null);
  };

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (!mobileOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [mobileOpen]);

  return (
    <nav className="nav-container">
      {mobileOpen ? <div className="nav-overlay" onClick={closeMobileMenu} /> : null}
      <div className="logo">
        <Link to="./#" className="logo-wrap" onClick={closeMobileMenu}>
          <img src={logoImg} alt="Syscov Logo" className="logo-img" />
          <span className="logo-text">Syscov</span>
        </Link>
      </div>


      <ul className={`nav-links ${mobileOpen ? "active" : ""}`}>
        {/* OUR SERVICES */}
        <li className="nav-item dropdown" onClick={() => toggleDropdown("services")}>
          <div className="nav-item-row">
            <span>Our Services</span>
            <FiChevronDown className={`dropdown-arrow ${openDropdown === "services" ? "rotate" : ""}`} />
          </div>
          <div
            className={`dropdown-menu ${openDropdown === "services" ? "show" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <ul>
              <li><Link to="./WebDevelopment" onClick={closeMobileMenu}>Web Development</Link></li>
              <li><Link to="./AppDevelopment" onClick={closeMobileMenu}>App Development</Link></li>
              <li><Link to="./SDevelopment" onClick={closeMobileMenu}>Custom Software Development</Link></li>
              <li><Link to="./uiux" onClick={closeMobileMenu}> UX/UI Design</Link></li>
            </ul>
          </div>
        </li>

        {/* INSIGHT */}
        <li className="nav-item">
          <Link to="./Insight" onClick={closeMobileMenu}>Insight</Link>
        </li>

        {/* ABOUT */}
        <li className="nav-item">
          <Link to="./about" onClick={closeMobileMenu}>About</Link>
        </li>


      </ul>

      {/* RIGHT CONTROLS */}
      <div className="right-controls">
        <div className="nav-actions">
          {/* 👇 Search button replaced with icon */}


          <Link to="./Contact">   <button className="talk-btn">
            Contact Us
            <span className="shine" />
          </button></Link>
        </div>

        <ThemeToggle />

        <button
          className={`hamburger ${mobileOpen ? "is-active" : ""}`}
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
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

import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi"; // 👈 Slim search icon
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav className="nav-container">
      <div className="logo">
        <Link to="./#">Syscov</Link>
      </div>

      <ul className={`nav-links ${mobileOpen ? "active" : ""}`}>
        {/* OUR SERVICES */}
        <li className="nav-item dropdown" onClick={() => toggleDropdown("services")}>
          Our Services
          <div className={`dropdown-menu ${openDropdown === "services" ? "show" : ""}`}>
            <div className="column">
            
              <ul>
               
                <li><Link to="./WebDevelopment">Web Development</Link></li>
                <li><Link to="./AppDevelopment">App Development</Link></li>
                <li><Link to="./SDevelopment">Custom Software Development</Link></li>
                <li><Link to="./uiux"> UX/UI Design</Link></li>
              </ul>
            </div>
          
      
            
           
          </div>
        </li>

        {/* HOW WE ARE DIFFERENT */}
        

        {/* CONSULTANCY */}
        

        {/* INSIGHT */}
        <li className="nav-item dropdown"><Link to="./Insight">
          Insight
          
        </Link></li>

        {/* ABOUT */}
        <li  className="nav-item dropdown"><Link to="./about">
          About
         
       </Link> </li>
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

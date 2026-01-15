import React, { useState, useEffect } from "react";
import "./Preloader.css";
import logo from "../Navbar/syscov.jpg";

const Preloader = () => {
    const [statusIndex, setStatusIndex] = useState(0);
    const statuses = [
        "Initializing Systems",
        "Loading Core Modules",
        "Optimizing UX/UI Assets",
        "Connecting Secur-Link",
        "Ready to Innovate"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setStatusIndex((prev) => (prev + 1) % statuses.length);
        }, 600);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="preloader-container">
            {/* Ambient Background */}
            <div className="preloader-bg-grid"></div>
            <div className="preloader-ambient-glow"></div>

            <div className="preloader-content">
                <div className="preloader-visual">
                    <div className="logo-ring"></div>
                    <div className="logo-ring-outer"></div>
                    <div className="logo-wrapper">
                        <img src={logo} alt="Syscov Logo" className="preloader-logo" />
                    </div>
                </div>

                <div className="preloader-info">
                    <div className="brand-name">SYSCOV</div>
                    <div className="loader-track">
                        <div className="loader-progress"></div>
                    </div>
                    <div className="status-container">
                        <span className="status-text">{statuses[statusIndex]}</span>
                        <div className="status-dots">
                            <span></span><span></span><span></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="corner-decoration top-left"></div>
            <div className="corner-decoration top-right"></div>
            <div className="corner-decoration bottom-left"></div>
            <div className="corner-decoration bottom-right"></div>
        </div>
    );
};

export default Preloader;

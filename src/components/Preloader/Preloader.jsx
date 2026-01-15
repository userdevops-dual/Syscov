import React from "react";
import "./Preloader.css";
import logo from "../Navbar/syscov.jpg"; // Importing from Navbar folder

const Preloader = () => {
    return (
        <div className="preloader-container">
            <div className="preloader-content">
                <div className="logo-wrapper">
                    <img src={logo} alt="Syscov Logo" className="preloader-logo" />
                </div>
                <div className="loader-bar">
                    <div className="bar-fill"></div>
                </div>
                <div className="loading-text">INITIALIZING SYSTEMS...</div>
            </div>
        </div>
    );
};

export default Preloader;

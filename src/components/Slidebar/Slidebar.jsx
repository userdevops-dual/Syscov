import React from "react";
import "./Slidebar.css";


const logos = [
  {  src: "./logo/uniliver.png" },
  {  src: "/logo/microsoft.png" },
  {  src: "/logo/google.png" },
  {  src: "/logo/amazon.png" },
  {  src: "/logo/intel.png" },
  {  src: "/logo/cisco.png" },
  { src: "/logo/oracle.png" },
  { src: "/logo/dell.png" },
 
];

export default function Slidebar() {
  return (
    <section className="slidebar-section">
      {/* Tagline */}
      

      {/* Logo Slider */}
      <div className="slider">
        <div className="slider-track">
          {logos.concat(logos).map((logo, index) => (
            <div className="slide" key={index}>
              <img src={logo.src} alt={logo.name} />
              <p>{logo.name}</p> 
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

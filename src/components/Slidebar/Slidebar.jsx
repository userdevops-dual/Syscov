import React from "react";
import "./Slidebar.css";


const logos = [
  { name: "uniliver", src: "./logo/uniliver.png" },
  { name: "Nestlé", src: "/logo/nestle.png" },
  { name: "Microsoft", src: "/logo/microsoft.png" },
  { name: "Google", src: "/logo/google.png" },
  { name: "Amazon", src: "/logo/amazon.png" },
  { name: "Intel", src: "/logo/intel.png" },
  { name: "Cisco", src: "/logo/cisco.png" },
  { name: "Oracle", src: "/logo/oracle.png" },
  { name: "Samsung", src: "/logo/samsung.png" },
  { name: "Apple", src: "/logo/apple.png" },    
  { name: "Dell", src: "/logo/dell.png" },
 
];

export default function Slidebar() {
  return (
    <section className="slidebar-section">
      {/* Tagline */}
      <h2 className="slidebar-heading">
        Empowering growth through collective expertise and a trusted partner ecosystem
      </h2>

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

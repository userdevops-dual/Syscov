import React, { useEffect, useState } from "react";
import "./HeroSlider.css";
import r11 from "./r11.jpg"; // adjust path if image is elsewhere
import { Link } from "react-router-dom";

const slides = [
  {
    titlePrefix: "The code is",
    typingWords: [ "Developed...", "Tested...", "Deployed..."],
    description:
      "We are fast-growing global technology partner, delivering end-to-end software engineering solutions across industries and borders. From dynamic startups to enterprise leaders, we help our clients scale faster, smarter, and stronger with modern, secure, and user-centric digital products..",
    button: "Let's Talk Business",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // auto-advance (if multiple slides added later)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const words = slides[currentSlide].typingWords;
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // reset typing when slide changes
  useEffect(() => {
    setWordIndex(0);
    setDisplayText("");
    setIsDeleting(false);
  }, [currentSlide]);

  // typing effect
  useEffect(() => {
    const currentWord = words[wordIndex] || "";
    const typingSpeed = isDeleting ? 60 : 120;

    let timeoutId = null;

    const tick = () => {
      if (!isDeleting && displayText.length < currentWord.length) {
        setDisplayText(currentWord.slice(0, displayText.length + 1));
      } else if (isDeleting && displayText.length > 0) {
        setDisplayText(currentWord.slice(0, displayText.length - 1));
      } else if (!isDeleting && displayText.length === currentWord.length) {
        // pause then start deleting
        timeoutId = setTimeout(() => setIsDeleting(true), 700);
      } else if (isDeleting && displayText.length === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    timeoutId = setTimeout(tick, typingSpeed);
    return () => clearTimeout(timeoutId);
  }, [displayText, isDeleting, wordIndex, words]);

  // slow background video if any (optional)
  useEffect(() => {
    const video = document.querySelector(".hero-video");
    if (video) video.playbackRate = 0.9;
  }, []);

  const { titlePrefix, description, button } = slides[currentSlide];

  return (
    <section className="hero-slider" aria-label="Hero section">
      <div className="hero-bg-lines">
        <span></span><span></span><span></span><span></span><span></span>
        <span></span><span></span><span></span><span></span><span></span>
        <span></span><span></span><span></span><span></span><span></span>
        <span></span><span></span><span></span><span></span><span></span>
      </div>
      <div className="hero-inner">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-prefix">{titlePrefix}</span>
            <span className="title-dynamic">{displayText}</span>
          </h1>

          <p className="hero-desc">{description}</p>

          {/* Link used as button to avoid nested <a> or button default styles */}
          <Link to="/contact" className="hero-btn" aria-label="Contact us">
            {button}
            <span className="shine" />
          </Link>
        </div>

        <div className="hero-image" aria-hidden="true">
          <img src={r11} alt="Hero visual" />
        </div>
      </div>
    </section>
  );
}

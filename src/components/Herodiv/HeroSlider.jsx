import React, { useEffect, useState } from "react";
import "./HeroSlider.css";

const slides = [
  {
    titlePrefix: "The world is",
    typingWords: ["creating", "dying", "absorbing"],
    description:
      "We are a leading software development company engineering next-generation digital solutions, embedding AI and data-driven intelligence into workflows that fuel efficiency and unlock new growth opportunities.",
    button: "Let's Talk Business",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

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

  useEffect(() => {
    setWordIndex(0);
    setDisplayText("");
    setIsDeleting(false);
  }, [currentSlide]);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const typingSpeed = isDeleting ? 60 : 120;

    const tick = () => {
      if (!isDeleting && displayText.length < currentWord.length) {
        setDisplayText(currentWord.slice(0, displayText.length + 1));
      } else if (isDeleting && displayText.length > 0) {
        setDisplayText(currentWord.slice(0, displayText.length - 1));
      } else if (!isDeleting && displayText.length === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 700);
      } else if (isDeleting && displayText.length === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(tick, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex, words]);

  // Slow down video playback
  useEffect(() => {
    const video = document.querySelector(".hero-video");
    if (video) {
      video.playbackRate = 0.9; // 👈 slow motion effect
    }
  }, []);

  const { titlePrefix, description, button } = slides[currentSlide];

  return (
    <div className="hero-slider">
      {/* Background Video from public folder */}
      <video
        className="hero-video"
        src="/heroVideo.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="hero-inner">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-prefix">{titlePrefix}&nbsp;</span>
            <span className="title-dynamic">{displayText}</span>
            <span className="title-cursor">|</span>
          </h1>

          <p className="hero-desc">{description}</p>

          <button id="contact-btn" className="hero-btn">
            {button}
            <span className="shine"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

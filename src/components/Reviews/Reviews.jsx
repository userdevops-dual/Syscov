import React, { useState } from 'react';
import './Reviews.css';

// 👇 Import local images
import r1 from './r1.jpg';
import r2 from './r2.jpg';
import r3 from './r3.webp';

const reviewsData = [
  {
    logo: r1,
    company: 'Cavago',
    text: `Working with the Syscov company design team on the new Host App redesign for Cavago has been, and continues to be, a truly pleasurable experience...`,
    author: 'Sophie Clark',
    role: 'Head of Product at Cavago',
  },
  {
    logo: r2,
    company: 'Eileen',
    text: `The Syscov team has been reliable, responsive, and excellent to work with while developing our full stack MVP.`,
    author: 'Jordan Karcher',
    role: 'CEO, Eileen',
  },
  {
    logo: r3,
    company: 'Eileen',
    text: `Syscov has been a tremendous partner to us. They took complex ideas, plain English documentation, wireframed product specs, and built a fully functioning product...`,
    author: 'Michael Lorenzen',
    role: 'CEO, Lorenzen Tech',
  },
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviewsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
  };

  return (
    <section className="reviews-section">
      <h2 className="reviews-heading">What Our Clients Say About Us</h2>

      <div className="reviews-slider-wrapper">
        <button className="slider-nav prev" onClick={handlePrev} aria-label="Previous review">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>

        <div className="reviews-slider-container">
          {reviewsData.map((review, index) => (
            <div
              className={`review-card ${index === currentIndex ? 'active' : ''}`}
              key={index}
              style={{ display: index === currentIndex ? 'flex' : 'none' }}
            >
              <div className="review-header">
                <div className="review-logo-box">
                  <img src={review.logo} alt={`${review.company} logo`} className="review-logo" />
                </div>
                <div className="review-rating">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" width="20" height="20" fill="#ffb800">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                  ))}
                </div>
              </div>

              <p className="review-text">“{review.text}”</p>

              <div className="review-footer">
                <div className="author-info">
                  <p className="review-author">{review.author}</p>
                  {review.role && <p className="review-role">{review.role}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="slider-nav next" onClick={handleNext} aria-label="Next review">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
      </div>

      <div className="slider-dots">
        {reviewsData.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(idx)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Reviews;

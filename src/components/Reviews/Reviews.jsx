import React from 'react';
import './Reviews.css';

const reviewsData = [
  {
    logo: '/assets/cavago-logo.png',
    company: 'Cavago',
    text: `Working with the Arbisoft design team on the new Host App redesign for Cavago has been, and continues to be, a truly pleasurable experience...`,
    author: 'Sophie Clark',
    role: 'Head of Product at Cavago',
  },
  {
    logo: '/assets/eileen-logo.png',
    company: 'Eileen',
    text: `The Arbisoft team has been reliable, responsive, and excellent to work with while developing our full stack MVP.`,
    author: 'Jordan Karcher',
    role: 'CEO, Eileen',
  },
  {
    logo: '/assets/eileen-logo.png',
    company: 'Eileen',
    text: `Arbisoft has been a tremendous partner to us. They took complex ideas, plain English documentation, wireframed product specs, and built a fully functioning product...`,
    author: 'Michael Lorenzen',
    role: '',
  },
  
];

const Reviews = () => {
  return (
    <section className="reviews-section">
      <h2 className="reviews-heading">What Our Clients Say About Us</h2>
      <div className="reviews-grid">
        {reviewsData.map((review, index) => (
          <div className="review-card" key={index}>
            <img src={review.logo} alt={`${review.company} logo`} className="review-logo" />
            <p className="review-text">“{review.text}”</p>
            <p className="review-author">{review.author}</p>
            {review.role && <p className="review-role">{review.role}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;

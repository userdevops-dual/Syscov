import React from 'react';
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

import React from "react";
import "./ContactSection.css";

const ContactSection = () => {
  return (
    <section className="contact-section">
      {/* Left Video */}
      <div className="contact-video">
        <video
          src="/contact.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Right Form Card */}
      <div className="contact-card">
        <h2>Have Questions? Let's Talk.</h2>
        <p>We have got the answers to your questions.</p>

        <form className="form">
          <div className="form-group">
            <label>Your name *</label>
            <input type="text" placeholder="Enter your name" required />
          </div>

          <div className="form-group">
            <label>Your email *</label>
            <input type="email" placeholder="Enter your work email" required />
            <p className="hint">We recommend using your work email.</p>
          </div>

          <div className="form-group">
            <label>Select the service you need *</label>
            <select required>
              <option value="">Choose a service</option>
              <option value="web">Web Development</option>
              <option value="mobile">Mobile App Development</option>
              <option value="uiux">UI/UX Design</option>
              <option value="consulting">IT Consulting</option>
            </select>
          </div>

          <div className="form-group">
            <label>Phone Number *</label>
            <div className="phone-input">
              <span className="phone-prefix">🇵🇰 +92</span>
              <input type="tel" placeholder="(xxx) xxxxxxx" required />
            </div>
          </div>

          <div className="form-group">
            <label>Please describe your project *</label>
            <textarea
              rows="4"
              placeholder="Tell us about your project..."
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label>What is your budget? *</label>
            <input type="text" placeholder="Enter your budget" required />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;

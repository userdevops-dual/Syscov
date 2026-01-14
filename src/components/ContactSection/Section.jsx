import React, { useState } from "react";
import "./ContactSection.css";

const countries = [
  { name: "Pakistan", code: "+92" },
  { name: "United States", code: "+1" },
  { name: "United Kingdom", code: "+44" },
  { name: "Germany", code: "+49" },
  { name: "India", code: "+91" },
  { name: "Canada", code: "+1" },
  { name: "Australia", code: "+61" },
  // add more countries as needed
];

const ContactSection = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0].code);

  return (
    <section className="contact-section">
      {/* Left Video */}
      <div className="contact-video">
        <video src="/contact.mp4" autoPlay loop muted playsInline />
      </div>

      {/* Right Form Card */}
      <div className="contact-card">
        <h2>Have Questions? Let's Talk.</h2>
        <p>We have got the answers to your questions.</p>

        <form
          className="form"
          action="https://formsubmit.co/userme782.dev@gmail.com"
          method="POST"
        >
          {/* Hidden settings */}
          <input type="hidden" name="_subject" value="New Contact Form Submission" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <div className="form-group">
            <label>Your name *</label>
            <input type="text" name="name" placeholder="Enter your name" required />
          </div>

          <div className="form-group">
            <label>Your email *</label>
            <input type="email" name="email" placeholder="Enter your work email" required />
            <p className="hint">We recommend using your work email.</p>
          </div>

          <div className="form-group">
            <label>Select the service you need *</label>
            <select name="service" required>
              <option value="">Choose a service</option>
              <option value="Web Development">Web Development</option>
              <option value="Mobile App Development">Mobile App Development</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="IT Consulting">IT Consulting</option>
            </select>
          </div>

          <div className="form-group">
            <label>Country *</label>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              required
            >
              {countries.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.name} ({c.code})
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Phone Number *</label>
            <div className="phone-input">
              <span className="phone-prefix">{selectedCountry}</span>
              <input type="tel" name="phone" placeholder="Enter phone number" required />
            </div>
          </div>

          <div className="form-group">
            <label>Please describe your project *</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Tell us about your project..."
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label>What is your budget? *</label>
            <input type="text" name="budget" placeholder="Enter your budget" required />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;

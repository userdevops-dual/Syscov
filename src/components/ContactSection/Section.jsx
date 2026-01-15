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

          <div className="form-row">
            <div className="form-group">
              <label>Your name *</label>
              <input type="text" name="name" placeholder="Enter your name" required />
            </div>

            <div className="form-group">
              <label>Your email *</label>
              <input type="email" name="email" placeholder="Enter work email" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Select Service *</label>
              <select name="service" required>
                <option value="">Choose a service</option>
                <option value="Web Development">Web Development</option>
                <option value="Mobile App Development">Mobile App Development</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="IT Consulting">IT Consulting</option>
              </select>
            </div>

            <div className="form-group">
              <label>Budget *</label>
              <input type="text" name="budget" placeholder="Enter budget" required />
            </div>
          </div>

          <div className="form-row">
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
                <input type="tel" name="phone" placeholder="Phone number" required />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>Project Details *</label>
            <textarea
              name="message"
              rows="3"
              placeholder="Tell us about your project..."
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;

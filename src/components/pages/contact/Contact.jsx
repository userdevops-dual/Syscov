import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        country: 'Pakistan',
        company: '',
        service: '',
        message: ''
    });

    // Country to code mapping
    const countryCodeMap = {
        'United States': '+1',
        'Canada': '+1',
        'United Kingdom': '+44',
        'Australia': '+61',
        'India': '+91',
        'Pakistan': '+92',
        'UAE': '+971',
        'Saudi Arabia': '+966',
        'Germany': '+49',
        'France': '+33',
        'China': '+86'
    };
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://formsubmit.co/ajax/userme782.dev@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    ...formData,
                    _subject: "New Premium Contact Form Submission",
                    _template: "table"
                })
            });

            if (response.ok) {
                setSubmitted(true);
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    country: 'Pakistan',
                    company: '',
                    service: '',
                    message: ''
                });
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            alert("Error sending message. Please check your connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="sc-contact-wrap">
            <div className="sc-contact-card">
                <div className="sc-header">
                    <h2>Get in Touch</h2>
                    <p className="sc-sub">
                        Have a project in mind? Let's discuss how Syscov can help you scale and optimize your operations with premium tech solutions.
                    </p>
                </div>

                {submitted ? (
                    <div style={{ textAlign: 'center', padding: '2rem' }}>
                        <div className="success-icon" style={{ fontSize: '4rem', marginBottom: '1rem' }}>✅</div>
                        <h3 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '1rem', background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Success!</h3>
                        <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)' }}>Thank you for reaching out. Our team will get back to you shortly.</p>
                        <button
                            className="sc-btn primary"
                            style={{ marginTop: '2rem' }}
                            onClick={() => setSubmitted(false)}
                        >
                            Send Another Message
                        </button>
                    </div>
                ) : (
                    <form className="sc-form" onSubmit={handleSubmit}>
                        {/* Honeypot */}
                        <input type="text" name="_honey" style={{ display: 'none' }} />
                        {/* Disable Captcha */}
                        <input type="hidden" name="_captcha" value="false" />

                        <div className="sc-grid">
                            <div className="sc-field">
                                <label className="sc-label">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="e.g. John Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="sc-field">
                                <label className="sc-label">Work Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="john@company.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="sc-field">
                                <label className="sc-label">Country</label>
                                <select
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="United States">United States</option>
                                    <option value="Canada">Canada</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="Australia">Australia</option>
                                    <option value="India">India</option>
                                    <option value="Pakistan">Pakistan</option>
                                    <option value="UAE">UAE</option>
                                    <option value="Saudi Arabia">Saudi Arabia</option>
                                    <option value="Germany">Germany</option>
                                    <option value="France">France</option>
                                    <option value="China">China</option>
                                </select>
                            </div>
                            <div className="sc-field">
                                <label className="sc-label">Phone Number</label>
                                <div className="phone-input">
                                    <div className="phone-prefix">{countryCodeMap[formData.country]}</div>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="300 1234567"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="sc-field">
                                <label className="sc-label">Company Name</label>
                                <input
                                    type="text"
                                    name="company"
                                    placeholder="Syscov Tech"
                                    value={formData.company}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="sc-field sc-span-2">
                                <label className="sc-label">Interested Service</label>
                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" disabled>Select a service</option>
                                    <option value="web-dev">Web Development</option>
                                    <option value="cloud-infra">Cloud Infrastructure</option>
                                    <option value="ui-ux">UI/UX Design</option>
                                    <option value="devops">DevOps & Automation</option>
                                    <option value="consulting">Tech Consulting</option>
                                </select>
                            </div>
                            <div className="sc-field sc-span-2">
                                <label className="sc-label">Project Details</label>
                                <textarea
                                    name="message"
                                    rows="5"
                                    placeholder="Tell us about your project or requirements..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <div className="sc-field sc-span-2">
                                <label className="sc-label">Upload Brief (Optional)</label>
                                <div className="sc-dropzone">
                                    <input type="file" className="sc-file-input" id="file-upload" />
                                    <label htmlFor="file-upload" className="sc-drop-inner">
                                        <strong>Click to upload</strong> or drag and drop
                                        <div className="sc-muted">PDF, DOCX, or PNG (Max 10MB)</div>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="sc-actions">
                            <button className="sc-btn primary" type="submit" disabled={isSubmitting}>
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </div>

                        <div className="sc-footer">
                            <p className="sc-small">
                                By submitting this form, you agree to our <span style={{ color: '#6366f1', cursor: 'pointer' }}>Privacy Policy</span>.
                            </p>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Contact;

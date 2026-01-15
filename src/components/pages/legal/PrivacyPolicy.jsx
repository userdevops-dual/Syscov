// Privacy Policy Page
import React from 'react';
import './LegalPages.css';

export default function PrivacyPolicy() {
    return (
        <div className="legal-page-container">
            <div className="legal-content">
                <h1 className="legal-title">Privacy Policy</h1>
                <p className="legal-updated">Last Updated: January 15, 2026</p>

                <section className="legal-section">
                    <h2>1. Information We Collect</h2>
                    <p>
                        At Syscov, we collect information that you provide directly to us when you use our services,
                        including your name, email address, phone number, and any other information you choose to provide.
                    </p>
                    <p>
                        We also automatically collect certain information about your device when you use our website,
                        including IP address, browser type, operating system, and usage data.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>2. How We Use Your Information</h2>
                    <p>We use the information we collect to:</p>
                    <ul>
                        <li>Provide, maintain, and improve our services</li>
                        <li>Process and complete transactions</li>
                        <li>Send you technical notices and support messages</li>
                        <li>Respond to your comments and questions</li>
                        <li>Analyze usage patterns and trends</li>
                    </ul>
                </section>

                <section className="legal-section">
                    <h2>3. Information Sharing</h2>
                    <p>
                        We do not sell, trade, or rent your personal information to third parties. We may share your
                        information with trusted service providers who assist us in operating our website and conducting
                        our business, as long as they agree to keep this information confidential.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>4. Data Security</h2>
                    <p>
                        We implement appropriate technical and organizational measures to protect your personal information
                        against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
                        over the internet is 100% secure.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>5. Your Rights</h2>
                    <p>You have the right to:</p>
                    <ul>
                        <li>Access the personal information we hold about you</li>
                        <li>Request correction of inaccurate information</li>
                        <li>Request deletion of your personal information</li>
                        <li>Object to processing of your personal information</li>
                        <li>Request restriction of processing</li>
                    </ul>
                </section>

                <section className="legal-section">
                    <h2>6. Cookies</h2>
                    <p>
                        We use cookies and similar tracking technologies to track activity on our website and hold certain
                        information. You can instruct your browser to refuse all cookies or to indicate when a cookie is
                        being sent.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>7. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at:
                    </p>
                    <p className="contact-info">
                        Email: privacy@syscov.com<br />
                        Address: Syscov Technologies, Business District, City
                    </p>
                </section>
            </div>
        </div>
    );
}

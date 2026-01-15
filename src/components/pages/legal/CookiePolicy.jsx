// Cookie Policy Page
import React from 'react';
import './LegalPages.css';

export default function CookiePolicy() {
    return (
        <div className="legal-page-container">
            <div className="legal-content">
                <h1 className="legal-title">Cookie Policy</h1>
                <p className="legal-updated">Last Updated: January 15, 2026</p>

                <section className="legal-section">
                    <h2>1. What Are Cookies</h2>
                    <p>
                        Cookies are small text files that are placed on your device when you visit our website. They are
                        widely used to make websites work more efficiently and provide information to website owners.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>2. How We Use Cookies</h2>
                    <p>We use cookies to:</p>
                    <ul>
                        <li>Remember your preferences and settings</li>
                        <li>Understand how you use our website</li>
                        <li>Improve your user experience</li>
                        <li>Analyze website traffic and performance</li>
                        <li>Deliver personalized content</li>
                    </ul>
                </section>

                <section className="legal-section">
                    <h2>3. Types of Cookies We Use</h2>

                    <h3>Essential Cookies</h3>
                    <p>
                        These cookies are necessary for the website to function properly. They enable basic functions
                        like page navigation and access to secure areas.
                    </p>

                    <h3>Analytics Cookies</h3>
                    <p>
                        These cookies help us understand how visitors interact with our website by collecting and
                        reporting information anonymously.
                    </p>

                    <h3>Functionality Cookies</h3>
                    <p>
                        These cookies enable the website to provide enhanced functionality and personalization based
                        on your interactions.
                    </p>

                    <h3>Marketing Cookies</h3>
                    <p>
                        These cookies track your online activity to help advertisers deliver more relevant advertising
                        or to limit how many times you see an ad.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>4. Third-Party Cookies</h2>
                    <p>
                        We may use third-party services such as Google Analytics, which may set their own cookies.
                        These third parties have their own privacy policies and we have no control over their cookies.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>5. Managing Cookies</h2>
                    <p>
                        You can control and manage cookies in various ways. Please note that removing or blocking
                        cookies may impact your user experience and some features may no longer function properly.
                    </p>
                    <p>
                        Most browsers allow you to:
                    </p>
                    <ul>
                        <li>View what cookies are stored and delete them individually</li>
                        <li>Block third-party cookies</li>
                        <li>Block cookies from specific sites</li>
                        <li>Block all cookies</li>
                        <li>Delete all cookies when you close your browser</li>
                    </ul>
                </section>

                <section className="legal-section">
                    <h2>6. Updates to This Policy</h2>
                    <p>
                        We may update this Cookie Policy from time to time. We will notify you of any changes by
                        posting the new policy on this page with an updated "Last Updated" date.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>7. Contact Us</h2>
                    <p>
                        If you have questions about our use of cookies, please contact us at:
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

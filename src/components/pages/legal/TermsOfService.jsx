// Terms of Service Page
import React from 'react';
import './LegalPages.css';

export default function TermsOfService() {
    return (
        <div className="legal-page-container">
            <div className="legal-content">
                <h1 className="legal-title">Terms of Service</h1>
                <p className="legal-updated">Last Updated: January 15, 2026</p>

                <section className="legal-section">
                    <h2>1. Acceptance of Terms</h2>
                    <p>
                        By accessing and using Syscov's services, you accept and agree to be bound by the terms and
                        provisions of this agreement. If you do not agree to these terms, please do not use our services.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>2. Services Description</h2>
                    <p>
                        Syscov provides web development, mobile app development, UI/UX design, and related technology
                        consulting services. We reserve the right to modify, suspend, or discontinue any part of our
                        services at any time.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>3. User Responsibilities</h2>
                    <p>You agree to:</p>
                    <ul>
                        <li>Provide accurate and complete information</li>
                        <li>Maintain the security of your account credentials</li>
                        <li>Notify us immediately of any unauthorized use</li>
                        <li>Use our services in compliance with all applicable laws</li>
                        <li>Not engage in any activity that interferes with our services</li>
                    </ul>
                </section>

                <section className="legal-section">
                    <h2>4. Intellectual Property</h2>
                    <p>
                        All content, features, and functionality of our services are owned by Syscov and are protected
                        by international copyright, trademark, and other intellectual property laws. You may not reproduce,
                        distribute, or create derivative works without our express written permission.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>5. Payment Terms</h2>
                    <p>
                        Payment terms will be specified in individual project agreements. All fees are non-refundable
                        unless otherwise stated in writing. Late payments may result in suspension of services and
                        additional fees.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>6. Limitation of Liability</h2>
                    <p>
                        Syscov shall not be liable for any indirect, incidental, special, consequential, or punitive
                        damages resulting from your use or inability to use our services. Our total liability shall
                        not exceed the amount paid by you for the services.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>7. Termination</h2>
                    <p>
                        We reserve the right to terminate or suspend your access to our services immediately, without
                        prior notice, for any reason, including breach of these Terms of Service.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>8. Governing Law</h2>
                    <p>
                        These Terms shall be governed by and construed in accordance with the laws of the jurisdiction
                        in which Syscov operates, without regard to its conflict of law provisions.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>9. Contact Information</h2>
                    <p>
                        For questions about these Terms of Service, please contact us at:
                    </p>
                    <p className="contact-info">
                        Email: legal@syscov.com<br />
                        Address: Syscov Technologies, Business District, City
                    </p>
                </section>
            </div>
        </div>
    );
}

export default function Privacy() {
    return (
        <div className="bg-sand-light min-h-screen py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                    <h1 className="text-4xl font-bold text-slate-dark mb-8">Privacy Policy</h1>

                    <div className="prose prose-lg max-w-none text-slate-dark/80 space-y-6">
                        <p className="text-sm text-slate-dark/60 italic">Last updated: January 5, 2026</p>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-dark mt-8 mb-4">1. Introduction</h2>
                            <p>
                                Saudi Arabia VPN ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our VPN service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-dark mt-8 mb-4">2. Information We Collect</h2>
                            <p>We collect minimal information necessary to provide our service:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Account information (email address for premium users)</li>
                                <li>Device information (OS version, app version)</li>
                                <li>Connection logs (server selection, connection timestamps)</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-dark mt-8 mb-4">3. No-Logs Policy</h2>
                            <p>
                                We maintain a strict no-logs policy. We do not track, collect, or store:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Your browsing history</li>
                                <li>Traffic data</li>
                                <li>IP addresses</li>
                                <li>DNS queries</li>
                                <li>Connection timestamps beyond session duration</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-dark mt-8 mb-4">4. How We Use Your Information</h2>
                            <p>The limited information we collect is used to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Provide and maintain our VPN service</li>
                                <li>Improve user experience</li>
                                <li>Process payments for premium subscriptions</li>
                                <li>Provide customer support</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-dark mt-8 mb-4">5. Data Security</h2>
                            <p>
                                We use industry-standard encryption and security measures to protect your data. All VPN connections are encrypted using military-grade AES-256 encryption.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-dark mt-8 mb-4">6. Third-Party Services</h2>
                            <p>
                                Our free version may display advertisements from third-party providers. These providers may collect certain information according to their own privacy policies.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-dark mt-8 mb-4">7. Your Rights</h2>
                            <p>You have the right to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Access your personal information</li>
                                <li>Request deletion of your account and data</li>
                                <li>Opt-out of marketing communications</li>
                                <li>Request data portability</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-dark mt-8 mb-4">8. Changes to This Policy</h2>
                            <p>
                                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-dark mt-8 mb-4">9. Contact Us</h2>
                            <p>
                                If you have any questions about this Privacy Policy, please contact us at:
                                <br />
                                Email: <a href="mailto:privacy@saudiarabiavpn.com" className="text-saudi-green hover:underline">privacy@saudiarabiavpn.com</a>
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

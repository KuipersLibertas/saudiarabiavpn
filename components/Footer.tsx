import Link from 'next/link';
import { Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-app-green text-white pt-12 pb-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-1">
                        <span className="font-bold text-2xl tracking-tight mb-4 block">Saudi Arabia VPN</span>
                        <p className="text-white/80 text-sm mb-4">
                            Secure, fast, and private internet access for everyone. Unblock content and stay anonymous.
                        </p>
                        <a
                            href="https://www.facebook.com/profile.php?id=61568772671564"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                            aria-label="Follow us on Facebook"
                        >
                            <Facebook className="h-5 w-5" />
                        </a>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white uppercase tracking-wider mb-4">Product</h3>
                        <ul className="space-y-2">
                            <li><Link href="/#benefits" className="hover:text-white/80 transition-colors">Benefits</Link></li>
                            <li><Link href="/#pricing" className="hover:text-white/80 transition-colors">Pricing</Link></li>
                            <li><Link href="/#faq" className="hover:text-white/80 transition-colors">FAQ</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white uppercase tracking-wider mb-4">Support</h3>
                        <ul className="space-y-2">
                            <li><Link href="/contact" className="hover:text-white/80 transition-colors">Contact Us</Link></li>
                            <li><a href="mailto:info@kuiperslibertas.com?subject=Support%20request%20Saudi%20Arabia%20VPN" className="hover:text-white/80 transition-colors">Email Support</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white uppercase tracking-wider mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li><a href="https://kuiperslibertas.com/ksavpn/privacy.html" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors">Privacy Policy</a></li>
                            <li><a href="http://kuiperslibertas.com/ksavpn/toc.html" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors">Terms & Conditions</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/20 pt-8 mt-8 text-center text-sm text-white/70">
                    <p>&copy; {new Date().getFullYear()} Saudi Arabia VPN. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

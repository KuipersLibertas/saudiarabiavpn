'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const isHome = pathname === '/';

    const navLinks = [
        { name: 'Benefits', href: isHome ? '#benefits' : '/#benefits' },
        { name: 'Pricing', href: isHome ? '#pricing' : '/#pricing' },
        { name: 'FAQ', href: isHome ? '#faq' : '/#faq' },
        { name: 'Contact Us', href: '/contact' },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-sand-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <Link href="/" className="flex items-center gap-2">
                            <Image
                                src="/app_icon.jpg"
                                alt="Saudi Arabia VPN"
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                            <span className="font-bold text-xl tracking-tight text-app-green">Saudi Arabia VPN</span>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-slate-dark hover:text-app-green px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="https://play.google.com/store/apps/details?id=free.vpn.secure.turbo.proxy.hotspot.ksavpn&hl=en"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-app-green text-white hover:bg-app-teal px-4 py-2 rounded-full text-sm font-bold transition-colors shadow-md"
                            >
                                Get App
                            </a>
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="bg-sand-light inline-flex items-center justify-center p-2 rounded-md text-app-green hover:bg-sand-medium focus:outline-none"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white border-b border-sand-dark" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-slate-dark hover:text-app-green block px-3 py-2 rounded-md text-base font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="https://play.google.com/store/apps/details?id=free.vpn.secure.turbo.proxy.hotspot.ksavpn&hl=en"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-app-green text-white block text-center px-3 py-2 rounded-md text-base font-bold mt-4"
                        >
                            Get App
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

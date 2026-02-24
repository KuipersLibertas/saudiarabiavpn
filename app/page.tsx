'use client';

import Image from "next/image";
import { Shield, Zap, Globe, Lock, Wifi, Smartphone, Check } from "lucide-react";
import { useState } from "react";

const GooglePlayIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.609 1.814L13.792 12 3.61 22.186a1.5 1.5 0 0 1-.109-.57V2.384c0-.2.038-.39.109-.57zm.922-.628L14.97 11.09l2.784-2.784L5.424.74a1.37 1.37 0 0 0-.893-.054v.5zm11.54 10.003l3.225-3.225 3.63 2.09c.89.513.89 1.379 0 1.892l-3.63 2.09-3.326-3.326.1.48zm-1.1 1.711l-10.44 9.906a1.37 1.37 0 0 0 .893-.054l12.33-6.566-2.783-3.286z" />
  </svg>
);

const AppleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const benefits = [
    {
      icon: Globe,
      title: "Unblock Content",
      description: "Access any material or app restricted in your region with our global server network."
    },
    {
      icon: Shield,
      title: "Privacy & Anonymity",
      description: "Keep your internet privacy safe and surf securely without being tracked."
    },
    {
      icon: Lock,
      title: "IP Protection",
      description: "Protect your IP and physical address from tracking and surveillance."
    },
    {
      icon: Zap,
      title: "Fast & Reliable",
      description: "High-speed connection suitable for streaming, gaming, and browsing."
    },
    {
      icon: Wifi,
      title: "Public Wi-Fi Security",
      description: "Ideal for protecting your data on public Wi-Fi hotspots and during travel."
    },
    {
      icon: Smartphone,
      title: "Versatile Compatibility",
      description: "Works across Android phones, tablets, and PCs seamlessly."
    }
  ];

  const pricingPlans = [
    {
      name: "Free",
      price: "Free",
      period: "",
      features: [
        "Ad-supported",
        "Basic server access",
        "Standard speed",
        "Limited bandwidth"
      ],
      cta: "Get Started",
      highlighted: false
    },
    {
      name: "Premium",
      price: "$2.99",
      period: "/month",
      features: [
        "Ad-free experience",
        "All premium servers",
        "Maximum speed",
        "Unlimited bandwidth",
        "Priority support"
      ],
      cta: "Go Premium",
      highlighted: true
    }
  ];

  const faqs = [
    {
      question: "How do I use Saudi Arabia VPN?",
      answer: "Simply download the app from Google Play Store or the Apple App Store, install it, and tap the connect button. The app will automatically connect you to the best server."
    },
    {
      question: "Is Saudi Arabia VPN really free?",
      answer: "Yes! We offer a free version with ad support. You can also upgrade to Premium for an ad-free experience with unlimited bandwidth."
    },
    {
      question: "Which countries do you have servers in?",
      answer: "We have specialized servers across the Middle East including Saudi Arabia, UAE (Dubai), Oman, and many other global locations."
    },
    {
      question: "Is my data safe?",
      answer: "Absolutely. We use military-grade encryption and maintain a strict no-logs policy to ensure your privacy and security."
    },
    {
      question: "Can I use it on multiple devices?",
      answer: "Yes, Saudi Arabia VPN works on Android phones, tablets, and PCs. Premium users can connect multiple devices simultaneously."
    }
  ];

  return (
    <div className="bg-sand-light">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sand-light via-sand-medium to-sand-light py-20 md:py-32">
        <div className="absolute inset-0 bg-zigzag-pattern opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-dark mb-6 leading-tight">
                Unlock the Internet with <span className="text-app-green">Saudi Arabia VPN</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-dark/80 mb-8 max-w-2xl">
                Experience fast, secure, and private internet access. Specialized servers for the Middle East with military-grade encryption.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="https://play.google.com/store/apps/details?id=free.vpn.secure.turbo.proxy.hotspot.ksavpn&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-app-green text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-app-teal transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <GooglePlayIcon className="mr-2 h-6 w-6" />
                  Get it on Google Play
                </a>
                <a
                  href="https://apps.apple.com/us/app/sahara-vpn/id6478803973"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <AppleIcon className="mr-2 h-6 w-6" />
                  Download on App Store
                </a>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0">
                <div className="text-center">
                  <div className="text-3xl font-bold text-app-green">50+</div>
                  <div className="text-sm text-slate-dark/70">Global Servers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-app-green">Fast</div>
                  <div className="text-sm text-slate-dark/70">Connection</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-app-green">Free</div>
                  <div className="text-sm text-slate-dark/70">No Limits</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm">
                <Image
                  src="/app_connected.jpg"
                  alt="Saudi Arabia VPN App - Connected Screen"
                  width={400}
                  height={800}
                  className="rounded-3xl shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-dark mb-4">
              Why Choose Saudi Arabia VPN?
            </h2>
            <p className="text-lg text-slate-dark/70 max-w-2xl mx-auto">
              Powerful features designed to protect your privacy and enhance your online experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-sand-medium p-8 rounded-2xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-arabic-pattern opacity-5 group-hover:opacity-10 transition-opacity"></div>
                <div className="relative">
                  <div className="bg-app-green/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <benefit.icon className="h-8 w-8 text-app-green" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-dark mb-3">{benefit.title}</h3>
                  <p className="text-slate-dark/70">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-b from-sand-light to-sand-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-dark mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-slate-dark/70 max-w-2xl mx-auto">
              Choose the plan that works best for you
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg p-8 ${plan.highlighted ? 'ring-4 ring-app-green transform scale-105' : ''
                  }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-app-green text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                      Best Value
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-dark mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-app-green">{plan.price}</span>
                    {plan.period && <span className="text-slate-dark/60 ml-2">{plan.period}</span>}
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <Check className="h-6 w-6 text-app-green mr-3 flex-shrink-0" />
                      <span className="text-slate-dark">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://play.google.com/store/apps/details?id=free.vpn.secure.turbo.proxy.hotspot.ksavpn&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center py-3 px-6 rounded-full font-bold transition-all ${plan.highlighted
                      ? 'bg-app-green text-white hover:bg-app-teal shadow-lg'
                      : 'bg-sand-medium text-slate-dark hover:bg-sand-dark'
                      }`}
                  >
                    <GooglePlayIcon className="mr-2 h-5 w-5" />
                    Google Play
                  </a>
                  <a
                    href="https://apps.apple.com/us/app/sahara-vpn/id6478803973"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center py-3 px-6 rounded-full font-bold transition-all ${plan.highlighted
                      ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg'
                      : 'bg-slate-800 text-white hover:bg-slate-700'
                      }`}
                  >
                    <AppleIcon className="mr-2 h-5 w-5" />
                    App Store
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-dark mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-dark/70">
              Everything you need to know about Saudi Arabia VPN
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-sand-light border border-sand-dark rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-sand-medium transition-colors"
                >
                  <span className="font-semibold text-slate-dark text-lg">{faq.question}</span>
                  <span className="text-app-green text-2xl">
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-sand-medium border-t border-sand-dark">
                    <p className="text-slate-dark/80">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-app-green text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-arabic-pattern opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience True Internet Freedom?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of users who trust Saudi Arabia VPN for their online privacy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://play.google.com/store/apps/details?id=free.vpn.secure.turbo.proxy.hotspot.ksavpn&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-app-green px-8 py-4 rounded-full text-lg font-bold hover:bg-sand-light transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <GooglePlayIcon className="mr-2 h-6 w-6" />
              Google Play
            </a>
            <a
              href="https://apps.apple.com/us/app/sahara-vpn/id6478803973"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-slate-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-sand-light transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <AppleIcon className="mr-2 h-6 w-6" />
              App Store
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

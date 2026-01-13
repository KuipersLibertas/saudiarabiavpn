'use client';

import Image from "next/image";
import { Shield, Zap, Globe, Lock, Wifi, Smartphone, Check } from "lucide-react";
import { useState } from "react";

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
      answer: "Simply download the app from Google Play Store, install it, and tap the connect button. The app will automatically connect you to the best server."
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
                  <Shield className="mr-2 h-6 w-6" />
                  Get it on Google Play
                </a>
                <a
                  href="#benefits"
                  className="inline-flex items-center justify-center bg-white border-2 border-app-green text-app-green px-8 py-4 rounded-full text-lg font-bold hover:bg-app-green hover:text-white transition-all shadow-md"
                >
                  Learn More
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
                <a
                  href="https://play.google.com/store/apps/details?id=free.vpn.secure.turbo.proxy.hotspot.ksavpn&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-3 px-6 rounded-full font-bold transition-all ${plan.highlighted
                    ? 'bg-app-green text-white hover:bg-app-teal shadow-lg'
                    : 'bg-sand-medium text-slate-dark hover:bg-sand-dark'
                    }`}
                >
                  {plan.cta}
                </a>
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
          <a
            href="https://play.google.com/store/apps/details?id=free.vpn.secure.turbo.proxy.hotspot.ksavpn&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-app-green px-8 py-4 rounded-full text-lg font-bold hover:bg-sand-light transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Download Now - It's Free!
          </a>
        </div>
      </section>
    </div>
  );
}

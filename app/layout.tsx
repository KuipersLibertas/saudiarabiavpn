import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google"; // Removed as we use generic sans for now or setup Inter separately
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saudi Arabia VPN - Fast, Secure & Private VPN",
  description: "Unblock content, protect your privacy, and browse anonymously with Saudi Arabia VPN. Specialized servers for the Middle East.",
  icons: {
    icon: '/app_icon.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-sand-light text-slate-dark antialiased bg-arabic-pattern`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

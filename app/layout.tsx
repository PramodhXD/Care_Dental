import "./globals.css";
import type { Metadata } from "next";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/common/FloatingActions";

export const metadata: Metadata = {
  title: "Care Multi Speciality Dental Hospital | Best Dentist in Tenali",
  description:
    "Care Multi Speciality Dental Hospital in Tenali offers advanced, painless dental treatments including implants, braces, root canal, facial trauma & maxillofacial care.",
  keywords: [
    "Care Dental Tenali",
    "Dental hospital in Tenali",
    "Best dentist in Tenali",
    "Dental implants Tenali",
    "Root canal treatment Tenali",
    "Braces dentist Tenali",
    "Facial trauma dental care",
  ],
  openGraph: {
    title: "Care Dental – Trusted Multi Speciality Dental Hospital in Tenali",
    description:
      "Advanced dental & maxillofacial care with experienced doctors, modern equipment, and patient-first approach.",
    type: "website",
    locale: "en_IN",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="min-h-screen">{children}</main>

        {/* Footer */}
        <Footer />

        {/* Floating Call & WhatsApp Buttons */}
        <FloatingActions />
      </body>
    </html>
  );
}

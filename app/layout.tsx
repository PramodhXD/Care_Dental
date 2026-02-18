import "./globals.css";
import type { Metadata } from "next";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/common/FloatingActions";

export const metadata: Metadata = {
  metadataBase: new URL("https://care-dental.vercel.app"),
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
    title: "Care Dental - Trusted Multi Speciality Dental Hospital in Tenali",
    description:
      "Advanced dental and maxillofacial care with experienced doctors, modern equipment, and patient-first approach.",
    type: "website",
    locale: "en_IN",
    url: "https://care-dental.vercel.app",
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
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Care Multi Speciality Dental Hospital",
    image: "https://care-dental.vercel.app/images/care-dental-logo.webp",
    url: "https://care-dental.vercel.app",
    telephone: "+91-91602-23232",
    email: "caredentaltenali@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Beside Sasi Delicious, Behind Petrol Bunk, Bhavanamvari Street, Prakasam Road",
      addressLocality: "Tenali",
      addressRegion: "Andhra Pradesh",
      postalCode: "522201",
      addressCountry: "IN",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "20:30",
      },
    ],
    sameAs: ["https://wa.me/919160223232"],
  };

  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}

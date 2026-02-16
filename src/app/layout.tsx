import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://frontlinelegalnurse.com"),
  title: {
    default: "Frontline Legal Nurse Consulting | Expert Medical-Legal Case Support",
    template: "%s | Frontline Legal Nurse Consulting",
  },
  description:
    "Expert legal nurse consulting for attorneys. We provide case chronologies, fact summary reports, case merit reviews, and medical record analysis for personal injury, medical malpractice, and more.",
  keywords: [
    "legal nurse consultant",
    "medical record review",
    "case chronology",
    "fact summary report",
    "case merit review",
    "personal injury",
    "medical malpractice",
    "legal nurse consulting",
    "attorney medical support",
    "medical-legal consulting",
    "Wylie Stevens",
    "Frontline Legal Nurse",
    "Kingman AZ",
    "expert witness",
    "medical record analysis",
    "nursing expert",
    "litigation support",
    "demand package",
    "causation summary",
    "toxic tort",
    "product liability",
  ],
  authors: [{ name: "Wylie Stevens, BSN, RN" }],
  creator: "Frontline Legal Nurse Consulting",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://frontlinelegalnurse.com",
    siteName: "Frontline Legal Nurse Consulting",
    title: "Frontline Legal Nurse Consulting | Expert Medical-Legal Case Support",
    description:
      "Expert legal nurse consulting for attorneys. Case chronologies, fact summary reports, case merit reviews, and medical record analysis.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Frontline Legal Nurse Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontline Legal Nurse Consulting",
    description:
      "Expert legal nurse consulting for attorneys. Transforming complex medical records into winning case strategies.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://frontlinelegalnurse.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Frontline Legal Nurse Consulting",
  description:
    "Expert legal nurse consulting for attorneys handling personal injury, medical malpractice, toxic tort, and product liability cases.",
  url: "https://frontlinelegalnurse.com",
  telephone: "+19282234233",
  email: "wylie@frontlinelegalnurse.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kingman",
    addressRegion: "AZ",
    addressCountry: "US",
  },
  founder: {
    "@type": "Person",
    name: "Wylie Stevens",
    jobTitle: "CEO, BSN, RN, Legal Nurse Consultant",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:00",
  },
  sameAs: [],
  serviceType: [
    "Legal Nurse Consulting",
    "Medical Record Review",
    "Case Chronology",
    "Fact Summary Report",
    "Case Merit Review",
  ],
  areaServed: "US",
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Oswald:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

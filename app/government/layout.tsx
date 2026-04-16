import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SIS Federal — SDVOSB Veteran-Owned Federal Contracting | Strategic Investments and Services",
  description: "Service-Disabled Veteran-Owned Small Business (SDVOSB) delivering management consulting, systems design, and federal contracting support to U.S. agencies. SAM.gov active, UEI WK38ZPSN8FK8, CAGE 1AJX5.",
  keywords: [
    "SDVOSB",
    "Service-Disabled Veteran-Owned Small Business",
    "veteran owned federal contractor",
    "SBA VetCert",
    "federal contracting",
    "VA Vets First",
    "set-aside contracts",
    "sole-source contracts",
    "NAICS 541611",
    "NAICS 541512",
    "SAM.gov registered",
    "veteran owned consulting",
    "federal management consulting",
    "federal IT services veteran",
    "Texas SDVOSB",
  ],
  alternates: {
    canonical: "https://sisllc-international.com/government",
  },
  openGraph: {
    title: "SIS Federal — SDVOSB Veteran-Owned Federal Contracting",
    description: "Mission-ready federal solutions from a Service-Disabled Veteran-Owned Small Business. Management consulting, systems design, and operational support to U.S. agencies.",
    url: "https://sisllc-international.com/government",
    siteName: "SIS LLC International",
    locale: "en_US",
    alternateLocale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://sisllc-international.com/logo-federal.svg",
        width: 420,
        height: 120,
        alt: "SIS Federal — SDVOSB Federal Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SIS Federal — SDVOSB Federal Contracting",
    description: "Veteran-owned federal contractor delivering management consulting and systems design to U.S. agencies.",
    images: ["https://sisllc-international.com/logo-federal.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function GovernmentLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GovernmentService",
    name: "SIS Federal",
    alternateName: "Strategic Investments and Services LLC — Federal",
    description: "SDVOSB veteran-owned federal contractor providing management consulting, computer systems design, process automation, federal contracting support, administrative services, and SDVOSB teaming.",
    url: "https://sisllc-international.com/government",
    image: "https://sisllc-international.com/logo-federal.svg",
    logo: "https://sisllc-international.com/logo-federal.svg",
    provider: {
      "@type": "Organization",
      name: "Strategic Investments and Services LLC",
      identifier: [
        { "@type": "PropertyValue", propertyID: "UEI", value: "WK38ZPSN8FK8" },
        { "@type": "PropertyValue", propertyID: "CAGE", value: "1AJX5" },
      ],
      url: "https://sisllc-international.com",
      email: "info@sisllc-international.com",
      naics: ["541611", "541512", "541614", "541618", "541690", "561210"],
    },
    areaServed: { "@type": "Country", name: "United States" },
    serviceType: [
      "Management Consulting",
      "Computer Systems Design",
      "Process Automation",
      "Federal Contracting Support",
      "Administrative Services",
      "SDVOSB Teaming",
    ],
    audience: {
      "@type": "Audience",
      audienceType: "Federal Agencies and Prime Contractors",
    },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}

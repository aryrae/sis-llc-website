import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SIS Technology — IA & Transformation Digitale au Burkina Faso | AI for West Africa",
  description: "Solutions IA, automatisation, sites web, marketing digital et formation pour entreprises burkinabes. Bilingue FR/EN. Construit au Burkina, livré au monde.",
  keywords: [
    "IA Burkina Faso",
    "intelligence artificielle Ouagadougou",
    "automatisation entreprise Burkina",
    "developpement web Burkina Faso",
    "marketing digital Ouagadougou",
    "tableau de bord sur mesure",
    "formation IA Burkina",
    "Mobile Money integration",
    "Orange Money developpement",
    "fintech Afrique de l'Ouest",
    "AI Burkina Faso",
    "digital transformation West Africa",
    "custom dashboard Africa",
    "AI consulting Burkina",
    "Ouagadougou tech services",
  ],
  alternates: {
    canonical: "https://sisllc-international.com/tech",
    languages: {
      fr: "https://sisllc-international.com/tech",
      en: "https://sisllc-international.com/tech",
    },
  },
  openGraph: {
    title: "SIS Technology — IA & Transformation Digitale pour le Burkina Faso",
    description: "L'avenir numérique du Burkina Faso. Solutions IA, automatisation, sites web, marketing et formation pour entreprises burkinabes.",
    url: "https://sisllc-international.com/tech",
    siteName: "SIS LLC International",
    locale: "fr_BF",
    alternateLocale: ["en_US", "fr_FR"],
    type: "website",
    images: [
      {
        url: "https://sisllc-international.com/logo-tech.svg",
        width: 420,
        height: 120,
        alt: "SIS Technology — AI & Digital Transformation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SIS Technology — IA pour le Burkina Faso",
    description: "Solutions IA, automatisation et marketing digital pour entreprises burkinabes.",
    images: ["https://sisllc-international.com/logo-tech.svg"],
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
};

export default function TechLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "SIS Technology",
    alternateName: "SIS LLC Technology",
    description: "AI-native technology services for West Africa. Custom software, automation, digital marketing, AI training, and fintech for Burkinabe businesses.",
    url: "https://sisllc-international.com/tech",
    image: "https://sisllc-international.com/logo-tech.svg",
    logo: "https://sisllc-international.com/logo-tech.svg",
    parentOrganization: {
      "@type": "Organization",
      name: "Strategic Investments and Services LLC",
      url: "https://sisllc-international.com",
    },
    areaServed: [
      { "@type": "Country", name: "Burkina Faso" },
      { "@type": "Place", name: "West Africa" },
    ],
    serviceType: [
      "AI Automation",
      "Custom Software Development",
      "Web Development",
      "E-Commerce",
      "Digital Marketing",
      "AI Training",
      "Fintech Integration",
    ],
    inLanguage: ["fr", "en"],
    email: "info@sisllc-international.com",
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}

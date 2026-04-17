import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { WhatsAppButton } from "./components/WhatsAppButton";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL("https://sisllc-international.com"),
  title: {
    default: "SIS LLC International — Strategic Investments & Services",
    template: "%s | SIS LLC International",
  },
  description: "Strategic Investments and Services LLC: West Africa distribution & sourcing, U.S. federal SDVOSB contracting, and AI-native technology services for Burkina Faso. Veteran-owned. Bilingual EN/FR.",
  keywords: [
    "SIS LLC",
    "Strategic Investments and Services",
    "Burkina Faso distribution",
    "West Africa sourcing",
    "SDVOSB",
    "veteran owned business",
    "Ouagadougou consulting",
    "AI Burkina Faso",
    "federal contracting",
    "OHADA distribution",
    "import export Burkina",
  ],
  authors: [{ name: "Strategic Investments and Services LLC" }],
  creator: "SIS LLC International",
  publisher: "SIS LLC International",
  alternates: { canonical: "https://sisllc-international.com" },
  openGraph: {
    title: "SIS LLC International — Strategic Investments & Services",
    description: "West Africa distribution, U.S. federal contracting, and AI-native technology services. Veteran-owned, bilingual EN/FR.",
    url: "https://sisllc-international.com",
    siteName: "SIS LLC International",
    locale: "en_US",
    alternateLocale: ["fr_FR", "fr_BF"],
    type: "website",
    images: [{ url: "/logo-light.svg", width: 420, height: 120, alt: "SIS LLC International" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SIS LLC International",
    description: "West Africa distribution, U.S. federal contracting, and AI services for Burkina Faso. Veteran-owned.",
    images: ["/logo-light.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: { icon: "/favicon.svg" },
  category: "Business Services",
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Strategic Investments and Services LLC",
  alternateName: "SIS LLC International",
  url: "https://sisllc-international.com",
  logo: "https://sisllc-international.com/logo-light.svg",
  email: "info@sisllc-international.com",
  telephone: "+1-512-576-8597",
  contactPoint: [{
    "@type": "ContactPoint",
    telephone: "+1-512-576-8597",
    contactType: "customer service",
    email: "info@sisllc-international.com",
    availableLanguage: ["English", "French"],
    areaServed: ["US", "BF", "Worldwide"],
  }],
  description: "Veteran-owned consulting firm bridging West African markets, U.S. federal contracting, and AI-native technology services.",
  founder: { "@type": "Person", name: "Ary" },
  knowsLanguage: ["en", "fr"],
  identifier: [
    { "@type": "PropertyValue", propertyID: "UEI", value: "WK38ZPSN8FK8" },
    { "@type": "PropertyValue", propertyID: "CAGE", value: "1AJX5" },
  ],
  areaServed: [
    { "@type": "Country", name: "Burkina Faso" },
    { "@type": "Country", name: "United States" },
    { "@type": "Place", name: "West Africa" },
  ],
  sameAs: ["https://sisllc-international.com"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <WhatsAppButton />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

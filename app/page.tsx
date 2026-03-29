"use client";

import { useState } from "react";

const t = {
  en: {
    nav: { about: "About", services: "Services", how: "How It Works", contact: "Contact", lang: "FR" },
    hero: {
      tag: "Veteran-Owned | U.S.-Based | Bilingual EN/FR",
      title: "Your Bridge to the West African Market",
      subtitle: "We connect global manufacturers with exclusive distributors in Burkina Faso — and source specific products for businesses that need them. Market entry, logistics, sourcing, and contract management — all in one partner.",
      cta1: "Partner With Us",
      cta2: "Learn More",
    },
    stats: [
      { value: "20+", label: "Product Categories" },
      { value: "50+", label: "Manufacturer Network" },
      { value: "2", label: "Languages (EN/FR)" },
      { value: "100%", label: "Veteran-Owned" },
    ],
    about: {
      title: "About SIS LLC",
      p1: "Strategic Investment & Services (SIS LLC) is a U.S.-based consulting firm that bridges the gap between global manufacturers and the Burkinabe market.",
      p2: "Founded by a dual American-Burkinabe citizen and U.S. military veteran, SIS brings a unique combination of Western business standards and deep West African market knowledge.",
      p3: "We operate on two fronts: facilitating exclusive distribution partnerships between manufacturers and local distributors, and sourcing specific products on behalf of businesses that need reliable supply chains into West Africa.",
      p4: "What sets us apart: we travel anywhere in the world to meet manufacturers, inspect products, visit factories, and negotiate on your behalf. Whether it's a trade show in China, a factory in India, or a supplier in Turkey — we go where the products are so you don't have to.",
      badge1: "U.S. Military Veteran",
      badge2: "Dual Citizen (USA / Burkina Faso)",
      badge3: "USA & Burkina Faso",
      badge4: "OHADA Law Expertise",
      badge5: "Worldwide Travel",
    },
    services: {
      title: "What We Do",
      subtitle: "Distribution partnerships, product sourcing, and full market entry support for Burkina Faso and West Africa",
      items: [
        {
          icon: "magnifier",
          title: "Market Research & Intelligence",
          desc: "Deep analysis of product demand, competitive landscape, existing importers, and pricing in the Burkinabe market. We identify opportunities before you invest.",
        },
        {
          icon: "handshake",
          title: "Exclusive Distributor Matching",
          desc: "We identify, vet, and match you with qualified distributors in Ouagadougou, Bobo-Dioulasso, and across Burkina Faso. Every partner is pre-screened for financial capacity and market reach.",
        },
        {
          icon: "box",
          title: "Product Sourcing",
          desc: "Need a specific product? We locate manufacturers worldwide, negotiate pricing and MOQs, and manage the entire procurement process — from factory to your doorstep in Burkina Faso.",
        },
        {
          icon: "contract",
          title: "Contract & Legal",
          desc: "Bilingual distribution agreements compliant with both U.S. commercial law and OHADA (West African business law). Exclusivity clauses, performance guarantees, and dispute resolution built in.",
        },
        {
          icon: "ship",
          title: "Logistics & Import Coordination",
          desc: "End-to-end shipping coordination from your factory to Ouagadougou. We manage port transit (Abidjan, Lome, Tema), customs clearance, and inland transport.",
        },
        {
          icon: "chart",
          title: "Ongoing Management",
          desc: "We don't disappear after the deal. SIS monitors distributor performance, manages the relationship, and ensures your brand is well-represented in the market.",
        },
        {
          icon: "globe",
          title: "Bilingual Operations",
          desc: "Full English and French capability. We negotiate, document, and communicate in both languages — essential for doing business in francophone West Africa.",
        },
        {
          icon: "plane",
          title: "On-the-Ground Worldwide",
          desc: "We travel anywhere to meet manufacturers, inspect products, visit factories, and attend trade shows on your behalf. China, India, Turkey, Europe — we go where the products are.",
        },
      ],
    },
    how: {
      title: "How It Works",
      forMfg: {
        title: "For Manufacturers & Brands",
        subtitle: "You make it. We get it sold in West Africa.",
        steps: [
          { num: "01", title: "Discovery Contact", desc: "Tell us about your products, capacity, and goals for the African market." },
          { num: "02", title: "Market Brief", desc: "We deliver a comprehensive market analysis — demand, competition, pricing, and logistics." },
          { num: "03", title: "Distributor Matching", desc: "We present pre-vetted distributors with the right profile for your product category." },
          { num: "04", title: "Contract & Launch", desc: "We draft the bilingual agreement, coordinate first shipment, and manage the partnership." },
        ],
      },
      forDist: {
        title: "Pour les Distributeurs",
        subtitle: "Acces direct aux marques internationales avec droits exclusifs.",
        steps: [
          { num: "01", title: "Inscription", desc: "Partagez votre profil: experience, capacite de stockage, reseau de vente." },
          { num: "02", title: "Catalogue", desc: "Decouvrez les marques internationales disponibles pour distribution exclusive." },
          { num: "03", title: "Negociation", desc: "SIS negocie pour vous les meilleures conditions: prix, exclusivite, support." },
          { num: "04", title: "Partenariat", desc: "Contrat signe, premiere livraison coordinee, accompagnement continu." },
        ],
      },
    },
    sectors: {
      title: "Sectors We Serve",
      subtitle: "Distribution, sourcing, and market entry across key industries",
      items: [
        "Pharmaceuticals & Medical Supplies", "Solar Energy & Renewables", "Construction Materials", "Food & FMCG",
        "Cosmetics & Beauty", "Agricultural Equipment & Inputs", "Motorcycles & Auto Parts", "Baby & Children's Products",
        "Electronics & Mobile", "Industrial Equipment & Machinery", "Textiles & Apparel", "Water Treatment & Filtration",
      ],
    },
    cta: {
      title: "Ready to Enter the Burkinabe Market?",
      subtitle: "Whether you're a manufacturer looking for distribution, a distributor seeking global brands, or a business that needs specific products sourced — we're here to make it happen.",
      btn1: "Contact Us",
      btn2: "Download Our Brochure",
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Send us a message and we'll respond within 24 hours.",
      name: "Your Name",
      email: "Email Address",
      company: "Company Name",
      type: "I am a...",
      types: ["Manufacturer / Brand", "Distributor", "Business (Product Sourcing)", "Investor", "Other"],
      message: "Tell us about your needs",
      send: "Send Message",
      info: {
        location: "USA & Burkina Faso",
        email: "info@sisllc-international.com",
        languages: "English / Francais",
      },
    },
    footer: {
      tagline: "Distribution partnerships & product sourcing for Burkina Faso and West Africa.",
      rights: "All rights reserved.",
      veteran: "Proudly Veteran-Owned",
    },
  },
  fr: {
    nav: { about: "A Propos", services: "Services", how: "Comment Ca Marche", contact: "Contact", lang: "EN" },
    hero: {
      tag: "Entreprise Veteran | Basee aux USA | Bilingue EN/FR",
      title: "Votre Passerelle vers le Marche Ouest-Africain",
      subtitle: "Nous connectons les fabricants internationaux avec des distributeurs exclusifs au Burkina Faso — et sourcons des produits specifiques pour les entreprises qui en ont besoin. Entree sur le marche, logistique, sourcing et gestion de contrats — tout en un partenaire.",
      cta1: "Devenir Partenaire",
      cta2: "En Savoir Plus",
    },
    stats: [
      { value: "20+", label: "Categories de Produits" },
      { value: "50+", label: "Reseau de Fabricants" },
      { value: "2", label: "Langues (EN/FR)" },
      { value: "100%", label: "Entreprise Veteran" },
    ],
    about: {
      title: "A Propos de SIS LLC",
      p1: "Strategic Investment & Services (SIS LLC) est un cabinet de conseil americain qui fait le pont entre les fabricants internationaux et le marche burkinabe.",
      p2: "Fonde par un double citoyen americano-burkinabe et veteran de l'armee americaine, SIS combine les standards commerciaux occidentaux avec une connaissance approfondie du marche ouest-africain.",
      p3: "Nous operons sur deux fronts : faciliter les partenariats de distribution exclusive entre fabricants et distributeurs locaux, et sourcer des produits specifiques pour les entreprises ayant besoin de chaines d'approvisionnement fiables vers l'Afrique de l'Ouest.",
      p4: "Ce qui nous distingue : nous nous deplacons partout dans le monde pour rencontrer les fabricants, inspecter les produits, visiter les usines et negocier en votre nom. Salon en Chine, usine en Inde ou fournisseur en Turquie — nous allons ou sont les produits pour que vous n'ayez pas a le faire.",
      badge1: "Veteran Militaire USA",
      badge2: "Double Citoyen (USA / Burkina)",
      badge3: "USA & Burkina Faso",
      badge4: "Expertise Droit OHADA",
      badge5: "Deplacement Mondial",
    },
    services: {
      title: "Nos Services",
      subtitle: "Partenariats de distribution, sourcing de produits et accompagnement complet pour le Burkina Faso et l'Afrique de l'Ouest",
      items: [
        {
          icon: "magnifier",
          title: "Etude de Marche",
          desc: "Analyse approfondie de la demande, du paysage concurrentiel, des importateurs existants et des prix. Nous identifions les opportunites avant votre investissement.",
        },
        {
          icon: "handshake",
          title: "Mise en Relation Distributeurs",
          desc: "Nous identifions et selectionnons des distributeurs qualifies a Ouagadougou, Bobo-Dioulasso et a travers le Burkina. Chaque partenaire est pre-verifie.",
        },
        {
          icon: "box",
          title: "Sourcing de Produits",
          desc: "Besoin d'un produit specifique ? Nous localisons les fabricants dans le monde entier, negocions les prix et MOQ, et gerons tout le processus d'approvisionnement — de l'usine a votre porte au Burkina Faso.",
        },
        {
          icon: "contract",
          title: "Contrats & Juridique",
          desc: "Accords de distribution bilingues conformes au droit commercial americain et au droit OHADA. Clauses d'exclusivite, garanties de performance et resolution des litiges.",
        },
        {
          icon: "ship",
          title: "Logistique & Import",
          desc: "Coordination complete depuis votre usine jusqu'a Ouagadougou. Transit portuaire (Abidjan, Lome, Tema), dedouanement et transport interieur.",
        },
        {
          icon: "chart",
          title: "Gestion Continue",
          desc: "Nous ne disparaissons pas apres l'accord. SIS surveille la performance du distributeur et gere la relation pour proteger votre marque.",
        },
        {
          icon: "globe",
          title: "Operations Bilingues",
          desc: "Capacite complete en anglais et francais. Nous negocions, documentons et communiquons dans les deux langues.",
        },
        {
          icon: "plane",
          title: "Presence Terrain Mondiale",
          desc: "Nous nous deplacons partout pour rencontrer les fabricants, inspecter les produits, visiter les usines et assister aux salons en votre nom. Chine, Inde, Turquie, Europe — nous allons ou sont les produits.",
        },
      ],
    },
    how: {
      title: "Comment Ca Marche",
      forMfg: {
        title: "Pour les Fabricants & Marques",
        subtitle: "Vous fabriquez. Nous vendons en Afrique de l'Ouest.",
        steps: [
          { num: "01", title: "Contact Decouverte", desc: "Contactez-nous a propos de vos produits, capacites et objectifs pour le marche africain." },
          { num: "02", title: "Etude de Marche", desc: "Nous fournissons une analyse complete — demande, concurrence, prix et logistique." },
          { num: "03", title: "Selection Distributeur", desc: "Nous presentons des distributeurs pre-verifies adaptes a votre categorie de produits." },
          { num: "04", title: "Contrat & Lancement", desc: "Nous redigeons l'accord bilingue, coordinons la premiere livraison et gerons le partenariat." },
        ],
      },
      forDist: {
        title: "Pour les Distributeurs",
        subtitle: "Acces direct aux marques internationales avec droits exclusifs.",
        steps: [
          { num: "01", title: "Inscription", desc: "Partagez votre profil: experience, capacite de stockage, reseau de vente." },
          { num: "02", title: "Catalogue", desc: "Decouvrez les marques internationales disponibles pour distribution exclusive." },
          { num: "03", title: "Negociation", desc: "SIS negocie pour vous les meilleures conditions: prix, exclusivite, support." },
          { num: "04", title: "Partenariat", desc: "Contrat signe, premiere livraison coordinee, accompagnement continu." },
        ],
      },
    },
    sectors: {
      title: "Secteurs Couverts",
      subtitle: "Distribution, sourcing et entree sur le marche dans les industries cles",
      items: [
        "Pharmacie & Fournitures Medicales", "Energie Solaire & Renouvelables", "Materiaux de Construction", "Alimentation & Grande Conso",
        "Cosmetiques & Beaute", "Equipement & Intrants Agricoles", "Motos & Pieces Auto", "Produits Bebe & Enfants",
        "Electronique & Mobile", "Equipement & Machinerie Industrielle", "Textiles & Habillement", "Traitement & Filtration d'Eau",
      ],
    },
    cta: {
      title: "Pret a Entrer sur le Marche Burkinabe ?",
      subtitle: "Que vous soyez fabricant cherchant la distribution, distributeur cherchant des marques internationales, ou entreprise ayant besoin de produits specifiques — nous sommes la pour concretiser.",
      btn1: "Contactez-Nous",
      btn2: "Telecharger Notre Brochure",
    },
    contact: {
      title: "Contactez-Nous",
      subtitle: "Envoyez-nous un message et nous repondrons sous 24 heures.",
      name: "Votre Nom",
      email: "Adresse Email",
      company: "Nom de l'Entreprise",
      type: "Je suis...",
      types: ["Fabricant / Marque", "Distributeur", "Entreprise (Sourcing)", "Investisseur", "Autre"],
      message: "Decrivez vos besoins",
      send: "Envoyer",
      info: {
        location: "USA & Burkina Faso",
        email: "info@sisllc-international.com",
        languages: "English / Francais",
      },
    },
    footer: {
      tagline: "Partenariats de distribution & sourcing de produits pour le Burkina Faso et l'Afrique de l'Ouest.",
      rights: "Tous droits reserves.",
      veteran: "Fiere Entreprise Veteran",
    },
  },
};

const ICONS: Record<string, string> = {
  magnifier: "\u{1F50D}", handshake: "\u{1F91D}", contract: "\u{1F4DD}",
  ship: "\u{1F6A2}", chart: "\u{1F4C8}", globe: "\u{1F30D}", box: "\u{1F4E6}", plane: "\u{2708}\u{FE0F}",
};

export default function Home() {
  const [lang, setLang] = useState<"en" | "fr">("en");
  const c = t[lang];

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-[#0A1628]/95 backdrop-blur border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <img src="/logo-light.svg" alt="SIS LLC International" className="h-16 w-auto" />
          </a>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6 text-sm text-white/70">
              <a href="#about" className="hover:text-[#D4A843] transition-colors">{c.nav.about}</a>
              <a href="#services" className="hover:text-[#D4A843] transition-colors">{c.nav.services}</a>
              <a href="#how" className="hover:text-[#D4A843] transition-colors">{c.nav.how}</a>
              <a href="#contact" className="hover:text-[#D4A843] transition-colors">{c.nav.contact}</a>
            </div>
            <button
              onClick={() => setLang(lang === "en" ? "fr" : "en")}
              className="px-3 py-1 text-xs font-bold border border-[#D4A843]/50 text-[#D4A843] rounded-full hover:bg-[#D4A843]/10 transition-colors"
            >
              {c.nav.lang}
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative bg-[#0A1628] pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#D4A843] rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-[#D4A843] rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <p className="text-[#D4A843] text-xs tracking-[0.3em] uppercase mb-6">{c.hero.tag}</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6" style={{ fontFamily: "var(--font-playfair), serif" }}>
            {c.hero.title}
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">{c.hero.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="px-8 py-3.5 bg-[#D4A843] text-[#0A1628] font-semibold rounded-lg hover:bg-[#E8C97A] transition-colors text-lg">
              {c.hero.cta1}
            </a>
            <a href="#services" className="px-8 py-3.5 border border-white/20 text-white rounded-lg hover:bg-white/5 transition-colors text-lg">
              {c.hero.cta2}
            </a>
          </div>
        </div>
        {/* Stats bar */}
        <div className="relative max-w-4xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
          {c.stats.map((s, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl font-bold text-[#D4A843]">{s.value}</p>
              <p className="text-sm text-white/50 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#0A1628] mb-6" style={{ fontFamily: "var(--font-playfair), serif" }}>{c.about.title}</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">{c.about.p1}</p>
              <p className="text-gray-600 mb-4 leading-relaxed">{c.about.p2}</p>
              <p className="text-gray-600 mb-4 leading-relaxed">{c.about.p3}</p>
              <p className="text-gray-700 leading-relaxed font-medium bg-[#D4A843]/10 border-l-4 border-[#D4A843] pl-4 py-3 rounded-r-lg">{c.about.p4}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[c.about.badge1, c.about.badge2, c.about.badge3, c.about.badge4, c.about.badge5].map((badge, i) => (
                <div key={i} className={`bg-[#0A1628] rounded-xl p-5 text-center ${i === 4 ? "col-span-2" : ""}`}>
                  <p className="text-[#D4A843] text-2xl mb-2">{["\u{1F3C5}", "\u{1F1FA}\u{1F1F8}", "\u{2B50}", "\u{2696}", "\u{2708}\u{FE0F}"][i]}</p>
                  <p className="text-white text-sm font-medium">{badge}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 bg-[#F5F3F0]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#0A1628] mb-3" style={{ fontFamily: "var(--font-playfair), serif" }}>{c.services.title}</h2>
            <p className="text-gray-500 max-w-xl mx-auto">{c.services.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.services.items.map((s, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 hover:border-[#D4A843]/30 hover:shadow-lg transition-all">
                <p className="text-3xl mb-4">{ICONS[s.icon]}</p>
                <h3 className="text-lg font-semibold text-[#0A1628] mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-20 bg-[#0A1628]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-14" style={{ fontFamily: "var(--font-playfair), serif" }}>{c.how.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* For Manufacturers */}
            <div>
              <h3 className="text-xl font-bold text-[#D4A843] mb-2">{c.how.forMfg.title}</h3>
              <p className="text-white/50 text-sm mb-8">{c.how.forMfg.subtitle}</p>
              <div className="space-y-6">
                {c.how.forMfg.steps.map((s, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#D4A843]/20 flex items-center justify-center text-[#D4A843] font-bold text-sm shrink-0">{s.num}</div>
                    <div>
                      <h4 className="text-white font-semibold">{s.title}</h4>
                      <p className="text-white/50 text-sm mt-1">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* For Distributors */}
            <div>
              <h3 className="text-xl font-bold text-[#D4A843] mb-2">{c.how.forDist.title}</h3>
              <p className="text-white/50 text-sm mb-8">{c.how.forDist.subtitle}</p>
              <div className="space-y-6">
                {c.how.forDist.steps.map((s, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#D4A843]/20 flex items-center justify-center text-[#D4A843] font-bold text-sm shrink-0">{s.num}</div>
                    <div>
                      <h4 className="text-white font-semibold">{s.title}</h4>
                      <p className="text-white/50 text-sm mt-1">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-[#0A1628] mb-3" style={{ fontFamily: "var(--font-playfair), serif" }}>{c.sectors.title}</h2>
          <p className="text-gray-500 mb-8">{c.sectors.subtitle}</p>
          <div className="flex flex-wrap justify-center gap-3">
            {c.sectors.items.map((item, i) => (
              <span key={i} className="px-4 py-2 bg-[#0A1628] text-white text-sm rounded-lg">{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#0A1628] to-[#132240]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair), serif" }}>{c.cta.title}</h2>
          <p className="text-white/60 mb-8 text-lg">{c.cta.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="px-8 py-3.5 bg-[#D4A843] text-[#0A1628] font-semibold rounded-lg hover:bg-[#E8C97A] transition-colors text-lg">
              {c.cta.btn1}
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A1628] mb-3" style={{ fontFamily: "var(--font-playfair), serif" }}>{c.contact.title}</h2>
            <p className="text-gray-500">{c.contact.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Info cards */}
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border border-gray-100">
                <p className="text-2xl mb-2">{"\u{1F4CD}"}</p>
                <p className="text-sm text-gray-500">{c.contact.info.location}</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-100">
                <p className="text-2xl mb-2">{"\u{2709}"}</p>
                <p className="text-sm text-gray-500">{c.contact.info.email}</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-100">
                <p className="text-2xl mb-2">{"\u{1F30D}"}</p>
                <p className="text-sm text-gray-500">{c.contact.info.languages}</p>
              </div>
            </div>
            {/* Form */}
            <div className="md:col-span-2 bg-white rounded-xl p-8 border border-gray-100">
              <form className="space-y-4" onSubmit={e => { e.preventDefault(); alert(lang === "en" ? "Message sent! We will respond within 24 hours." : "Message envoye ! Nous repondrons sous 24 heures."); }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder={c.contact.name} required className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:border-[#D4A843] focus:outline-none" />
                  <input type="email" placeholder={c.contact.email} required className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:border-[#D4A843] focus:outline-none" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder={c.contact.company} className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:border-[#D4A843] focus:outline-none" />
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-500 focus:border-[#D4A843] focus:outline-none">
                    <option>{c.contact.type}</option>
                    {c.contact.types.map((t, i) => <option key={i}>{t}</option>)}
                  </select>
                </div>
                <textarea placeholder={c.contact.message} rows={4} className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:border-[#D4A843] focus:outline-none resize-none" />
                <button type="submit" className="w-full py-3.5 bg-[#0A1628] text-white font-semibold rounded-lg hover:bg-[#132240] transition-colors">
                  {c.contact.send}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0A1628] border-t border-white/5 py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xl font-bold text-[#D4A843] tracking-widest" style={{ fontFamily: "var(--font-playfair), serif" }}>SIS</span>
              <span className="text-xs text-white/30">{c.footer.tagline}</span>
            </div>
            <div className="flex items-center gap-4 text-xs text-white/30">
              <span>{c.footer.veteran}</span>
              <span>|</span>
              <span>&copy; {new Date().getFullYear()} SIS LLC. {c.footer.rights}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

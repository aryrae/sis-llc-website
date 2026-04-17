"use client";

import { useState } from "react";
import { ContactForm } from "../components/ContactForm";

const t = {
  fr: {
    nav: { opportunity: "Opportunite", services: "Services", arbitrage: "Arbitrage IA", contact: "Contact", lang: "EN" },
    hero: {
      tag: "Technologie IA pour l'Afrique de l'Ouest",
      title1: "L'avenir numerique",
      title2: "du Burkina Faso",
      subtitle: "Nous aidons les entreprises burkinabes a sauter directement dans l'ere de l'IA — avec les memes outils utilises par les startups de la Silicon Valley, livres en francais par une equipe qui comprend votre marche.",
      cta1: "Voir nos services",
      cta2: "Nous contacter",
      stats: [
        { value: "Bilingue", label: "FR / EN" },
        { value: "AI-Native", label: "Operations modernes" },
        { value: "10x", label: "Plus rapide qu'avant" },
        { value: "🇧🇫", label: "Pour le Burkina" },
      ],
    },
    opportunity: {
      tag: "L'Opportunite",
      title: "Le moment du grand saut.",
      p1: "Pendant 30 ans, les entreprises africaines ont du suivre le meme chemin que l'Occident : embaucher de grandes equipes, acheter des logiciels couteux, attendre des mois pour chaque projet.",
      p2: "L'IA change tout. Aujourd'hui, une entreprise burkinabe peut operer avec les memes capacites qu'une entreprise americaine — pour une fraction du cout, sans avoir a embaucher 50 personnes.",
      p3: "C'est le moment du grand saut. Et nous sommes ici pour le rendre possible.",
      points: [
        { icon: "🚀", title: "Sauter une generation", desc: "Pas besoin de suivre l'ancienne voie. Allez directement a l'IA-natif." },
        { icon: "💸", title: "Reduire les couts de 80%", desc: "Ce qui necessitait 5 personnes en necessite maintenant 1 + IA." },
        { icon: "⚡", title: "Livrer 10x plus vite", desc: "Tableaux de bord en 2 semaines au lieu de 6 mois." },
        { icon: "🌍", title: "Concurrencer mondialement", desc: "Memes outils que vos concurrents internationaux." },
      ],
    },
    services: {
      tag: "Nos Services",
      title: "Ce Que Nous Construisons",
      subtitle: "Six pratiques pour transformer votre entreprise",
      items: [
        { icon: "🤖", title: "Automatisation IA", desc: "Remplacez le travail manuel — facturation, service client, inventaire, rapports. Ce qui necessitait 3 employes, en necessite maintenant 1 + IA." },
        { icon: "🌐", title: "Sites Web & E-Commerce", desc: "Sites modernes mobile-first avec integration Mobile Money (Orange Money, Moov). Rapides, beaux, en francais." },
        { icon: "📣", title: "Marketing Digital", desc: "Publicites Facebook/Instagram, marketing WhatsApp, SEO en francais. Mettez votre entreprise sur Google et devant vos clients." },
        { icon: "📊", title: "Tableaux de Bord Sur Mesure", desc: "Logiciels personnalises pour detaillants, distributeurs, importateurs et ONG. Vos donnees, en temps reel, accessible partout." },
        { icon: "🎓", title: "Formation IA", desc: "Apprenez a utiliser ChatGPT, Claude et les outils d'automatisation. Ateliers d'une demi-journee ou cours complets pour votre equipe." },
        { icon: "💰", title: "Fintech & Trading", desc: "Integrations de paiement, automatisation tresorerie, analytique de marche pour entreprises commercant avec fournisseurs mondiaux." },
      ],
    },
    arbitrage: {
      tag: "Notre Avantage",
      title1: "Arbitrage",
      title2: "IA",
      desc: "L'arbitrage, c'est exploiter un ecart de prix avant que tout le monde ne le voie. C'est exactement ce que nous faisons avec l'IA.",
      quote: "Il y a trois ans, construire un tableau de bord personnalise coutait 30 millions FCFA et prenait 6 mois. Aujourd'hui, nous le livrons en 2 semaines pour une fraction du prix. Ce n'est pas de la magie — c'est de l'arbitrage. Et nous l'apportons en Afrique de l'Ouest.",
      pillars: [
        { num: "01", title: "Arbitrage Operationnel", desc: "L'IA remplace les processus repetitifs. Une personne fait le travail de cinq." },
        { num: "02", title: "Arbitrage de Contenu", desc: "Generation et publication de contenu a grande echelle. Marketing qui scale tout seul." },
        { num: "03", title: "Arbitrage de Marche", desc: "Algorithmes de trading et identification d'inefficiences sur les marches financiers." },
      ],
    },
    serve: {
      tag: "Pour Qui",
      title: "Qui Nous Servons",
      items: [
        { icon: "🏪", title: "PME & Commerces", desc: "Detaillants, restaurants, services" },
        { icon: "📦", title: "Importateurs & Distributeurs", desc: "Chaines d'approvisionnement, gestion stock" },
        { icon: "🏛️", title: "ONG & Institutions", desc: "Suivi de programmes, rapports bailleurs" },
        { icon: "🚀", title: "Startups", desc: "MVP, levees de fonds, croissance" },
        { icon: "🏗️", title: "Industrie & Construction", desc: "Operations, logistique, conformite" },
        { icon: "🌾", title: "Agro-business", desc: "Tracabilite, marche, distribution" },
      ],
    },
    process: {
      tag: "Notre Approche",
      title: "Simple. Rapide. Efficace.",
      steps: [
        { num: "01", title: "Decouverte", desc: "Conversation gratuite de 30 minutes pour comprendre votre besoin." },
        { num: "02", title: "Conception", desc: "Devis et plan en 48h. Vous savez exactement ce que vous obtenez." },
        { num: "03", title: "Construction", desc: "Livraison rapide. Demonstrations hebdomadaires. Aucune surprise." },
        { num: "04", title: "Formation & Support", desc: "Nous formons votre equipe et restons disponibles." },
      ],
    },
    cta: {
      title1: "Prets a",
      title2: "transformer",
      title3: "votre entreprise ?",
      subtitle: "Conversation gratuite de 30 minutes. Aucun engagement. Nous evaluons votre besoin et vous proposons un plan clair.",
      emailLabel: "Email",
      whatsappLabel: "WhatsApp",
      whatsappValue: "Disponible 7j/7",
      pdfLabel: "Brochure Services",
      pdfValue: "Telecharger PDF →",
      button: "Reserver un Appel",
    },
    footer: {
      tagline: "Technologie IA pour l'Afrique de l'Ouest. Construit au Burkina, livre au monde.",
      rights: "Tous droits reserves.",
    },
  },
  en: {
    nav: { opportunity: "Opportunity", services: "Services", arbitrage: "AI Arbitrage", contact: "Contact", lang: "FR" },
    hero: {
      tag: "AI-Native Technology for West Africa",
      title1: "The digital future",
      title2: "of Burkina Faso",
      subtitle: "We help Burkinabe businesses leapfrog straight into the AI era — with the same tools used by Silicon Valley startups, delivered in French and English by a team that understands your market.",
      cta1: "See Our Services",
      cta2: "Contact Us",
      stats: [
        { value: "Bilingual", label: "EN / FR" },
        { value: "AI-Native", label: "Modern Operations" },
        { value: "10x", label: "Faster Delivery" },
        { value: "🇧🇫", label: "For Burkina Faso" },
      ],
    },
    opportunity: {
      tag: "The Opportunity",
      title: "The leapfrog moment.",
      p1: "For 30 years, African businesses had to follow the same path as the West: hire big teams, buy expensive software, wait months for every project.",
      p2: "AI changes everything. Today, a Burkinabe business can operate with the same capabilities as an American firm — at a fraction of the cost, without hiring 50 people.",
      p3: "This is the leapfrog moment. And we're here to make it happen.",
      points: [
        { icon: "🚀", title: "Skip a Generation", desc: "No need to follow the old path. Go straight to AI-native." },
        { icon: "💸", title: "Cut Costs 80%", desc: "What used to need 5 people now needs 1 + AI." },
        { icon: "⚡", title: "Ship 10x Faster", desc: "Dashboards in 2 weeks instead of 6 months." },
        { icon: "🌍", title: "Compete Globally", desc: "Same tools as your international competitors." },
      ],
    },
    services: {
      tag: "Our Services",
      title: "What We Build",
      subtitle: "Six practices to transform your business",
      items: [
        { icon: "🤖", title: "AI Automation", desc: "Replace manual work — invoicing, customer service, inventory, reporting. What used to need 3 employees now needs 1 + AI." },
        { icon: "🌐", title: "Websites & E-Commerce", desc: "Modern mobile-first sites with Mobile Money integration (Orange Money, Moov). Fast, beautiful, in French." },
        { icon: "📣", title: "Digital Marketing", desc: "Facebook/Instagram ads, WhatsApp marketing, French-language SEO. Get your business on Google and in front of customers." },
        { icon: "📊", title: "Custom Dashboards", desc: "Tailored software for retailers, distributors, importers, and NGOs. Your data, real-time, accessible anywhere." },
        { icon: "🎓", title: "AI Training", desc: "Learn to use ChatGPT, Claude, and automation tools. Half-day workshops or full courses for your team." },
        { icon: "💰", title: "Fintech & Trading", desc: "Payment integrations, treasury automation, market analytics for businesses trading with global suppliers." },
      ],
    },
    arbitrage: {
      tag: "Our Edge",
      title1: "AI",
      title2: "Arbitrage",
      desc: "Arbitrage means capturing a price gap before everyone else sees it. That's exactly what we do with AI.",
      quote: "Three years ago, building a custom dashboard cost 30M FCFA and took 6 months. Today, we ship one in 2 weeks for a fraction of that. That's not magic — that's arbitrage. And we're bringing it to West Africa.",
      pillars: [
        { num: "01", title: "Operational Arbitrage", desc: "AI replaces repetitive process work. One person doing the work of five." },
        { num: "02", title: "Content Arbitrage", desc: "Content generation and publishing at scale. Marketing that scales itself." },
        { num: "03", title: "Market Arbitrage", desc: "Trading algorithms and inefficiency identification across financial markets." },
      ],
    },
    serve: {
      tag: "Who",
      title: "Who We Serve",
      items: [
        { icon: "🏪", title: "SMBs & Retail", desc: "Shops, restaurants, services" },
        { icon: "📦", title: "Importers & Distributors", desc: "Supply chains, inventory management" },
        { icon: "🏛️", title: "NGOs & Institutions", desc: "Program tracking, donor reporting" },
        { icon: "🚀", title: "Startups", desc: "MVP, fundraising, growth" },
        { icon: "🏗️", title: "Industry & Construction", desc: "Operations, logistics, compliance" },
        { icon: "🌾", title: "Agribusiness", desc: "Traceability, market access, distribution" },
      ],
    },
    process: {
      tag: "Our Process",
      title: "Simple. Fast. Effective.",
      steps: [
        { num: "01", title: "Discovery", desc: "Free 30-minute conversation to understand your needs." },
        { num: "02", title: "Design", desc: "Quote and plan in 48h. You know exactly what you're getting." },
        { num: "03", title: "Build", desc: "Fast delivery. Weekly demos. No surprises." },
        { num: "04", title: "Train & Support", desc: "We train your team and stay available." },
      ],
    },
    cta: {
      title1: "Ready to",
      title2: "transform",
      title3: "your business?",
      subtitle: "Free 30-minute conversation. No commitment. We assess your needs and propose a clear plan.",
      emailLabel: "Email",
      whatsappLabel: "WhatsApp",
      whatsappValue: "Available 7 days/week",
      pdfLabel: "Services Brochure",
      pdfValue: "Download PDF →",
      button: "Book a Call",
    },
    footer: {
      tagline: "AI-Native technology for West Africa. Built in Burkina, delivered to the world.",
      rights: "All rights reserved.",
    },
  },
};

export default function TechPage() {
  const [lang, setLang] = useState<"fr" | "en">("fr");
  const c = t[lang];

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-[#0A1628]/95 backdrop-blur border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/tech" className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-tech.svg" alt="SIS LLC Technology" className="h-16 w-auto" />
          </a>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6 text-sm text-white/70">
              <a href="#opportunity" className="hover:text-[#D4A843] transition-colors">{c.nav.opportunity}</a>
              <a href="#services" className="hover:text-[#D4A843] transition-colors">{c.nav.services}</a>
              <a href="#arbitrage" className="hover:text-[#D4A843] transition-colors">{c.nav.arbitrage}</a>
              <a href="#contact" className="hover:text-[#D4A843] transition-colors">{c.nav.contact}</a>
            </div>
            <button
              onClick={() => setLang(lang === "fr" ? "en" : "fr")}
              className="px-3 py-1 text-xs font-bold border border-[#D4A843]/50 text-[#D4A843] rounded-full hover:bg-[#D4A843]/10 transition-colors"
            >
              {c.nav.lang}
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative bg-[#0A1628] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#D4A843] rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-[#D4A843] rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4A843]/10 border border-[#D4A843]/30 text-[#D4A843] text-xs font-semibold tracking-widest uppercase">
              🇧🇫 {c.hero.tag}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white mb-6" style={{ fontFamily: "var(--font-playfair), serif" }}>
            {c.hero.title1}<br />
            <span className="bg-gradient-to-r from-[#D4A843] to-[#E8C97A] bg-clip-text text-transparent">{c.hero.title2}</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mb-10 leading-relaxed">{c.hero.subtitle}</p>
          <div className="flex flex-wrap gap-4">
            <a href="#services" className="px-8 py-3.5 bg-[#D4A843] text-[#0A1628] font-semibold rounded-lg hover:bg-[#E8C97A] transition-colors">{c.hero.cta1}</a>
            <a href="#contact" className="px-8 py-3.5 border border-[#D4A843]/50 text-[#D4A843] font-semibold rounded-lg hover:bg-[#D4A843]/10 transition-colors">{c.hero.cta2}</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-10 border-t border-white/10">
            {c.hero.stats.map((s, i) => (
              <div key={i}>
                <div className="text-4xl font-bold bg-gradient-to-r from-[#D4A843] to-[#E8C97A] bg-clip-text text-transparent" style={{ fontFamily: "var(--font-playfair), serif" }}>{s.value}</div>
                <div className="text-sm text-white/60 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPPORTUNITY */}
      <section id="opportunity" className="py-20 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-xs font-semibold tracking-widest text-[#D4A843] uppercase">{c.opportunity.tag}</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6 text-[#0A1628]" style={{ fontFamily: "var(--font-playfair), serif" }}>{c.opportunity.title}</h2>
            <p className="text-[#0A1628]/70 leading-relaxed mb-3">{c.opportunity.p1}</p>
            <p className="text-[#0A1628]/70 leading-relaxed mb-3">{c.opportunity.p2}</p>
            <p className="text-[#0A1628] font-semibold leading-relaxed text-lg">{c.opportunity.p3}</p>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {c.opportunity.points.map((p, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-[#0A1628]/5 hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="text-4xl mb-3">{p.icon}</div>
                <div className="font-bold text-[#0A1628] mb-1">{p.title}</div>
                <div className="text-sm text-[#0A1628]/60">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-widest text-[#D4A843] uppercase">{c.services.tag}</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 text-[#0A1628]" style={{ fontFamily: "var(--font-playfair), serif" }}>{c.services.title}</h2>
            <p className="text-[#0A1628]/60 mt-4">{c.services.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {c.services.items.map((item, i) => (
              <div key={i} className="p-7 rounded-2xl border border-[#0A1628]/8 hover:shadow-xl hover:-translate-y-1 transition-all bg-[#FAF8F5]">
                <div className="w-12 h-12 rounded-xl bg-[#D4A843]/15 flex items-center justify-center text-2xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#0A1628] mb-2" style={{ fontFamily: "var(--font-playfair), serif" }}>{item.title}</h3>
                <p className="text-sm text-[#0A1628]/65 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI ARBITRAGE */}
      <section id="arbitrage" className="py-20 bg-[#0A1628] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-[#D4A843] rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#D4A843] rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-xs font-semibold tracking-widest text-[#D4A843] uppercase">{c.arbitrage.tag}</span>
            <h2 className="text-5xl md:text-6xl font-bold mt-3 mb-6" style={{ fontFamily: "var(--font-playfair), serif" }}>
              {c.arbitrage.title1} <span className="bg-gradient-to-r from-[#D4A843] to-[#E8C97A] bg-clip-text text-transparent">{c.arbitrage.title2}</span>
            </h2>
            <p className="text-xl text-white/70 leading-relaxed">{c.arbitrage.desc}</p>
          </div>
          <blockquote className="max-w-3xl mx-auto mb-16 px-8 py-8 border-l-4 border-[#D4A843] bg-white/5 rounded-r-2xl">
            <p className="text-lg italic text-white/90 leading-relaxed">{c.arbitrage.quote}</p>
          </blockquote>
          <div className="grid md:grid-cols-3 gap-6">
            {c.arbitrage.pillars.map((p, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <div className="text-5xl font-bold mb-3 bg-gradient-to-r from-[#D4A843] to-[#E8C97A] bg-clip-text text-transparent" style={{ fontFamily: "var(--font-playfair), serif" }}>{p.num}</div>
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-playfair), serif" }}>{p.title}</h3>
                <p className="text-sm text-white/65 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest text-[#D4A843] uppercase">{c.serve.tag}</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 text-[#0A1628]" style={{ fontFamily: "var(--font-playfair), serif" }}>{c.serve.title}</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {c.serve.items.map((item, i) => (
              <div key={i} className="bg-white p-5 rounded-2xl border border-[#0A1628]/5 hover:border-[#D4A843]/30 transition-all flex items-center gap-4">
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <div className="font-bold text-[#0A1628]">{item.title}</div>
                  <div className="text-xs text-[#0A1628]/60">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-widest text-[#D4A843] uppercase">{c.process.tag}</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 text-[#0A1628]" style={{ fontFamily: "var(--font-playfair), serif" }}>{c.process.title}</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {c.process.steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#0A1628] text-[#D4A843] flex items-center justify-center text-xl font-bold mx-auto mb-4" style={{ fontFamily: "var(--font-playfair), serif" }}>{step.num}</div>
                <h3 className="font-bold text-[#0A1628] mb-2 text-lg" style={{ fontFamily: "var(--font-playfair), serif" }}>{step.title}</h3>
                <p className="text-sm text-[#0A1628]/65 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 bg-[#0A1628] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-1/2 w-96 h-96 bg-[#D4A843] rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-playfair), serif" }}>
            {c.cta.title1} <span className="bg-gradient-to-r from-[#D4A843] to-[#E8C97A] bg-clip-text text-transparent">{c.cta.title2}</span> {c.cta.title3}
          </h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">{c.cta.subtitle}</p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <a href="tel:+15125768597" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-[#D4A843]/50 transition-colors text-sm">
              <span>📞</span> +1 (512) 576-8597
            </a>
            <a href="https://wa.me/15125768597?text=Bonjour%20SIS%20Technology%2C%20je%20voudrais%20discuter%20d%27un%20projet." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366]/10 border border-[#25D366]/40 hover:bg-[#25D366]/20 transition-colors text-sm text-[#25D366]">
              <span>💬</span> WhatsApp
            </a>
            <a href="mailto:info@sisllc-international.com?subject=SIS%20Technology%20Inquiry" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-[#D4A843]/50 transition-colors text-sm">
              <span>✉️</span> info@sisllc-international.com
            </a>
          </div>
          <ContactForm lang={lang} source="tech" variant="dark" />
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
            <div className="text-xs text-white/30">
              © 2026 SIS LLC. {c.footer.rights}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

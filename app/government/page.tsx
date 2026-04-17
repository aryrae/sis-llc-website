"use client";

import { useState } from "react";
import { ContactForm } from "../components/ContactForm";

const t = {
  en: {
    nav: { westAfrica: "West Africa", federal: "Federal", about: "About", capabilities: "Capabilities", contact: "Contact", lang: "FR" },
    hero: {
      tag: "Service-Disabled Veteran-Owned Small Business",
      title1: "Mission-Ready",
      title2: "Federal Solutions",
      subtitle: "Strategic Investments and Services LLC delivers management consulting, systems design, and operational support to U.S. federal agencies — with the discipline of a veteran-led firm.",
      cta1: "View Capabilities",
      cta2: "Partner With Us",
    },
    stats: [
      { value: "100%", label: "Veteran-Owned" },
      { value: "6", label: "NAICS Codes" },
      { value: "SDVOSB", label: "Pending SBA" },
      { value: "SAM", label: "Active Registration" },
    ],
    about: {
      tag: "Who We Are",
      title: "A different kind of federal partner.",
      p1: "SIS was founded by a service-disabled U.S. Army veteran with deep operational experience and a commitment to disciplined execution. We bring military rigor to civilian and federal projects — combined with modern technology, automation, and a lean structure that keeps overhead out of your invoice.",
      p2: "Our SDVOSB application is currently under SBA review (Application #86547, submitted April 2026). Once certified, we will be eligible for federal sole-source and set-aside contracts across the federal government and the Department of Veterans Affairs Vets First program.",
      cards: [
        { icon: "🎖️", title: "U.S. Army Veteran", desc: "Service-disabled, 100% owner" },
        { icon: "🇺🇸", title: "Nationwide Delivery", desc: "Remote-capable, travel-ready" },
        { icon: "⚙️", title: "Lean & Agile", desc: "Direct principal involvement" },
        { icon: "🤖", title: "Tech-Forward", desc: "AI-assisted operations" },
      ],
    },
    capabilities: {
      tag: "Core Competencies",
      title: "What We Deliver",
      subtitle: "From management consulting to custom systems design, our capabilities are built for agencies that need reliable execution.",
      items: [
        { icon: "📊", title: "Management Consulting", desc: "Strategy, operations design, and organizational performance for agencies and prime contractors." },
        { icon: "💻", title: "Computer Systems Design", desc: "Custom dashboards, integrations, and software solutions that automate complex operations." },
        { icon: "⚡", title: "Process Automation", desc: "Workflow design and AI-assisted operations to reduce cost and accelerate program delivery." },
        { icon: "📋", title: "Federal Contracting Support", desc: "Proposal development, capture management, and compliance for primes and subcontractors." },
        { icon: "🗂️", title: "Administrative Services", desc: "Bookkeeping, compliance reporting, and back-office operations for small and mid-sized contractors." },
        { icon: "🤝", title: "Teaming & Subcontracting", desc: "SDVOSB teaming partner for primes pursuing set-aside requirements across federal agencies." },
      ],
    },
    naics: {
      tag: "NAICS Codes",
      title: "Where We Compete",
      items: [
        { code: "541611", desc: "Administrative Management & General Management Consulting", primary: true },
        { code: "541512", desc: "Computer Systems Design Services" },
        { code: "541614", desc: "Process, Physical Distribution & Logistics Consulting" },
        { code: "541618", desc: "Other Management Consulting Services" },
        { code: "541690", desc: "Other Scientific & Technical Consulting" },
        { code: "561210", desc: "Facilities Support Services" },
      ],
    },
    creds: {
      tag: "Credentials",
      title: "Registered & Ready",
      uei: "UEI",
      cage: "CAGE Code",
      sam: "SAM.gov",
      samStatus: "Active",
      sdvosb: "SDVOSB",
      sdvosbStatus: "Pending",
      structure: "Entity Structure",
      structureValue: "Limited Liability Company (Texas)",
      primary: "PRIMARY",
    },
    diff: {
      tag: "Why SIS",
      title: "Differentiators",
      items: [
        { num: "01", title: "Veteran Discipline", desc: "Military operational rigor applied to every engagement — clear plans, executed reliably." },
        { num: "02", title: "Lean Overhead", desc: "Direct principal involvement on every project. No layered consultancy markup, no committee delivery." },
        { num: "03", title: "Modern Tech Stack", desc: "AI and automation tooling that lets a small team deliver outsized results — without the cost of a big one." },
      ],
    },
    cta: {
      title1: "Ready to",
      title2: "Partner",
      title3: "?",
      subtitle: "Whether you're a contracting officer, a prime seeking a qualified SDVOSB teaming partner, or an agency exploring veteran-owned providers — let's start a conversation.",
      emailLabel: "Email",
      locationLabel: "Location",
      locationValue: "Round Rock, Texas",
      capLabel: "Capability Statement",
      capValue: "Download PDF →",
      button: "Get In Touch",
    },
    footer: {
      tagline: "Federal contracting & professional services. SDVOSB veteran-owned.",
      rights: "All rights reserved.",
    },
  },
  fr: {
    nav: { westAfrica: "Afrique de l'Ouest", federal: "Federal", about: "A Propos", capabilities: "Capacites", contact: "Contact", lang: "EN" },
    hero: {
      tag: "Petite Entreprise Detenue par un Veteran Handicape",
      title1: "Solutions Federales",
      title2: "Pretes a la Mission",
      subtitle: "Strategic Investments and Services LLC fournit du conseil en management, de la conception de systemes et un soutien operationnel aux agences federales americaines — avec la discipline d'une entreprise dirigee par un veteran.",
      cta1: "Voir les Capacites",
      cta2: "Devenir Partenaire",
    },
    stats: [
      { value: "100%", label: "Detenu par un Veteran" },
      { value: "6", label: "Codes NAICS" },
      { value: "SDVOSB", label: "En Attente SBA" },
      { value: "SAM", label: "Inscription Active" },
    ],
    about: {
      tag: "Qui Sommes-Nous",
      title: "Un partenaire federal different.",
      p1: "SIS a ete fonde par un veteran handicape de l'Armee americaine ayant une experience operationnelle approfondie et un engagement envers une execution disciplinee. Nous apportons la rigueur militaire aux projets civils et federaux — combinee avec une technologie moderne, l'automatisation et une structure allegee qui garde les frais generaux hors de votre facture.",
      p2: "Notre demande SDVOSB est actuellement examinee par la SBA (Demande #86547, soumise en avril 2026). Une fois certifies, nous serons eligibles aux contrats federaux sole-source et set-aside a travers le gouvernement federal et le programme Vets First du Departement des Anciens Combattants.",
      cards: [
        { icon: "🎖️", title: "Veteran Armee US", desc: "Handicape, proprietaire a 100%" },
        { icon: "🇺🇸", title: "Livraison Nationale", desc: "Capacite a distance, pret a voyager" },
        { icon: "⚙️", title: "Allege & Agile", desc: "Implication directe du dirigeant" },
        { icon: "🤖", title: "Tech-Avance", desc: "Operations assistees par IA" },
      ],
    },
    capabilities: {
      tag: "Competences Cles",
      title: "Ce Que Nous Livrons",
      subtitle: "Du conseil en management a la conception de systemes sur mesure, nos capacites sont concues pour les agences qui ont besoin d'une execution fiable.",
      items: [
        { icon: "📊", title: "Conseil en Management", desc: "Strategie, conception operationnelle et performance organisationnelle pour agences et primes." },
        { icon: "💻", title: "Conception de Systemes", desc: "Tableaux de bord, integrations et solutions logicielles qui automatisent les operations complexes." },
        { icon: "⚡", title: "Automatisation", desc: "Conception de flux de travail et operations assistees par IA pour reduire les couts." },
        { icon: "📋", title: "Soutien Contrats Federaux", desc: "Developpement de propositions, gestion de capture et conformite pour primes et sous-traitants." },
        { icon: "🗂️", title: "Services Administratifs", desc: "Comptabilite, rapports de conformite et operations back-office pour petits et moyens contractants." },
        { icon: "🤝", title: "Sous-traitance", desc: "Partenaire SDVOSB pour primes poursuivant des exigences set-aside dans les agences federales." },
      ],
    },
    naics: {
      tag: "Codes NAICS",
      title: "Ou Nous Concourons",
      items: [
        { code: "541611", desc: "Conseil en Gestion Administrative et Generale", primary: true },
        { code: "541512", desc: "Services de Conception de Systemes Informatiques" },
        { code: "541614", desc: "Conseil en Distribution Physique et Logistique" },
        { code: "541618", desc: "Autres Services de Conseil en Gestion" },
        { code: "541690", desc: "Autres Services de Conseil Scientifique et Technique" },
        { code: "561210", desc: "Services de Soutien aux Installations" },
      ],
    },
    creds: {
      tag: "Credentials",
      title: "Inscrit & Pret",
      uei: "UEI",
      cage: "Code CAGE",
      sam: "SAM.gov",
      samStatus: "Actif",
      sdvosb: "SDVOSB",
      sdvosbStatus: "En Attente",
      structure: "Structure d'Entite",
      structureValue: "Societe a Responsabilite Limitee (Texas)",
      primary: "PRIMAIRE",
    },
    diff: {
      tag: "Pourquoi SIS",
      title: "Differenciateurs",
      items: [
        { num: "01", title: "Discipline Veteran", desc: "Rigueur operationnelle militaire appliquee a chaque engagement — plans clairs, executes de maniere fiable." },
        { num: "02", title: "Frais Generaux Allegues", desc: "Implication directe du dirigeant sur chaque projet. Pas de marge de consultance en couches." },
        { num: "03", title: "Stack Tech Moderne", desc: "Outils d'IA et d'automatisation qui permettent a une petite equipe de livrer des resultats demesures." },
      ],
    },
    cta: {
      title1: "Prets a",
      title2: "Collaborer",
      title3: "?",
      subtitle: "Que vous soyez un agent contractant, un prime cherchant un partenaire SDVOSB qualifie, ou une agence explorant des fournisseurs detenus par des veterans — entamons une conversation.",
      emailLabel: "Email",
      locationLabel: "Lieu",
      locationValue: "Round Rock, Texas",
      capLabel: "Declaration de Capacite",
      capValue: "Telecharger PDF →",
      button: "Contactez-Nous",
    },
    footer: {
      tagline: "Contrats federaux & services professionnels. SDVOSB detenu par un veteran.",
      rights: "Tous droits reserves.",
    },
  },
};

export default function GovernmentPage() {
  const [lang, setLang] = useState<"en" | "fr">("en");
  const c = t[lang];

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-[#0A1628]/95 backdrop-blur border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/government" className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-federal.svg" alt="SIS LLC Federal" className="h-16 w-auto" />
          </a>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6 text-sm text-white/70">
              <a href="#about" className="hover:text-[#D4A843] transition-colors">{c.nav.about}</a>
              <a href="#capabilities" className="hover:text-[#D4A843] transition-colors">{c.nav.capabilities}</a>
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
      <section className="relative bg-[#0A1628] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#D4A843] rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-[#D4A843] rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4A843]/10 border border-[#D4A843]/30 text-[#D4A843] text-xs font-semibold tracking-widest uppercase">
              🇺🇸 {c.hero.tag}
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight text-white mb-6" style={{ fontFamily: "var(--font-playfair), serif" }}>
            {c.hero.title1}<br />
            <span className="bg-gradient-to-r from-[#D4A843] to-[#E8C97A] bg-clip-text text-transparent">{c.hero.title2}</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mb-10 leading-relaxed">{c.hero.subtitle}</p>
          <div className="flex flex-wrap gap-4">
            <a href="#capabilities" className="px-8 py-3.5 bg-[#D4A843] text-[#0A1628] font-semibold rounded-lg hover:bg-[#E8C97A] transition-colors">{c.hero.cta1}</a>
            <a href="#contact" className="px-8 py-3.5 border border-[#D4A843]/50 text-[#D4A843] font-semibold rounded-lg hover:bg-[#D4A843]/10 transition-colors">{c.hero.cta2}</a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-10 border-t border-white/10">
            {c.stats.map((s, i) => (
              <div key={i}>
                <div className="text-4xl font-bold bg-gradient-to-r from-[#D4A843] to-[#E8C97A] bg-clip-text text-transparent" style={{ fontFamily: "var(--font-playfair), serif" }}>{s.value}</div>
                <div className="text-sm text-white/60 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-semibold tracking-widest text-[#D4A843] uppercase">{c.about.tag}</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6 text-[#0A1628]" style={{ fontFamily: "var(--font-playfair), serif" }}>{c.about.title}</h2>
            <p className="text-[#0A1628]/70 leading-relaxed mb-4">{c.about.p1}</p>
            <p className="text-[#0A1628]/70 leading-relaxed">{c.about.p2}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {c.about.cards.map((card, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-[#0A1628]/5 hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="text-3xl mb-3">{card.icon}</div>
                <div className="font-semibold text-[#0A1628]">{card.title}</div>
                <div className="text-xs text-[#0A1628]/60 mt-1">{card.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section id="capabilities" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-widest text-[#D4A843] uppercase">{c.capabilities.tag}</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 text-[#0A1628]" style={{ fontFamily: "var(--font-playfair), serif" }}>{c.capabilities.title}</h2>
            <p className="text-[#0A1628]/60 mt-4 max-w-2xl mx-auto">{c.capabilities.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {c.capabilities.items.map((item, i) => (
              <div key={i} className="p-7 rounded-2xl border border-[#0A1628]/8 hover:shadow-xl hover:-translate-y-1 transition-all bg-[#FAF8F5]">
                <div className="w-12 h-12 rounded-xl bg-[#D4A843]/15 flex items-center justify-center text-2xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#0A1628] mb-2" style={{ fontFamily: "var(--font-playfair), serif" }}>{item.title}</h3>
                <p className="text-sm text-[#0A1628]/65 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NAICS + CREDENTIALS */}
      <section className="py-20 bg-[#0A1628] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-[#D4A843] rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <span className="text-xs font-semibold tracking-widest text-[#D4A843] uppercase">{c.naics.tag}</span>
            <h2 className="text-4xl font-bold mt-3 mb-8" style={{ fontFamily: "var(--font-playfair), serif" }}>{c.naics.title}</h2>
            <div className="space-y-3">
              {c.naics.items.map((item, i) => (
                <div key={i} className="py-3 border-b border-white/10">
                  <div className="text-[#D4A843] font-mono font-bold">
                    {item.code}
                    {item.primary && <span className="ml-2 text-xs text-white/40 font-sans">{c.creds.primary}</span>}
                  </div>
                  <div className="text-sm text-white/60 mt-1">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <span className="text-xs font-semibold tracking-widest text-[#D4A843] uppercase">{c.creds.tag}</span>
            <h2 className="text-4xl font-bold mt-3 mb-8" style={{ fontFamily: "var(--font-playfair), serif" }}>{c.creds.title}</h2>
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xs text-[#D4A843] font-semibold uppercase tracking-widest">{c.creds.uei}</div>
                <div className="text-2xl font-bold mt-1" style={{ fontFamily: "var(--font-playfair), serif" }}>WK38ZPSN8FK8</div>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xs text-[#D4A843] font-semibold uppercase tracking-widest">{c.creds.cage}</div>
                <div className="text-2xl font-bold mt-1" style={{ fontFamily: "var(--font-playfair), serif" }}>1AJX5</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-xs text-[#D4A843] font-semibold uppercase tracking-widest">{c.creds.sam}</div>
                  <div className="font-semibold mt-1 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-400"></span> {c.creds.samStatus}</div>
                </div>
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-xs text-[#D4A843] font-semibold uppercase tracking-widest">{c.creds.sdvosb}</div>
                  <div className="font-semibold mt-1 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-400"></span> {c.creds.sdvosbStatus}</div>
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xs text-[#D4A843] font-semibold uppercase tracking-widest">{c.creds.structure}</div>
                <div className="font-semibold mt-1">{c.creds.structureValue}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-widest text-[#D4A843] uppercase">{c.diff.tag}</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 text-[#0A1628]" style={{ fontFamily: "var(--font-playfair), serif" }}>{c.diff.title}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {c.diff.items.map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-[#0A1628]/5 hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="text-5xl font-bold mb-3 bg-gradient-to-r from-[#D4A843] to-[#E8C97A] bg-clip-text text-transparent" style={{ fontFamily: "var(--font-playfair), serif" }}>{item.num}</div>
                <h3 className="text-xl font-bold text-[#0A1628] mb-2" style={{ fontFamily: "var(--font-playfair), serif" }}>{item.title}</h3>
                <p className="text-sm text-[#0A1628]/65 leading-relaxed">{item.desc}</p>
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
            {c.cta.title1} <span className="bg-gradient-to-r from-[#D4A843] to-[#E8C97A] bg-clip-text text-transparent">{c.cta.title2}</span>{c.cta.title3}
          </h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">{c.cta.subtitle}</p>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <a href="tel:+15125768597" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-[#D4A843]/50 transition-colors text-sm">
              <span>📞</span> +1 (512) 576-8597
            </a>
            <a href="https://wa.me/15125768597?text=Hello%20SIS%20LLC%2C%20I%27d%20like%20to%20discuss%20federal%20contracting%20opportunities." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366]/10 border border-[#25D366]/40 hover:bg-[#25D366]/20 transition-colors text-sm text-[#25D366]">
              <span>💬</span> WhatsApp
            </a>
            <a href="mailto:info@sisllc-international.com?subject=Federal%20Contracting%20Inquiry" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-[#D4A843]/50 transition-colors text-sm">
              <span>✉️</span> info@sisllc-international.com
            </a>
          </div>
          <div className="mb-6 text-center">
            <a href="/SIS_Capability_Statement.pdf" className="text-[#D4A843] hover:underline text-sm">📄 {c.cta.capLabel}: {c.cta.capValue}</a>
          </div>
          <ContactForm lang={lang} source="government" variant="dark" />
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
              <span>UEI WK38ZPSN8FK8</span>
              <span>|</span>
              <span>CAGE 1AJX5</span>
              <span>|</span>
              <span>© 2026 SIS LLC. {c.footer.rights}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

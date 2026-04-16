"use client";

import { useState } from "react";

interface Props {
  lang: "fr" | "en";
  source: string;
  variant?: "light" | "dark";
}

const labels = {
  fr: {
    name: "Nom complet",
    email: "Email",
    company: "Entreprise (optionnel)",
    message: "Comment pouvons-nous vous aider ?",
    submit: "Envoyer le message",
    sending: "Envoi en cours...",
    success: "✓ Message envoyé. Nous vous répondons sous 24h.",
    error: "Une erreur s'est produite. Réessayez ou écrivez-nous directement.",
    consent: "En soumettant, vous acceptez d'être recontacté par SIS LLC.",
  },
  en: {
    name: "Full name",
    email: "Email",
    company: "Company (optional)",
    message: "How can we help?",
    submit: "Send message",
    sending: "Sending...",
    success: "✓ Message sent. We'll get back to you within 24h.",
    error: "Something went wrong. Try again or email us directly.",
    consent: "By submitting, you agree to be contacted by SIS LLC.",
  },
};

export function ContactForm({ lang, source, variant = "dark" }: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const t = labels[lang];

  const isDark = variant === "dark";
  const fieldCls = isDark
    ? "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-[#D4A843] transition-colors text-sm"
    : "w-full px-4 py-3 bg-white border border-[#0A1628]/15 rounded-lg text-[#0A1628] placeholder-[#0A1628]/40 focus:outline-none focus:border-[#D4A843] transition-colors text-sm";
  const labelCls = isDark
    ? "text-xs text-[#D4A843] font-semibold uppercase tracking-widest mb-2 block"
    : "text-xs text-[#D4A843] font-semibold uppercase tracking-widest mb-2 block";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          company: data.get("company"),
          message: data.get("message"),
          source,
          lang,
        }),
      });
      if (res.ok) {
        setStatus("ok");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="text-left space-y-4 max-w-xl mx-auto">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>{t.name}</label>
          <input name="name" type="text" required className={fieldCls} />
        </div>
        <div>
          <label className={labelCls}>{t.email}</label>
          <input name="email" type="email" required className={fieldCls} />
        </div>
      </div>
      <div>
        <label className={labelCls}>{t.company}</label>
        <input name="company" type="text" className={fieldCls} />
      </div>
      <div>
        <label className={labelCls}>{t.message}</label>
        <textarea name="message" required rows={4} className={fieldCls} />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full px-8 py-3.5 bg-[#D4A843] text-[#0A1628] font-semibold rounded-lg hover:bg-[#E8C97A] transition-colors disabled:opacity-50"
      >
        {status === "sending" ? t.sending : t.submit}
      </button>
      {status === "ok" && (
        <div className={`text-center text-sm py-2 px-4 rounded-lg ${isDark ? "bg-green-500/10 text-green-300" : "bg-green-50 text-green-700"}`}>
          {t.success}
        </div>
      )}
      {status === "error" && (
        <div className={`text-center text-sm py-2 px-4 rounded-lg ${isDark ? "bg-red-500/10 text-red-300" : "bg-red-50 text-red-700"}`}>
          {t.error}
        </div>
      )}
      <p className={`text-xs text-center ${isDark ? "text-white/40" : "text-[#0A1628]/40"}`}>{t.consent}</p>
    </form>
  );
}

import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "SIS Technology — IA pour le Burkina Faso";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(135deg, #0A1628 0%, #132240 60%, #0A1628 100%)",
          color: "white",
          padding: "80px",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", top: 100, right: 100, width: 500, height: 500, background: "radial-gradient(circle, rgba(212,168,67,0.2) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, width: 400, height: 400, background: "radial-gradient(circle, rgba(212,168,67,0.12) 0%, transparent 70%)" }} />
        <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 20px", background: "rgba(212,168,67,0.15)", border: "1px solid rgba(212,168,67,0.4)", borderRadius: 999, fontSize: 18, color: "#D4A843", letterSpacing: 3, fontFamily: "Arial, sans-serif", textTransform: "uppercase", alignSelf: "flex-start", marginBottom: 40 }}>
          🇧🇫 IA pour l'Afrique de l'Ouest
        </div>
        <div style={{ fontSize: 92, fontWeight: 700, lineHeight: 1.05, marginBottom: 32, display: "flex", flexDirection: "column" }}>
          <span>L'avenir numérique</span>
          <span style={{ color: "#D4A843" }}>du Burkina Faso</span>
        </div>
        <div style={{ fontSize: 28, color: "rgba(255,255,255,0.75)", maxWidth: 950, lineHeight: 1.4, fontFamily: "Arial, sans-serif" }}>
          IA · Automatisation · Sites Web · Marketing Digital · Tarifs en FCFA
        </div>
        <div style={{ position: "absolute", bottom: 50, left: 80, display: "flex", alignItems: "center", gap: 16, fontFamily: "Arial, sans-serif" }}>
          <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: 6, color: "white" }}>
            S<span style={{ color: "#D4A843" }}>I</span>S
          </div>
          <div style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", letterSpacing: 3 }}>LLC TECHNOLOGY</div>
        </div>
      </div>
    ),
    { ...size }
  );
}

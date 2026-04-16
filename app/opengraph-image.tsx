import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "SIS LLC International — Strategic Investments & Services";
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
          background: "linear-gradient(135deg, #0A1628 0%, #132240 100%)",
          color: "white",
          padding: "80px",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", top: 0, right: 0, width: 600, height: 600, background: "radial-gradient(circle, rgba(212,168,67,0.15) 0%, transparent 70%)" }} />
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 60 }}>
          <div style={{ width: 60, height: 60, border: "3px solid #D4A843", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 20, height: 20, background: "#D4A843", transform: "rotate(45deg)" }} />
          </div>
          <div style={{ fontSize: 32, fontWeight: 700, letterSpacing: 8, color: "white" }}>
            S<span style={{ color: "#D4A843" }}>I</span>S
          </div>
          <div style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", letterSpacing: 4, marginLeft: 12 }}>LLC INTERNATIONAL</div>
        </div>
        <div style={{ fontSize: 80, fontWeight: 700, lineHeight: 1.1, marginBottom: 30, display: "flex", flexDirection: "column" }}>
          <span>Strategic</span>
          <span style={{ color: "#D4A843" }}>Investments & Services</span>
        </div>
        <div style={{ fontSize: 28, color: "rgba(255,255,255,0.7)", maxWidth: 900, lineHeight: 1.4, fontFamily: "Arial, sans-serif" }}>
          West Africa distribution · U.S. federal contracting · AI for Burkina Faso
        </div>
        <div style={{ position: "absolute", bottom: 60, left: 80, fontSize: 18, color: "#D4A843", letterSpacing: 4, fontFamily: "Arial, sans-serif", textTransform: "uppercase" }}>
          Veteran-Owned · Bilingual EN / FR
        </div>
      </div>
    ),
    { ...size }
  );
}

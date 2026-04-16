import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "SIS Federal — SDVOSB Federal Solutions";
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
        <div style={{ position: "absolute", top: 60, right: 60, width: 600, height: 600, background: "radial-gradient(circle, rgba(212,168,67,0.18) 0%, transparent 70%)" }} />
        <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 20px", background: "rgba(212,168,67,0.15)", border: "1px solid rgba(212,168,67,0.4)", borderRadius: 999, fontSize: 18, color: "#D4A843", letterSpacing: 3, fontFamily: "Arial, sans-serif", textTransform: "uppercase", alignSelf: "flex-start", marginBottom: 40 }}>
          🇺🇸 Service-Disabled Veteran-Owned
        </div>
        <div style={{ fontSize: 96, fontWeight: 700, lineHeight: 1.05, marginBottom: 30, display: "flex", flexDirection: "column" }}>
          <span>Mission-Ready</span>
          <span style={{ color: "#D4A843" }}>Federal Solutions</span>
        </div>
        <div style={{ fontSize: 26, color: "rgba(255,255,255,0.75)", maxWidth: 950, lineHeight: 1.4, fontFamily: "Arial, sans-serif", marginBottom: 40 }}>
          Management Consulting · Systems Design · Federal Contracting Support
        </div>
        <div style={{ display: "flex", gap: 32, fontFamily: "Arial, sans-serif" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 12, color: "#D4A843", letterSpacing: 3, textTransform: "uppercase" }}>UEI</div>
            <div style={{ fontSize: 22, fontWeight: 600, marginTop: 4 }}>WK38ZPSN8FK8</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 12, color: "#D4A843", letterSpacing: 3, textTransform: "uppercase" }}>CAGE</div>
            <div style={{ fontSize: 22, fontWeight: 600, marginTop: 4 }}>1AJX5</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 12, color: "#D4A843", letterSpacing: 3, textTransform: "uppercase" }}>SAM.gov</div>
            <div style={{ fontSize: 22, fontWeight: 600, marginTop: 4 }}>● Active</div>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 50, left: 80, display: "flex", alignItems: "center", gap: 16, fontFamily: "Arial, sans-serif" }}>
          <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: 6, color: "white" }}>
            S<span style={{ color: "#D4A843" }}>I</span>S
          </div>
          <div style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", letterSpacing: 3 }}>LLC FEDERAL</div>
        </div>
      </div>
    ),
    { ...size }
  );
}

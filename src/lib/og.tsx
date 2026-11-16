import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

/** Branded Open Graph card (Latin text only, so no custom font is needed). */
export function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #21152F 0%, #2a1a3a 55%, #352044 100%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "#352044",
              border: "1px solid rgba(255,255,255,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            RA
          </div>
          <div style={{ display: "flex", fontSize: 22, color: "#25C6B3", letterSpacing: 4 }}>PORTFOLIO</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 800, letterSpacing: -3, lineHeight: 1 }}>Raghad Altuwayjiri</div>
          <div style={{ marginTop: 28, fontSize: 32, color: "#DDD4E6" }}>
            Software Developer · Full-Stack Development · AI Integration
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 24, color: "#B8A9C9" }}>
          <div style={{ width: 12, height: 12, borderRadius: 6, background: "#25C6B3" }} />
          Creator of AYN — AI-powered commercial site selection platform
        </div>
      </div>
    ),
    ogSize,
  );
}

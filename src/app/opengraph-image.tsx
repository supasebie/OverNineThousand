import { ImageResponse } from "next/og";

// The default share card for every page that doesn't set its own image. Drawn in the
// site's own register: white page, purple type, a terminal prompt.
export const alt = "OverNineThousand: freelance fullstack and mobile app development";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          background: "linear-gradient(135deg, #ffffff 0%, #faf5ff 60%, #f3e8ff 100%)",
          fontFamily: "monospace",
          color: "#1f2937",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18, color: "#a855f7", fontSize: 30 }}>
          <div style={{ width: 34, height: 34, borderRadius: 999, background: "#a855f7" }} />
          <span>overninethousand.com ~ main</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 30, color: "#6b7280", marginBottom: 12 }}>→ who</div>
          <div style={{ fontSize: 92, fontWeight: 700, color: "#9333ea", letterSpacing: -2, lineHeight: 1 }}>
            OverNineThousand
          </div>
          <div style={{ fontSize: 40, color: "#a855f7", marginTop: 22 }}>
            Freelance fullstack &amp; mobile app development
          </div>
        </div>

        <div style={{ display: "flex", gap: 16, fontSize: 26, color: "#6b21a8" }}>
          {["Flutter", ".NET", "React", "Angular", "Supabase"].map((tech) => (
            <div
              key={tech}
              style={{
                display: "flex",
                padding: "8px 18px",
                borderRadius: 10,
                border: "2px solid #e9d5ff",
                background: "#ffffff",
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}

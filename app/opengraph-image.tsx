import { ImageResponse } from "next/og"

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "radial-gradient(circle at top left, rgba(16,185,129,0.18), transparent 24%), radial-gradient(circle at right, rgba(212,175,55,0.18), transparent 22%), linear-gradient(135deg, #0f172a 0%, #111827 45%, #1f2937 100%)",
          color: "white",
          padding: "64px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "36px",
            padding: "48px 54px",
            background: "rgba(15, 23, 42, 0.45)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div
                style={{
                  display: "flex",
                  fontSize: 26,
                  letterSpacing: 6,
                  textTransform: "uppercase",
                  color: "#f7e3a2",
                }}
              >
                Nayab
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontSize: 92,
                  fontWeight: 700,
                  lineHeight: 0.95,
                }}
              >
                <span>Nayab Hossain</span>
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 34,
                  color: "#d1d5db",
                  maxWidth: 780,
                }}
              >
                Developer infrastructure, AI systems, hardware builds, and product-focused software.
              </div>
            </div>

            <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
              {[
                "FPGA",
                "Verilog",
                "SystemVerilog",
                "C++",
                "Python",
                "Claude / Codex",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    borderRadius: 999,
                    border: "1px solid rgba(247,227,162,0.38)",
                    background: "rgba(255,255,255,0.08)",
                    padding: "12px 20px",
                    fontSize: 22,
                    color: "#f8fafc",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  )
}

import { ImageResponse } from "next/og";

import { SITE } from "@/content";

export const alt = "Isaac Maina, Full-stack Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#faf8f4",
          padding: "76px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            fontSize: "24px",
            letterSpacing: "3px",
            color: "#6f6c63",
          }}
        >
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "999px",
              backgroundColor: "#b4441f",
            }}
          />
          FULL-STACK SOFTWARE ENGINEER · NAIROBI, KENYA
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "82px",
              fontWeight: 700,
              color: "#17150f",
              lineHeight: 1.05,
              letterSpacing: "-2px",
              maxWidth: "1000px",
            }}
          >
            I build products and the systems behind them.
          </div>
          <div
            style={{
              marginTop: "36px",
              height: "6px",
              width: "180px",
              backgroundColor: "#b4441f",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "28px",
            color: "#17150f",
            borderTop: "1px solid #e4e0d6",
            paddingTop: "28px",
          }}
        >
          <span>{SITE.name}</span>
          <span style={{ color: "#6f6c63" }}>isaacmaina.vercel.app</span>
        </div>
      </div>
    ),
    { ...size },
  );
}

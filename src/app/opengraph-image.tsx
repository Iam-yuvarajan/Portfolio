import { ImageResponse } from "next/og";
import { portfolio } from "@/data/portfolio";
import { siteTitle } from "@/lib/site";

export const alt = siteTitle;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  const { person } = portfolio;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#000000",
          color: "#fcf6f4",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 96,
            height: 96,
            borderRadius: 24,
            border: "2px solid #27272a",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 40,
            fontWeight: 700,
          }}
        >
          {person.initials}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 80, fontWeight: 700, letterSpacing: -2 }}>{person.name}</div>
          <div style={{ fontSize: 36, color: "#a1a1aa" }}>{person.role}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 28, color: "#8ea5ff" }}>
            {person.location}
          </div>
        </div>
      </div>
    ),
    size,
  );
}

import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const dynamic = "force-static";
export const alt = "Aegis by Clarvix — Cybersecurity for small and mid-size businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const shield = await readFile(join(process.cwd(), "public/brand/aegis-shield.png"));
  const shieldSrc = `data:image/png;base64,${shield.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#000000",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={shieldSrc} width={120} height={120} alt="" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 76, fontWeight: 700, color: "#00F0D9", letterSpacing: "-1px" }}>
              AEGIS
            </div>
            <div style={{ fontSize: 26, color: "#C68C53" }}>by Clarvix</div>
          </div>
        </div>
        <div
          style={{
            marginTop: 56,
            fontSize: 40,
            color: "#FFFFFF",
            textAlign: "center",
            lineHeight: 1.35,
            maxWidth: 950,
          }}
        >
          Find out what&apos;s exposed about your business online — before someone else does
        </div>
        <div style={{ marginTop: 34, fontSize: 26, color: "#94A3B8" }}>
          aegis.clarvix.net
        </div>
      </div>
    ),
    { ...size }
  );
}

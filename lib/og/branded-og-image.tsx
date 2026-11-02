import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

const LOGO_PATH = join(
  process.cwd(),
  "public/assets/nav-logo-full-v3.png",
);

export interface BrandedOgImageOptions {
  title: string;
  subtitle?: string;
  eyebrow?: string;
}

async function loadLogoSrc(): Promise<string> {
  const bytes = await readFile(LOGO_PATH);
  return `data:image/png;base64,${bytes.toString("base64")}`;
}

/** Branded 1200×630 share card with the full Xorora wordmark. */
export async function createBrandedOgImage({
  title,
  subtitle,
  eyebrow,
}: BrandedOgImageOptions): Promise<ImageResponse> {
  const logoSrc = await loadLogoSrc();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 64px",
          background:
            "radial-gradient(120% 80% at 50% -10%, rgba(91,141,239,0.32) 0%, rgba(39,85,195,0.14) 34%, rgba(2,6,15,0) 62%), linear-gradient(145deg, #02060F 0%, #0B1430 48%, #121A3A 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={logoSrc}
            alt="Xorora"
            width={220}
            height={52}
            style={{
              width: 220,
              height: 52,
              objectFit: "contain",
              objectPosition: "left center",
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {eyebrow ? (
            <div
              style={{
                display: "flex",
                fontSize: 18,
                fontWeight: 600,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#FF8A3D",
              }}
            >
              {eyebrow}
            </div>
          ) : null}
          <div
            style={{
              display: "flex",
              fontSize: title.length > 42 ? 56 : 68,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
          {subtitle ? (
            <div
              style={{
                display: "flex",
                fontSize: 26,
                fontWeight: 400,
                lineHeight: 1.4,
                color: "rgba(255,255,255,0.72)",
                maxWidth: 860,
              }}
            >
              {subtitle}
            </div>
          ) : null}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 20,
            color: "rgba(255,255,255,0.55)",
          }}
        >
          <span>xorora.com</span>
          <span style={{ color: "rgba(255,255,255,0.7)" }}>
            Your AI Development Partner
          </span>
        </div>
      </div>
    ),
    { ...OG_SIZE },
  );
}

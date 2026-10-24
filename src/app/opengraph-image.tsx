import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

/*
 * Image affichée quand une page du site est partagée (réseaux sociaux,
 * messageries). Générée automatiquement à partir de src/config/site.ts.
 *
 * Les couleurs ne peuvent pas lire les variables CSS : garde-les alignées
 * sur src/styles/tokens.css. Tu peux aussi supprimer ce fichier et déposer
 * une image opengraph-image.png (1200 × 630) dans src/app/.
 */

export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const colors = {
  bg: "#ffffff",
  fg: "#1c1917",
  muted: "#57534e",
  accent: "#1d4ed8",
};

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: 80,
        background: colors.bg,
        borderTop: `24px solid ${colors.accent}`,
      }}
    >
      <div style={{ fontSize: 80, fontWeight: 700, color: colors.fg }}>
        {siteConfig.name}
      </div>
      <div
        style={{
          marginTop: 24,
          fontSize: 36,
          color: colors.muted,
          maxWidth: 900,
        }}
      >
        {siteConfig.description}
      </div>
    </div>,
    size,
  );
}

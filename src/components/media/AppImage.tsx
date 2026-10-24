import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/cn";

/**
 * Ratios autorisés. À aligner sur la section « Images » de DESIGN.md :
 * retire ceux que le projet n'utilise pas, ajoute-en si besoin.
 */
const ratios = {
  "16/9": "aspect-video",
  "4/3": "aspect-[4/3]",
  "3/2": "aspect-[3/2]",
  "1/1": "aspect-square",
} as const;

export type ImageRatio = keyof typeof ratios;

type AppImageProps = Omit<ImageProps, "alt" | "fill"> & {
  /**
   * Texte alternatif, obligatoire. Décris ce que l'image apporte au contenu.
   * Pour une image purement décorative, passe explicitement alt="".
   */
  alt: string;
  /**
   * Cadre l'image dans un ratio fixe (recadrage centré). Sans ratio, l'image
   * garde ses propres dimensions : width et height sont alors nécessaires,
   * sauf pour une image importée statiquement.
   */
  ratio?: ImageRatio;
  /** Classes appliquées au cadre (avec ratio) ou à l'image (sans ratio). */
  className?: string;
};

/**
 * Toute image du site passe par ce composant : il impose le texte
 * alternatif, les ratios du design et les coins arrondis des médias.
 */
export function AppImage({
  ratio,
  className,
  alt,
  sizes,
  ...props
}: AppImageProps) {
  if (ratio) {
    return (
      <div
        className={cn(
          "relative overflow-hidden rounded-media bg-surface",
          ratios[ratio],
          className,
        )}
      >
        <Image
          alt={alt}
          fill
          sizes={sizes ?? "100vw"}
          className="object-cover"
          {...props}
        />
      </div>
    );
  }

  return (
    <Image
      alt={alt}
      sizes={sizes}
      className={cn("rounded-media", className)}
      {...props}
    />
  );
}

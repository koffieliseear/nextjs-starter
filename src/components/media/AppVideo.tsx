import Image from "next/image";
import { cn } from "@/lib/cn";

type AppVideoProps = {
  /** Fichier vidéo (MP4 H.264 recommandé), local ou hébergé. */
  src: string;
  /** Image affichée avant la lecture, et à la place de la vidéo si l'utilisateur limite les animations. Obligatoire. */
  poster: string;
  /**
   * Vidéo décorative : lecture automatique, muette, en boucle, sans
   * contrôles, ignorée par les lecteurs d'écran. Réservée aux fonds courts
   * (voir la section « Vidéos » de DESIGN.md).
   */
  decorative?: boolean;
  /** Titre accessible d'une vidéo de contenu (non décorative). */
  title?: string;
  /** Sous-titres au format WebVTT, recommandés pour une vidéo de contenu. */
  captionsSrc?: string;
  className?: string;
};

/**
 * Toute vidéo du site passe par ce composant. Il impose un poster et
 * respecte la préférence « réduire les animations » sans JavaScript.
 */
export function AppVideo({
  src,
  poster,
  decorative = false,
  title,
  captionsSrc,
  className,
}: AppVideoProps) {
  if (decorative) {
    return (
      <div
        className={cn("relative overflow-hidden rounded-media", className)}
        aria-hidden="true"
      >
        <video
          className="h-full w-full object-cover motion-reduce:hidden"
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <Image
          src={poster}
          alt=""
          fill
          sizes="100vw"
          className="hidden object-cover motion-reduce:block"
        />
      </div>
    );
  }

  return (
    <video
      className={cn("w-full rounded-media", className)}
      src={src}
      poster={poster}
      controls
      playsInline
      preload="metadata"
      title={title}
    >
      {captionsSrc && (
        <track
          kind="captions"
          src={captionsSrc}
          srcLang="fr"
          label="Français"
          default
        />
      )}
    </video>
  );
}

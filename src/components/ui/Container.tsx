import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@/lib/cn";

type ContainerProps<T extends ElementType> = {
  as?: T;
  /** "content" pour la mise en page, "reading" pour un texte long. */
  width?: "content" | "reading";
} & Omit<ComponentPropsWithoutRef<T>, "as">;

/** Centre le contenu et applique les marges latérales du site. */
export function Container<T extends ElementType = "div">({
  as,
  width = "content",
  className,
  ...props
}: ContainerProps<T>) {
  const Component = as ?? "div";
  return (
    <Component
      className={cn(
        "mx-auto w-full px-4 sm:px-6",
        width === "content" ? "max-w-content" : "max-w-reading",
        className,
      )}
      {...props}
    />
  );
}

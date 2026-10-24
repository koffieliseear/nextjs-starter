import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md";

const base =
  "inline-flex items-center justify-center gap-2 rounded-button font-medium transition-colors disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-accent-fg hover:bg-accent-hover",
  secondary: "border border-border bg-bg text-fg hover:bg-surface",
  ghost: "text-fg hover:bg-surface",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-5 text-base",
};

type StyleProps = {
  variant?: Variant;
  size?: Size;
};

type ButtonAsButton = StyleProps &
  ComponentPropsWithoutRef<"button"> & { href?: undefined };

type ButtonAsLink = StyleProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, "href"> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

/**
 * Bouton du site. Avec `href`, il devient un lien (next/link) qui a
 * l'apparence d'un bouton.
 */
export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (props.href !== undefined) {
    return <Link className={classes} {...props} />;
  }

  const { type = "button", ...rest } = props;
  return <button type={type} className={classes} {...rest} />;
}

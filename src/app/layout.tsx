import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";
import { fontVariables } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const lang = siteConfig.locale.split("_")[0];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang={lang} className={cn(fontVariables, "h-full antialiased")}>
      <body className="flex min-h-full flex-col">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-button focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-fg"
        >
          Aller au contenu
        </a>
        <Header />
        <main id="contenu" className="flex flex-1 flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

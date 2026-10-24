import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export function Header() {
  return (
    <header className="border-b border-border">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/" className="font-display text-lg font-semibold">
          {siteConfig.name}
        </Link>

        {siteConfig.nav.length > 1 && (
          <nav aria-label="Navigation principale">
            <ul className="flex items-center gap-6 text-sm">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted transition-colors hover:text-fg"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </Container>
    </header>
  );
}

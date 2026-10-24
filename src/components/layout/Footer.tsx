import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {siteConfig.name}
        </p>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {siteConfig.contact.email && (
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="transition-colors hover:text-fg"
            >
              {siteConfig.contact.email}
            </a>
          )}
          {siteConfig.socials.map((social) => (
            <a
              key={social.href}
              href={social.href}
              className="transition-colors hover:text-fg"
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}

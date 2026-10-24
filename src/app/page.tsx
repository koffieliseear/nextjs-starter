import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

/*
 * Page d'accueil provisoire. Dans un projet, une page ne fait qu'assembler
 * des sections (src/components/sections/) : presque aucun style ici.
 */
export default function Home() {
  return (
    <Container className="flex flex-1 flex-col items-start justify-center gap-6 py-24">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        {siteConfig.name}
      </h1>
      <p className="max-w-reading text-lg text-muted">
        {siteConfig.description}
      </p>
      {siteConfig.contact.email && (
        <Button href={`mailto:${siteConfig.contact.email}`}>Nous écrire</Button>
      )}
    </Container>
  );
}

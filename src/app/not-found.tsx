import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Page introuvable",
};

export default function NotFound() {
  return (
    <Container className="flex flex-1 flex-col items-start justify-center gap-6 py-24">
      <p className="text-sm font-medium text-accent">Erreur 404</p>
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Cette page n&apos;existe pas
      </h1>
      <p className="max-w-reading text-muted">
        Le lien est peut-être erroné, ou la page a été déplacée.
      </p>
      <Button href="/">Retour à l&apos;accueil</Button>
    </Container>
  );
}

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-secondary/30">
      <div className="container px-4 md:px-6 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none font-headline text-foreground">
            Diga Adeus à Dor nas Costas Para Sempre
          </h1>
          <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl">
            Descubra o método comprovado que já ajudou milhares de pessoas a se livrarem da dor nas costas de forma rápida, segura e no conforto de casa.
          </p>
        </div>
        <div className="mt-8">
          <Button size="lg" asChild>
            <a href="#precos">
              Sim, eu quero destravar minha coluna!
            </a>
          </Button>
          <p className="text-xs text-foreground/60 mt-2">Compra segura e acesso imediato.</p>
        </div>
      </div>
    </section>
  );
}

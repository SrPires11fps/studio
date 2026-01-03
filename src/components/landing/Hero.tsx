import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { SmoothLink } from "./SmoothLink";

const heroImage = PlaceHolderImages.find(p => p.id === 'hero-image');

export function Hero() {
  return (
    <section className="w-full py-6 md:py-12 lg:py-16">
      <div className="container px-4 md:px-6 text-center">
        <div className="space-y-6">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-foreground">
              Conheça o método mais rápido e eficaz para dizer adeus à dor nas costas para sempre.
            </h1>
          </div>
          {heroImage && (
            <div className="flex justify-center">
                <Image
                    alt={heroImage.description}
                    className="rounded-xl object-contain shadow-2xl w-full max-w-xs sm:max-w-sm"
                    height="400"
                    src={heroImage.imageUrl}
                    width="600"
                    data-ai-hint={heroImage.imageHint}
                />
            </div>
           )}
          <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl">
            Você vai ter acesso a um método passo a passo que já ajudou milhares de brasileiros a se livrarem da dor nas costas de forma rápida, segura e no conforto de casa
          </p>
        </div>
        <div className="mt-8">
            <SmoothLink href="#precos">
                <Button size="lg" className="text-primary-foreground text-base">
                    Quero aliviar minha dor agora
                </Button>
            </SmoothLink>
        </div>
      </div>
    </section>
  );
}

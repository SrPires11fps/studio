'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BedIcon, Frown, Pill } from "lucide-react";
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const painPoints = [
  {
    icon: <Frown className="w-12 h-12 text-destructive" />,
    title: "Dor que Limita Seus Dias",
    description: "A dor nas costas te impede de aproveitar a vida, transformando tarefas simples em desafios dolorosos.",
    image: PlaceHolderImages.find(p => p.id === 'pain-1')
  },
  {
    icon: <BedIcon className="w-12 h-12 text-destructive" />,
    title: "Noites Mal Dormidas",
    description: "A dor constante interrompe seu sono, deixando você cansado e sem energia para o dia seguinte.",
    image: PlaceHolderImages.find(p => p.id === 'pain-2')
  },
  {
    icon: <Pill className="w-12 h-12 text-destructive" />,
    title: "Medo de Remédios e Fisioterapia",
    description: "Você teme depender de medicamentos caros ou sessões de fisioterapia intermináveis que não resolvem a causa do problema.",
    image: PlaceHolderImages.find(p => p.id === 'pain-3')
  }
]

export function Pain() {
  return (
    <section className="w-full pt-12 md:pt-12 lg:pt-16 pb-12 md:pb-24 lg:pb-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-destructive font-medium">O Vilão Oculto</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Sua Dor nas Costas é Mais do que Apenas um Incômodo</h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ela rouba sua alegria, sua energia e sua liberdade. Veja como a dor nas costas afeta negativamente sua vida.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3 mt-12">
          {painPoints.map((point) => (
            <Card key={point.title} className="flex flex-col overflow-hidden">
                {point.image && (
                    <Image
                        alt={point.description}
                        className="aspect-[3/2] w-full object-cover"
                        height={400}
                        src={point.image.imageUrl}
                        width={600}
                        data-ai-hint={point.image.imageHint}
                    />
                )}
                <CardHeader>
                    <div className="flex items-center gap-4">
                        {point.icon}
                        <CardTitle className="text-2xl font-bold">{point.title}</CardTitle>
                    </div>
                </CardHeader>
              <CardContent>
                <p className="text-foreground/80">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

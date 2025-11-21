'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BedIcon, Frown, Pill } from "lucide-react";

const painPoints = [
  {
    icon: <Frown className="w-10 h-10 text-destructive" />,
    title: "Limita Seus Dias",
    description: "A dor nas costas te impede de aproveitar a vida e transforma tarefas simples em desafios.",
  },
  {
    icon: <BedIcon className="w-10 h-10 text-destructive" />,
    title: "Piora Suas Noites",
    description: "A dor constante interrompe seu sono, deixando você sempre com cansaço e sem energia.",
  },
  {
    icon: <Pill className="w-10 h-10 text-destructive" />,
    title: "Gera Insegurança",
    description: "Você teme depender de remédios ou de tratamentos que não resolvem a causa do problema.",
  }
]

export function Pain() {
  return (
    <section className="w-full pt-12 md:pt-12 lg:pt-16 pb-12 md:pb-24 lg:pb-32" style={{ backgroundColor: '#FEFEFE' }}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-destructive font-medium">A Prisão da Dor</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Você Se Identifica Com Algum Desses Pontos?</h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A dor crônica pode estar limitando seu potencial e sua felicidade. Veja se algum desses pontos parece familiar.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3 mt-12">
          {painPoints.map((point) => (
            <Card key={point.title} className="flex flex-col overflow-hidden text-center items-center">
                <CardHeader>
                    <div className="flex flex-col items-center gap-4">
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

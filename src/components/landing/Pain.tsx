'use client';
import { BedIcon, Frown, Pill } from "lucide-react";
import Image from "next/image";

const painPoints = [
  {
    icon: <Frown className="w-8 h-8 text-destructive" />,
    title: "Limita Seus Dias",
    description: "A dor nas costas te impede de aproveitar a vida e transforma tarefas simples em desafios.",
  },
  {
    icon: <BedIcon className="w-8 h-8 text-destructive" />,
    title: "Piora Suas Noites",
    description: "A dor constante interrompe seu sono, deixando você sempre com cansaço e sem energia.",
  },
  {
    icon: <Pill className="w-8 h-8 text-destructive" />,
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
             <div className="flex justify-center py-6">
                <Image
                    alt="Pessoas com dor nas costas"
                    className="rounded-xl object-cover"
                    height="300"
                    src="https://i.imgur.com/OETVrJ6.jpeg"
                    width="500"
                    data-ai-hint="back pain illustration"
                />
            </div>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A dor crônica pode estar limitando seu potencial e sua felicidade. Veja se algum desses pontos parece familiar.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-2xl space-y-8 mt-12">
          {painPoints.map((point) => (
            <div key={point.title} className="flex items-start gap-4">
              <div className="flex-shrink-0">{point.icon}</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold">{point.title}</h3>
                <p className="text-foreground/80 mt-1">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

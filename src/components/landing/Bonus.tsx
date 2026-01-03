import { Gift } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from '@/lib/placeholder-images';

const bonuses = [
    {
        title: "Bônus #1: Destrave de Quadris, Joelhos e Tornozelos",
        description: "Um guia completo com alimentos que ajudam a desinflamar seu corpo e acelerar a recuperação.",
        image: PlaceHolderImages.find(p => p.id === 'bonus-1')
    },
    {
        title: "Bônus #2: Protocolo Anti-Rigidez Para Quem Fica Muito Tempo Sentado",
        description: "Uma rotina de 5 minutos para começar o dia com mais flexibilidade e menos dor.",
        image: PlaceHolderImages.find(p => p.id === 'bonus-2')
    },
    {
        title: "Bônus #3: Alívio Superior: Fim da Dor nos Ombros e Pescoço",
        description: "Aprenda as melhores posições e truques para ter uma noite de sono reparadora.",
        image: PlaceHolderImages.find(p => p.id === 'bonus-3')
    },
    {
        title: "Bônus #4: Alívio Superior (Parte 2)<br />Fim da Dor nos Ombros e Pescoço",
        description: "Um desafio guiado para você sentir uma transformação incrível em apenas uma semana.",
        image: PlaceHolderImages.find(p => p.id === 'bonus-4')
    },
    {
        title: "Bônus #5: Protocolo Anti-Volta da Dor",
        description: "Exercícios para fortalecer sua postura e evitar que a dor volte no futuro.",
        image: PlaceHolderImages.find(p => p.id === 'bonus-5')
    },
    {
        title: "Bônus #6: Grupo VIP",
        description: "Acesso à nossa comunidade exclusiva de alunos para tirar dúvidas e compartilhar resultados.",
        image: PlaceHolderImages.find(p => p.id === 'bonus-6')
    },
    {
        title: "Bônus #7: Relaxamento Profundo",
        description: "Técnicas de respiração e relaxamento para aliviar a tensão muscular instantaneamente.",
        image: PlaceHolderImages.find(p => p.id === 'bonus-7')
    },
    {
        title: "Bônus #8: Guia de Viagem",
        description: "Dicas para manter sua coluna saudável e sem dor durante viagens longas.",
        image: PlaceHolderImages.find(p => p.id === 'bonus-8')
    },
]

export function Bonus() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
            <div className="container px-4 md:px-6">
                <div className="space-y-4 text-center mb-12">
                    <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                        <Gift className="inline-block mr-2 h-4 w-4" />
                        Oferta Exclusiva
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Você Também Levará 8 Bônus Exclusivos</h2>
                    <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl">
                        Comprando hoje, você garante acesso imediato a todos estes materiais extras para acelerar seus resultados.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {bonuses.map((bonus) => (
                        <div key={bonus.title} className="flex flex-col items-center text-center p-4 rounded-lg bg-card shadow-lg transition-transform transform hover:scale-105">
                            {bonus.image && (
                                <div className="w-full max-w-48 aspect-square relative mb-4">
                                    <Image
                                        src={bonus.image.imageUrl}
                                        alt={bonus.title.replace(/<br \/>/g, ' ')}
                                        fill
                                        className="rounded-md object-cover"
                                        data-ai-hint={bonus.image.imageHint}
                                    />
                                </div>
                            )}
                            <h3 className="text-lg font-bold mb-1" dangerouslySetInnerHTML={{ __html: bonus.title }}></h3>
                            <p className="text-sm text-foreground/80">{bonus.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

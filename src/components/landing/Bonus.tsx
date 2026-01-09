import { Gift, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from "@/lib/utils";

const bonuses = [
    {
        title: "Bônus #1: Método Anti-Dor nos Quadris, Joelhos e Tornozelos",
        description: "Alinhe seu corpo dos pés à cabeça, eliminando dores que se originam em outras partes e afetam suas costas.",
        image: {
            id: 'bonus-1',
            imageUrl: "https://i.imgur.com/xLAicpv.png",
            imageHint: "ebook cover"
        }
    },
    {
        title: "Bônus #2: Protocolo Anti-Rigidez Para Quem Fica Muito Tempo Sentado",
        description: "Uma rotina de 5 minutos para fazer pausas durante o dia, destravando o corpo e aumentando sua energia.",
        image: PlaceHolderImages.find(p => p.id === 'bonus-2')
    },
    {
        title: "Bônus #3: Alívio Superior: Fim da Dor nos Ombros e Pescoço",
        description: "Relaxe a tensão acumulada nos ombros e pescoço, que muitas vezes é a causa de dores de cabeça e desconforto.",
        image: {
            id: 'bonus-3',
            imageUrl: "https://i.imgur.com/Z7bnyN6.png",
            imageHint: "ebook cover"
        }
    },
];

const remainingBonuses = [
    {
        title: "Alívio Superior: Mãos e Braços",
    },
    {
        title: "Protocolo Anti-Volta da Dor",
    },
    {
        title: "Guia Completo de Postura",
    },
    {
        title: "Manual da Alimentação Anti-Inflamatória",
    },
    {
        title: "Protocolo de Relaxamento para Sono Rápido",
    },
]


export function Bonus() {
    return (
        <section id="bonus" className="w-full py-12 md:py-24 lg:py-32" style={{ backgroundColor: '#f9f8f2' }}>
            <div className="w-full bg-black text-white text-center py-4 mb-8">
                <h2 className="text-3xl md:text-4xl font-bold tracking-wider">👀 ANTES DE VOCÊ CONTINUAR...</h2>
            </div>
             <div className="container px-2 md:px-6">
                <div className="text-center mb-12">
                     <p className="mx-auto max-w-[700px] text-foreground/90 text-xl md:text-2xl font-medium">
                        ESCOLHENDO O <strong className="font-bold">PLANO COMPLETO</strong> VOCÊ RECEBE DE BÔNUS TODOS ESSES MATERIAIS ABAIXO:👇
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 sm:gap-y-12">
                    {bonuses.map((bonus, index) => (
                        <div key={bonus.title} className={cn("flex flex-col items-center text-center", index === 1 ? "sm:mt-0" : "", index > 0 ? "mt-0" : "sm:mt-0")}>
                            <div className="w-full max-w-sm mx-auto">
                                <div className={cn("bg-red-500 text-white font-bold py-2 px-4 text-lg", index === 1 ? "rounded-none" : "rounded-t-lg")}>
                                    🎁 BÔNUS {index + 1} 🎁
                                </div>
                                <div className={cn("bg-card shadow-lg p-6 flex flex-col items-center", index === 0 ? "rounded-b-none" : "rounded-b-lg")}>
                                    <h3 className="text-lg font-bold mb-4 h-12 flex items-center" dangerouslySetInnerHTML={{ __html: bonus.title.split(': ')[1] }}></h3>
                                    {bonus.image && (
                                        <div className="w-full max-w-32 sm:max-w-32 aspect-square relative mb-4">
                                            <Image
                                                src={bonus.image.imageUrl}
                                                alt={bonus.title.replace(/<br \/>/g, ' ')}
                                                fill
                                                className="object-contain rounded-md"
                                                data-ai-hint={bonus.image.imageHint}
                                            />
                                        </div>
                                    )}
                                    <div className="text-center my-4">
                                        <p className="text-red-500 line-through">DE: R$47</p>
                                        <p className="text-green-600 font-bold">HOJE: GRÁTIS</p>
                                    </div>
                                    <p className="text-sm text-foreground/80">{bonus.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                     <div className="flex flex-col items-center text-center mt-3 sm:mt-0">
                        <div className="w-full max-w-sm mx-auto">
                            <div className="bg-red-500 text-white font-bold py-2 px-4 rounded-t-lg text-lg">
                                🎁 +5 BÔNUS 🎁
                            </div>
                            <div className="bg-card shadow-lg rounded-b-lg p-6 flex flex-col items-center h-full">
                                <div className="w-full max-w-80 sm:max-w-80 aspect-square relative mb-4">
                                     <Image
                                        src="https://i.imgur.com/WugjC0H.png"
                                        alt="+5 Bônus"
                                        fill
                                        className="object-contain rounded-md"
                                        data-ai-hint="ebook cover stack"
                                    />
                                </div>
                                <ul className="text-left space-y-2 text-sm mt-auto">
                                    {remainingBonuses.map(rb => (
                                        <li key={rb.title} className="flex items-start gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                            <span>{rb.title}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

import { Smile, ShieldCheck, Footprints } from "lucide-react";
import Image from "next/image";

const benefits = [
    {
        icon: <Smile className="w-8 h-8 text-primary" />,
        title: "Alívio Rápido e Duradouro",
        description: "Sinta o alívio da dor nas costas desde as primeiras sessões, com resultados que se mantêm a longo prazo.",
        image: {
            src: "https://picsum.photos/seed/benefit1/600/400",
            alt: "Pessoa sentindo alívio da dor nas costas.",
            hint: "relief stretching"
        }
    },
    {
        icon: <Footprints className="w-8 h-8 text-primary" />,
        title: "Recupere Sua Autonomia",
        description: "Volte a fazer as atividades que ama sem medo ou limitações. Recupere a liberdade de movimento.",
        image: {
            src: "https://picsum.photos/seed/benefit2/600/400",
            alt: "Pessoa caminhando livremente.",
            hint: "person walking outdoors"
        }
    },
    {
        icon: <ShieldCheck className="w-12 h-12 text-primary" />,
        title: "Método Seguro e Comprovado",
        description: "Técnicas validadas por especialistas, que você pode fazer no conforto e segurança da sua casa.",
        image: null
    }
]

export function Benefits() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" style={{ backgroundColor: '#faf8f1' }}>
      <div className="container px-4 md:px-6">
        <div className="space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">A Transformação que Você Merece</h2>
          <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl">
            O <strong className="font-semibold">Método Destravamento Instantâneo</strong> vai trazer estes benefícios na sua vida:
          </p>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            {benefits.map((benefit) => (
                <div key={benefit.title} className="flex flex-col items-center text-center p-6 rounded-lg bg-card shadow-lg">
                    {benefit.image ? (
                        <Image
                            src={benefit.image.src}
                            alt={benefit.image.alt}
                            width={600}
                            height={400}
                            className="mb-4 rounded-lg object-cover aspect-video"
                            data-ai-hint={benefit.image.hint}
                        />
                    ) : (
                        <div className="mb-4 p-4 bg-primary/10 rounded-full">
                           {benefit.icon}
                        </div>
                    )}
                    <div className="flex items-center gap-2 mb-2">
                        {benefit.icon}
                         <h3 className="text-2xl font-bold">{benefit.title}</h3>
                    </div>
                    <p className="text-foreground/80">{benefit.description}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}

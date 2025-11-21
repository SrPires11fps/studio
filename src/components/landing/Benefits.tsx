import { HeartPulse, ShieldCheck, Footprints } from "lucide-react";

const benefits = [
    {
        icon: <HeartPulse className="w-8 h-8 text-primary" />,
        title: "Alívio Rápido e Duradouro",
        description: "Sinta o alívio da dor nas costas desde as primeiras sessões, com resultados que se mantêm a longo prazo."
    },
    {
        icon: <Footprints className="w-8 h-8 text-primary" />,
        title: "Recupere Sua Autonomia",
        description: "Volte a fazer as atividades que ama sem medo ou limitações. Recupere a liberdade de movimento."
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-primary" />,
        title: "Método Seguro e Comprovado",
        description: "Técnicas validadas por especialistas, que você pode fazer no conforto e segurança da sua casa."
    }
]

export function Benefits() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" style={{ backgroundColor: '#faf8f1' }}>
      <div className="container px-4 md:px-6">
        <div className="space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">A Transformação que Você Merece</h2>
          <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl">
            O <strong className="font-semibold">Método Destravamento Instantâneo</strong> não é apenas para aliviar a dor, é também para devolver o controle da sua vida.
          </p>
        </div>
        <div className="mx-auto max-w-2xl space-y-10">
            {benefits.map((benefit) => (
                <div key={benefit.title} className="flex flex-col items-center text-center p-6 rounded-lg bg-card shadow-lg">
                    <div className="mb-4 rounded-full bg-primary/20 p-3">
                        {benefit.icon}
                    </div>
                    <h3 className="mb-2 text-2xl font-bold">{benefit.title}</h3>
                    <p className="text-foreground/80 text-lg">{benefit.description}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}

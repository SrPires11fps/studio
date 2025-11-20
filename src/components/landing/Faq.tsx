import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
    {
        question: "O método é seguro para qualquer idade?",
        answer: "Sim, o Método Destravamento Instantâneo foi desenvolvido com exercícios de baixo impacto que podem ser adaptados para diferentes idades e níveis de condicionamento físico. No entanto, recomendamos sempre consultar um médico antes de iniciar qualquer nova atividade física."
    },
    {
        question: "Em quanto tempo vejo os resultados?",
        answer: "Muitos de nossos clientes relatam alívio significativo já nas primeiras semanas. Os resultados variam de pessoa para pessoa, mas a consistência na prática dos exercícios é fundamental para um alívio rápido e duradouro."
    },
    {
        question: "Preciso de algum equipamento?",
        answer: "Não. Todos os exercícios podem ser feitos em casa, utilizando apenas o peso do corpo. Um tapete de ioga ou uma toalha podem proporcionar mais conforto, mas não são essenciais."
    },
    {
        question: "Como funciona o acesso ao material?",
        answer: "Após a confirmação da compra, você receberá um e-mail com um link para acessar nossa área de membros. O acesso é vitalício, ou seja, você pode ver e rever as aulas quantas vezes quiser, para sempre."
    },
    {
        question: "E se eu não gostar? Qual a garantia?",
        answer: "Seu risco é zero! Oferecemos uma garantia incondicional de 7 dias. Se por qualquer motivo você não ficar satisfeito com o método, basta nos enviar um e-mail e devolveremos 100% do seu investimento."
    }
]

export function Faq() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container max-w-3xl px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Perguntas Frequentes</h2>
          <p className="text-foreground/80 md:text-xl">
            Ainda tem dúvidas? Reunimos aqui as perguntas mais comuns para te ajudar.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full mt-12">
            {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index + 1}`}>
                    <AccordionTrigger className="text-lg text-left hover:no-underline font-semibold">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-base text-foreground/80">
                        {faq.answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
      </div>
    </section>
  );
}

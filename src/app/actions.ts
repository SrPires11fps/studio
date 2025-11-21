'use server';

import { generateUserTestimonials, GenerateUserTestimonialsInput } from '@/ai/flows/generate-user-testimonials';

export async function getTestimonials() {
  try {
    const input: GenerateUserTestimonialsInput = {
      productName: 'Método Destravamento Instantâneo',
      numberOfTestimonials: 4,
    };
    const result = await generateUserTestimonials(input);
    return result.testimonials;
  } catch (error) {
    console.error('Error generating testimonials:', error);
    // Return fallback testimonials in case of an error
    return [
        "Eu acordava tão travada que mal conseguia levantar da cama. Nos primeiros dias usando o Método Destravamento Instantâneo, senti minha lombar soltar em poucos minutos. Em apenas 2 semanas, a dor desapareceu por completo. Hoje consigo caminhar, arrumar minha casa e fazer minhas atividades sem medo. Nunca imaginei que algo tão simples pudesse mudar tanto a minha vida.",
        "Trabalho de casa e passo horas sentada, e eu sentia uma dor nas costas que só piorava. Não queria depender de remédios e já estava começando a achar que seria algo permanente. Testei o Método Destravamento Instantâneo e, em poucas semanas, a dor simplesmente desapareceu. Os alongamentos são simples, rápidos, suaves e me devolveram um corpo leve, sem precisar tomar nada.",
        "Trabalho o dia inteiro sentado e sempre achei que aquela dor nas costas era algo passageiro, que iria sumir sozinha. Mas ela só foi piorando. Começou a afetar meu sono, minha concentração e até meu humor. Resolvi testar o Método Destravamento Instantâneo e a diferença foi clara. Em 1 semana já senti a dor diminuir. Em 2 semanas desapareceu por completo. Os alongamentos são diretos, rápidos e funcionam de verdade.",
        "Trabalhei a vida inteira carregando peso e minha lombar virou um problema constante. Cheguei a evitar sair de casa porque qualquer caminhada me travava. Com o Destravamento Instantâneo, o alívio veio rápido. Em poucas semanas voltei a caminhar normalmente e recuperei o controle do meu corpo."
    ];
  }
}

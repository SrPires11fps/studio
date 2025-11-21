'use server';

import { generateUserTestimonials, GenerateUserTestimonialsInput } from '@/ai/flows/generate-user-testimonials';

export async function getTestimonials() {
  try {
    const input: GenerateUserTestimonialsInput = {
      productName: 'Método Destravamento Instantâneo',
      numberOfTestimonials: 3,
    };
    const result = await generateUserTestimonials(input);
    return result.testimonials;
  } catch (error) {
    console.error('Error generating testimonials:', error);
    // Return fallback testimonials in case of an error
    return [
        "Eu acordava tão travada que mal conseguia levantar da cama. Nos primeiros dia usando o Método Destravamento Instantâneo, senti minha lombar soltar em poucos minutos. Em apenas 2 semanas, a dor desapareceu por completo. Hoje consigo caminhar, arrumar minha casa e fazer minhas atividades sem medo. Nunca imaginei que algo tão simples pudesse mudar tanto a minha vida.",
        "Trabalho de casa e passo horas sentada, e eu sentia uma dor nas costas que só piorava. Não queria depender de remédios e já estava começando a achar que seria algo permanente. Testei o Método Destravamento Instantâneo e, em poucas semanas, a dor simplesmente desapareceu. Os alongamentos são simples, rápidos, suaves e me devolveram um corpo leve, sem precisar tomar nada.",
        "Trabalhei a vida inteira carregando peso e a lombar virou meu ponto fraco. Cheguei ao ponto de evitar sair de casa porque qualquer caminhada já me travava. Com o Destravamento Instantâneo, o alívio foi quase imediato. Em poucas semanas voltei a caminhar no meu bairro. Foi a primeira vez que senti que tinha controle sobre meu corpo de novo."
    ];
  }
}

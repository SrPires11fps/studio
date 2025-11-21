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
        "Passei anos tomando remédios caros para suportar a dor. Já estava cansada, e queria outra solução. Esses alongamentos foram diferentes de tudo que já tentei. São suaves, fáceis, e resolveram minhas dores em poucas semanas. Uso todos os dias e sinto meu corpo leve, como se a idade tivesse diminuído.",
        "Depois da gravidez, as dores nas costas se tornaram constantes. Tentei de tudo, sem sucesso. O Método Destravamento Instantâneo foi o único que me trouxe alívio de verdade. A melhora na minha qualidade de vida é notável, posso brincar com meu filho sem sentir dor."
    ];
  }
}

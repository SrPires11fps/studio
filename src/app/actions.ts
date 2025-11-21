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
        "Com uma rotina agitada, eu não tinha tempo para tratamentos longos. Este método foi a solução perfeita. É tão prático e os resultados são rápidos. Consigo fazer as aulas em qualquer lugar. Minha postura melhorou e a dor nas costas é coisa do passado. Recomendo demais!",
        "Depois da gravidez, as dores nas costas se tornaram constantes. Tentei de tudo, sem sucesso. O Método Destravamento Instantâneo foi o único que me trouxe alívio de verdade. A melhora na minha qualidade de vida é notável, posso brincar com meu filho sem sentir dor."
    ];
  }
}

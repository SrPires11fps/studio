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
        "Eu sofria com dor nas costas há anos, e resolvi comprar o Método Destravamento Instantâneo. Eu estava desconfiada, mas já nos primeiros dias, senti minha lombar soltar e minha dor reduziu muito. Em apenas 2 semanas, a dor desapareceu por completo! Hoje consigo caminhar, arrumar minha casa e fazer minhas atividades sem medo. Nunca mais tive dores nas costas!",
        "Trabalho o dia inteiro sentado e sempre achei que aquela dor nas costas era algo passageiro, que iria sumir sozinha. Mas ela só foi piorando. Começou a afetar meu sono, minha concentração e até meu humor. Resolvi testar o Método Destravamento Instantâneo, e em poucos dias, a dor foi desaparecendo. Os alongamentos são fáceis, rápidos e funcionam de verdade.",
        "Trabalho de casa e passo horas sentada, e eu sentia uma dor nas costas que só piorava. Não queria depender de remédios e já estava começando a achar que seria algo permanente. Testei o Método Destravamento Instantâneo e, em poucas semanas, a dor simplesmente desapareceu. Os alongamentos são simples, rápidos, suaves e me devolveram um corpo leve, sem precisar tomar nada.",
        "“Trabalhei a vida inteira carregando peso e minha lombar virou um problema constante. Eu evitava sair de casa porque qualquer caminhada me travava. Mas com o Método Destravamento Instantâneo, a dor sumiu em 2 semanas e voltei a caminhar e aproveitar a vida. Os movimentos são fáceis e acabam em menos de 10 minutos.”"
    ];
  }
}

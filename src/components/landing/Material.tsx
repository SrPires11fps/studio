import { CheckCircle2 } from "lucide-react";
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const materialImage = PlaceHolderImages.find(p => p.id === 'material-guide');

const materialBenefits = [
    "Método Passo a Passo",
    "Material Ilustrativo e Didático",
    "Acesso vitalício ao conteúdo",
    "Suporte para tirar dúvidas"
]

export function Material() {
  return (
    <section className="w-full py-6 md:py-12 lg:py-16 bg-background">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">O que você vai receber</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Veja Um Dos Materiais Que Você Vai Receber</h2>
          {materialImage && (
              <Image
                  alt="Material do Método"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full shadow-2xl lg:hidden"
                  height="675"
                  src={materialImage.imageUrl}
                  width="1200"
                  data-ai-hint={materialImage.imageHint}
              />
          )}
          <p className="max-w-[600px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Ao adquirir o Método Destravamento Instantâneo, você terá acesso a um material completo com passo a passo para eliminar a dor de vez.
          </p>
          <ul className="grid gap-4 py-4">
            {materialBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start">
                    <CheckCircle2 className="mr-3 h-6 w-6 flex-shrink-0 text-primary" />
                    <span className="text-lg">{benefit}</span>
                </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:flex justify-center">
            {materialImage && (
                <Image
                    alt="Material do Método"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full shadow-2xl"
                    height="675"
                    src={materialImage.imageUrl}
                    width="1200"
                    data-ai-hint={materialImage.imageHint}
                />
            )}
        </div>
      </div>
    </section>
  );
}

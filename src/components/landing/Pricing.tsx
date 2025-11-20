import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckIcon } from "lucide-react";

export function Pricing() {
  return (
    <section id="precos" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Um Investimento Único na Sua Saúde</h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Escolha o plano que melhor se adapta a você e comece sua jornada para uma vida sem dor hoje mesmo.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-sm gap-8 md:max-w-4xl md:grid-cols-2 mt-12 items-start">
          <Card className="flex flex-col">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl">Plano Essencial</CardTitle>
              <CardDescription>Acesso completo ao método principal para alívio da dor.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="text-5xl font-bold font-headline mb-4">R$97</div>
              <ul className="grid gap-3 text-sm">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-primary" />
                  <span>Acesso vitalício ao método</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-primary" />
                  <span>Videoaulas passo a passo</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-primary" />
                  <span>Suporte por e-mail</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" size="lg">Comprar Agora</Button>
            </CardFooter>
          </Card>
          <Card className="border-2 border-primary flex flex-col relative shadow-2xl">
            <div className="bg-primary text-primary-foreground py-1 px-4 rounded-full text-sm font-semibold absolute -top-4 left-1/2 -translate-x-1/2">Mais Popular</div>
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl">Plano Premium</CardTitle>
              <CardDescription>O plano completo com bônus exclusivos para resultados acelerados.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="text-5xl font-bold font-headline mb-4">R$147</div>
              <ul className="grid gap-3 text-sm">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-foreground">Tudo do Plano Essencial, e mais:</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-primary" />
                  <span>Acompanhamento em grupo no WhatsApp</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-primary" />
                  <span>Aula ao vivo mensal para tirar dúvidas</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-primary" />
                  <span>Bônus: Guia de Nutrição Anti-inflamatória</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" size="lg">Comprar Plano Premium</Button>
            </CardFooter>
          </Card>
        </div>
        <p className="text-center text-sm text-muted-foreground mt-8">Garantia incondicional de 7 dias. Seu risco é zero.</p>
      </div>
    </section>
  );
}

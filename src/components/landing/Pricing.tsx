"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckIcon, BadgePercent, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export function Pricing() {
  return (
    <section id="precos" className="w-full py-6 md:py-12 lg:py-16 bg-background">
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
              <CardTitle className="text-2xl">Plano Básico</CardTitle>
              <CardDescription>Acesso ao método básico para alívio da dor.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="text-5xl font-bold font-headline mb-4">R$10</div>
              <ul className="grid gap-3 text-sm">
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span>Acesso vitalício ao Método 1.0</span>
                </li>

                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span>Suporte apenas por e-mail</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button className="w-full text-foreground/80" size="lg" variant="outline">Comprar Agora</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-2xl font-headline text-center">Espere! Oferta Especial Para Você</AlertDialogTitle>
                  </AlertDialogHeader>
                  <div className="bg-green-100 border-2 border-dashed border-green-500 rounded-lg p-4 text-center">
                    <p className="text-lg text-green-900">Leve o <strong>Plano Completo</strong> por apenas</p>
                    <div className="text-4xl font-bold text-green-900 my-2">R$15</div>
                    <p className="text-sm text-green-800">Método 2.0, suporte no WhatsApp, Bônus de Alimentação Anti-Inflamatória, e mais.</p>
                  </div>
                  <AlertDialogFooter className="sm:justify-center flex-col sm:flex-col sm:space-x-0">
                    <AlertDialogAction asChild>
                      <a href="https://pay.cakto.com.br/rf695av_661648">
                        <TrendingUp className="mr-2" /> Sim, Quero Aproveitar o Desconto!
                      </a>
                    </AlertDialogAction>
                    <AlertDialogCancel asChild>
                      <a href="https://pay.cakto.com.br/33gfd89_661981">
                        <Button variant="link" className="text-muted-foreground">Não, quero comprar o básico e perder a oferta.</Button>
                      </a>
                    </AlertDialogCancel>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </CardFooter>
          </Card>
          <Card className="border-2 border-primary flex flex-col relative shadow-2xl">
            <div className="bg-primary text-primary-foreground py-1 px-4 rounded-full text-sm font-semibold absolute -top-4 left-1/2 -translate-x-1/2">Mais Popular</div>
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl">Plano Completo</CardTitle>
              <CardDescription>O plano ideal para quem quer resultados acelerados em até 10 dias.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="mb-4 text-center md:text-left">
                  <p className="text-lg line-through text-muted-foreground">De R$97 por</p>
                  <div className="text-5xl font-bold font-headline">R$27</div>
                  <Badge variant="secondary" className="mt-2 text-sm bg-green-100 text-green-800 hover:bg-green-100">
                    <BadgePercent className="mr-2 h-4 w-4" />
                    Você economiza R$70!
                  </Badge>
              </div>
              <ul className="grid gap-3 text-sm">
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span>Acesso Vitalício ao Método 2.0</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span>Suporte Personalizado no WhatsApp</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span>
                    Resultados 67% Mais Rápidos
                    <br />
                    Que No Plano Básico
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span><strong className="font-semibold">Bônus:</strong> Guia de Nutrição Anti-inflamatória</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="flex-col">
              <Button className="w-full text-lg" size="lg" asChild>
                <a href="https://pay.cakto.com.br/7rfwxqn_661638">Comprar Agora</a>
              </Button>
              <p className="text-xs text-muted-foreground mt-2 text-center uppercase font-bold">APROVEITE AGORA: Você não vai encontrar esse preço depois</p>
            </CardFooter>
          </Card>
        </div>
        <p className="text-center text-sm text-muted-foreground mt-8">Garantia incondicional de 7 dias. Seu risco é zero.</p>
      </div>
    </section>
  );
}

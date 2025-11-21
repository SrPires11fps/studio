"use client";

import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getTestimonials } from "@/app/actions";
import { Skeleton } from "@/components/ui/skeleton";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "../ui/button";

const avatars = [
  PlaceHolderImages.find(p => p.id === 'testimonial-avatar-1'),
  PlaceHolderImages.find(p => p.id === 'testimonial-avatar-2'),
  PlaceHolderImages.find(p => p.id === 'testimonial-avatar-3'),
  PlaceHolderImages.find(p => p.id === 'testimonial-avatar-4'),
];

const userNames = ["Maria Lúcia, 64 anos", "Mariana, 48 anos", "Antônio, 39 anos", "Josemar, 73 anos"];

export function Testimonials() {
  const [testimonials, setTestimonials] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTestimonials() {
      setLoading(true);
      const fetchedTestimonials = await getTestimonials();
      setTestimonials(fetchedTestimonials);
      setLoading(false);
    }
    fetchTestimonials();
  }, []);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32" style={{ backgroundColor: '#f8f6ec' }}>
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Veja O Que Outras Pessoas Estão Falando</h2>
          <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl">
            Veja o que outros compradores estão falando sobre a transformação que viveram.
          </p>
        </div>
        <div className="mx-auto grid max-w-7xl items-start gap-8 sm:grid-cols-1 md:grid-cols-2 md:gap-12 mt-12">
          {loading ? (
            Array.from({ length: 4 }).map((_, index) => (
              <Card key={index} className="bg-card/80">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-3 w-20" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-4/5" />
                </CardContent>
              </Card>
            ))
          ) : (
            testimonials.map((testimonial, index) => (
              <Card key={index} className="flex flex-col bg-card/80">
                <CardContent className="pt-6 flex-grow">
                  <p className="text-foreground/90 italic">&ldquo;{testimonial}&rdquo;</p>
                </CardContent>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12">
                      {avatars[index] && <AvatarImage src={avatars[index]?.imageUrl} alt={userNames[index]} data-ai-hint={avatars[index]?.imageHint}/>}
                      <AvatarFallback>{userNames[index].charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-bold">{userNames[index]}</p>
                      <p className="text-sm text-muted-foreground">Cliente Verificado</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))
          )}
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <a href="#precos">
              Quero aliviar minha dor agora
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

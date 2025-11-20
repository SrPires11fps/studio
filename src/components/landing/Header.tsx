import { Button } from "@/components/ui/button";
import { MountainIcon } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <Link href="#" className="flex items-center justify-center font-headline" prefetch={false}>
        <MountainIcon className="h-6 w-6 text-secondary-foreground" />
        <span className="sr-only">Método Destravamento Instantâneo</span>
        <span className="ml-2 text-lg font-bold">MDI</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Button asChild>
          <a href="#precos">Quero meu acesso agora</a>
        </Button>
      </nav>
    </header>
  );
}

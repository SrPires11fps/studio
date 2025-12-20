import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-background py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
        <p>&copy; {currentYear} Método Destravamento Instantâneo. Todos os direitos reservados.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="#" className="hover:text-foreground" prefetch={false}>
            Termos de Serviço
          </Link>
          <Link href="#" className="hover:text-foreground" prefetch={false}>
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
}

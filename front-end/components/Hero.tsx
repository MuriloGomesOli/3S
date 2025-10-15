import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  onViewCatalog: () => void;
  onContactClick: () => void;
}

export function Hero({ onViewCatalog, onContactClick }: HeroProps) {
  return (
    <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="mb-6">
            Soluções Completas em Produtos Industriais
          </h1>
          <p className="mb-8 opacity-90">
            Catálogo completo de produtos industriais de alta qualidade para sua empresa. 
            Ferramentas, equipamentos e suprimentos para todas as suas necessidades.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-primary hover:bg-white/90"
              onClick={onViewCatalog}
            >
              Ver Catálogo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
              onClick={onContactClick}
            >
              Fale Conosco
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

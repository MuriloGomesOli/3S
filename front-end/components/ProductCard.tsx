import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { ShoppingCart, Eye } from "lucide-react";
import { Card } from "./ui/card";

interface ProductCardProps {
  imageUrl: string;
  productCode: string;
}

export function ProductCard({ imageUrl, productCode }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden border-border hover:shadow-lg transition-shadow duration-300">
      <div className="relative aspect-square bg-secondary overflow-hidden">
        <ImageWithFallback
          src={imageUrl}
          alt={`Produto ${productCode}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
          <Button size="sm" variant="secondary" className="bg-white text-primary hover:bg-white/90">
            <Eye className="w-4 h-4 mr-1" />
            Ver
          </Button>
          <Button size="sm" className="bg-primary hover:bg-primary/90">
            <ShoppingCart className="w-4 h-4 mr-1" />
            Adicionar
          </Button>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="bg-primary/10 text-primary px-3 py-1 rounded">
            {productCode}
          </div>
          <Button variant="ghost" size="icon" className="text-primary hover:text-primary hover:bg-primary/10">
            <ShoppingCart className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </Card>
  );
}

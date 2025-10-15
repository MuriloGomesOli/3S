import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ProductCard } from "../components/ProductCard";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Checkbox } from "../components/ui/checkbox";
import { Slider } from "../components/ui/slider";
import { Label } from "../components/ui/label";
import { Search, SlidersHorizontal, X, ArrowLeft } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../components/ui/sheet";

const allProducts = [
  {
    code: "PROD-001",
    category: "Ferramentas",
    brand: "Bosch",
    price: 450,
    stock: true,
    imageUrl: "https://images.unsplash.com/photo-1564957341689-f523f45caf21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwdG9vbHMlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzYwMDE5NDk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    code: "PROD-002",
    category: "Peças e Componentes",
    brand: "SKF",
    price: 1200,
    stock: true,
    imageUrl: "https://images.unsplash.com/photo-1649956737025-7b7f42ac31f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFjaGluZXJ5JTIwcGFydHN8ZW58MXx8fHwxNzYwMDE5NDkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    code: "PROD-003",
    category: "Segurança",
    brand: "3M",
    price: 180,
    stock: true,
    imageUrl: "https://images.unsplash.com/photo-1738782582520-d1be2a9d7bca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc2FmZXR5JTIwZXF1aXBtZW50fGVufDF8fHx8MTc2MDAxNDUxOHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    code: "PROD-004",
    category: "Hidráulica",
    brand: "Parker",
    price: 850,
    stock: false,
    imageUrl: "https://images.unsplash.com/photo-1738918897772-0ba101be25c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwdmFsdmVzJTIwcGlwZXN8ZW58MXx8fHwxNzU5OTM3MDg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    code: "PROD-005",
    category: "Hardware",
    brand: "Fischer",
    price: 95,
    stock: true,
    imageUrl: "https://images.unsplash.com/photo-1745449563046-f75d0bd28f46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwaGFyZHdhcmV8ZW58MXx8fHwxNzYwMDE5NDkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    code: "PROD-006",
    category: "Suprimentos",
    brand: "WD-40",
    price: 120,
    stock: true,
    imageUrl: "https://images.unsplash.com/photo-1641892238173-a28daf26c776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc3VwcGxpZXN8ZW58MXx8fHwxNzYwMDE5NDkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    code: "PROD-007",
    category: "Ferramentas",
    brand: "Makita",
    price: 680,
    stock: true,
    imageUrl: "https://images.unsplash.com/photo-1751486403850-fae53b6ab0e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcG93ZXIlMjB0b29sc3xlbnwxfHx8fDE3NjAwMTk4NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    code: "PROD-008",
    category: "Peças e Componentes",
    brand: "NSK",
    price: 920,
    stock: true,
    imageUrl: "https://images.unsplash.com/photo-1758873263527-ca53b938fbd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYmVhcmluZ3N8ZW58MXx8fHwxNzYwMDE5ODQwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    code: "PROD-009",
    category: "Segurança",
    brand: "Honeywell",
    price: 245,
    stock: true,
    imageUrl: "https://images.unsplash.com/photo-1738782582520-d1be2a9d7bca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc2FmZXR5JTIwZXF1aXBtZW50fGVufDF8fHx8MTc2MDAxNDUxOHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    code: "PROD-010",
    category: "Hidráulica",
    brand: "Rexroth",
    price: 1450,
    stock: false,
    imageUrl: "https://images.unsplash.com/photo-1738918897772-0ba101be25c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwdmFsdmVzJTIwcGlwZXN8ZW58MXx8fHwxNzU5OTM3MDg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    code: "PROD-011",
    category: "Hardware",
    brand: "Würth",
    price: 75,
    stock: true,
    imageUrl: "https://images.unsplash.com/photo-1745449563046-f75d0bd28f46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwaGFyZHdhcmV8ZW58MXx8fHwxNzYwMDE5NDkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    code: "PROD-012",
    category: "Suprimentos",
    brand: "Mobil",
    price: 230,
    stock: true,
    imageUrl: "https://images.unsplash.com/photo-1738918903155-0601cdc65818?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbHVicmljYW50c3xlbnwxfHx8fDE3NjAwMTk4NDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    code: "PROD-013",
    category: "Ferramentas",
    brand: "Stanley",
    price: 320,
    stock: true,
    imageUrl: "https://images.unsplash.com/photo-1564957341689-f523f45caf21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwdG9vbHMlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzYwMDE5NDk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    code: "PROD-014",
    category: "Ferramentas",
    brand: "DeWalt",
    price: 890,
    stock: true,
    imageUrl: "https://images.unsplash.com/photo-1758873263563-5ba4aa330799?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWVhc3VyaW5nJTIwdG9vbHN8ZW58MXx8fHwxNzYwMDE5ODQ0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    code: "PROD-015",
    category: "Ferramentas",
    brand: "Lincoln",
    price: 2100,
    stock: false,
    imageUrl: "https://images.unsplash.com/photo-1726421690313-2e0519335b82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2VsZGluZyUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjAwMDAyMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    code: "PROD-016",
    category: "Peças e Componentes",
    brand: "Timken",
    price: 780,
    stock: true,
    imageUrl: "https://images.unsplash.com/photo-1649956737025-7b7f42ac31f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFjaGluZXJ5JTIwcGFydHN8ZW58MXx8fHwxNzYwMDE5NDkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    code: "PROD-017",
    category: "Segurança",
    brand: "MSA",
    price: 410,
    stock: true,
    imageUrl: "https://images.unsplash.com/photo-1738782582520-d1be2a9d7bca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc2FmZXR5JTIwZXF1aXBtZW50fGVufDF8fHx8MTc2MDAxNDUxOHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    code: "PROD-018",
    category: "Hidráulica",
    brand: "Eaton",
    price: 1150,
    stock: true,
    imageUrl: "https://images.unsplash.com/photo-1738918897772-0ba101be25c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwdmFsdmVzJTIwcGlwZXN8ZW58MXx8fHwxNzU5OTM3MDg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    code: "PROD-019",
    category: "Hardware",
    brand: "Hilti",
    price: 140,
    stock: true,
    imageUrl: "https://images.unsplash.com/photo-1745449563046-f75d0bd28f46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwaGFyZHdhcmV8ZW58MXx8fHwxNzYwMDE5NDkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    code: "PROD-020",
    category: "Suprimentos",
    brand: "Shell",
    price: 195,
    stock: true,
    imageUrl: "https://images.unsplash.com/photo-1641892238173-a28daf26c776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc3VwcGxpZXN8ZW58MXx8fHwxNzYwMDE5NDkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    code: "PROD-021",
    category: "Ferramentas",
    brand: "Milwaukee",
    price: 1050,
    stock: true,
    imageUrl: "https://images.unsplash.com/photo-1751486403850-fae53b6ab0e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcG93ZXIlMjB0b29sc3xlbnwxfHx8fDE3NjAwMTk4NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    code: "PROD-022",
    category: "Peças e Componentes",
    brand: "Schaeffler",
    price: 650,
    stock: false,
    imageUrl: "https://images.unsplash.com/photo-1758873263527-ca53b938fbd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYmVhcmluZ3N8ZW58MXx8fHwxNzYwMDE5ODQwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    code: "PROD-023",
    category: "Segurança",
    brand: "DuPont",
    price: 380,
    stock: true,
    imageUrl: "https://images.unsplash.com/photo-1738782582520-d1be2a9d7bca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc2FmZXR5JTIwZXF1aXBtZW50fGVufDF8fHx8MTc2MDAxNDUxOHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    code: "PROD-024",
    category: "Hidráulica",
    brand: "Danfoss",
    price: 990,
    stock: true,
    imageUrl: "https://images.unsplash.com/photo-1738918897772-0ba101be25c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwdmFsdmVzJTIwcGlwZXN8ZW58MXx8fHwxNzU5OTM3MDg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const categories = ["Todos", "Ferramentas", "Peças e Componentes", "Segurança", "Hidráulica", "Hardware", "Suprimentos"];
const brands = ["Todos", "Bosch", "SKF", "3M", "Parker", "Makita", "DeWalt", "Stanley", "Fischer", "WD-40"];

interface CatalogPageProps {
  onBackToHome: () => void;
}

export function CatalogPage({ onBackToHome }: CatalogPageProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 2500]);
  const [showOnlyInStock, setShowOnlyInStock] = useState(false);

  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch = product.code.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Todos" || product.category === selectedCategory;
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesStock = !showOnlyInStock || product.stock;

    return matchesSearch && matchesCategory && matchesBrand && matchesPrice && matchesStock;
  });

  const handleBrandToggle = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const clearAllFilters = () => {
    setSearchTerm("");
    setSelectedCategory("Todos");
    setSelectedBrands([]);
    setPriceRange([0, 2500]);
    setShowOnlyInStock(false);
  };

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Categorias */}
      <div>
        <h3 className="mb-3 text-foreground">Categoria</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "hover:bg-secondary text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Marcas */}
      <div>
        <h3 className="mb-3 text-foreground">Marca</h3>
        <div className="space-y-2">
          {brands.slice(1).map((brand) => (
            <div key={brand} className="flex items-center space-x-2">
              <Checkbox
                id={`brand-${brand}`}
                checked={selectedBrands.includes(brand)}
                onCheckedChange={() => handleBrandToggle(brand)}
              />
              <Label
                htmlFor={`brand-${brand}`}
                className="cursor-pointer text-foreground"
              >
                {brand}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Faixa de Preço */}
      <div>
        <h3 className="mb-3 text-foreground">Faixa de Preço</h3>
        <div className="space-y-4">
          <Slider
            min={0}
            max={2500}
            step={50}
            value={priceRange}
            onValueChange={setPriceRange}
            className="w-full"
          />
          <div className="flex justify-between">
            <span className="text-muted-foreground">
              R$ {priceRange[0]}
            </span>
            <span className="text-muted-foreground">
              R$ {priceRange[1]}
            </span>
          </div>
        </div>
      </div>

      {/* Disponibilidade */}
      <div>
        <h3 className="mb-3 text-foreground">Disponibilidade</h3>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="in-stock"
            checked={showOnlyInStock}
            onCheckedChange={(checked) => setShowOnlyInStock(checked as boolean)}
          />
          <Label htmlFor="in-stock" className="cursor-pointer text-foreground">
            Apenas em estoque
          </Label>
        </div>
      </div>

      {/* Limpar Filtros */}
      <Button
        variant="outline"
        onClick={clearAllFilters}
        className="w-full"
      >
        <X className="mr-2 w-4 h-4" />
        Limpar Filtros
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="min-h-screen bg-background">
          {/* Header do Catálogo */}
          <div className="bg-gradient-to-r from-primary to-accent text-white py-8 border-b border-border">
            <div className="container mx-auto px-4">
              <Button
                variant="ghost"
                onClick={onBackToHome}
                className="text-white hover:bg-white/10 mb-4"
              >
                <ArrowLeft className="mr-2 w-4 h-4" />
                Voltar
              </Button>
              <h1 className="text-white mb-2">Catálogo Completo</h1>
              <p className="opacity-90">
                {filteredProducts.length} produtos encontrados
              </p>
            </div>
          </div>

          {/* Barra de Busca e Filtros Mobile */}
          <div className="bg-white border-b border-border py-4">
            <div className="container mx-auto px-4">
              <div className="flex gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Buscar por código..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-input-background"
                  />
                </div>
                {/* Filtros Mobile */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="lg:hidden">
                      <SlidersHorizontal className="w-5 h-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-80">
                    <SheetHeader>
                      <SheetTitle>Filtros</SheetTitle>
                    </SheetHeader>
                    <div className="mt-6">
                      <FilterContent />
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>

          {/* Conteúdo Principal */}
          <div className="container mx-auto px-4 py-8">
            <div className="flex gap-8">
              {/* Filtros Desktop */}
              <aside className="hidden lg:block w-64 shrink-0">
                <div className="sticky top-4 bg-white border border-border rounded-lg p-6">
                  <h2 className="mb-6 text-foreground">Filtros</h2>
                  <FilterContent />
                </div>
              </aside>

              {/* Grid de Produtos */}
              <div className="flex-1">
                {filteredProducts.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">
                      Nenhum produto encontrado com os filtros selecionados.
                    </p>
                    <Button
                      variant="outline"
                      onClick={clearAllFilters}
                      className="mt-4"
                    >
                      Limpar Filtros
                    </Button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                      <ProductCard
                        key={product.code}
                        imageUrl={product.imageUrl}
                        productCode={product.code}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

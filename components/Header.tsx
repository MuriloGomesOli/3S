import { ShoppingCart, Search, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Header() {
  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded">
              <div className="w-8 h-8 flex items-center justify-center">
                <span className="text-white">3S</span>
              </div>
            </div>
            <div>
              <h1 className="text-primary">3S Produtos Industriais</h1>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Buscar produtos..."
                className="pl-10 bg-secondary border-border"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Buscar produtos..."
              className="pl-10 bg-secondary border-border"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

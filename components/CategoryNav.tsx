import { Button } from "./ui/button";

const categories = [
  "Todos",
  "Ferramentas",
  "Peças e Componentes",
  "Segurança",
  "Hidráulica",
  "Hardware",
  "Suprimentos",
];

export function CategoryNav() {
  return (
    <nav className="bg-secondary border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category, index) => (
            <Button
              key={category}
              variant={index === 0 ? "default" : "ghost"}
              className={index === 0 ? "bg-primary text-white hover:bg-primary/90 shrink-0" : "shrink-0"}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
}

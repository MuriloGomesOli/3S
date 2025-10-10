import { ProductCard } from "./ProductCard";

const products = [
  {
    code: "PROD-001",
    imageUrl: "https://images.unsplash.com/photo-1564957341689-f523f45caf21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwdG9vbHMlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzYwMDE5NDk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    code: "PROD-002",
    imageUrl: "https://images.unsplash.com/photo-1649956737025-7b7f42ac31f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFjaGluZXJ5JTIwcGFydHN8ZW58MXx8fHwxNzYwMDE5NDkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    code: "PROD-003",
    imageUrl: "https://images.unsplash.com/photo-1738782582520-d1be2a9d7bca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc2FmZXR5JTIwZXF1aXBtZW50fGVufDF8fHx8MTc2MDAxNDUxOHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    code: "PROD-004",
    imageUrl: "https://images.unsplash.com/photo-1738918897772-0ba101be25c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwdmFsdmVzJTIwcGlwZXN8ZW58MXx8fHwxNzU5OTM3MDg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    code: "PROD-005",
    imageUrl: "https://images.unsplash.com/photo-1745449563046-f75d0bd28f46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwaGFyZHdhcmV8ZW58MXx8fHwxNzYwMDE5NDkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    code: "PROD-006",
    imageUrl: "https://images.unsplash.com/photo-1641892238173-a28daf26c776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc3VwcGxpZXN8ZW58MXx8fHwxNzYwMDE5NDkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    code: "PROD-007",
    imageUrl: "https://images.unsplash.com/photo-1564957341689-f523f45caf21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwdG9vbHMlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzYwMDE5NDk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    code: "PROD-008",
    imageUrl: "https://images.unsplash.com/photo-1649956737025-7b7f42ac31f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFjaGluZXJ5JTIwcGFydHN8ZW58MXx8fHwxNzYwMDE5NDkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    code: "PROD-009",
    imageUrl: "https://images.unsplash.com/photo-1738782582520-d1be2a9d7bca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc2FmZXR5JTIwZXF1aXBtZW50fGVufDF8fHx8MTc2MDAxNDUxOHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    code: "PROD-010",
    imageUrl: "https://images.unsplash.com/photo-1738918897772-0ba101be25c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwdmFsdmVzJTIwcGlwZXN8ZW58MXx8fHwxNzU5OTM3MDg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    code: "PROD-011",
    imageUrl: "https://images.unsplash.com/photo-1745449563046-f75d0bd28f46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwaGFyZHdhcmV8ZW58MXx8fHwxNzYwMDE5NDkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    code: "PROD-012",
    imageUrl: "https://images.unsplash.com/photo-1641892238173-a28daf26c776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc3VwcGxpZXN8ZW58MXx8fHwxNzYwMDE5NDkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function ProductGrid() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-foreground mb-2">Nossos Produtos</h2>
          <p className="text-muted-foreground">
            Selecione os produtos pelo código para mais informações
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.code}
              imageUrl={product.imageUrl}
              productCode={product.code}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

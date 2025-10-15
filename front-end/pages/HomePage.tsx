import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { CategoryNav } from "../components/CategoryNav";
import { ProductGrid } from "../components/ProductGrid";
import { Footer } from "../components/Footer";

interface HomePageProps {
  onViewCatalog: () => void;
  onContactClick: () => void;
}

export function HomePage({ onViewCatalog, onContactClick }: HomePageProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero 
          onViewCatalog={onViewCatalog} 
          onContactClick={onContactClick}
        />
        <CategoryNav />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
}

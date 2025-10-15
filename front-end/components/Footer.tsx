import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary p-2 rounded">
                <span className="text-white">3S</span>
              </div>
              <h3 className="text-white">3S Produtos Industriais</h3>
            </div>
            <p className="text-white/80">
              Soluções completas em produtos industriais para sua empresa.
              Qualidade e confiança há anos no mercado.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="text-white/80">
                  <p>(11) 1234-5678</p>
                  <p>(11) 98765-4321</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-white/80">contato@3sprodutosindustriais.com.br</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-white/80">
                  São Paulo - SP<br />
                  Brasil
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/80 hover:text-primary transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-primary transition-colors">
                  Catálogo
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-primary transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60">
            © 2025 3S Produtos Industriais. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { ArrowLeft, ShoppingCart, Package, Phone, Mail, MapPin } from "lucide-react";
import { toast } from "sonner@2.0.3";

interface ContactPageProps {
  onBackToHome: () => void;
}

export function ContactPage({ onBackToHome }: ContactPageProps) {
  const [clientForm, setClientForm] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });

  const [supplierForm, setSupplierForm] = useState({
    company: "",
    cnpj: "",
    email: "",
    phone: "",
    category: "",
    message: "",
  });

  const handleClientSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setClientForm({
      name: "",
      email: "",
      phone: "",
      product: "",
      message: "",
    });
  };

  const handleSupplierSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Proposta enviada com sucesso! Analisaremos e retornaremos em breve.");
    setSupplierForm({
      company: "",
      cnpj: "",
      email: "",
      phone: "",
      category: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="min-h-screen bg-background">
          {/* Header */}
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
              <h1 className="text-white mb-2">Fale Conosco</h1>
              <p className="opacity-90">
                Estamos prontos para atender você
              </p>
            </div>
          </div>

          <div className="container mx-auto px-4 py-12">
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {/* Informações de Contato */}
              <div className="lg:col-span-3 grid md:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-foreground mb-1">Telefone</h3>
                        <p className="text-muted-foreground">(11) 4002-8922</p>
                        <p className="text-muted-foreground">(11) 98765-4321</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-foreground mb-1">E-mail</h3>
                        <p className="text-muted-foreground">contato@3sprodutos.com.br</p>
                        <p className="text-muted-foreground">vendas@3sprodutos.com.br</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-foreground mb-1">Endereço</h3>
                        <p className="text-muted-foreground">Rua Industrial, 1500</p>
                        <p className="text-muted-foreground">São Paulo - SP</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Formulários com Tabs */}
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="client" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="client" className="flex items-center gap-2">
                    <ShoppingCart className="w-4 h-4" />
                    Sou Cliente
                  </TabsTrigger>
                  <TabsTrigger value="supplier" className="flex items-center gap-2">
                    <Package className="w-4 h-4" />
                    Sou Fornecedor
                  </TabsTrigger>
                </TabsList>

                {/* Formulário para Clientes */}
                <TabsContent value="client">
                  <Card>
                    <CardHeader>
                      <CardTitle>Solicitar Orçamento ou Informações</CardTitle>
                      <CardDescription>
                        Preencha o formulário abaixo e nossa equipe entrará em contato para ajudá-lo com sua compra.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleClientSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="client-name">Nome Completo *</Label>
                            <Input
                              id="client-name"
                              type="text"
                              placeholder="Seu nome"
                              value={clientForm.name}
                              onChange={(e) => setClientForm({ ...clientForm, name: e.target.value })}
                              required
                              className="bg-input-background"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="client-email">E-mail *</Label>
                            <Input
                              id="client-email"
                              type="email"
                              placeholder="seu@email.com"
                              value={clientForm.email}
                              onChange={(e) => setClientForm({ ...clientForm, email: e.target.value })}
                              required
                              className="bg-input-background"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="client-phone">Telefone *</Label>
                            <Input
                              id="client-phone"
                              type="tel"
                              placeholder="(11) 98765-4321"
                              value={clientForm.phone}
                              onChange={(e) => setClientForm({ ...clientForm, phone: e.target.value })}
                              required
                              className="bg-input-background"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="client-product">Produto de Interesse</Label>
                            <Input
                              id="client-product"
                              type="text"
                              placeholder="Ex: PROD-001"
                              value={clientForm.product}
                              onChange={(e) => setClientForm({ ...clientForm, product: e.target.value })}
                              className="bg-input-background"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="client-message">Mensagem *</Label>
                          <Textarea
                            id="client-message"
                            placeholder="Descreva suas necessidades, quantidade desejada, prazo de entrega, etc."
                            rows={5}
                            value={clientForm.message}
                            onChange={(e) => setClientForm({ ...clientForm, message: e.target.value })}
                            required
                            className="bg-input-background resize-none"
                          />
                        </div>

                        <Button type="submit" size="lg" className="w-full md:w-auto">
                          Enviar Solicitação
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Formulário para Fornecedores */}
                <TabsContent value="supplier">
                  <Card>
                    <CardHeader>
                      <CardTitle>Proposta de Fornecimento</CardTitle>
                      <CardDescription>
                        Interessado em ser um fornecedor da 3S Produtos Industriais? Preencha o formulário e entraremos em contato.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSupplierSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="supplier-company">Nome da Empresa *</Label>
                            <Input
                              id="supplier-company"
                              type="text"
                              placeholder="Razão Social"
                              value={supplierForm.company}
                              onChange={(e) => setSupplierForm({ ...supplierForm, company: e.target.value })}
                              required
                              className="bg-input-background"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="supplier-cnpj">CNPJ *</Label>
                            <Input
                              id="supplier-cnpj"
                              type="text"
                              placeholder="00.000.000/0000-00"
                              value={supplierForm.cnpj}
                              onChange={(e) => setSupplierForm({ ...supplierForm, cnpj: e.target.value })}
                              required
                              className="bg-input-background"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="supplier-email">E-mail Corporativo *</Label>
                            <Input
                              id="supplier-email"
                              type="email"
                              placeholder="comercial@empresa.com"
                              value={supplierForm.email}
                              onChange={(e) => setSupplierForm({ ...supplierForm, email: e.target.value })}
                              required
                              className="bg-input-background"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="supplier-phone">Telefone *</Label>
                            <Input
                              id="supplier-phone"
                              type="tel"
                              placeholder="(11) 98765-4321"
                              value={supplierForm.phone}
                              onChange={(e) => setSupplierForm({ ...supplierForm, phone: e.target.value })}
                              required
                              className="bg-input-background"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="supplier-category">Categoria de Produtos *</Label>
                          <Input
                            id="supplier-category"
                            type="text"
                            placeholder="Ex: Ferramentas, Peças, Equipamentos de Segurança"
                            value={supplierForm.category}
                            onChange={(e) => setSupplierForm({ ...supplierForm, category: e.target.value })}
                            required
                            className="bg-input-background"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="supplier-message">Descrição dos Produtos/Serviços *</Label>
                          <Textarea
                            id="supplier-message"
                            placeholder="Descreva os produtos que sua empresa fornece, diferenciais, capacidade de produção, certificações, etc."
                            rows={5}
                            value={supplierForm.message}
                            onChange={(e) => setSupplierForm({ ...supplierForm, message: e.target.value })}
                            required
                            className="bg-input-background resize-none"
                          />
                        </div>

                        <Button type="submit" size="lg" className="w-full md:w-auto">
                          Enviar Proposta
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Informações Adicionais */}
            <div className="max-w-4xl mx-auto mt-12">
              <Card className="bg-secondary border-primary/20">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <h3 className="text-foreground mb-2">Horário de Atendimento</h3>
                    <p className="text-muted-foreground">
                      Segunda a Sexta: 08:00 às 18:00
                    </p>
                    <p className="text-muted-foreground">
                      Sábado: 08:00 às 12:00
                    </p>
                    <p className="text-muted-foreground mt-4">
                      Respondemos todas as solicitações em até 24 horas úteis.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

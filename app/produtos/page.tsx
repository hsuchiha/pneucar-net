import Link from "next/link"
import { ArrowRight, CheckCircle, Filter, Search, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProdutosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted/30 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-6 md:text-4xl lg:text-5xl">Nossos Produtos</h1>
            <p className="text-muted-foreground text-lg">
              Conheça nossa linha completa de pneus para todos os tipos de veículos, com as melhores marcas do mercado.
            </p>
          </div>
        </div>
      </section>

      {/* Products Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
            <div className="relative w-full md:w-auto md:min-w-[300px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Buscar produtos..." className="pl-10" />
            </div>

            <div className="flex items-center gap-4 w-full md:w-auto">
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" /> Filtrar
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4" /> Ordenar
              </Button>
            </div>
          </div>

          <Tabs defaultValue="todos" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:w-[600px] mx-auto mb-8">
              <TabsTrigger value="todos">Todos</TabsTrigger>
              <TabsTrigger value="carros">Carros</TabsTrigger>
              <TabsTrigger value="caminhonetes">Caminhonetes</TabsTrigger>
              <TabsTrigger value="caminhoes">Caminhões</TabsTrigger>
            </TabsList>

            <TabsContent value="todos" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{generateProductCards()}</div>
            </TabsContent>

            <TabsContent value="carros" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {generateProductCards().slice(0, 3)}
              </div>
            </TabsContent>

            <TabsContent value="caminhonetes" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {generateProductCards().slice(3, 6)}
              </div>
            </TabsContent>

            <TabsContent value="caminhoes" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {generateProductCards().slice(6, 9)}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Brands Section */}
      <section className="bg-muted/30 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Marcas Parceiras</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Trabalhamos com as melhores marcas do mercado para garantir qualidade e segurança.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {["Bridgestone", "Firestone", "Pirelli", "Goodyear", "Michelin", "Continental", "Dunlop", "Bandag"].map(
              (brand, index) => (
                <Card key={index} className="flex items-center justify-center h-32">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold">{brand}</h3>
                  </CardContent>
                </Card>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Por que escolher nossos produtos?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Oferecemos produtos de qualidade com benefícios exclusivos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Garantia de Qualidade",
                description:
                  "Todos os nossos produtos possuem garantia de fábrica e passam por rigorosos testes de qualidade.",
              },
              {
                title: "Preços Competitivos",
                description: "Oferecemos preços justos e competitivos, com opções de pagamento facilitadas.",
              },
              {
                title: "Montagem Gratuita",
                description: "Na compra de pneus, a montagem é gratuita, incluindo balanceamento e alinhamento.",
              },
              {
                title: "Suporte Técnico",
                description:
                  "Nossa equipe técnica está sempre disponível para auxiliar na escolha do produto ideal para o seu veículo.",
              },
            ].map((benefit, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" /> {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/30 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Perguntas Frequentes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Tire suas dúvidas sobre nossos produtos.</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid gap-6">
              {[
                {
                  question: "Como escolher o pneu certo para meu veículo?",
                  answer:
                    "Para escolher o pneu ideal, considere o tipo de veículo, condições de uso (urbano, estrada, off-road), clima da região e as especificações recomendadas pelo fabricante do veículo. Nossa equipe técnica pode auxiliar nessa escolha.",
                },
                {
                  question: "Qual a vida útil média de um pneu?",
                  answer:
                    "A vida útil de um pneu varia conforme o uso, manutenção e qualidade. Em média, um pneu de boa qualidade dura entre 40.000 e 60.000 km, mas isso pode variar dependendo de fatores como estilo de direção, condições das vias e manutenção regular.",
                },
                {
                  question: "Posso misturar marcas ou modelos de pneus no meu veículo?",
                  answer:
                    "Não é recomendado misturar marcas ou modelos diferentes, especialmente no mesmo eixo. Isso pode afetar a estabilidade, aderência e segurança do veículo. O ideal é utilizar pneus iguais em todas as rodas.",
                },
                {
                  question: "Qual a diferença entre pneus radiais e diagonais?",
                  answer:
                    "Pneus radiais têm as lonas dispostas em sentido radial (do centro para a borda), oferecendo maior estabilidade, durabilidade e economia de combustível. Já os diagonais têm as lonas cruzadas diagonalmente, sendo mais robustos para uso em terrenos acidentados, mas com menor conforto e durabilidade em estradas.",
                },
              ].map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Não encontrou o que procura?</h2>
              <p className="mb-8 text-lg opacity-90">
                Entre em contato conosco para verificarmos a disponibilidade do produto desejado ou para receber
                orientação personalizada.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/contato">Falar com um Especialista</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link href="/servicos">Ver Serviços</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function generateProductCards() {
  const products = [
    {
      name: "Bridgestone Ecopia EP150",
      category: "Pneu para Carros",
      description:
        "Pneu econômico com baixa resistência ao rolamento, proporcionando economia de combustível e durabilidade.",
      price: "R$ 399,90",
      features: ["Economia de combustível", "Boa aderência em piso molhado", "Baixo ruído", "Durabilidade"],
    },
    {
      name: "Bridgestone Turanza ER300",
      category: "Pneu para Carros",
      description:
        "Pneu premium para carros de passeio, oferecendo conforto, segurança e desempenho em todas as condições.",
      price: "R$ 499,90",
      features: ["Alta performance", "Excelente aderência", "Conforto superior", "Estabilidade em curvas"],
    },
    {
      name: "Firestone F-600",
      category: "Pneu para Carros",
      description: "Pneu versátil para uso diário, com boa relação custo-benefício e desempenho confiável.",
      price: "R$ 349,90",
      features: ["Custo-benefício", "Boa durabilidade", "Desempenho equilibrado", "Conforto"],
    },
    {
      name: "Bridgestone Dueler H/T 684",
      category: "Pneu para Caminhonetes",
      description: "Pneu para SUVs e caminhonetes, ideal para uso misto (asfalto e terra), com excelente durabilidade.",
      price: "R$ 699,90",
      features: ["Uso misto", "Alta resistência", "Tração em diversos terrenos", "Durabilidade"],
    },
    {
      name: "Bridgestone Dueler A/T REVO 3",
      category: "Pneu para Caminhonetes",
      description: "Pneu all-terrain para caminhonetes e SUVs, com desempenho superior em qualquer terreno.",
      price: "R$ 799,90",
      features: ["All-terrain", "Tração off-road", "Resistência a cortes", "Baixo ruído em asfalto"],
    },
    {
      name: "Firestone Destination A/T",
      category: "Pneu para Caminhonetes",
      description:
        "Pneu versátil para caminhonetes, com bom desempenho tanto em asfalto quanto em terrenos irregulares.",
      price: "R$ 649,90",
      features: ["Versatilidade", "Boa tração", "Resistente a impactos", "Durabilidade"],
    },
    {
      name: "Bridgestone M840",
      category: "Pneu para Caminhões",
      description: "Pneu para eixo de tração de caminhões, com excelente durabilidade e tração em diversas condições.",
      price: "R$ 1.899,90",
      features: ["Alta durabilidade", "Tração superior", "Recapável", "Resistente a cortes"],
    },
    {
      name: "Bridgestone R268",
      category: "Pneu para Caminhões",
      description: "Pneu para eixo direcional de caminhões, com baixa resistência ao rolamento e alta quilometragem.",
      price: "R$ 1.799,90",
      features: ["Economia de combustível", "Alta quilometragem", "Desgaste uniforme", "Recapável"],
    },
    {
      name: "Firestone FS557",
      category: "Pneu para Caminhões",
      description: "Pneu para uso misto em caminhões, ideal para operações on/off road, com excelente custo-benefício.",
      price: "R$ 1.699,90",
      features: ["Uso misto", "Resistente a impactos", "Boa tração", "Custo-benefício"],
    },
  ]

  return products.map((product, index) => (
    <Card key={index} className="h-full flex flex-col">
      <CardHeader>
        <div className="text-sm font-medium text-muted-foreground mb-2">{product.category}</div>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription className="text-base">{product.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="text-2xl font-bold mb-4">{product.price}</div>
        <h4 className="font-bold mb-2">Características:</h4>
        <ul className="space-y-2">
          {product.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-1" />
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href="/contato" className="flex items-center justify-center gap-2">
            Solicitar Orçamento <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  ))
}

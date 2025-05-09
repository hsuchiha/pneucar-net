import { Link } from "react-router-dom"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"

export default function ProductsPage() {
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

      {/* Products List */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
                name: "Bridgestone Dueler H/T 684",
                category: "Pneu para Caminhonetes",
                description:
                  "Pneu para SUVs e caminhonetes, ideal para uso misto (asfalto e terra), com excelente durabilidade.",
                price: "R$ 699,90",
                features: ["Uso misto", "Alta resistência", "Tração em diversos terrenos", "Durabilidade"],
              },
            ].map((product, index) => (
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
                    <Link to="/contato" className="flex items-center justify-center gap-2">
                      Solicitar Orçamento <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

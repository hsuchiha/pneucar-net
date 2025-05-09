import { Link } from "react-router-dom"
import { ArrowRight, CheckCircle, Truck, Wrench } from "lucide-react"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted/30 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-6 md:text-4xl lg:text-5xl">Nossos Serviços</h1>
            <p className="text-muted-foreground text-lg">
              Conheça os serviços especializados que oferecemos para garantir a segurança e o desempenho do seu veículo.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Venda de Pneus Novos",
                description:
                  "Oferecemos uma ampla variedade de pneus novos das melhores marcas do mercado, incluindo Bridgestone, para todos os tipos de veículos.",
                icon: <Truck className="h-10 w-10" />,
                features: [
                  "Pneus para carros de passeio",
                  "Pneus para SUVs e caminhonetes",
                  "Pneus para caminhões e ônibus",
                  "Garantia de fábrica",
                  "Montagem inclusa",
                ],
              },
              {
                title: "Venda de Pneus Seminovos",
                description:
                  "Opção econômica e sustentável, nossos pneus seminovos passam por rigorosos testes de qualidade e segurança.",
                icon: <Truck className="h-10 w-10" />,
                features: [
                  "Pneus com boa quilometragem restante",
                  "Inspeção rigorosa de qualidade",
                  "Preços acessíveis",
                  "Opção sustentável",
                  "Garantia de 3 meses",
                ],
              },
              {
                title: "Alinhamento",
                description:
                  "Serviço de alinhamento computadorizado que garante maior segurança, menor desgaste dos pneus e economia de combustível.",
                icon: <Wrench className="h-10 w-10" />,
                features: [
                  "Alinhamento computadorizado 3D",
                  "Correção de ângulos de camber, caster e convergência",
                  "Diagnóstico completo da suspensão",
                  "Maior vida útil dos pneus",
                  "Melhor dirigibilidade",
                ],
              },
            ].map((service, index) => (
              <Card key={index} className="h-full flex flex-col">
                <CardHeader>
                  <div className="text-primary mb-4">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <h4 className="font-bold mb-2">O que incluímos:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
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
                      Agendar Serviço <ArrowRight className="h-4 w-4" />
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

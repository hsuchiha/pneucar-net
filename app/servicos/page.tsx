import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Truck, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicosPage() {
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
              {
                title: "Balanceamento",
                description:
                  "Balanceamento preciso das rodas para eliminar vibrações, garantindo conforto ao dirigir e prolongando a vida útil dos pneus.",
                icon: <Wrench className="h-10 w-10" />,
                features: [
                  "Balanceamento computadorizado",
                  "Eliminação de vibrações",
                  "Maior conforto ao dirigir",
                  "Menor desgaste dos componentes da suspensão",
                  "Prolongamento da vida útil dos pneus",
                ],
              },
              {
                title: "Recapagem",
                description:
                  "Em parceria com a Bandag, oferecemos serviços de recapagem de alta qualidade, proporcionando economia e sustentabilidade.",
                icon: <CheckCircle className="h-10 w-10" />,
                features: [
                  "Tecnologia Bandag",
                  "Economia de até 70% em relação a pneus novos",
                  "Sustentabilidade ambiental",
                  "Mesma quilometragem de um pneu novo",
                  "Garantia de qualidade",
                ],
              },
              {
                title: "Manutenção Automotiva",
                description:
                  "Serviços de manutenção preventiva e corretiva para garantir o bom funcionamento do seu veículo.",
                icon: <Wrench className="h-10 w-10" />,
                features: [
                  "Troca de óleo e filtros",
                  "Verificação e ajuste da suspensão",
                  "Diagnóstico eletrônico",
                  "Manutenção de freios",
                  "Revisões periódicas",
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
                    <Link href="/contato" className="flex items-center justify-center gap-2">
                      Agendar Serviço <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-muted/30 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nosso Processo de Trabalho</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Conheça como funciona nosso atendimento, do diagnóstico à entrega do serviço.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Diagnóstico",
                description: "Realizamos uma avaliação completa do seu veículo para identificar as necessidades.",
              },
              {
                step: "02",
                title: "Orçamento",
                description: "Apresentamos um orçamento detalhado e transparente, sem surpresas.",
              },
              {
                step: "03",
                title: "Execução",
                description: "Nossos técnicos especializados realizam o serviço com equipamentos de última geração.",
              },
              {
                step: "04",
                title: "Entrega",
                description: "Entregamos seu veículo com o serviço concluído e garantia de qualidade.",
              },
            ].map((step, index) => (
              <Card key={index} className="relative overflow-hidden border-primary">
                <div className="absolute -right-4 -top-4 bg-primary text-primary-foreground text-4xl font-bold w-16 h-16 flex items-center justify-center rounded-full opacity-10">
                  {step.step}
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-primary">{step.step}</span> {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{step.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-6 md:text-3xl">Equipamentos de Última Geração</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Na PneusCar Irecê, investimos constantemente em tecnologia para oferecer serviços de alta qualidade.
                  Nossos equipamentos de última geração garantem precisão e eficiência em todos os serviços realizados.
                </p>
                <p>
                  Contamos com alinhador computadorizado 3D, balanceadoras eletrônicas, equipamentos para montagem e
                  desmontagem de pneus, entre outros, todos operados por profissionais altamente treinados.
                </p>
                <p>
                  Essa combinação de tecnologia avançada e expertise técnica nos permite oferecer serviços de qualidade
                  superior, garantindo a segurança e o desempenho do seu veículo.
                </p>
              </div>

              <Button asChild className="mt-6">
                <Link href="/contato">Agendar Serviço</Link>
              </Button>
            </div>

            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image src="/images/workshop.png" alt="Equipamentos PneusCar Irecê" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/30 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Perguntas Frequentes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tire suas dúvidas sobre nossos serviços e produtos.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid gap-6">
              {[
                {
                  question: "Com que frequência devo alinhar meu veículo?",
                  answer:
                    "Recomendamos realizar o alinhamento a cada 10.000 km ou quando perceber sintomas como o carro puxando para um dos lados, desgaste irregular dos pneus ou volante desalinhado.",
                },
                {
                  question: "Qual a diferença entre pneus novos e seminovos?",
                  answer:
                    "Pneus novos oferecem máxima durabilidade e garantia de fábrica. Já os seminovos são pneus usados que passaram por rigorosa inspeção, têm boa quilometragem restante e são oferecidos a preços mais acessíveis, com garantia nossa.",
                },
                {
                  question: "A recapagem é segura?",
                  answer:
                    "Sim, quando realizada com tecnologia adequada e em pneus com carcaça em boas condições. Utilizamos a tecnologia Bandag, líder mundial em recapagem, que garante desempenho similar ao de um pneu novo.",
                },
                {
                  question: "Quanto tempo dura um serviço de alinhamento e balanceamento?",
                  answer:
                    "Em média, o serviço completo de alinhamento e balanceamento leva cerca de 1 a 2 horas, dependendo do tipo de veículo e das condições dos componentes da suspensão.",
                },
                {
                  question: "Vocês oferecem garantia nos serviços?",
                  answer:
                    "Sim, todos os nossos serviços possuem garantia. O período varia conforme o tipo de serviço realizado. Pneus novos têm garantia de fábrica, pneus seminovos têm garantia de 3 meses, e serviços como alinhamento e balanceamento têm garantia de 3 meses ou 5.000 km.",
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
              <h2 className="text-3xl font-bold mb-4">Pronto para agendar um serviço?</h2>
              <p className="mb-8 text-lg opacity-90">
                Entre em contato conosco hoje mesmo para agendar um serviço ou obter mais informações sobre nossos
                produtos.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/contato">Agendar Serviço</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link href="/produtos">Ver Produtos</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

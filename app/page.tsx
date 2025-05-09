import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, MapPin, Phone, Star, Truck, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { ParallaxSection } from "@/components/ui/parallax-section"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { PromotionalCarousel } from "@/components/promotional-carousel"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/exterior.png" alt="PneusCar Irecê" fill className="object-cover opacity-50" priority />
        </div>
        <div className="hero-pattern absolute inset-0 z-10"></div>
        <div className="container relative z-20 mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl">
            <ScrollAnimation direction="down" delay={200}>
              <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Segurança e Qualidade em Cada Pneu
              </h1>
            </ScrollAnimation>
            <ScrollAnimation delay={400}>
              <p className="mb-8 text-lg md:text-xl text-gray-200">
                Especialistas em venda de pneus novos e seminovos, serviços de alinhamento, balanceamento e manutenção
                automotiva em Irecê.
              </p>
            </ScrollAnimation>
            <ScrollAnimation delay={600}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 group relative overflow-hidden">
                  <Link href="/contato" className="flex items-center gap-2">
                    Agendar Serviço
                    <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-black/70 backdrop-blur-sm text-white border-2 border-white hover:bg-black/60"
                >
                  <Link href="/produtos" className="flex items-center gap-2">
                    Ver Produtos
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 15, label: "Anos de Experiência", prefix: "+", suffix: "" },
              { value: 5000, label: "Clientes Satisfeitos", prefix: "+", suffix: "" },
              { value: 10000, label: "Pneus Vendidos", prefix: "+", suffix: "" },
              { value: 98, label: "Satisfação", prefix: "", suffix: "%" },
            ].map((stat, index) => (
              <ScrollAnimation key={index} delay={200 * index}>
                <Card className="text-center h-full border-none bg-transparent shadow-none hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors duration-300">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-3xl md:text-4xl font-bold text-primary">
                      <AnimatedCounter end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    <PromotionalCarousel />
    
      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Por que escolher a PneusCar Irecê?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Oferecemos soluções completas para seus pneus com qualidade, segurança e tecnologia.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <CheckCircle className="h-10 w-10 text-primary mb-2" />,
                title: "Qualidade Garantida",
                description:
                  "Trabalhamos com as melhores marcas do mercado, incluindo Bridgestone, garantindo durabilidade e segurança para seu veículo.",
              },
              {
                icon: <Wrench className="h-10 w-10 text-primary mb-2" />,
                title: "Serviços Especializados",
                description:
                  "Equipe técnica altamente qualificada para realizar alinhamento, balanceamento e manutenção com precisão e eficiência.",
              },
              {
                icon: <Truck className="h-10 w-10 text-primary mb-2" />,
                title: "Amplo Estoque",
                description:
                  "Disponibilizamos uma grande variedade de pneus para todos os tipos de veículos, desde carros de passeio até caminhões.",
              },
            ].map((feature, index) => (
              <ScrollAnimation key={index} delay={200 * index}>
                <Card className="h-full border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group">
                  <CardHeader className="pb-2">
                    <div className="transform transition-transform duration-300 group-hover:scale-110">
                      {feature.icon}
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="bg-muted/30 py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ParallaxSection
              speed={0.1}
              className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden"
            >
              <Image
                src="/images/workshop.png"
                alt="Oficina PneusCar Irecê"
                fill
                className="object-cover rounded-lg transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </ParallaxSection>

            <ScrollAnimation direction="left">
              <h2 className="text-3xl font-bold mb-6">Sobre a PneusCar Irecê</h2>
              <p className="text-muted-foreground mb-6">
                Somos uma empresa especializada na venda de pneus novos e seminovos, oferecendo serviços de alinhamento,
                balanceamento e manutenção automotiva em Irecê, Bahia.
              </p>
              <p className="text-muted-foreground mb-6">
                Com anos de experiência no mercado, a PneusCar Irecê se destaca pelo atendimento personalizado e
                produtos de alta qualidade, sendo parceira oficial Bridgestone e Bandag.
              </p>
              <Button asChild className="mt-2 group relative overflow-hidden">
                <Link href="/sobre" className="flex items-center gap-2">
                  <span className="relative z-10">Conheça Nossa História</span>
                  <ArrowRight className="h-4 w-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                  <span className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </Link>
              </Button>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Nossos Serviços</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Oferecemos uma gama completa de serviços para manter seu veículo em perfeitas condições.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Venda de Pneus",
                description: "Ampla variedade de pneus novos e seminovos para todos os tipos de veículos.",
                icon: <Truck className="h-10 w-10" />,
              },
              {
                title: "Alinhamento",
                description: "Alinhamento computadorizado para garantir segurança e menor desgaste dos pneus.",
                icon: <Wrench className="h-10 w-10" />,
              },
              {
                title: "Balanceamento",
                description: "Balanceamento preciso para eliminar vibrações e garantir conforto ao dirigir.",
                icon: <CheckCircle className="h-10 w-10" />,
              },
            ].map((service, index) => (
              <ScrollAnimation key={index} delay={200 * index}>
                <Card className="group h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-transparent hover:border-t-primary">
                  <CardHeader className="pb-2">
                    <div className="text-primary mb-2 transform transition-all duration-300 group-hover:scale-110">
                      {service.icon}
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{service.description}</CardDescription>
                    <Link
                      href="/servicos"
                      className="text-sm font-medium text-primary flex items-center gap-1 group-hover:underline relative overflow-hidden"
                    >
                      <span>Saiba mais</span>
                      <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>

          <div className="text-center mt-12">
            <ScrollAnimation delay={600}>
              <Button asChild size="lg" className="relative overflow-hidden group">
                <Link href="/servicos">
                  <span className="relative z-10">Ver Todos os Serviços</span>
                  <span className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </Link>
              </Button>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted/30 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">O Que Nossos Clientes Dizem</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A satisfação dos nossos clientes é a nossa maior prioridade.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Carlos Silva",
                text: "Excelente atendimento e serviço de qualidade. Fiz o alinhamento e balanceamento do meu carro e notei a diferença imediatamente.",
                rating: 5,
              },
              {
                name: "Ana Oliveira",
                text: "Comprei pneus novos para meu carro e fiquei muito satisfeita com o preço e a qualidade. Recomendo a todos!",
                rating: 5,
              },
              {
                name: "Roberto Santos",
                text: "Profissionais competentes e preços justos. O serviço foi rápido e eficiente. Certamente voltarei.",
                rating: 4,
              },
            ].map((testimonial, index) => (
              <ScrollAnimation key={index} delay={200 * index} direction={index % 2 === 0 ? "up" : "down"}>
                <Card className="h-full flex flex-col backdrop-blur-sm bg-white/50 dark:bg-gray-900/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex mb-2">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < testimonial.rating ? "fill-accent text-accent" : "text-muted"
                            } ${i < testimonial.rating ? "animate-pulse" : ""}`}
                            style={{ animationDelay: `${i * 0.2}s` }}
                          />
                        ))}
                    </div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">"{testimonial.text}"</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-lg p-8 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
              <div className="max-w-3xl mx-auto text-center relative z-10">
                <h2 className="text-3xl font-bold mb-4">Pronto para melhorar a segurança do seu veículo?</h2>
                <p className="mb-8 text-lg opacity-90">
                  Entre em contato conosco hoje mesmo para agendar um serviço ou obter mais informações sobre nossos
                  produtos.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90 group relative overflow-hidden"
                  >
                    <Link href="/contato" className="flex items-center gap-2">
                      <span className="relative z-10">Agendar Serviço</span>
                      <span className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    className="bg-black/80 text-white hover:bg-black/70 border-2 border-white group"
                  >
                    <a href="tel:+5574999551375" className="flex items-center gap-2">
                      <Phone className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                      <span>(74) 99955-1375</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Location Preview */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Nossa Localização</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Estamos localizados em Irecê, Bahia, em um local de fácil acesso.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <ScrollAnimation direction="right">
              <div className="h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-[1.02]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.8642287041236!2d-41.86341742394518!3d-11.30338748910376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x76b7a5c145f313d%3A0x1c680e6303423d9!2sAv.%20Primeiro%20de%20Janeiro%2C%2012%20-%20Irec%C3%AA%2C%20BA%2C%2044900-000!5e0!3m2!1spt-BR!2sbr!4v1715204989!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização PneusCar Irecê"
                ></iframe>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="left">
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-primary">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" /> Endereço
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>Av. Primeiro de Janeiro, 12</p>
                  <p>Centro, Irecê - BA</p>
                  <p>CEP: 44900-000</p>

                  <div className="pt-4">
                    <h4 className="font-bold mb-2">Horário de Funcionamento:</h4>
                    <p>Segunda a Sexta: 8h às 18h</p>
                    <p>Sábado: 8h às 12h</p>
                  </div>

                  <Button asChild className="mt-4 w-full group relative overflow-hidden">
                    <Link href="/contato">
                      <span className="relative z-10">Como Chegar</span>
                      <span className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </>
  )
}

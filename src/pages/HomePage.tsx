import { Link } from "react-router-dom"
import { ArrowRight, CheckCircle, Phone, Truck, Wrench } from "lucide-react"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { ScrollAnimation } from "../components/ui/scroll-animation"
import { AnimatedCounter } from "../components/ui/animated-counter"
import { PromotionalCarousel } from "../components/PromotionalCarousel"

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/exterior.png" alt="PneusCar Irecê" className="w-full h-full object-cover opacity-50" />
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
                  <Link to="/contato" className="flex items-center gap-2">
                    Agendar Serviço
                    <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-black/70 backdrop-blur-sm text-white border-2 border-white hover:bg-black/60"
                >
                  <Link to="/produtos" className="flex items-center gap-2">
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

      {/* Promotional Carousel */}
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
                    <Link to="/contato" className="flex items-center gap-2">
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
    </>
  )
}

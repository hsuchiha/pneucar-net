import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Award, CheckCircle, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted/30 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-6 md:text-4xl lg:text-5xl">Sobre a PneusCar Irecê</h1>
            <p className="text-muted-foreground text-lg">
              Conheça nossa história, missão e valores que nos tornam referência em pneus e serviços automotivos em
              Irecê.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-6 md:text-3xl">Nossa História</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  A PneusCar Irecê nasceu do sonho de oferecer serviços de qualidade e produtos confiáveis para os
                  motoristas da região de Irecê, na Bahia. Fundada com o compromisso de excelência, nossa empresa
                  rapidamente se tornou referência no setor de pneus e serviços automotivos.
                </p>
                <p>
                  Ao longo dos anos, investimos constantemente em tecnologia, treinamento de nossa equipe e na ampliação
                  do nosso portfólio de produtos e serviços. Estabelecemos parcerias estratégicas com marcas renomadas
                  como Bridgestone e Bandag, garantindo aos nossos clientes acesso ao que há de melhor no mercado.
                </p>
                <p>
                  Hoje, a PneusCar Irecê é reconhecida não apenas pela qualidade dos produtos e serviços, mas também
                  pelo atendimento personalizado e pelo compromisso com a segurança e satisfação dos nossos clientes.
                </p>
              </div>
            </div>

            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
              <img src="/images/exterior.png" alt="Fachada PneusCar Irecê" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-muted/30 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Missão, Visão e Valores</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nossos princípios fundamentais que guiam todas as nossas ações.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" /> Missão
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Oferecer soluções em pneus com qualidade, segurança e tecnologia, promovendo a mobilidade de forma
                  eficiente para veículos de todos os portes.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" /> Visão
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Ser reconhecida como a empresa líder em soluções para pneus na região, destacando-se pela excelência
                  em atendimento e qualidade dos produtos e serviços.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" /> Valores
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  <ul className="space-y-2">
                    <li>• Compromisso com a qualidade</li>
                    <li>• Ética e transparência</li>
                    <li>• Valorização dos clientes</li>
                    <li>• Responsabilidade social</li>
                    <li>• Inovação constante</li>
                  </ul>
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}

import Image from "next/image"
import { Award, CheckCircle, Clock, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SobrePage() {
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
              <Image src="/images/exterior.png" alt="Fachada PneusCar Irecê" fill className="object-cover" />
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

      {/* Our Team */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nossa Equipe</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Contamos com profissionais altamente qualificados e comprometidos com a excelência.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "João Silva",
                position: "Gerente Geral",
                description:
                  "Com mais de 15 anos de experiência no setor automotivo, João lidera nossa equipe com dedicação e conhecimento técnico.",
              },
              {
                name: "Maria Oliveira",
                position: "Atendimento ao Cliente",
                description:
                  "Especialista em proporcionar a melhor experiência aos nossos clientes, Maria garante que suas necessidades sejam atendidas.",
              },
              {
                name: "Pedro Santos",
                position: "Técnico Especialista",
                description:
                  "Responsável pelos serviços de alinhamento e balanceamento, Pedro é certificado pelas principais marcas do setor.",
              },
            ].map((member, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.position}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-muted/30 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nossos Parceiros</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Trabalhamos com as melhores marcas do mercado para garantir qualidade e confiabilidade.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">Bridgestone</h3>
                <p className="text-muted-foreground">Parceiro oficial para pneus de alta performance</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">Bandag</h3>
                <p className="text-muted-foreground">Especialista em recapagem de pneus</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nossa Trajetória</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Conheça os principais marcos da história da PneusCar Irecê.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                year: "2010",
                title: "Fundação",
                description: "Início das atividades da PneusCar em Irecê, com foco na venda de pneus.",
              },
              {
                year: "2013",
                title: "Expansão de Serviços",
                description: "Ampliação do portfólio com serviços de alinhamento e balanceamento.",
              },
              {
                year: "2015",
                title: "Parceria Bridgestone",
                description: "Estabelecimento da parceria oficial com a Bridgestone.",
              },
              {
                year: "2018",
                title: "Nova Sede",
                description: "Inauguração da nova sede com instalações modernas e equipamentos de última geração.",
              },
              {
                year: "2020",
                title: "Parceria Bandag",
                description: "Início da parceria com a Bandag para serviços de recapagem.",
              },
            ].map((item, index) => (
              <div key={index} className="relative pl-8 pb-8 border-l border-muted last:border-0 last:pb-0">
                <div className="absolute left-0 top-0 -translate-x-1/2 bg-primary text-white rounded-full p-1">
                  <Clock className="h-4 w-4" />
                </div>
                <div className="mb-1 text-primary font-bold">{item.year}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import { Calendar, Clock, Mail, MapPin, Phone, Send, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { cn } from "@/lib/utils"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"

export default function ContatoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [date, setDate] = useState<Date>()
  const [time, setTime] = useState<string>("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulando envio do formulário
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Formulário enviado com sucesso!",
      description: "Entraremos em contato em breve.",
    })

    setIsSubmitting(false)
    e.currentTarget.reset()
    setDate(undefined)
    setTime("")
  }

  const handleScheduleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulando envio do formulário
    await new Promise((resolve) => setTimeout(resolve, 1500))

    const formData = new FormData(e.currentTarget)
    const nome = formData.get("nome")
    const telefone = formData.get("telefone")
    const servico = formData.get("servico")
    const dataFormatada = date ? format(date, "dd/MM/yyyy", { locale: ptBR }) : ""

    toast({
      title: "Agendamento realizado com sucesso!",
      description: `${nome}, seu agendamento para ${servico} foi confirmado para ${dataFormatada} às ${time}. Entraremos em contato pelo número ${telefone} para confirmar.`,
    })

    setIsSubmitting(false)
    e.currentTarget.reset()
    setDate(undefined)
    setTime("")
  }

  const availableTimes = [
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-muted/30 to-muted/50 dark:from-gray-900 dark:to-gray-800 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl font-bold mb-6 md:text-4xl lg:text-5xl">Entre em Contato</h1>
              <p className="text-muted-foreground text-lg">
                Estamos à disposição para atender suas necessidades e responder suas dúvidas.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="contato" className="w-full">
            <ScrollAnimation>
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-2">
                  <TabsTrigger value="contato" className="text-sm md:text-base">
                    Contato
                  </TabsTrigger>
                  <TabsTrigger value="agendamento" className="text-sm md:text-base">
                    Agendamento
                  </TabsTrigger>
                </TabsList>
              </div>
            </ScrollAnimation>

            <TabsContent value="contato">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Info */}
                <ScrollAnimation direction="right">
                  <h2 className="text-2xl font-bold mb-6 relative inline-block">
                    Informações de Contato
                    <span className="absolute -bottom-1 left-0 w-1/3 h-0.5 bg-primary"></span>
                  </h2>

                  <div className="grid gap-8">
                    <Card className="hover:shadow-md transition-all duration-300 group border-l-4 border-l-transparent hover:border-l-primary">
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2">
                          <MapPin className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />{" "}
                          Endereço
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">
                          <p>Av. Primeiro de Janeiro, 12</p>
                          <p>Centro, Irecê - BA</p>
                          <p>CEP: 44900-000</p>
                        </CardDescription>
                      </CardContent>
                    </Card>

                    <Card className="hover:shadow-md transition-all duration-300 group border-l-4 border-l-transparent hover:border-l-primary">
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2">
                          <Phone className="h-5 w-5 text-primary group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />{" "}
                          Telefone
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">
                          <p>
                            <a href="tel:+5574999551375" className="hover:text-primary transition-colors duration-300">
                              +55 74 99955-1375
                            </a>
                          </p>
                        </CardDescription>
                      </CardContent>
                    </Card>

                    <Card className="hover:shadow-md transition-all duration-300 group border-l-4 border-l-transparent hover:border-l-primary">
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2">
                          <Mail className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />{" "}
                          E-mail
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">
                          <p>
                            <a
                              href="mailto:pneuscarreformadora@gmail.com"
                              className="hover:text-primary transition-colors duration-300"
                            >
                              pneuscarreformadora@gmail.com
                            </a>
                          </p>
                        </CardDescription>
                      </CardContent>
                    </Card>

                    <Card className="hover:shadow-md transition-all duration-300 group border-l-4 border-l-transparent hover:border-l-primary">
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2">
                          <Clock className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />{" "}
                          Horário de Funcionamento
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">
                          <p>Segunda a Sexta: 8h às 18h</p>
                          <p>Sábado: 8h às 12h</p>
                          <p>Domingo: Fechado</p>
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-bold mb-4 relative inline-block">
                      Localização
                      <span className="absolute -bottom-1 left-0 w-1/3 h-0.5 bg-primary"></span>
                    </h3>
                    <div className="h-[300px] rounded-lg overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-[1.01]">
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
                  </div>
                </ScrollAnimation>

                {/* Contact Form */}
                <ScrollAnimation direction="left">
                  <h2 className="text-2xl font-bold mb-6 relative inline-block">
                    Envie uma Mensagem
                    <span className="absolute -bottom-1 left-0 w-1/3 h-0.5 bg-primary"></span>
                  </h2>

                  <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-primary">
                    <CardContent className="pt-6">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="nome">Nome Completo</Label>
                            <Input
                              id="nome"
                              placeholder="Seu nome completo"
                              required
                              className="transition-all duration-300 border-muted focus:border-primary focus:ring-primary"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="email">E-mail</Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="seu.email@exemplo.com"
                              required
                              className="transition-all duration-300 border-muted focus:border-primary focus:ring-primary"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="telefone">Telefone</Label>
                            <Input
                              id="telefone"
                              placeholder="(00) 00000-0000"
                              required
                              className="transition-all duration-300 border-muted focus:border-primary focus:ring-primary"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="assunto">Assunto</Label>
                            <Select required>
                              <SelectTrigger
                                id="assunto"
                                className="transition-all duration-300 border-muted focus:border-primary focus:ring-primary"
                              >
                                <SelectValue placeholder="Selecione o assunto" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="orcamento">Orçamento</SelectItem>
                                <SelectItem value="agendamento">Agendamento</SelectItem>
                                <SelectItem value="duvida">Dúvida</SelectItem>
                                <SelectItem value="reclamacao">Reclamação</SelectItem>
                                <SelectItem value="outro">Outro</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="veiculo">Tipo de Veículo</Label>
                          <RadioGroup defaultValue="carro" className="flex flex-wrap gap-4">
                            {[
                              { id: "carro", label: "Carro" },
                              { id: "caminhonete", label: "Caminhonete" },
                              { id: "caminhao", label: "Caminhão" },
                              { id: "outro-veiculo", label: "Outro", value: "outro" },
                            ].map((option) => (
                              <div key={option.id} className="flex items-center space-x-2">
                                <RadioGroupItem
                                  value={option.value || option.id}
                                  id={option.id}
                                  className="text-primary"
                                />
                                <Label htmlFor={option.id}>{option.label}</Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="mensagem">Mensagem</Label>
                          <Textarea
                            id="mensagem"
                            placeholder="Descreva sua necessidade ou dúvida..."
                            rows={5}
                            required
                            className="transition-all duration-300 border-muted focus:border-primary focus:ring-primary resize-none"
                          />
                        </div>

                        <Button type="submit" className="w-full group relative overflow-hidden" disabled={isSubmitting}>
                          {isSubmitting ? (
                            <span className="flex items-center gap-2">
                              <svg
                                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                              </svg>
                              Enviando...
                            </span>
                          ) : (
                            <>
                              <span className="flex items-center gap-2 relative z-10">
                                <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                Enviar Mensagem
                              </span>
                              <span className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                            </>
                          )}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              </div>
            </TabsContent>

            <TabsContent value="agendamento">
              <div className="max-w-3xl mx-auto">
                <ScrollAnimation>
                  <h2 className="text-2xl font-bold mb-6 relative inline-block">
                    Agende seu Serviço
                    <span className="absolute -bottom-1 left-0 w-1/3 h-0.5 bg-primary"></span>
                  </h2>

                  <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-primary">
                    <CardContent className="pt-6">
                      <form onSubmit={handleScheduleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="nome">Nome Completo</Label>
                            <Input
                              id="nome"
                              name="nome"
                              placeholder="Seu nome completo"
                              required
                              className="transition-all duration-300 border-muted focus:border-primary focus:ring-primary"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="telefone">Telefone</Label>
                            <Input
                              id="telefone"
                              name="telefone"
                              placeholder="(00) 00000-0000"
                              required
                              className="transition-all duration-300 border-muted focus:border-primary focus:ring-primary"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="servico">Serviço Desejado</Label>
                          <Select required name="servico">
                            <SelectTrigger
                              id="servico"
                              className="transition-all duration-300 border-muted focus:border-primary focus:ring-primary"
                            >
                              <SelectValue placeholder="Selecione o serviço" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="troca-de-pneus">Troca de Pneus</SelectItem>
                              <SelectItem value="alinhamento">Alinhamento</SelectItem>
                              <SelectItem value="balanceamento">Balanceamento</SelectItem>
                              <SelectItem value="alinhamento-balanceamento">Alinhamento e Balanceamento</SelectItem>
                              <SelectItem value="manutencao">Manutenção Automotiva</SelectItem>
                              <SelectItem value="outro">Outro</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="veiculo">Tipo de Veículo</Label>
                          <RadioGroup defaultValue="carro" name="veiculo" className="flex flex-wrap gap-4">
                            {[
                              { id: "carro-agendamento", label: "Carro", value: "carro" },
                              { id: "caminhonete-agendamento", label: "Caminhonete", value: "caminhonete" },
                              { id: "caminhao-agendamento", label: "Caminhão", value: "caminhao" },
                              { id: "outro-veiculo-agendamento", label: "Outro", value: "outro" },
                            ].map((option) => (
                              <div key={option.id} className="flex items-center space-x-2">
                                <RadioGroupItem value={option.value} id={option.id} className="text-primary" />
                                <Label htmlFor={option.id}>{option.label}</Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>Data</Label>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button
                                  variant="outline"
                                  className={cn(
                                    "w-full justify-start text-left font-normal",
                                    !date && "text-muted-foreground",
                                  )}
                                >
                                  <Calendar className="mr-2 h-4 w-4" />
                                  {date
                                    ? format(date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })
                                    : "Selecione uma data"}
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                <CalendarComponent
                                  mode="single"
                                  selected={date}
                                  onSelect={setDate}
                                  disabled={
                                    (date) =>
                                      date < new Date(new Date().setHours(0, 0, 0, 0)) ||
                                      date.getDay() === 0 || // Domingo
                                      (date.getDay() === 6 && date.getHours() >= 12) // Sábado após 12h
                                  }
                                  initialFocus
                                  locale={ptBR}
                                />
                              </PopoverContent>
                            </Popover>
                          </div>

                          <div className="space-y-2">
                            <Label>Horário</Label>
                            <Select value={time} onValueChange={setTime} disabled={!date} required name="horario">
                              <SelectTrigger className="transition-all duration-300 border-muted focus:border-primary focus:ring-primary">
                                <SelectValue placeholder="Selecione um horário" />
                              </SelectTrigger>
                              <SelectContent>
                                {availableTimes.map((t) => (
                                  <SelectItem key={t} value={t}>
                                    {t}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="observacoes">Observações (opcional)</Label>
                          <Textarea
                            id="observacoes"
                            name="observacoes"
                            placeholder="Informações adicionais sobre o serviço..."
                            rows={3}
                            className="transition-all duration-300 border-muted focus:border-primary focus:ring-primary resize-none"
                          />
                        </div>

                        <Button
                          type="submit"
                          className="w-full group relative overflow-hidden"
                          disabled={isSubmitting || !date || !time}
                        >
                          {isSubmitting ? (
                            <span className="flex items-center gap-2">
                              <svg
                                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                              </svg>
                              Enviando...
                            </span>
                          ) : (
                            <>
                              <span className="flex items-center gap-2 relative z-10">
                                <Calendar className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                                Agendar Serviço
                              </span>
                              <span className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                            </>
                          )}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>

                  <div className="mt-8">
                    <Card className="bg-muted/30">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Info className="h-5 w-5 text-primary" /> Informações sobre o Agendamento
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          • O agendamento está sujeito à disponibilidade e confirmação pela nossa equipe.
                        </p>
                        <p className="text-sm text-muted-foreground">
                          • Após o envio do formulário, entraremos em contato para confirmar seu agendamento.
                        </p>
                        <p className="text-sm text-muted-foreground">
                          • Recomendamos chegar com 10 minutos de antecedência no dia do serviço.
                        </p>
                        <p className="text-sm text-muted-foreground">
                          • Em caso de impossibilidade de comparecimento, pedimos que nos avise com pelo menos 2 horas
                          de antecedência.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </ScrollAnimation>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gradient-to-r from-muted/30 to-muted/50 dark:from-gray-900 dark:to-gray-800 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Perguntas Frequentes</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Confira algumas das perguntas mais comuns sobre nossos serviços e produtos.
              </p>
            </div>
          </ScrollAnimation>

          <div className="max-w-3xl mx-auto">
            <div className="grid gap-6">
              {[
                {
                  question: "Como posso agendar um serviço?",
                  answer:
                    "Você pode agendar um serviço através do formulário de agendamento nesta página, ligando para nosso telefone ou visitando nossa loja física. Recomendamos o agendamento prévio para garantir um atendimento mais rápido.",
                },
                {
                  question: "Qual o prazo para resposta de um orçamento?",
                  answer:
                    "Normalmente, respondemos orçamentos em até 24 horas úteis. Para casos mais urgentes, recomendamos entrar em contato por telefone.",
                },
                {
                  question: "Vocês oferecem serviço de entrega?",
                  answer:
                    "Sim, oferecemos serviço de entrega para compras acima de um determinado valor, dependendo da região. Entre em contato para verificar a disponibilidade para sua localidade.",
                },
                {
                  question: "Como funciona a garantia dos produtos e serviços?",
                  answer:
                    "Todos os nossos produtos possuem garantia de fábrica. Os serviços têm garantia própria, que varia conforme o tipo de serviço realizado. Consulte as condições específicas no momento da compra ou agendamento.",
                },
              ].map((faq, index) => (
                <ScrollAnimation key={index} delay={200 * index}>
                  <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-transparent hover:border-l-primary">
                    <CardHeader>
                      <CardTitle className="text-lg group flex items-center">
                        <span className="w-0 h-0.5 bg-primary mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
                        {faq.question}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

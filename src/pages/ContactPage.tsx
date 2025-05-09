"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail } from "lucide-react"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Textarea } from "../components/ui/textarea"
import { ScrollAnimation } from "../components/ui/scroll-animation"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulando envio do formulário
    await new Promise((resolve) => setTimeout(resolve, 1500))

    alert("Formulário enviado com sucesso! Entraremos em contato em breve.")
    setIsSubmitting(false)
    e.currentTarget.reset()
  }

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
                        "Enviar Mensagem"
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </>
  )
}

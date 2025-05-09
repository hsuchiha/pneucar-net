import Link from "next/link"
import Image from "next/image"
import { Instagram, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNEMDAwMUEiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEg0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50"></div>
      <div className="container relative z-10 mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center">
              <div className="relative h-12 w-12 mr-2 overflow-hidden rounded-full border-2 border-primary">
                <Image
                  src="/images/micro-logo-circular.png"
                  alt="PneusCar Irecê"
                  width={48}
                  height={48}
                  className="h-full w-full object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              Empresa especializada na venda de pneus novos e seminovos, serviços de alinhamento, balanceamento e
              manutenção automotiva.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 relative inline-block">
              Links Rápidos
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Início", href: "/" },
                { name: "Sobre Nós", href: "/sobre" },
                { name: "Serviços", href: "/servicos" },
                { name: "Produtos", href: "/produtos" },
                { name: "Contato", href: "/contato" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary transition-colors group flex items-center"
                  >
                    <span className="w-0 h-0.5 bg-primary mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 relative inline-block">
              Serviços
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-2">
              {[
                "Venda de Pneus Novos",
                "Venda de Pneus Seminovos",
                "Alinhamento",
                "Balanceamento",
                "Manutenção Automotiva",
              ].map((service, index) => (
                <li key={index} className="text-sm group flex items-center">
                  <span className="w-0 h-0.5 bg-primary mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 relative inline-block">
              Contato
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 group">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-sm">Av. Primeiro de Janeiro, 12 - Irecê, BA, 44900-000</span>
              </li>
              <li className="flex items-center gap-2 group">
                <Phone className="h-5 w-5 text-primary shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                <a href="tel:+5574999551375" className="text-sm hover:text-primary transition-colors">
                  +55 74 99955-1375
                </a>
              </li>
              <li className="flex items-center gap-2 group">
                <Mail className="h-5 w-5 text-primary shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <a href="mailto:pneuscarreformadora@gmail.com" className="text-sm hover:text-primary transition-colors">
                  pneuscarreformadora@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-4 mt-4">
                <a
                  href="https://www.instagram.com/pneuscar.irece/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="bg-white dark:bg-gray-800 p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 group"
                >
                  <Instagram className="h-5 w-5 text-primary group-hover:text-primary/80 transition-colors" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} PneusCar Irecê. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

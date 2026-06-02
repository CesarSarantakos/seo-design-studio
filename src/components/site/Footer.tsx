import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Youtube, Facebook } from "lucide-react";
import logoFooter from "@/assets/gs-logo-footer.png";

export function Footer() {
  return (
    <footer className="bg-background-deep border-t border-border">
      <div className="container mx-auto px-6 py-12 grid gap-10 md:grid-cols-5">
        <div className="md:col-span-2">
          <img
            src={logoFooter}
            alt="GS"
            className="h-14 w-auto mb-4"
            width={200}
            height={70}
          />
          <p className="text-sm text-muted-foreground max-w-sm">
            Terceirização com presença, proteção e compromisso. Pessoas comprometidas, operações organizadas e a responsabilidade de servir com presença.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Institucional</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/quem-somos" className="hover:text-primary">Quem Somos</Link></li>
            <li><Link to="/solucoes" className="hover:text-primary">Soluções</Link></li>
            <li><Link to="/segmentos" className="hover:text-primary">Clientes</Link></li>
            <li><Link to="/trabalhe-conosco" className="hover:text-primary">Trabalhe Conosco</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Contato</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            
            <li>contato@gsservicos.com.br</li>
            <li>
              <a
                href="https://wa.me/5511930494888?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20servi%C3%A7os%20de%20terceiriza%C3%A7%C3%A3o.%20Pode%20me%20ajudar%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                (11) 93049-4888
              </a>
            </li>
            <li>R. Carlos Meira, 32 — Penha de França, São Paulo – SP</li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Siga a Gente</h3>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/company/gsservicos/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com/gs.gselite/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/gs.gselite/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCm3KWW5vPY3S4_0XUIFJ2qA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container mx-auto px-6 py-4 text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} GS — O que importa, cuidamos. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

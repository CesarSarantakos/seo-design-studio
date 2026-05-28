import { Link } from "@tanstack/react-router";
import logo from "@/assets/gs-logo.png";

export function Footer() {
  return (
    <footer className="bg-background-deep border-t border-border">
      <div className="container mx-auto px-6 py-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={logo} alt="GS" className="h-12 w-auto mb-4" width={180} height={60} />
          <p className="text-sm text-muted-foreground max-w-sm">
            Terceirização com presença, proteção e compromisso. Pessoas comprometidas, operações organizadas e a responsabilidade de servir com presença.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Institucional</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/quem-somos" className="hover:text-primary">Quem Somos</Link></li>
            <li><Link to="/solucoes" className="hover:text-primary">Soluções</Link></li>
            <li><Link to="/clientes" className="hover:text-primary">Clientes</Link></li>
            <li><Link to="/trabalhe-conosco" className="hover:text-primary">Trabalhe Conosco</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Contato</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/contato" className="hover:text-primary">Fale Conosco</Link></li>
            <li>contato@gs.com.br</li>
          </ul>
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
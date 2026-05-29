import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown, MessageCircle } from "lucide-react";
import logo from "@/assets/gs-logo.png";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/solucoes", label: "Soluções", hasDropdown: true },
  { to: "/quem-somos", label: "Quem Somos" },
  { to: "/clientes", label: "Clientes" },
  { to: "/contato", label: "Contato" },
] as const;

const solucoesItems = [
  { to: "/solucoes", label: "Portaria 24h" },
  { to: "/solucoes", label: "Controle de Acesso" },
  { to: "/solucoes", label: "Limpeza Profissional" },
  { to: "/solucoes", label: "Recepção e Copa" },
  { to: "/solucoes", label: "Manutenção Predial" },
  { to: "/solucoes", label: "Jardinagem" },
] as const;

const WHATSAPP_URL =
  "https://wa.me/5511930494888?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20servi%C3%A7os%20de%20terceiriza%C3%A7%C3%A3o.%20Pode%20me%20ajudar%3F";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-5">
        <Link to="/" className="flex items-center gap-2" aria-label="GS - Página inicial">
          <img
            src={logo}
            alt="GS - O que importa, cuidamos."
            className="h-14 w-auto"
            width={200}
            height={70}
            style={{ filter: "brightness(0) invert(1) drop-shadow(0 2px 8px rgba(0,0,0,0.4))" }}
          />
        </Link>
        <nav className="hidden lg:flex items-center gap-8" aria-label="Principal">
          {navItems.map((item) => (
            "hasDropdown" in item && item.hasDropdown ? (
              <div key={item.label} className="relative group">
                <Link
                  to={item.to}
                  className="flex items-center gap-1 text-sm font-medium tracking-wide text-foreground/90 hover:text-primary transition-colors uppercase"
                  activeProps={{ className: "text-primary" }}
                >
                  {item.label}
                  <ChevronDown className="w-3.5 h-3.5" />
                </Link>
                <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="bg-background-deep border border-border rounded-lg shadow-xl py-2 min-w-[220px]">
                    {solucoesItems.map((s) => (
                      <Link
                        key={s.label}
                        to={s.to}
                        className="block px-4 py-2 text-sm text-foreground/90 hover:text-primary hover:bg-foreground/5 transition-colors"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm font-medium tracking-wide text-foreground/90 hover:text-primary transition-colors uppercase"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            )
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors rounded-full px-5 py-2.5 text-sm font-semibold uppercase tracking-wide"
          >
            <MessageCircle className="w-4 h-4" />
            Fale com a GS
          </a>
        </nav>
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-foreground p-2"
          aria-label="Abrir menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-background-deep border-t border-border">
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-3" aria-label="Mobile">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="text-sm font-medium uppercase text-foreground/90 hover:text-primary py-2"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-full px-5 py-2.5 text-sm font-semibold uppercase tracking-wide mt-2"
            >
              <MessageCircle className="w-4 h-4" />
              Fale com a GS
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
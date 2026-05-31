import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown, MessageCircle } from "lucide-react";
import logo from "@/assets/gs-logo.png";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/solucoes", label: "Soluções", hasDropdown: true },
  { to: "/segmentos", label: "Segmentos", hasDropdown: true },
  { to: "/quem-somos", label: "Quem Somos" },
  { to: "/trabalhe-conosco", label: "Trabalhe Conosco" },
] as const;

const solucoesItems = [
  { to: "/solucoes/portaria-24h", label: "Portaria 24h" },
  { to: "/solucoes/limpeza-profissional", label: "Limpeza Profissional" },
  { to: "/solucoes/recepcao-e-atendimento", label: "Recepção e Atendimento" },
] as const;

const segmentosItems = [
  { to: "/segmentos/empresas", label: "Empresas" },
  { to: "/segmentos/condominios", label: "Condomínios" },
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
          {navItems.map((item) =>
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
                  <div className="bg-background-deep/95 backdrop-blur-xl border border-border rounded-lg shadow-2xl py-2 min-w-[240px]">
                    {(item.label === "Segmentos" ? segmentosItems : solucoesItems).map((s) => (
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
            ),
          )}
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
          className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg bg-foreground/10 backdrop-blur-md border border-foreground/20 text-foreground hover:bg-foreground/15 transition-colors"
          aria-label="Abrir menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-[#0B1B3D] border-t border-white/10 shadow-2xl shadow-black/40">
          <nav className="container mx-auto px-6 py-4 flex flex-col divide-y divide-white/10" aria-label="Mobile">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="text-sm font-medium uppercase text-white/90 hover:text-primary py-3"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-full px-5 py-2.5 text-sm font-semibold uppercase tracking-wide mt-4 border-0"
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

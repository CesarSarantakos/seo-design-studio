import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/gs-logo.png";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/quem-somos", label: "Quem Somos" },
  { to: "/solucoes", label: "Soluções" },
  { to: "/clientes", label: "Clientes" },
  { to: "/solicitar-proposta", label: "Solicitar Proposta" },
  { to: "/contato", label: "Contato" },
  { to: "/trabalhe-conosco", label: "Trabalhe Conosco" },
] as const;

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
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium tracking-wide text-foreground/90 hover:text-primary transition-colors uppercase"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
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
          </nav>
        </div>
      )}
    </header>
  );
}
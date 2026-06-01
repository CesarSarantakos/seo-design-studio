import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ShieldCheck, MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero-team.jpg";

export function HomeHero() {
  return (
    <section className="relative w-full min-h-[92vh] md:min-h-screen overflow-hidden bg-[#0B1B3D]">
      <img
        src={heroImg}
        alt="Equipe GS — profissionais uniformizados de portaria, limpeza e recepção"
        width={1920}
        height={1080}
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover object-[70%_center] md:object-right"
      />
      {/* Dark gradient overlay for legibility */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#0B1B3D] via-[#0B1B3D]/90 md:via-[#0B1B3D]/80 to-[#0B1B3D]/30 md:to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D]/85 via-transparent to-transparent"
      />

      <div className="relative container mx-auto px-6 lg:px-12 min-h-[92vh] md:min-h-screen flex items-center pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-2xl">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-white tracking-tight"
            style={{ textShadow: "0 4px 24px rgba(0,0,0,0.5)" }}
          >
            O que importa,
            <br />
            <span className="text-primary">cuidamos.</span>
          </h1>

          <p
            className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-white/90 max-w-xl leading-relaxed"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}
          >
            Terceirização profissional em portaria, limpeza e apoio operacional para
            empresas e condomínios que exigem padrão, presença e confiança.
          </p>

          <div className="mt-6 flex items-center gap-3 text-white/85">
            <ShieldCheck className="w-5 h-5 text-[var(--gold)] shrink-0" strokeWidth={2} />
            <p className="text-sm md:text-base">
              Servimos pessoas, protegemos patrimônio e cuidamos
              <br className="hidden sm:block" /> do que realmente importa.
            </p>
          </div>

          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button
              asChild
              size="lg"
              className="h-12 px-6 text-base font-semibold bg-[#25D366] hover:bg-[#1ebd5a] text-white shadow-lg shadow-[#25D366]/25"
            >
              <Link to="/solicitar-proposta">
                <MessageCircle className="w-5 h-5" />
                Solicitar Proposta
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 px-6 text-base font-semibold bg-white/5 backdrop-blur border-white/30 text-white hover:bg-white/15 hover:text-white"
            >
              <Link to="/solucoes">Conheça nossas soluções</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

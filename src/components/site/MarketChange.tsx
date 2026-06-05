import { Link } from "@tanstack/react-router";
import { Users, RotateCw, AlertTriangle, Calendar, Wrench, Headphones, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MarketChange() {
  return (
    <section className="bg-[#F7F5F0] py-16 md:py-24" aria-labelledby="seu-tempo">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Coluna esquerda - Texto e CTA */}
        <div className="flex flex-col">
          {/* Título com barra lateral */}
          <div className="border-l-4 border-[var(--gold)] pl-6 mb-10">
            <h2
              id="seu-tempo"
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase text-neutral-900"
            >
              Seu tempo <br />
              <span className="text-[var(--gold)]">importa.</span>
            </h2>
          </div>

          {/* Lista de problemas com ícones */}
          <div className="space-y-5 mb-10">
            <div className="flex items-start gap-4">
              <Users className="w-6 h-6 text-[var(--gold)] flex-shrink-0 mt-1" strokeWidth={2} />
              <p className="text-lg text-neutral-900 font-medium">Funcionários faltando?</p>
            </div>
            <div className="flex items-start gap-4">
              <RotateCw className="w-6 h-6 text-[var(--gold)] flex-shrink-0 mt-1" strokeWidth={2} />
              <p className="text-lg text-neutral-900 font-medium">Trocas constantes?</p>
            </div>
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-[var(--gold)] flex-shrink-0 mt-1" strokeWidth={2} />
              <p className="text-lg text-neutral-900 font-medium">Falta de acompanhamento?</p>
            </div>
          </div>

          {/* Call-to-action text */}
          <div className="mb-8">
            <p className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">
              Faz o certo.
            </p>
            <p className="text-2xl md:text-3xl font-bold text-neutral-900">
              <span className="text-[var(--gold)]">Chame a GS.</span>
            </p>
          </div>

          {/* Button */}
          <Link to="/solicitar-proposta">
            <Button
              size="lg"
              className="w-full md:w-auto bg-[#0B1B3D] hover:bg-[#0B1B3D]/90 text-white font-bold text-base md:text-lg px-8 py-6 h-auto rounded-xl flex items-center justify-center gap-3 group"
            >
              <Calendar className="w-5 h-5 flex-shrink-0" strokeWidth={2} />
              <span>Vamos simular</span>
              <br className="hidden" />
              <span className="text-[var(--gold)]">uma proposta?</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </Link>
        </div>

        {/* Coluna direita - Card com quote e serviços */}
        <div className="flex flex-col gap-8">
          {/* Quote Card */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-neutral-200/60">
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 leading-tight">
              Talvez o problema não seja a sua <span className="text-[var(--gold)]">operação.</span>
            </h3>
            <p className="text-lg md:text-xl font-bold text-neutral-900 mb-6 leading-tight">
              Talvez seja a <span className="text-[var(--gold)]">empresa</span> que está por trás dela.
            </p>
            <p className="text-neutral-700 text-base md:text-lg leading-relaxed">
              Conheça uma terceirização feita para trazer <span className="text-[var(--gold)] font-semibold">tranquilidade</span>, não preocupação.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center text-center">
              <ShieldCheck className="w-10 h-10 text-[var(--gold)] mb-3" strokeWidth={1.5} />
              <p className="text-sm md:text-base font-semibold text-neutral-900">Portaria</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Wrench className="w-10 h-10 text-[var(--gold)] mb-3" strokeWidth={1.5} />
              <p className="text-sm md:text-base font-semibold text-neutral-900">Limpeza</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Headphones className="w-10 h-10 text-[var(--gold)] mb-3" strokeWidth={1.5} />
              <p className="text-sm md:text-base font-semibold text-neutral-900">Recepção</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <RotateCw className="w-10 h-10 text-[var(--gold)] mb-3" strokeWidth={1.5} />
              <p className="text-sm md:text-base font-semibold text-neutral-900">Zeladoria e Apoio Operacional</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { UsersRound } from "lucide-react";

export function MarketChange() {
  return (
    <section className="bg-[#F7F5F0] py-16 md:py-24" aria-labelledby="mercado-mudou">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <div className="text-neutral-900">
          <div className="border-l-4 border-[var(--gold)] pl-5 mb-6">
            <h2
              id="mercado-mudou"
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight uppercase"
            >
              O mercado mudou.
            </h2>
          </div>
          <p className="text-lg text-neutral-700 leading-relaxed max-w-xl">
            Encontrar profissionais ficou mais difícil. Mas a responsabilidade da
            operação continua existindo todos os dias.
          </p>

          <div className="mt-8 bg-[#0B1B3D] text-white rounded-xl p-6 md:p-7 flex gap-4 shadow-xl shadow-[#0B1B3D]/10 max-w-xl">
            <UsersRound className="w-10 h-10 text-primary shrink-0" strokeWidth={1.5} />
            <p className="text-sm md:text-[15px] leading-relaxed text-white/90">
              Na GS, entendemos que qualidade também significa{" "}
              <span className="text-white">resposta, acompanhamento e continuidade operacional</span>,
              para <span className="text-primary font-semibold">reduzir ao máximo os impactos do dia a dia.</span>
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-[5/4]">
            <img
              src="/desgaste-operacional.jpg"
              alt="Profissional preocupado com a operação e equipe de limpeza ao fundo"
              loading="lazy"
              className="w-full h-full object-cover object-center md:object-left"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1B3D]/40 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-4 left-6 right-6 md:left-10 md:-bottom-6">
            <blockquote className="bg-white rounded-xl p-5 md:p-6 shadow-xl border-l-4 border-[var(--gold)]">
              <p className="text-[var(--gold)] text-2xl leading-none mb-2">“</p>
              <p className="text-neutral-700 text-sm md:text-base leading-relaxed">
                A ausência de cobertura gera mais do que falha operacional.{" "}
                <span className="text-[var(--gold)] font-semibold">
                  Gera desgaste para quem está na linha de frente.
                </span>
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

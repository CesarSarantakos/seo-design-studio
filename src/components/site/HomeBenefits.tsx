import { Check, Clock, TrendingUp, UserCheck, ShieldCheck } from "lucide-react";

const checklist = [
  "Valoriza organização e presença operacional",
  "Precisa de continuidade sem dor de cabeça",
  "Busca profissionais alinhados ao seu ambiente",
  "Quer menos desgaste na gestão do dia a dia",
  "Entende que tempo e padrão fazem diferença",
];

const metrics = [
  { icon: Clock, title: "Tempo é o ativo mais precioso.", desc: "Valorizamos o seu tempo para o que realmente importa." },
  { icon: TrendingUp, title: "Mais produtividade, menos interrupções.", desc: "Processos funcionam, resultados acontecem." },
  { icon: UserCheck, title: "Qualidade de serviço que gera confiança.", desc: "Padrão, presença e responsabilidade em cada detalhe." },
  { icon: ShieldCheck, title: "Tranquilidade para tomar decisões.", desc: "Informações, suporte e segurança para decisões melhores." },
];

export function HomeBenefits() {
  return (
    <section className="bg-[#F7F5F0] pb-16 md:pb-24" aria-labelledby="para-voce">
      <div className="container mx-auto px-6">
        <div className="bg-[#0B1B3D] rounded-2xl p-6 md:p-10 lg:p-12 shadow-2xl">
          <h2 id="para-voce" className="text-2xl md:text-3xl font-bold text-white">
            A <span className="text-primary">GS</span> é para você que:
          </h2>

          <div className="mt-8 grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12">
            <ul className="space-y-3">
              {checklist.map((c) => (
                <li key={c} className="flex items-start gap-3 text-white/90">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-sm md:text-[15px] leading-snug">{c}</span>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="text-center lg:text-left">
                  <Icon className="w-9 h-9 text-primary mx-auto lg:mx-0 mb-3" strokeWidth={1.5} />
                  <p className="text-white font-semibold text-sm leading-snug">{title}</p>
                  <p className="text-white/70 text-xs leading-relaxed mt-2">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
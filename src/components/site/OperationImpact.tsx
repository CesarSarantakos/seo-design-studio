import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Mais organização: processos alinhados e rotina funcionando.",
  "Mais presença: profissionais preparados e comprometidos.",
  "Cobertura rápida em faltas: sua operação nunca para.",
  "Supervisão próxima: acompanhamento para garantir padrão.",
  "Mais tempo para você: decisões melhores e foco no crescimento.",
];

export function OperationImpact() {
  return (
    <section className="bg-white py-16 md:py-24" aria-labelledby="operation-impact-title">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Video Player - Left Side */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900 aspect-video">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/jo795DODkzw"
                title="O que muda quando a GS assume sua operação"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Text Content - Right Side */}
          <div className="order-1 lg:order-2">
            <div className="mb-8">
              <h2
                id="operation-impact-title"
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1B3D] leading-tight"
              >
                O que muda quando a <span className="text-[var(--primary)]">GS</span> assume sua operação?
              </h2>
              <div className="w-12 h-1 bg-[var(--primary)] rounded-full mt-4" aria-hidden="true" />
            </div>

            {/* Benefits List */}
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-6 h-6 text-[var(--primary)] shrink-0 mt-0.5"
                    strokeWidth={2}
                  />
                  <span className="text-base md:text-lg text-gray-700 leading-relaxed">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

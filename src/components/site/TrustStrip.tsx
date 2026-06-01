import { Users, ShieldCheck, ClipboardCheck, BadgeCheck } from "lucide-react";

const items = [
  { icon: Users, title: "250+", subtitle: "Profissionais qualificados" },
  { icon: ShieldCheck, title: "Cobertura rápida", subtitle: "em faltas e imprevistos" },
  { icon: ClipboardCheck, title: "Supervisão próxima", subtitle: "e acompanhamento constante" },
  { icon: BadgeCheck, title: "Presença que gera", subtitle: "confiança e continuidade" },
];

export function TrustStrip() {
  return (
    <section className="bg-white border-y border-neutral-200" aria-label="Diferenciais GS">
      <div className="container mx-auto px-6 py-8 md:py-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {items.map(({ icon: Icon, title, subtitle }) => (
          <div key={title} className="flex items-start gap-3 md:gap-4">
            <div className="shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" strokeWidth={1.8} />
            </div>
            <div className="min-w-0">
              <p className="font-bold text-neutral-900 text-base md:text-lg leading-tight">{title}</p>
              <p className="text-sm md:text-base text-black font-bold leading-snug mt-0.5">{subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

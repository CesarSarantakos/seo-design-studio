import { Shield, Users, CheckCircle2, Handshake } from "lucide-react";

const pillars = [
  { icon: Shield, label: "Proteção que gera tranquilidade" },
  { icon: Users, label: "Pessoas que fazem acontecer" },
  { icon: CheckCircle2, label: "Processos que garantem excelência" },
  { icon: Handshake, label: "Parcerias que constroem resultados" },
];

export function Pillars() {
  return (
    <section className="bg-background-deep border-t border-border/40 py-10" aria-label="Pilares GS">
      <div className="container mx-auto px-6 grid gap-6 md:grid-cols-4">
        {pillars.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3">
            <Icon className="w-8 h-8 text-primary flex-shrink-0" strokeWidth={1.5} />
            <span className="text-sm text-foreground/90 leading-tight">{label}</span>
          </div>
        ))}
      </div>
      <div className="container mx-auto px-6 mt-8 text-center text-foreground/85 max-w-3xl">
        <p>
          A GS acredita que grandes operações são construídas por pessoas comprometidas, processos organizados e presença verdadeira no dia a dia.
          <br />
          Nossa marca é o que somos. <span className="text-primary font-semibold">E o que somos, transforma.</span>
        </p>
      </div>
    </section>
  );
}
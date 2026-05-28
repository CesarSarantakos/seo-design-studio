import { Target, Eye, Gem } from "lucide-react";

export function MissionVisionValues() {
  return (
    <section className="bg-background py-20" aria-labelledby="mvv-heading">
      <h2 id="mvv-heading" className="sr-only">Missão, Visão e Valores</h2>
      <div className="container mx-auto px-6 grid gap-12 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
        <div className="text-center md:px-6 pb-8 md:pb-0">
          <Target className="w-12 h-12 text-primary mx-auto mb-5" strokeWidth={1.5} />
          <h3 className="text-xl font-bold text-primary tracking-widest mb-4">MISSÃO</h3>
          <p className="text-foreground/90 leading-relaxed max-w-xs mx-auto">
            Protegemos pessoas, patrimônio e cuidamos do que realmente importa.
          </p>
          <div className="h-0.5 w-12 bg-primary mx-auto mt-6" />
        </div>
        <div className="text-center md:px-6 py-8 md:py-0">
          <Eye className="w-12 h-12 text-primary mx-auto mb-5" strokeWidth={1.5} />
          <h3 className="text-xl font-bold text-primary tracking-widest mb-4">VISÃO</h3>
          <p className="text-foreground/90 leading-relaxed max-w-xs mx-auto">
            Unir colaboradores e clientes para construir resultados sólidos.
          </p>
          <div className="h-0.5 w-12 bg-primary mx-auto mt-6" />
        </div>
        <div className="text-center md:px-6 pt-8 md:pt-0">
          <Gem className="w-12 h-12 text-primary mx-auto mb-5" strokeWidth={1.5} />
          <h3 className="text-xl font-bold text-primary tracking-widest mb-4">VALORES</h3>
          <ul className="text-foreground/90 leading-relaxed text-left inline-block space-y-2">
            {[
              "Integridade nas relações",
              "Servir com presença",
              "Fazer o simples bem feito",
              "Respeito pelas pessoas",
              "Compromisso com a operação e resultados",
            ].map((v) => (
              <li key={v} className="flex gap-2 items-start">
                <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                <span>{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

interface ProposalCTAProps {
  className?: string;
}

export function ProposalCTA({ className = "" }: ProposalCTAProps) {
  return (
    <section className={`py-20 md:py-32 bg-gradient-to-br from-background via-background-deep to-background ${className}`}>
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Próximo passo</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
            Pronto para <span className="text-primary">transformar</span> sua operação?
          </h2>
          
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Solicite uma proposta personalizada. Nossa equipe análisa sua demanda e apresenta a melhor solução para seu negócio. Rápido, simples e sem compromisso.
          </p>
          
          <div className="pt-6">
            <Button asChild size="lg" className="h-14 px-8 text-base font-semibold gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:shadow-lg">
              <Link to="/solicitar-proposta">
                Solicitar proposta agora
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground pt-4">
            ⏱️ Leva menos de 2 minutos  •  🔒 Dados 100% seguros (LGPD)  •  ✓ Resposta em 24h
          </p>
        </div>
      </div>
    </section>
  );
}

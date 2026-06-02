import { Link } from "@tanstack/react-router";
import { ShieldCheck, MessageCircle, Clock, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PremiumCTA() {
  return (
    <section className="py-16 md:py-24 bg-background-deep">
      <div className="container mx-auto px-6 max-w-4xl" style={{ boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)" }}>
        {/* Icon + Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="relative inline-flex items-center justify-center">
              <ShieldCheck className="w-16 h-16 text-primary" strokeWidth={1.5} />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Se você chegou até aqui, é porque{" "}
            <span className="text-primary">isso importa para você.</span>
          </h2>

          <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
        </div>

        {/* Subheading with icon */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-2">
            <Clock className="w-6 h-6 text-primary flex-shrink-0" strokeWidth={1.5} />
            <h3 className="text-xl md:text-2xl font-bold text-white">
              Vamos simular uma proposta?
            </h3>
          </div>
          <p className="text-base md:text-lg text-muted-foreground">
            Demora menos de <span className="text-primary font-semibold">2 minutos</span>.
          </p>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <Link to="/solicitar-proposta">
            <Button
              size="lg"
              className="w-full h-16 md:h-14 bg-primary hover:bg-primary/90 text-background font-bold text-base md:text-lg rounded-xl flex items-center justify-center gap-3"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              SOLICITAR ORÇAMENTO
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </Link>

          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="w-full h-16 md:h-14 bg-green-600 hover:bg-green-700 text-white font-bold text-base md:text-lg rounded-xl flex items-center justify-center gap-3"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.51.857-2.813 2.057-3.842 3.61-.719 1.079-1.262 2.227-1.618 3.426-.162.564-.259 1.131-.288 1.700-.014.568.035 1.135.155 1.69.074.359.146.683.22.974.108.459.217.901.364 1.33.218.623.442 1.22.697 1.794.126.281.234.556.334.827.142.408.288.81.453 1.207.126.27.265.53.415.784.228.382.475.746.74 1.095.265.35.548.68.848.99.3.31.616.6.948.867.346.277.705.53 1.077.764.372.235.754.442 1.144.623.389.18.784.331 1.185.455.401.123.806.217 1.214.285.408.067.816.105 1.223.114h.01c.203 0 .406-.005.608-.017.201-.013.402-.032.602-.06 1.245-.187 2.442-.608 3.496-1.255.872-.533 1.632-1.264 2.228-2.147.596-.883 1.015-1.905 1.255-2.95.239-1.044.305-2.116.198-3.195-.107-1.078-.374-2.145-.8-3.177-.425-1.033-1.007-1.96-1.745-2.756-.738-.795-1.63-1.462-2.664-1.981-1.033-.52-2.202-.891-3.494-1.105-1.292-.215-2.706-.23-4.23.056-.426.078-.846.183-1.26.313m9.127-4.594h1.457l-1.844 1.05-1.42 1.512h-1.494l1.806-2.039-.5-1.506-.001-1.23h1.505l1.491 1.263" />
              </svg>
              FALAR NO WHATSAPP
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </a>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-border">
          <div className="flex gap-4">
            <ShieldCheck className="w-6 h-6 md:w-7 md:h-7 text-primary flex-shrink-0 mt-1" strokeWidth={1.5} />
            <div>
              <p className="font-semibold text-white mb-1">Proposta personalizada</p>
              <p className="text-sm md:text-base text-muted-foreground">
                para sua necessidade.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-green-500 flex-shrink-0 mt-1" strokeWidth={1.5} />
            <div>
              <p className="font-semibold text-white mb-1">Atendimento rápido</p>
              <p className="text-sm md:text-base text-muted-foreground">
                e direto com nossa equipe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

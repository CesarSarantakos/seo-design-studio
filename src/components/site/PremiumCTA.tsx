import { Link } from "@tanstack/react-router";
import { ShieldCheck, MessageCircle, Clock, Check, MessageCircle as WhatsAppIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PremiumCTA() {
  return (
    <section className="py-16 md:py-24 bg-background-deep">
      <div className="container mx-auto px-6 max-w-4xl pb-2.5" style={{ boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)" }}>
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
            href="https://api.whatsapp.com/send/?phone=5511930494888&text=Ol%C3%A1%21+Vim+pelo+site+e+gostaria+de+solicitar+um+or%C3%A7amento+para+servi%C3%A7os+de+terceiriza%C3%A7%C3%A3o.+Pode+me+ajudar%3F&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="w-full h-16 md:h-14 bg-green-600 hover:bg-green-700 text-white font-bold text-base md:text-lg rounded-xl flex items-center justify-center gap-3"
            >
              <WhatsAppIcon className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" strokeWidth={2} />
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

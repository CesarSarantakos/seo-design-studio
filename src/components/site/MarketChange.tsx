import { Link } from "@tanstack/react-router";
import { Users, RotateCw, AlertTriangle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MarketChange() {
  return (
    <section className="py-20 md:py-32 bg-[#F7F5F0]">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
          {/* Left column */}
          <div className="space-y-8">
            {/* Heading with vertical line */}
            <div className="flex gap-6 items-start">
              <div className="w-1.5 h-32 bg-primary flex-shrink-0"></div>
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight" style={{ color: "#0b1b3d" }}>
                  SEU TEMPO
                </h2>
                <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight tracking-tight">
                  IMPORTA.
                </p>
              </div>
            </div>

            {/* Problem items with vertical spacing */}
            <div className="space-y-6">
              <div className="flex gap-4 items-center">
                <Users className="w-7 h-7 text-primary flex-shrink-0" strokeWidth={1.5} />
                <p className="text-lg md:text-xl font-medium" style={{ color: "#0b1b3d" }}>Funcionários faltando?</p>
              </div>
              <div className="flex gap-4 items-center">
                <RotateCw className="w-7 h-7 text-primary flex-shrink-0" strokeWidth={1.5} />
                <p className="text-lg md:text-xl font-medium" style={{ color: "#0b1b3d" }}>Trocas constantes?</p>
              </div>
              <div className="flex gap-4 items-center">
                <AlertTriangle className="w-7 h-7 text-primary flex-shrink-0" strokeWidth={1.5} />
                <p className="text-lg md:text-xl font-medium" style={{ color: "#0b1b3d" }}>Falta de acompanhamento?</p>
              </div>
            </div>

            {/* Divider line */}
            <div className="h-1 w-20 bg-primary"></div>

            {/* CTA Text */}
            <div className="space-y-2">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight" style={{ color: "#0b1b3d" }}>
                FAZ O CERTO.
              </p>
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary tracking-tight">
                CHAME A GS.
              </p>
            </div>

            {/* CTA Button */}
            <Link to="/solicitar-proposta">
              <Button
                size="lg"
                className="w-full md:w-auto text-white font-bold text-base md:text-lg px-8 py-5 h-auto rounded-xl flex items-center justify-center gap-3 group transition-all"
                style={{ backgroundColor: "#0b1b3d" }}
              >
                <Calendar className="w-5 h-5 flex-shrink-0" strokeWidth={2} />
                <div className="flex flex-col items-start gap-0.5">
                  <span className="text-xs md:text-sm leading-none">VAMOS SIMULAR</span>
                  <span className="text-primary font-bold leading-none">UMA PROPOSTA?</span>
                </div>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform ml-auto flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </Link>
          </div>

          {/* Right column - Image with overlay card */}
          <div className="relative h-96 md:h-[550px] rounded-2xl overflow-hidden">
            {/* Background image */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/desgaste-operacional-11aSKjq5GQ63hsazsN5e2TCxvUUhJh.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay for better readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </div>

            {/* Overlay card - positioned at bottom */}
            <div className="absolute bottom-0 left-0 right-0 mx-4 mb-8 md:mx-6 md:mb-10 bg-white rounded-2xl p-6 md:p-8 shadow-2xl border border-white/20">
              <div className="space-y-4">
                {/* First part of quote */}
                <div>
                  <p className="font-bold leading-tight" style={{ color: "#0b1b3d", fontSize: "30px" }}>
                    Talvez o problema
                  </p>
                  <p className="font-bold leading-tight" style={{ color: "#0b1b3d", fontSize: "30px" }}>
                    não seja a sua{" "}
                    <span className="text-primary">operação.</span>
                  </p>
                </div>

                {/* Gold divider */}
                <div className="h-1 w-12 bg-primary"></div>

                {/* Second part of quote */}
                <div>
                  <p className="font-bold leading-tight" style={{ color: "#0b1b3d", fontSize: "24px" }}>
                    Talvez seja a{" "}
                    <span className="text-primary">empresa</span>
                  </p>
                  <p className="font-bold leading-tight" style={{ color: "#0b1b3d", fontSize: "24px" }}>
                    que está por trás dela.
                  </p>
                </div>

                {/* Description */}
                <p className="leading-relaxed pt-2 font-medium" style={{ color: "#0b1b3d", fontSize: "20px" }}>
                  Conheça uma terceirização feita para trazer{" "}
                  <span className="text-primary font-semibold">tranquilidade</span>, não preocupação.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Services section with border */}
        <div className="border-t border-foreground/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-16 md:pt-20">
            {[
              { icon: Users, label: "PORTARIA" },
              { icon: AlertTriangle, label: "LIMPEZA" },
              { icon: RotateCw, label: "RECEPÇÃO" },
              { icon: Calendar, label: "ZELADORIA E\nAPOIO\nOPERACIONAL" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-3 text-center">
                <item.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" strokeWidth={1.5} />
                <p className="text-xs md:text-sm font-bold uppercase tracking-wide leading-tight" style={{ color: "#0b1b3d" }}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

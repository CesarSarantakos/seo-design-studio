import { Link } from "@tanstack/react-router";
import { Users, RotateCw, AlertTriangle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MarketChange() {
  return (
    <section className="py-20 md:pt-32 md:pb-16 bg-[#F7F5F0]">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
          {/* Left column */}
          <div className="space-y-8 bg-white/50 backdrop-blur-sm shadow-lg rounded-2xl p-8 md:p-10">
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
            <div className="absolute bottom-0 left-0 right-0 mx-4 mb-8 md:mx-6 md:mb-10 bg-white/85 backdrop-blur-md rounded-2xl p-7 md:p-10 shadow-2xl border border-white/40">
              <div className="space-y-6">
                {/* First part of quote */}
                <div className="space-y-1">
                  <p className="font-bold leading-snug" style={{ color: "#0b1b3d", fontSize: "32px" }}>
                    Talvez o problema
                  </p>
                  <p className="font-bold leading-snug" style={{ color: "#0b1b3d", fontSize: "32px" }}>
                    não seja a sua{" "}
                    <span className="text-primary">operação.</span>
                  </p>
                </div>

                {/* Gold divider */}
                <div className="h-1.5 w-14 bg-primary"></div>

                {/* Second part of quote */}
                <div className="space-y-1">
                  <p className="font-bold leading-snug" style={{ color: "#0b1b3d", fontSize: "26px" }}>
                    Talvez seja a{" "}
                    <span className="text-primary">empresa</span>
                  </p>
                  <p className="font-bold leading-snug" style={{ color: "#0b1b3d", fontSize: "26px" }}>
                    que está por trás dela.
                  </p>
                </div>

                {/* Description */}
                <p className="leading-relaxed pt-3 font-medium" style={{ color: "#0b1b3d", fontSize: "16px" }}>
                  Conheça uma terceirização feita para trazer{" "}
                  <span className="text-primary font-semibold">tranquilidade</span>, não preocupação.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Services section with improved border and shadow */}
        <div className="border-t border-foreground/10 shadow-lg rounded-2xl mt-20 px-6 md:px-8 py-12 md:py-16 bg-white/50 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {[
              { icon: Users, label: "PORTARIA" },
              { icon: AlertTriangle, label: "LIMPEZA" },
              { icon: RotateCw, label: "RECEPÇÃO" },
              { icon: Calendar, label: "ZELADORIA E APOIO OPERACIONAL" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 md:gap-5">
                <item.icon className="w-10 h-10 md:w-12 md:h-12 text-primary flex-shrink-0" strokeWidth={1.5} />
                <p className="text-sm md:text-base font-bold uppercase tracking-wide leading-tight" style={{ color: "#0b1b3d" }}>
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

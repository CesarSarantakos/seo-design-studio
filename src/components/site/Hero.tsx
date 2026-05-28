import heroImg from "@/assets/hero-team.jpg";

export function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#0B1B3D]">
      {/* Background photo */}
      <img
        src={heroImg}
        alt="Equipe GS — segurança, limpeza e gestão profissional com águia ao fundo"
        width={1920}
        height={1080}
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover object-right"
      />
      {/* Left-to-right dark gradient for text legibility */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#0B1B3D] via-[#0B1B3D]/85 to-transparent"
      />
      {/* Bottom vignette */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D]/80 via-transparent to-transparent"
      />
      {/* Subtle radial glow behind text */}
      <div
        aria-hidden="true"
        className="absolute -left-32 top-1/4 w-[600px] h-[600px] rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(circle, oklch(0.84 0.19 130 / 0.15), transparent 70%)" }}
      />

      <div className="relative container mx-auto px-6 lg:px-12 min-h-screen flex items-center pt-32 pb-20">
        <div className="max-w-2xl">
          <h1
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.02] text-white tracking-tight"
            style={{ textShadow: "0 4px 24px rgba(0,0,0,0.5)" }}
          >
            Nossa marca
            <br />
            <span className="text-primary" style={{ textShadow: "0 4px 24px rgba(0,0,0,0.4)" }}>
              é o que somos.
            </span>
          </h1>
          <div className="h-[3px] w-24 bg-primary mt-10 mb-7 shadow-[0_0_20px_rgba(168,214,58,0.6)]" />
          <p
            className="text-xl md:text-2xl lg:text-3xl text-white/95 max-w-xl leading-snug font-light"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}
          >
            Presença, proteção e compromisso
            <br />
            com o que <span className="text-primary font-medium">realmente importa.</span>
          </p>
          <p
            className="text-base md:text-lg text-white/75 max-w-md mt-8 leading-relaxed"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}
          >
            A GS nasceu para representar mais do que terceirização. Representa pessoas comprometidas, operações organizadas e a responsabilidade de servir com presença.
          </p>
        </div>
      </div>
    </section>
  );
}
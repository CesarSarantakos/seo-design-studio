import heroImg from "@/assets/hero-team.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background-deep pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-background-deep via-background to-background-deep"
      />
      <div className="container mx-auto px-6 relative grid gap-12 lg:grid-cols-2 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-foreground">
            Nossa marca
            <br />
            <span className="text-primary">é o que somos.</span>
          </h1>
          <div className="h-1 w-20 bg-primary mt-8 mb-6" />
          <p className="text-xl md:text-2xl text-foreground/90 max-w-xl leading-snug">
            Presença, proteção e compromisso com o que <span className="text-primary font-semibold">realmente importa.</span>
          </p>
          <p className="text-base text-muted-foreground max-w-md mt-6 leading-relaxed">
            A GS nasceu para representar mais do que terceirização. Representa pessoas comprometidas, operações organizadas e a responsabilidade de servir com presença.
          </p>
        </div>
        <div className="relative">
          <img
            src={heroImg}
            alt="Equipe GS — segurança, limpeza e gestão profissional"
            width={1024}
            height={1024}
            fetchPriority="high"
            className="w-full h-auto rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
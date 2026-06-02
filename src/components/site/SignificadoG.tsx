import significadoG from "@/assets/significado-g.jpg";

export function SignificadoG() {
  return (
    <section
      className="relative py-24 md:py-32 lg:py-40 overflow-hidden bg-background-deep"
      aria-labelledby="significado-g"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={significadoG}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background-deep via-background-deep/95 to-background-deep" />
      </div>

      {/* Decorative glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
        style={{ background: "radial-gradient(circle, var(--primary), transparent 60%)" }}
      />

      <div className="container relative mx-auto px-6 lg:px-12 max-w-5xl">
        {/* Main content - centered and impactful */}
        <div className="text-center space-y-12 md:space-y-16">
          {/* Large decorative G */}
          <div className="relative inline-block">
            <span 
              className="text-[120px] md:text-[180px] lg:text-[220px] font-bold leading-none text-primary/10 select-none"
              aria-hidden="true"
            >
              G
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-24 w-24 md:h-32 md:w-32 rounded-full border-2 border-primary/30 flex items-center justify-center">
                <span className="text-4xl md:text-5xl font-bold text-primary">G</span>
              </div>
            </div>
          </div>

          {/* Title */}
          <div className="space-y-4">
            <h2 
              id="significado-g" 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight"
            >
              O significado do{" "}
              <span className="text-primary">&quot;G&quot;</span>
              <br className="hidden sm:block" />
              <span className="text-primary"> que nos inspira.</span>
            </h2>
            <div className="flex justify-center">
              <div className="h-1 w-20 bg-primary rounded-full" />
            </div>
          </div>

          {/* Description */}
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              No hebraico, a letra <span className="text-foreground font-medium">&quot;G&quot; (Gimel)</span> se conecta ao princípio do servir, do ajudar, do estender a mão a quem precisa.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              É a essência de quem vai ao encontro do outro para fazer a diferença.
            </p>
          </div>

          {/* Callouts - horizontal on desktop */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            <div className="group flex items-center gap-4 bg-card/30 border border-border/30 rounded-2xl px-8 py-6 backdrop-blur-sm hover:border-primary/40 transition-all duration-300">
              <div className="h-12 w-1 bg-primary rounded-full group-hover:h-14 transition-all" />
              <p className="text-xl md:text-2xl font-semibold text-foreground">
                Servir é o que <span className="text-primary">nos move.</span>
              </p>
            </div>
            <div className="group flex items-center gap-4 bg-card/30 border border-border/30 rounded-2xl px-8 py-6 backdrop-blur-sm hover:border-primary/40 transition-all duration-300">
              <div className="h-12 w-1 bg-primary rounded-full group-hover:h-14 transition-all" />
              <p className="text-xl md:text-2xl font-semibold text-foreground">
                Cuidar é o que <span className="text-primary">nos define.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import significadoG from "@/assets/significado-g.jpg";
import gimelMaos from "@/assets/gimel-maos.jpg";

export function SignificadoG() {
  return (
    <section
      className="relative overflow-hidden bg-background-deep"
      aria-labelledby="significado-g"
    >
      {/* top fade from previous section */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-background to-transparent z-10" />

      {/* HEADER */}
      <div className="relative pt-20 pb-12">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          {/* eyebrow */}
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-primary mb-6">
            A origem do nome
          </p>

          {/* headline */}
          <h2
            id="significado-g"
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-[1.05] tracking-tight"
          >
            O significado do{" "}
            <span className="text-primary">"G"</span>
            <br />
            que nos inspira.
          </h2>

          {/* divisor */}
          <div className="mt-8 h-px bg-border/50" />
        </div>
      </div>

      {/* MAIN CONTENT — 3 COLUMN LAYOUT */}
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 items-center">

          {/* COLUNA 1: IMAGEM DO G DOURADO */}
          <div className="flex justify-center md:justify-start">
            <div className="group relative w-full max-w-sm">
              {/* glow effect */}
              <div
                aria-hidden="true"
                className="absolute -inset-6 rounded-3xl opacity-30 blur-3xl transition-opacity group-hover:opacity-40"
                style={{ background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)" }}
              />

              {/* imagem G */}
              <div className="relative rounded-3xl overflow-hidden border border-primary/30 shadow-2xl shadow-primary/20">
                <img
                  src={significadoG}
                  alt="Letra hebraica Gimel — símbolo de servir e cuidar"
                  width={500}
                  height={600}
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
                {/* overlay bottom gradient */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background-deep/70 to-transparent" />
              </div>

              {/* caption */}
              <p className="mt-4 text-center text-sm text-muted-foreground font-light tracking-wide">
                Gimel (ג) — Letra Hebraica
              </p>
            </div>
          </div>

          {/* COLUNA 2: TEXTO CENTRAL */}
          <div className="md:col-span-1 space-y-8">
            {/* introdução */}
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-foreground font-light leading-relaxed">
                No hebraico, <span className="text-primary font-semibold">Gimel (ג)</span> conecta-se ao princípio de servir, de ajudar, de estender a mão a quem precisa.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed font-light">
                É a essência de quem vai ao encontro do outro para fazer a diferença — não como obrigação, mas como propósito.
              </p>
            </div>

            {/* divisor */}
            <div className="h-px w-full bg-border/40" />

            {/* 3 pilares */}
            <div className="space-y-6">
              <div className="group">
                <span className="text-xs font-bold tracking-[0.16em] uppercase text-primary/70 block mb-2">
                  01
                </span>
                <p className="text-sm md:text-base font-medium text-foreground leading-snug">
                  Servir é o que nos move.
                </p>
              </div>

              <div className="group">
                <span className="text-xs font-bold tracking-[0.16em] uppercase text-primary/70 block mb-2">
                  02
                </span>
                <p className="text-sm md:text-base font-medium text-foreground leading-snug">
                  Cuidar é o que nos define.
                </p>
              </div>

              <div className="group">
                <span className="text-xs font-bold tracking-[0.16em] uppercase text-primary/70 block mb-2">
                  03
                </span>
                <p className="text-sm md:text-base font-medium text-foreground leading-snug">
                  Presença é o que entregamos.
                </p>
              </div>
            </div>
          </div>

          {/* COLUNA 3: IMAGEM DAS MÃOS */}
          <div className="flex justify-center md:justify-end">
            <div className="group relative w-full max-w-sm">
              {/* glow effect */}
              <div
                aria-hidden="true"
                className="absolute -inset-6 rounded-3xl opacity-20 blur-3xl transition-opacity group-hover:opacity-30"
                style={{ background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)" }}
              />

              {/* imagem mãos */}
              <div className="relative rounded-3xl overflow-hidden border border-border/40 shadow-lg shadow-primary/10">
                <img
                  src={gimelMaos}
                  alt="Mãos em gesto de colaboração e parceria"
                  width={500}
                  height={600}
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* caption */}
              <p className="mt-4 text-center text-sm text-muted-foreground font-light tracking-wide">
                Colaboração e Parceria
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}

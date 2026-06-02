import significadoG from "@/assets/significado-g.jpg";

export function SignificadoG() {
  return (
    <section
      className="relative overflow-hidden bg-background-deep"
      aria-labelledby="significado-g"
    >
      {/* top fade from previous section */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-background to-transparent z-10" />

      {/* --- EDITORIAL BLOCK: letra G gigante + headline --- */}
      <div className="relative pt-20 pb-0">
        <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
          {/* eyebrow */}
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-primary mb-8">
            A origem do nome
          </p>

          {/* headline row — texto + letra G lado a lado */}
          <div className="flex items-end justify-between gap-8 flex-wrap">
            <h2
              id="significado-g"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05] tracking-tight max-w-2xl"
            >
              O significado do{" "}
              <span className="text-primary">"G"</span>
              <br />
              que nos inspira.
            </h2>

            {/* letra decorativa G — visível em md+ */}
            <div
              aria-hidden="true"
              className="hidden md:block select-none leading-none font-black text-[20rem] lg:text-[26rem] text-primary/8 -mb-8 lg:-mb-12 tracking-tighter"
              style={{ lineHeight: 0.82 }}
            >
              G
            </div>
          </div>

          {/* linha divisora */}
          <div className="mt-10 h-px bg-border/50" />
        </div>
      </div>

      {/* --- CONTEÚDO PRINCIPAL --- */}
      <div className="container mx-auto px-6 lg:px-16 max-w-7xl py-16 md:py-20">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* coluna de texto — 3 colunas */}
          <div className="lg:col-span-3 space-y-12">

            {/* parágrafo principal */}
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-foreground font-light leading-relaxed">
                No hebraico, a letra{" "}
                <span className="text-primary font-semibold">Gimel (ג)</span>{" "}
                se conecta ao princípio do servir, do ajudar, do estender a mão a quem precisa.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                É a essência de quem vai ao encontro do outro para fazer a diferença — não como obrigação, mas como propósito.
              </p>
            </div>

            {/* divisor */}
            <div className="h-px w-full bg-border/40" />

            {/* callouts editoriais */}
            <div className="space-y-0">
              <div className="group py-7 border-b border-border/40 flex items-center justify-between gap-6">
                <div>
                  <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-muted-foreground block mb-2">
                    01
                  </span>
                  <p className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                    Servir é o que nos move.
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full border border-primary/40 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
              </div>

              <div className="group py-7 border-b border-border/40 flex items-center justify-between gap-6">
                <div>
                  <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-muted-foreground block mb-2">
                    02
                  </span>
                  <p className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                    Cuidar é o que nos define.
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full border border-primary/40 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
              </div>

              <div className="group py-7 flex items-center justify-between gap-6">
                <div>
                  <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-muted-foreground block mb-2">
                    03
                  </span>
                  <p className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                    Presença é o que entregamos.
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full border border-primary/40 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
              </div>
            </div>
          </div>

          {/* coluna de imagem — 2 colunas */}
          <div className="lg:col-span-2 relative">
            {/* moldura glow */}
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-3xl opacity-20 blur-2xl"
              style={{ background: "radial-gradient(ellipse at center, var(--primary) 0%, transparent 70%)" }}
            />

            {/* imagem principal */}
            <div className="relative overflow-hidden rounded-2xl border border-border/30">
              <img
                src={significadoG}
                alt="Letra hebraica Gimel — símbolo de servir e cuidar do outro"
                width={900}
                height={1100}
                loading="lazy"
                className="w-full h-auto object-cover"
                style={{ aspectRatio: "4/5" }}
              />
              {/* overlay suave no fundo da imagem */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background-deep/80 to-transparent" />

              {/* caption badge */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="inline-flex items-center gap-2 bg-background-deep/80 backdrop-blur-sm border border-border/40 rounded-full px-4 py-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-xs font-medium text-foreground/80 tracking-wide">
                    Gimel — letra hebraica
                  </span>
                </div>
              </div>
            </div>

            {/* nota lateral */}
            <p className="mt-5 text-sm text-muted-foreground leading-relaxed text-center px-2">
              Uma letra. Um propósito. Uma forma de estar no mundo.
            </p>
          </div>
        </div>
      </div>

      {/* bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}

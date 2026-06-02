import gimelMaos from "@/assets/gimel-maos.jpg";

export function SignificadoG() {
  return (
    <section
      className="relative overflow-hidden bg-background-deep"
      aria-labelledby="significado-g"
    >
      {/* top fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-background to-transparent z-10" />

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl py-12 md:py-16 lg:py-20">
        {/* LAYOUT 2 COLUNAS — texto | imagem mãos (50/50) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* COLUNA 1: TEXTO CENTRAL */}
          <div className="text-center lg:text-left space-y-5 lg:space-y-6">
            {/* headline */}
            <h2
              id="significado-g"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-[1.15] tracking-tight"
            >
              O significado do "G"
              <br />
              que nos inspira.
            </h2>

            {/* descrição */}
            <div className="space-y-3 lg:space-y-4">
              <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                No hebraico, a letra "G" (Gimel) se conecta ao princípio do servir,
                do ajudar, do estender a mão a quem precisa.
              </p>
              <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                É a essência de quem vai ao encontro do outro para fazer
                a diferença.
              </p>
            </div>

            {/* frases em destaque */}
            <div className="pt-2 lg:pt-4">
              <p className="text-base lg:text-lg font-bold text-primary leading-snug">
                Servir é o que nos move.
              </p>
              <p className="text-base lg:text-lg font-bold text-primary leading-snug">
                Cuidar é o que nos define.
              </p>
            </div>
          </div>

          {/* COLUNA 2: IMAGEM DAS MÃOS */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm h-64 md:h-72 lg:h-80 overflow-hidden rounded-xl">
              <img
                src={gimelMaos}
                alt="Mãos em gesto de colaboração e parceria"
                width={400}
                height={320}
                loading="lazy"
                className="w-full h-full object-cover object-[75%_center]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}

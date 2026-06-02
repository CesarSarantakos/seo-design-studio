import significadoG from "@/assets/significado-g.jpg";
import gimelMaos from "@/assets/gimel-maos.jpg";

export function SignificadoG() {
  return (
    <section
      className="relative overflow-hidden bg-background-deep py-16 md:py-20 lg:py-24"
      aria-labelledby="significado-g"
    >
      {/* top fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-background to-transparent z-10" />

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        {/* LAYOUT 3 COLUNAS — imagem G | texto | imagem mãos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-center">

          {/* COLUNA 1: IMAGEM DO G DOURADO */}
          <div className="flex justify-center">
            <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
              <img
                src={significadoG}
                alt="Letra hebraica Gimel — símbolo de servir e cuidar"
                width={300}
                height={300}
                loading="lazy"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* COLUNA 2: TEXTO CENTRAL */}
          <div className="text-center md:text-left space-y-6">
            {/* headline */}
            <h2
              id="significado-g"
              className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight tracking-tight"
            >
              O significado do "G"
              <br />
              que nos inspira.
            </h2>

            {/* descrição */}
            <div className="space-y-4">
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                No hebraico, a letra "G" (Gimel) se conecta ao princípio do servir,
                do ajudar, do estender a mão a quem precisa.
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                É a essência de quem vai ao encontro do outro para fazer
                a diferença.
              </p>
            </div>

            {/* frases em destaque */}
            <div className="pt-2">
              <p className="text-base md:text-lg font-bold text-primary leading-snug">
                Servir é o que nos move.
              </p>
              <p className="text-base md:text-lg font-bold text-primary leading-snug">
                Cuidar é o que nos define.
              </p>
            </div>
          </div>

          {/* COLUNA 3: IMAGEM DAS MÃOS */}
          <div className="flex justify-center">
            <div className="relative w-56 h-40 md:w-64 md:h-48 lg:w-80 lg:h-56 overflow-hidden rounded-lg">
              <img
                src={gimelMaos}
                alt="Mãos em gesto de colaboração e parceria"
                width={400}
                height={280}
                loading="lazy"
                className="w-full h-full object-cover object-right"
              />
            </div>
          </div>
        </div>
      </div>

      {/* bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}

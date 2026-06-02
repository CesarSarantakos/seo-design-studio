import significadoG from "@/assets/significado-g.jpg";
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
        {/* LAYOUT 3 COLUNAS — imagem G | texto | imagem mãos */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_300px] gap-8 lg:gap-10 items-center">

          {/* COLUNA 1: IMAGEM DO G DOURADO */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-52 h-52 md:w-60 md:h-60 lg:w-[260px] lg:h-[260px]">
              <img
                src={significadoG}
                alt="Letra hebraica Gimel — símbolo de servir e cuidar"
                width={260}
                height={260}
                loading="lazy"
                className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(203,161,53,0.3)]"
              />
            </div>
          </div>

          {/* COLUNA 2: TEXTO CENTRAL */}
          <div className="text-center lg:text-left space-y-5 lg:space-y-6 py-4">
            {/* headline */}
            <h2
              id="significado-g"
              className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-foreground leading-[1.15] tracking-tight"
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
            <div className="pt-1 lg:pt-2">
              <p className="text-base lg:text-lg font-bold text-primary leading-snug">
                Servir é o que nos move.
              </p>
              <p className="text-base lg:text-lg font-bold text-primary leading-snug">
                Cuidar é o que nos define.
              </p>
            </div>
          </div>

          {/* COLUNA 3: IMAGEM DAS MÃOS */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-64 h-44 md:w-72 md:h-48 lg:w-[280px] lg:h-[200px] overflow-hidden rounded-lg">
              <img
                src={gimelMaos}
                alt="Mãos em gesto de colaboração e parceria"
                width={280}
                height={200}
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

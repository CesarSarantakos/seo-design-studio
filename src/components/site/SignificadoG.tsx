import gimelSymbol from "@/assets/gimel-symbol.jpg";
import helpingHands from "@/assets/helping-hands.jpg";

export function SignificadoG() {
  return (
    <section
      className="relative py-20 lg:py-28 overflow-hidden bg-background-deep"
      aria-labelledby="significado-g"
    >
      <div className="container relative mx-auto px-6 lg:px-12">
        {/* Desktop: 3-column layout | Mobile: stacked */}
        <div className="grid lg:grid-cols-[1.3fr_1fr_1.3fr] gap-8 lg:gap-12 items-center">
          
          {/* Left Image - Gimel Symbol */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-2xl" />
              <img
                src={gimelSymbol}
                alt="Letra hebraica Gimel dourada sobre mãos abertas"
                loading="lazy"
                className="relative rounded-2xl shadow-2xl w-full max-w-[320px] h-auto object-cover"
              />
            </div>
          </div>

          {/* Center Content */}
          <div className="text-center space-y-8 order-first lg:order-none">
            {/* Mobile: Show Gimel image above title */}
            <div className="lg:hidden flex justify-center mb-8">
              <img
                src={gimelSymbol}
                alt="Letra hebraica Gimel dourada sobre mãos abertas"
                loading="lazy"
                className="rounded-2xl shadow-xl w-48 h-auto object-cover"
              />
            </div>

            <div>
              <h2 
                id="significado-g" 
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
              >
                <span className="text-foreground">O significado do </span>
                <span className="text-primary">&quot;G&quot;</span>
                <br />
                <span className="text-foreground">que nos inspira.</span>
              </h2>
              <div className="flex justify-center mt-6">
                <div className="h-1 w-20 bg-primary rounded-full" />
              </div>
            </div>

            <div className="space-y-5 max-w-lg mx-auto">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                No hebraico, a letra &quot;G&quot; (Gimel) se conecta ao princípio do servir, do ajudar, do estender a mão a quem precisa.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                É a essência de quem vai ao encontro do outro para fazer a diferença.
              </p>
            </div>

            {/* Callouts */}
            <div className="pt-4 space-y-3">
              <p className="text-lg md:text-xl font-bold text-primary">
                Servir é o que nos move.
              </p>
              <p className="text-lg md:text-xl font-bold text-primary">
                Cuidar é o que nos define.
              </p>
            </div>

            {/* Mobile: Show helping hands below callouts */}
            <div className="lg:hidden flex justify-center mt-8">
              <img
                src={helpingHands}
                alt="Mãos se ajudando, simbolizando cuidado e conexão"
                loading="lazy"
                className="rounded-2xl shadow-xl w-48 h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Image - Helping Hands */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-bl from-primary/15 to-transparent rounded-3xl blur-2xl" />
              <img
                src={helpingHands}
                alt="Mãos se ajudando, simbolizando cuidado e conexão"
                loading="lazy"
                className="relative rounded-2xl shadow-2xl w-full max-w-[320px] h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

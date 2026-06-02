import gimelSymbol from "@/assets/gimel-symbol.jpg";
import helpingHands from "@/assets/helping-hands.jpg";

export function SignificadoG() {
  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden bg-background-deep"
      aria-labelledby="significado-g"
    >
      <div className="container relative mx-auto px-6 lg:px-12">
        {/* Desktop: 3-column layout (1 : 1.2 : 1.5) | Mobile: stacked */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr_1.5fr] gap-8 lg:gap-12 items-center">
          
          {/* LEFT: Gimel Symbol - smaller */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-full max-w-xs">
              <img
                src={gimelSymbol}
                alt="Letra hebraica Gimel dourada sobre mãos abertas"
                loading="lazy"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* CENTER: Text Content with vertical separator */}
          <div className="space-y-6 md:space-y-8 relative order-first lg:order-none">
            {/* Mobile: Show Gimel image above title */}
            <div className="lg:hidden mb-6">
              <img
                src={gimelSymbol}
                alt="Letra hebraica Gimel dourada sobre mãos abertas"
                loading="lazy"
                className="rounded-xl shadow-lg w-40 h-40 object-cover mx-auto"
              />
            </div>

            {/* Vertical line separator (left side on desktop) */}
            <div
              aria-hidden="true"
              className="hidden lg:block absolute -left-6 top-0 bottom-0 w-1 bg-primary rounded-full"
            />

            {/* Title */}
            <div>
              <h2 
                id="significado-g" 
                className="text-3xl md:text-4xl lg:text-4xl font-bold leading-tight text-foreground"
              >
                O significado do <span className="text-primary">&quot;G&quot;</span>
                <br />
                que nos inspira.
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              <p>
                No hebraico, a letra <span className="font-semibold text-foreground">&quot;G&quot; (Gimel)</span> se conecta ao princípio do servir, do ajudar, do estender a mão a quem precisa.
              </p>
              <p>
                É a essência de quem vai ao encontro do outro para fazer a diferença.
              </p>
            </div>

            {/* Callouts - highlighted in primary color */}
            <div className="space-y-2 pt-2">
              <p className="text-base md:text-lg font-bold text-primary">
                Servir é o que nos move.
              </p>
              <p className="text-base md:text-lg font-bold text-primary">
                Cuidar é o que nos define.
              </p>
            </div>

            {/* Mobile: Show helping hands below */}
            <div className="lg:hidden mt-6">
              <img
                src={helpingHands}
                alt="Mãos se ajudando, simbolizando cuidado e conexão"
                loading="lazy"
                className="rounded-xl shadow-lg w-48 h-48 object-cover mx-auto"
              />
            </div>
          </div>

          {/* RIGHT: Helping Hands - larger */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-full max-w-md">
              <img
                src={helpingHands}
                alt="Mãos se ajudando, simbolizando cuidado e conexão"
                loading="lazy"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

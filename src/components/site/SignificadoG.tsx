import gimelSymbol from "@/assets/gimel-symbol.jpg";
import helpingHands from "@/assets/helping-hands.jpg";

export function SignificadoG() {
  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden bg-background-deep"
      aria-labelledby="significado-g"
    >
      <div className="container relative mx-auto px-6 lg:px-12">
        {/* Main content: 3-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr_0.9fr] gap-6 lg:gap-8 items-center mb-16 md:mb-24" style={{ backgroundColor: "#011029" }}>
          
          {/* LEFT: Gimel Symbol */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-full">
              <img
                src={gimelSymbol}
                alt="Letra hebraica Gimel dourada sobre mãos abertas"
                loading="lazy"
                className="rounded-2xl w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* CENTER: Text Content with vertical separator */}
          <div className="space-y-6 lg:space-y-8 relative order-first lg:order-none px-0 lg:px-8">
            {/* Mobile: Show Gimel image above title */}
            <div className="lg:hidden mb-6">
              <img
                src={gimelSymbol}
                alt="Letra hebraica Gimel dourada sobre mãos abertas"
                loading="lazy"
                className="rounded-xl w-40 h-40 object-cover mx-auto"
              />
            </div>

            {/* Vertical line separator (visible on desktop only) */}
            <div
              aria-hidden="true"
              className="hidden lg:block absolute left-0 top-8 bottom-8 w-0.5 bg-primary"
            />

            {/* Title */}
            <div>
              <h2 
                id="significado-g" 
                className="text-3xl md:text-4xl font-bold leading-tight text-center lg:text-left"
                style={{ color: "#c7821c" }}
              >
                O significado do <span style={{ color: "#c7821c" }}>&quot;G&quot;</span>
                <br />
                que nos inspira.
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-3 text-sm md:text-base text-foreground/80 leading-relaxed text-center lg:text-left">
              <p>
                No hebraico, a letra <span className="font-semibold">&quot;G&quot; (Gimel)</span> se conecta ao princípio do servir, do ajudar, do estender a mão a quem precisa.
              </p>
              <p>
                É a essência de quem vai ao encontro do outro para fazer a diferença.
              </p>
            </div>

            {/* Callouts - highlighted in primary color */}
            <div className="space-y-2 pt-2 text-center lg:text-left">
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
                className="rounded-xl w-48 h-48 object-cover mx-auto"
              />
            </div>
          </div>

          {/* RIGHT: Helping Hands */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-full">
              <img
                src={helpingHands}
                alt="Mãos se ajudando, simbolizando cuidado e conexão"
                loading="lazy"
                className="rounded-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}

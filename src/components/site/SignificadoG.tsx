import significadoG from "@/assets/significado-g.jpg";

export function SignificadoG() {
  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.17 0.08 262) 0%, oklch(0.14 0.07 262) 50%, oklch(0.17 0.08 262) 100%)",
      }}
      aria-labelledby="significado-g"
    >
      {/* top & bottom fades to blend with neighboring sections */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[color:var(--background)] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[color:var(--background)] to-transparent" />

      {/* decorative elements */}
      <div
        aria-hidden="true"
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ background: "radial-gradient(circle, var(--primary), transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full blur-2xl opacity-8"
        style={{ background: "radial-gradient(circle, var(--primary), transparent 70%)" }}
      />

      <div className="container relative mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* content */}
          <div className="space-y-8">
            <div>
              <h2 id="significado-g" className="text-4xl md:text-5xl lg:text-5xl font-bold text-primary leading-tight mb-8">
                O significado do "G"<br />que nos inspira.
              </h2>
              <div className="h-1 w-24 bg-primary rounded-full" />
            </div>

            <div className="space-y-6">
              <p className="text-lg text-foreground/85 leading-relaxed font-light">
                No hebraico, a letra "G" (Gimel) se conecta ao princípio do servir, do ajudar, do estender a mão a quem precisa.
              </p>
              <p className="text-lg text-foreground/85 leading-relaxed font-light">
                É a essência de quem vai ao encontro do outro para fazer a diferença.
              </p>
            </div>

            {/* callouts */}
            <div className="pt-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-1 h-12 bg-primary rounded-full" />
                <div>
                  <p className="text-xl font-semibold text-primary">Servir é o que nos move.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-1 h-12 bg-primary rounded-full" />
                <div>
                  <p className="text-xl font-semibold text-primary">Cuidar é o que nos define.</p>
                </div>
              </div>
            </div>
          </div>

          {/* image */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="absolute -inset-8 bg-gradient-to-br from-primary/15 to-transparent rounded-3xl blur-2xl" />
            <img
              src={significadoG}
              alt="Letra hebraica Gimel sobre mãos e conexão entre pessoas"
              width={2048}
              height={1024}
              loading="lazy"
              className="relative rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

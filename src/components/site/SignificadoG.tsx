import gimel from "@/assets/gimel-hands.jpg";
import handshake from "@/assets/handshake.jpg";

export function SignificadoG() {
  return (
    <section
      className="relative py-20"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.17 0.08 262) 0%, oklch(0.14 0.07 262) 50%, oklch(0.17 0.08 262) 100%)",
      }}
      aria-labelledby="significado-g"
    >
      {/* top & bottom fades to blend with neighboring sections */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[color:var(--background)] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[color:var(--background)] to-transparent" />

      <div className="container relative mx-auto px-6 grid lg:grid-cols-3 gap-8 items-center">
        <div className="relative">
          <img
            src={gimel}
            alt="Letra hebraica Gimel sobre mãos"
            width={1024}
            height={1024}
            loading="lazy"
            className="w-full h-auto"
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse at center, #000 45%, rgba(0,0,0,0.6) 70%, transparent 95%)",
              maskImage:
                "radial-gradient(ellipse at center, #000 45%, rgba(0,0,0,0.6) 70%, transparent 95%)",
            }}
          />
        </div>
        <div className="lg:col-span-1">
          <h2 id="significado-g" className="text-3xl md:text-4xl font-bold text-[color:var(--gold)] leading-tight mb-6">
            O significado do "G"<br />que nos inspira.
          </h2>
          <p className="text-foreground/85 leading-relaxed mb-4">
            No hebraico, a letra "G" (Gimel) se conecta ao princípio do servir, do ajudar, do estender a mão a quem precisa.
          </p>
          <p className="text-foreground/85 leading-relaxed mb-6">
            É a essência de quem vai ao encontro do outro para fazer a diferença.
          </p>
          <p className="text-primary font-semibold text-lg leading-snug">
            Servir é o que nos move.<br />Cuidar é o que nos define.
          </p>
        </div>
        <div className="hidden lg:block relative">
          <img
            src={handshake}
            alt="Aperto de mãos representando parceria"
            width={1024}
            height={1024}
            loading="lazy"
            className="w-full h-auto"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 20%, #000 55%), linear-gradient(to bottom, transparent 0%, #000 25%, #000 75%, transparent 100%)",
              WebkitMaskComposite: "source-in",
              maskImage:
                "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 20%, #000 55%), linear-gradient(to bottom, transparent 0%, #000 25%, #000 75%, transparent 100%)",
              maskComposite: "intersect",
              opacity: 0.85,
              mixBlendMode: "screen",
            }}
          />
        </div>
      </div>
    </section>
  );
}
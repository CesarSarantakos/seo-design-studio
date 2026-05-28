import gimel from "@/assets/gimel-hands.jpg";
import handshake from "@/assets/handshake.jpg";

export function SignificadoG() {
  return (
    <section className="bg-background-deep py-20" aria-labelledby="significado-g">
      <div className="container mx-auto px-6 grid lg:grid-cols-3 gap-8 items-center">
        <div>
          <img src={gimel} alt="Letra hebraica Gimel sobre mãos" width={1024} height={1024} loading="lazy" className="rounded-lg w-full h-auto" />
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
        <div className="hidden lg:block">
          <img src={handshake} alt="Aperto de mãos representando parceria" width={1024} height={1024} loading="lazy" className="rounded-lg w-full h-auto opacity-80" />
        </div>
      </div>
    </section>
  );
}
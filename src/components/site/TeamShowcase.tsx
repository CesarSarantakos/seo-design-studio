import { useRef, useState, useEffect } from "react";
import { Sparkles, ShieldCheck, ClipboardCheck, UserRound, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";

type Profile = {
  title: string;
  desc: string;
  image: string;
  icon: typeof Sparkles;
};

const profiles: Profile[] = [
  {
    title: "Limpeza",
    desc: "Cuidado presente em cada detalhe.",
    image: "/team/limpeza.jpg",
    icon: Sparkles,
  },
  {
    title: "Portaria",
    desc: "Presença que transmite segurança.",
    image: "/team/portaria.jpg",
    icon: ShieldCheck,
  },
  {
    title: "Supervisão",
    desc: "Acompanhamento próximo e constante.",
    image: "/team/supervisao.jpg",
    icon: ClipboardCheck,
  },
  {
    title: "Relacionamento e Atendimento",
    desc: "Respeito, atenção e compromisso todos os dias.",
    image: "/team/relacionamento.jpg",
    icon: UserRound,
  },
  {
    title: "Gestão GS",
    desc: "Liderança que orienta, planeja e impulsiona.",
    image: "/team/gestao.jpg",
    icon: TrendingUp,
  },
];

export function TeamShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  };

  useEffect(() => {
    updateArrows();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, []);

  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const gap = 24;
    const amount = card ? card.offsetWidth + gap : el.clientWidth * 0.8;
    el.scrollBy({ left: amount * dir, behavior: "smooth" });
  };

  return (
    <section className="bg-[#F7F5F0] py-20 md:py-28" aria-labelledby="equipe-gs">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 id="equipe-gs" className="text-3xl md:text-5xl font-bold text-[#0B1B3D] tracking-tight text-balance">
            Fazemos o simples <span className="text-primary">bem feito.</span>
          </h2>
          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-primary" />
          <p className="mt-6 text-base md:text-lg text-[#0B1B3D]/70 leading-relaxed text-pretty">
            Nos diga o que é importante para você.{" "}
            <span className="font-semibold text-[#0B1B3D]">Nós cuidamos disso.</span>
          </p>
        </div>

        <div className="relative mt-12 md:mt-16">
          {/* Prev button */}
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            disabled={!canPrev}
            aria-label="Anterior"
            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 items-center justify-center rounded-full bg-white text-[#0B1B3D] shadow-lg ring-1 ring-black/5 transition disabled:opacity-0 hover:bg-[#0B1B3D] hover:text-white"
          >
            <ChevronLeft className="h-6 w-6" strokeWidth={2} />
          </button>

          {/* Track */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {profiles.map(({ title, desc, image, icon: Icon }) => (
              <article
                key={title}
                data-card
                className="group relative snap-start shrink-0 w-[80%] sm:w-[45%] lg:w-[calc((100%-3rem)/3)] overflow-hidden rounded-2xl bg-[#0B1B3D] shadow-xl"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Profissional GS — ${title}`}
                    className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                    crossOrigin="anonymous"
                  />
                  {/* Base gradient always visible for label legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D] via-[#0B1B3D]/20 to-transparent" />

                  {/* Icon badge */}
                  <div className="absolute top-4 left-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 shadow-md">
                    <Icon className="h-5 w-5 text-primary" strokeWidth={2} />
                  </div>

                  {/* Text content */}
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="text-lg md:text-xl font-bold text-white leading-tight">{title}</h3>
                    {/* Desc reveals on hover */}
                    <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 ease-out group-hover:grid-rows-[1fr] group-hover:opacity-100 group-focus-within:grid-rows-[1fr] group-focus-within:opacity-100">
                      <p className="overflow-hidden text-sm md:text-[15px] leading-relaxed text-white/85 pt-2">
                        {desc}
                      </p>
                    </div>
                    <div className="mt-3 h-0.5 w-10 bg-primary transition-all duration-500 group-hover:w-16" />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Next button */}
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            disabled={!canNext}
            aria-label="Próximo"
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 items-center justify-center rounded-full bg-white text-[#0B1B3D] shadow-lg ring-1 ring-black/5 transition disabled:opacity-0 hover:bg-[#0B1B3D] hover:text-white"
          >
            <ChevronRight className="h-6 w-6" strokeWidth={2} />
          </button>
        </div>

        <p className="mt-4 text-center text-xs text-[#0B1B3D]/50 md:hidden">
          Arraste para o lado para ver mais
        </p>
      </div>
    </section>
  );
}

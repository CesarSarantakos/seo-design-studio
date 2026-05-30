import colab1 from "@/assets/colab-1.jpg";
import colab2 from "@/assets/colab-2.jpg";
import colab3 from "@/assets/colab-3.jpg";

const items = [
  {
    quote: "A GS trouxe mais organização e tranquilidade para o nosso condomínio.",
    name: "Roberto S.",
    role: "Síndico Profissional",
    img: colab1,
  },
  {
    quote: "Nosso espaço está muito mais seguro e bem cuidado desde que a GS assumiu.",
    name: "Carolina M.",
    role: "Gerente Administrativa",
    img: colab2,
  },
  {
    quote: "Ganhamos mais tempo para gestão e o suporte é impecável.",
    name: "Marcos A.",
    role: "Diretor de Operações",
    img: colab3,
  },
];

export function HomeTestimonials() {
  return (
    <section className="bg-[#F7F5F0] pb-20" aria-labelledby="depoimentos">
      <div className="container mx-auto px-6">
        <h2 id="depoimentos" className="text-center text-2xl md:text-3xl font-bold text-neutral-900 mb-10">
          Resultados percebidos por nossos clientes
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <article
              key={t.name}
              className="bg-white rounded-xl p-6 md:p-7 shadow-sm border border-neutral-200/70 flex flex-col"
            >
              <p className="text-[var(--gold)] text-3xl leading-none mb-2">“</p>
              <p className="text-neutral-700 leading-relaxed text-[15px] flex-1">{t.quote}</p>
              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-neutral-200">
                <img
                  src={t.img}
                  alt={t.name}
                  loading="lazy"
                  className="w-11 h-11 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-neutral-900 text-sm">{t.name}</p>
                  <p className="text-xs text-neutral-500">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
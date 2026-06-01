import { Link } from "@tanstack/react-router";
import { useState } from "react";

const items = [
  {
    quote: "A GS trouxe mais organização e tranquilidade para o nosso condomínio.",
    name: "Roberto S.",
    role: "Síndico Profissional",
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ales-5f8OLxvbgyRG1pCOmbK8q3AaX3gccq.webp",
  },
  {
    quote: "Nosso espaço está muito mais seguro e bem cuidado desde que a GS assumiu.",
    name: "Carolina M.",
    role: "Gerente Administrativa",
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Caroline_Robert-Individual-Bio-Image-wJA6nInkB6bjwDvXiBko5EFRbZqkd2.jpg",
  },
  {
    quote: "Ganhamos mais tempo para gestão e o suporte é impecável.",
    name: "Marcos A.",
    role: "Diretor de Operações",
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OIP%20%282%29-dtoWGoxvtbk9ZAfZjblbmUopn9qitZ.webp",
  },
];

export function HomeTestimonials() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#F7F5F0] pb-20" aria-labelledby="depoimentos">
      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .testimonial-card {
          animation: slideInUp 0.6s ease-out both;
        }
        .testimonial-card:nth-child(1) { animation-delay: 0.1s; }
        .testimonial-card:nth-child(2) { animation-delay: 0.2s; }
        .testimonial-card:nth-child(3) { animation-delay: 0.3s; }
      `}</style>
      <div className="container mx-auto px-6">
        <h2 id="depoimentos" className="text-center text-2xl md:text-3xl font-bold text-neutral-900 mb-10">
          Resultados percebidos por nossos clientes
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, index) => (
            <article
              key={t.name}
              className="testimonial-card bg-white rounded-xl p-6 md:p-7 shadow-sm border border-neutral-200/70 flex flex-col transition-all duration-300 ease-out cursor-pointer"
              style={{
                transform: hoveredIndex === index ? "translateY(-8px)" : "translateY(0)",
                boxShadow: hoveredIndex === index 
                  ? "0 20px 25px -5px rgba(0, 0, 0, 0.1)" 
                  : "0 1px 2px 0px rgba(0, 0, 0, 0.05)",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
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

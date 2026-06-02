import { Star } from "lucide-react";
import { useState } from "react";

const items = [
  {
    quote: "A GS trouxe mais organização e tranquilidade para o nosso condomínio.",
    name: "Roberto S.",
    role: "Síndico Profissional",
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ales-5f8OLxvbgyRG1pCOmbK8q3AaX3gccq.webp",
    rating: 5,
  },
  {
    quote: "Nosso espaço está muito mais seguro e bem cuidado desde que a GS assumiu.",
    name: "Carolina M.",
    role: "Gerente Administrativa",
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Caroline_Robert-Individual-Bio-Image-wJA6nInkB6bjwDvXiBko5EFRbZqkd2.jpg",
    rating: 5,
  },
  {
    quote: "Ganhamos mais tempo para gestão e o suporte é impecável.",
    name: "Marcos A.",
    role: "Diretor de Operações",
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OIP%20%282%29-dtoWGoxvtbk9ZAfZjblbmUopn9qitZ.webp",
    rating: 5,
  },
];

export function HomeTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-gradient-to-b from-blue-950 to-blue-900 py-24 overflow-hidden" aria-labelledby="depoimentos">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes shine {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        .testimonials-container {
          animation: fadeInUp 0.8s ease-out;
        }
        
        .testimonial-card {
          animation: fadeInUp 0.7s ease-out both;
          backdrop-filter: blur(10px);
        }
        
        .testimonial-card:nth-child(1) { animation-delay: 0.1s; }
        .testimonial-card:nth-child(2) { animation-delay: 0.2s; }
        .testimonial-card:nth-child(3) { animation-delay: 0.3s; }
      `}</style>
      
      <div className="container mx-auto px-6 testimonials-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 bg-[var(--gold)] bg-opacity-10 border border-[var(--gold)] border-opacity-30 rounded-full text-[var(--gold)] text-xs font-semibold uppercase tracking-wider mb-4">
            Depoimentos
          </span>
          <h2 id="depoimentos" className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            O que nossos clientes dizem
          </h2>
          <p className="text-neutral-400 text-lg">
            Descubra como a GS transformou operações de condomínios e edifícios em toda a região
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {items.map((t, index) => (
            <article
              key={t.name}
              className="testimonial-card group relative bg-neutral-900 bg-opacity-50 border border-neutral-800 rounded-2xl p-8 hover:border-[var(--gold)] hover:border-opacity-50 transition-all duration-500 ease-out flex flex-col h-full"
              onMouseEnter={() => setActiveIndex(index)}
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)] via-transparent to-transparent opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500 pointer-events-none" />
              
              {/* Star Rating */}
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[var(--gold)] text-[var(--gold)]"
                  />
                ))}
              </div>

              {/* Quote Mark */}
              <div className="text-6xl text-[var(--gold)] opacity-20 leading-none mb-2 font-serif relative z-10">
                "
              </div>

              {/* Quote Text */}
              <p className="text-neutral-200 leading-relaxed text-base flex-1 mb-8 relative z-10">
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-neutral-800 relative z-10">
                <img
                  src={t.img}
                  alt={t.name}
                  loading="lazy"
                  className="w-12 h-12 rounded-full object-cover border border-[var(--gold)] border-opacity-30"
                />
                <div>
                  <p className="font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-xs text-neutral-400">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-500 ${
                activeIndex === index
                  ? "w-8 bg-[var(--gold)]"
                  : "w-2 bg-neutral-700 hover:bg-neutral-600"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

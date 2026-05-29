## Visão geral

Construir o site da GS replicando fielmente o design enviado (tema azul-marinho escuro com acentos verde-limão e dourado), com foco em SEO técnico (SSR, metadados por rota, JSON-LD, sitemap), uma página **Trabalhe Conosco** com formulário de currículo, e um **simulador de proposta em 3 etapas** na home.

## Estrutura de rotas (TanStack Start, SSR)

```
/                  Home (hero + Missão/Visão/Valores + Significado do G + pilares + simulador 3 etapas)
/quem-somos        História, propósito, significado do G aprofundado
/solucoes          Serviços (Portaria, Limpeza, Controle de Acesso, etc.)
/clientes          Clientes/segmentos atendidos
/contato           Formulário de contato + dados
/trabalhe-conosco  Formulário de currículo (imagem 2)
```

Cada rota recebe `head()` próprio com title, description, og:title, og:description e canonical. JSON-LD `Organization` no `__root.tsx`; `WebSite` + `BreadcrumbList` nas internas. `sitemap.xml` e `robots.txt` gerados.

## Design system (src/styles.css)

Tokens em oklch:

- `--background`: azul-marinho profundo (~#0B1B3D)
- `--primary`: verde-limão (~#A8D63A) para destaques/CTA
- `--accent-gold`: dourado (~#C9A24C) para seção "Significado do G"
- `--foreground`: branco; `--muted-foreground`: cinza-azulado
- Fonte: Inter (corpo) + peso bold para headings (mesma vibe da referência)

## Home — seções (replicando imagem 1)

1. **Header** transparente sobre hero: logo GS + nav (Home, Quem Somos, Soluções, Clientes, Contato, Trabalhe Conosco)
2. **Hero**: título grande "Nossa marca **é o que somos.**" (segunda linha em verde), subtítulo, parágrafo, imagem composta (águia + 3 colaboradores) à direita
3. **Missão / Visão / Valores**: 3 colunas com ícones em verde-limão (alvo, olho, diamante)
4. **Significado do "G"**: fundo azul mais escuro, letra hebraica dourada à esquerda, texto + frases em verde à direita, imagem de aperto de mão à direita
5. **4 pilares**: Proteção, Pessoas, Processos, Parcerias (ícones verdes em linha)
6. **Faixa de fechamento**: "A GS acredita que grandes operações..."
7. **Simulador de proposta (3 etapas)** — ver abaixo
8. **Footer**

## Simulador de proposta (imagem 3) — componente na home

Card com barra de progresso e 3 abas:

- **Etapa 1 – Serviços**: checkboxes em 2 colunas (Controlador de Acesso, Manutenção Predial, Ronda Patrimonial, Copeira, Recepcionista, Zeladoria Predial, Portaria Física, Posto de Monitoramento, Limpeza 44h, Portaria 24h, Outros)
- **Etapa 2 – Localização**: CEP, cidade, estado, endereço
- **Etapa 3 – Contato**: nome, empresa, e-mail, telefone, envio

Validação com **zod** + react-hook-form. Envio grava em tabela do Lovable Cloud (`proposal_requests`). Rodapé "LGPD – Lei Geral de Proteção de Dados Pessoais".

## Página /trabalhe-conosco (imagem 2)

Layout 2 colunas:

- Esquerda: "Como funciona?" com 3 passos numerados
- Direita: card com formulário (Nome, Telefone, E-mail, Mensagem, Anexar Currículo PDF/DOC máx 5MB) + botão "Enviar Currículo"

Upload do CV para **Lovable Cloud Storage** (bucket `resumes`), registro em tabela `job_applications` (nome, telefone, email, mensagem, resume_url). Validação zod.

## Backend (Lovable Cloud)

Ativar Lovable Cloud para:

- Tabela `proposal_requests` (serviços[], cep, cidade, estado, endereço, nome, empresa, email, telefone, criado_em)
- Tabela `job_applications` (nome, telefone, email, mensagem, resume_url, criado_em)
- Bucket de storage `resumes` (privado, signed URLs)
- RLS: insert público anônimo permitido; select apenas service_role

Envio via server functions (`createServerFn`) com validação zod server-side.

## SEO

- SSR ativo (padrão TanStack Start), `head()` por rota com title/description/og únicos
- Canonical relativo em cada leaf
- H1 único por página, HTML semântico (`<header>`, `<main>`, `<section>`, `<footer>`)
- Alt em todas as imagens
- JSON-LD: `Organization` no root, `BreadcrumbList` nas internas, `ContactPoint` em /contato
- `public/robots.txt` (allow all) e `src/routes/sitemap[.]xml.tsx` dinâmico listando todas as rotas
- Lazy loading nas imagens fora do viewport, `<img>` com width/height para evitar CLS
- Preload da fonte e da imagem hero

## Assets

- Gerar imagens necessárias (composição hero com águia + 3 colaboradores, aperto de mão, letra hebraica Gimel dourada) via imagegen, ou aceitar uso das imagens da referência se o usuário fornecer. Ícones via lucide-react estilizados em verde-limão.

## Detalhes técnicos

- Stack: TanStack Start + React 19 + Tailwind v4 + shadcn/ui
- Forms: react-hook-form + zod + shadcn Form
- Upload: input file → server function → Supabase Storage (admin client)
- Toasts: sonner
- Acessibilidade: labels, aria, foco visível

## Pontos a confirmar

1. **Logo GS**: você tem o arquivo do logo (águia + GS) para enviar, ou devo gerar uma versão aproximada?
2. **Imagem do hero** (3 colaboradores + águia): gero via IA aproximando a referência?
3. **Telefone, e-mail e endereço reais** da GS para /contato e footer?
4. **Domínio final** (para canonical absoluto e sitemap) — se ainda não tem, uso paths relativos.

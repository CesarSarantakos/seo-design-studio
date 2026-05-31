# GS - Site Corporativo

Site institucional da GS (empresa de segurança e facility services) construído com **TanStack Start**, **React 19**, **Tailwind CSS v4** e **TypeScript**.

---

## 🚀 Tecnologias

- **Framework:** TanStack Start (SSR/SSG com Vite 7)
- **React:** 19
- **Estilização:** Tailwind CSS v4 + shadcn/ui
- **Linguagem:** TypeScript (strict)
- **Formulários:** react-hook-form + zod
- **Backend:** Lovable Cloud (Supabase) — autenticação, banco de dados e storage
- **Email:** @lovable.dev/email-js
- **Ícones:** lucide-react

---

## 📋 Pré-requisitos

- [Node.js](https://nodejs.org/) 18+ (recomendado: 20+)
- [Bun](https://bun.sh/) 1.1+ (gerenciador de pacotes principal deste projeto)
- Conta no [Lovable Cloud](https://lovable.dev) (backend já configurado)

---

## ⚙️ Instalação

1. **Clone o repositório:**

```bash
git clone <url-do-repositorio>
cd <pasta-do-projeto>
```

2. **Instale as dependências:**

```bash
bun install
```

> Se preferir usar npm ou pnpm, substitua `bun` pelo seu gerenciador de pacotes. O projeto usa `bunfig.toml` com guarda de supply-chain de 24h.

---

## 🔑 Variáveis de Ambiente

O arquivo `.env` já está pré-configurado com as credenciais do Lovable Cloud. **Não edite manualmente** os arquivos em `src/integrations/supabase/` — eles são atualizados automaticamente.

Se precisar adicionar novas variáveis, crie um arquivo `.env.local` na raiz:

```env
# Exemplo de variáveis adicionais (se necessário)
MINHA_VAR=valor
```

---

## ▶️ Executando o Projeto

### Modo de desenvolvimento

```bash
bun run dev
```

O servidor Vite será iniciado. Acesse `http://localhost:3000` (ou a porta indicada no terminal).

### Build para produção

```bash
bun run build
```

### Preview do build

```bash
bun run preview
```

---

## 🗂️ Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── site/           # Componentes do site (Header, Footer, Hero, etc.)
│   └── ui/             # Componentes shadcn/ui
├── routes/             # Rotas do TanStack Start (file-based routing)
│   ├── index.tsx       # Home
│   ├── quem-somos.tsx
│   ├── solucoes.tsx
│   ├── clientes.tsx
│   ├── contato.tsx
│   ├── trabalhe-conosco.tsx
│   └── ...
├── integrations/       # Integrações (Supabase, etc.)
├── lib/                # Utilitários, funções de servidor, templates de email
├── styles.css          # Design system e tokens CSS
router.tsx              # Configuração do roteador
start.ts                # Configuração do TanStack Start
server.ts               # Entry point SSR
```

---

## 🌐 Rotas Disponíveis

| Rota | Descrição |
|------|-----------|
| `/` | Home (hero + simulador de proposta) |
| `/quem-somos` | História, missão, visão e valores |
| `/solucoes` | Página de serviços |
| `/solucoes/portaria-24h` | Detalhe do serviço |
| `/solucoes/limpeza-profissional` | Detalhe do serviço |
| `/solucoes/recepcao-e-atendimento` | Detalhe do serviço |
| `/clientes` | Clientes e segmentos atendidos |
| `/segmentos/condominios` | Segmento: condomínios |
| `/segmentos/empresas` | Segmento: empresas |
| `/contato` | Formulário de contato |
| `/trabalhe-conosco` | Formulário de currículo |
| `/solicitar-proposta` | Simulador de proposta |

---

## 📝 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `bun run dev` | Inicia o servidor de desenvolvimento |
| `bun run build` | Build para produção |
| `bun run build:dev` | Build em modo development |
| `bun run preview` | Preview do build de produção |
| `bun run lint` | Executa ESLint |
| `bun run format` | Formata o código com Prettier |

---

## ☁️ Deploy na Vercel

Este projeto é compatível com deploy na **Vercel** via:

1. Conecte o repositório Git na dashboard da Vercel
2. Framework preset: **Vite** (ou deixe em "Other")
3. Build command: `bun run build`
4. Output directory: `dist`
5. Adicione as variáveis de ambiente do `.env` na dashboard da Vercel

> ⚠️ **Nota:** O projeto usa TanStack Start com SSR. A Vercel suporta Vite SSR via funções serverless. Certifique-se de que a região esteja configurada corretamente.

---

## 🔒 Segurança

- Nunca exponha `SUPABASE_SERVICE_ROLE_KEY` no cliente
- Não edite manualmente `src/integrations/supabase/client.server.ts`
- RLS (Row Level Security) está ativo nas tabelas do backend

---

## 📄 Licença

Privado — GS Corporate.

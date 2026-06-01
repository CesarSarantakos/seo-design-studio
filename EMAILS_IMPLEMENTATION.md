# Implementação de Envio de Emails - GS Serviços

## 📋 Resumo da Implementação

Todos os formulários do site agora enviam emails reais através do **Resend**, um provedor de emails moderno e confiável. Os emails são enviados de forma segura no backend/server function, nunca no frontend.

---

## 📁 Arquivos Alterados

### 1. **src/lib/api/forms.functions.ts** (REESCRITO)
- Integração com Resend para envio de emails
- Três server functions:
  - `submitProposal` - Solicitar Proposta
  - `submitJobApplication` - Trabalhe Conosco
  - `submitContact` - Contato Genérico (novo)
- Validação completa de campos obrigatórios
- Mensagens de erro/sucesso personalizadas

### 2. **src/routes/solicitar-proposta.tsx** (ATUALIZADO)
- Melhorada função `handleSubmit` com validações detalhadas
- Feedback visual com toast notifications
- Redirecionamento após sucesso
- Reset de formulário após envio

### 3. **src/components/site/JobApplicationForm.tsx** (ATUALIZADO)
- Validações mais rigorosas para todos os campos
- Mensagens de erro específicas para cada campo
- Melhor feedback ao usuário após envio
- Suporte a anexo de currículo com validação de tipo/tamanho

### 4. **src/components/site/ProposalSimulator.tsx** (ATUALIZADO)
- Validações de campos obrigatórios
- Melhor mensagens de sucesso/erro
- Reset de formulário após envio

### 5. **src/components/site/ContactForm.tsx** (NOVO)
- Componente reutilizável de formulário de contato
- Pode ser usado em qualquer página
- Suporta diferentes origens (contato, lead, outro)
- Validação completa de campos

---

## 🔧 Provedor de Email Utilizado

**Resend** - https://resend.com
- Moderno, confiável e fácil de integrar
- Suporte a HTML templates
- Rastreamento de emails
- API simples e documentada
- Free tier generous para desenvolvimento

---

## 🔐 Variáveis de Ambiente Necessárias na Vercel

Cadastre as seguintes variáveis na Vercel em **Settings > Environment Variables**:

```
RESEND_API_KEY=re_L3azz4d9_PA5A3k7qH9niKktSk1AyUFy3
FROM_EMAIL=noreply@gsservicos.com.br
```

### Como obter RESEND_API_KEY:
1. Acesse https://resend.com/dashboard
2. Crie uma conta ou faça login
3. Vá para "API Keys"
4. Crie uma nova API key
5. Copie a chave (começa com `re_`)

---

## 📧 Configuração de Emails

### Destinatários por Formulário:

| Formulário | Destinatário | Assunto |
|-----------|-------------|---------|
| Solicitar Proposta | eliahu@gsservicos.com.br | [GS] Nova Proposta - {Nome} |
| Trabalhe Conosco | rh@gsservicos.com.br | [GS] Nova Candidatura - {Nome} |
| Contato Genérico | eliahu@gsservicos.com.br | [GS] {Assunto} |

---

## 📧 Estrutura dos Emails Enviados

Todos os emails incluem:
- **Cabeçalho** com tipo de formulário
- **Data/Hora** de submissão (fuso horário São Paulo)
- **Página de origem** do formulário
- **Todos os campos** preenchidos pelo usuário
- **Link do currículo** (para Trabalhe Conosco)

---

## 🧪 Como Testar Cada Formulário

### 1. **Testar Solicitar Proposta** (/solicitar-proposta)

```
1. Acesse: http://localhost:5173/solicitar-proposta
2. Preencha todos os campos:
   - Selecione ao menos 1 profissional
   - Preencha "Sobre sua operação"
   - Selecione um desafio
   - Informe: nome, empresa, endereço, telefone, email
3. Clique "RECEBER PROPOSTA"
4. Verifique em eliahu@gsservicos.com.br
```

**Campos coletados:**
- Serviços selecionados
- Necessidade/descrição
- Desafio principal
- Nome, empresa, endereço
- Telefone, email

---

### 2. **Testar Trabalhe Conosco** (/trabalhe-conosco)

```
1. Acesse: http://localhost:5173/trabalhe-conosco
2. Role até a seção de formulário
3. Preencha:
   - Nome, Email, Telefone (obrigatórios)
   - Data de nascimento (opcional)
   - Mensagem (obrigatória)
   - Selecione: Região, Área de interesse
   - Indique: Tem experiência?, Disponibilidade
   - Anexe um PDF/DOC/DOCX
4. Clique "Enviar Currículo"
5. Verifique em rh@gsservicos.com.br
```

**Campos coletados:**
- Nome, email, telefone, data de nascimento
- Região, área de interesse
- Experiência, disponibilidade
- Mensagem
- Arquivo do currículo (link para download)

---

### 3. **Testar Proposta (páginas específicas)** (/solucoes/portaria-24h, etc)

```
1. Acesse qualquer página de solução (ex: /solucoes/portaria-24h)
2. Localize seção "ProposalSimulator"
3. Preencha os 3 passos:
   - Passo 1: Selecione serviços
   - Passo 2: Informe localização (cidade obrigatória)
   - Passo 3: Dados de contato (nome, email, telefone)
4. Clique "Enviar solicitação"
5. Verifique em eliahu@gsservicos.com.br
```

---

### 4. **Testar Contato Genérico** (ContactForm - uso em páginas)

```
1. O componente ContactForm pode ser usado em qualquer página
2. Exemplo de uso no código:
   <ContactForm origem="lead" />
3. Preencha:
   - Nome, email, telefone (obrigatórios)
   - Empresa (opcional)
   - Assunto (obrigatório)
   - Mensagem (obrigatória)
4. Clique "Enviar Mensagem"
5. Verifique em eliahu@gsservicos.com.br
```

---

## ✅ Validações Implementadas

### Solicitar Proposta
- ✅ Selecionar ao menos 1 profissional
- ✅ Nome obrigatório
- ✅ Email obrigatório e válido
- ✅ Telefone obrigatório

### Trabalhe Conosco
- ✅ Nome, email, telefone obrigatórios
- ✅ Email válido
- ✅ Telefone com mínimo de 6 caracteres
- ✅ Currículo obrigatório (PDF, DOC, DOCX)
- ✅ Máximo 5MB de arquivo
- ✅ Região, área, experiência, disponibilidade obrigatórios

### Contato
- ✅ Nome, email, telefone, assunto, mensagem obrigatórios
- ✅ Email válido
- ✅ Assunto com mínimo 3 caracteres
- ✅ Mensagem com mínimo 10 caracteres

---

## 🔄 Fluxo de Dados

```
Formulário (Frontend)
    ↓
Validação Cliente
    ↓
submitForm Server Function
    ↓
Validação Server (Zod)
    ↓
Salvar no Supabase (se aplicável)
    ↓
Enviar Email via Resend
    ↓
Retornar mensagem de sucesso
    ↓
Toast de confirmação ao usuário
```

---

## 🚀 Deployment na Vercel

1. **Push para GitHub** com as alterações
2. **Vercel detecta automaticamente** e faz deploy
3. **Configurar variáveis de ambiente:**
   - Acesse Vercel Dashboard
   - Projeto > Settings > Environment Variables
   - Adicione `RESEND_API_KEY` e `FROM_EMAIL`
4. **Redeploy** para aplicar as variáveis
5. **Testar em produção** com os emails reais

---

## 📝 Exemplo de Email Recebido

```
Subject: [GS] Nova Proposta - João Silva

De: GS <noreply@gsservicos.com.br>
Para: eliahu@gsservicos.com.br

---

Nova Proposta Recebida

Data: 01/06/2026 14:30:45
Página: Solicitar Proposta

---

Nome: João Silva
Empresa: Silva Condomínios
E-mail: joao@silva.com.br
Telefone: (11) 98765-4321
CEP: 01234-567
Cidade: São Paulo
Estado: SP
Endereço: Rua das Flores, 123
Serviços: Portaria, Limpeza, Zeladoria
Necessidade: Temos um condomínio de 50 unidades...
Principal Desafio: Falta de funcionários
```

---

## 🐛 Troubleshooting

### Email não está sendo enviado
1. Verifique se `RESEND_API_KEY` está configurada na Vercel
2. Confirme que a API key é válida em https://resend.com
3. Verifique os logs da Vercel para erros

### Email indo para spam
1. Configure SPF/DKIM em https://resend.com/domains
2. Verifique o domínio de envio
3. Use o domínio correto na configuração

### Erro "API key not found"
- Adicione `RESEND_API_KEY` às variáveis de ambiente
- Redeploy a aplicação
- Aguarde alguns minutos para a mudança ser aplicada

---

## 📞 Suporte

Para dúvidas sobre:
- **Resend**: https://resend.com/docs
- **Zod validation**: https://zod.dev
- **Vercel Env Vars**: https://vercel.com/docs/environment-variables


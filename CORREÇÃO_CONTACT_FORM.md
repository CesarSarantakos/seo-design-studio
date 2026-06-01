# Correção do Sistema de Envio de Email

## Problema Identificado

**Arquivo problemático:** `src/components/site/ContactForm.tsx`

O erro `invalid_type, expected object, received undefined` ocorria porque:
1. O schema `contactSchema` esperava um campo `assunto` obrigatório
2. O `ContactForm.tsx` removeu o campo assunto do formulário visual, mas continuava tentando enviá-lo
3. Isso causava descompasso entre os dados enviados e os esperados pelo schema

## Correções Implementadas

### 1. Server Function - `src/lib/api/forms.functions.ts`

**Schema atualizado (`contactSchema`):**
- Removido campo `assunto` (não era necessário)
- Mantidos campos obrigatórios: `nome`, `email`, `telefone`, `mensagem`
- Campo opcional: `empresa`
- Campo requerido para contexto: `origem` (contato|lead|outro)

**Tipagem:**
- Adicionado tipo explícito `createServerFn<any, ContactResponse>`
- Response type: `{ success: boolean; message: string }`

**Validação com Zod:**
```typescript
const contactSchema = z.object({
  nome: z.string().trim().min(1, "Nome é obrigatório").max(150),
  email: z.string().trim().email("Email inválido").max(255),
  telefone: z.string().trim().min(6, "Telefone inválido").max(30),
  empresa: z.string().max(150).optional().default(""),
  mensagem: z.string().trim().min(10, "Mensagem deve ter pelo menos 10 caracteres").max(5000),
  origem: z.enum(["contato", "lead", "outro"]).default("contato"),
});
```

**Envio de Email:**
- Usa `RESEND_API_KEY` e `FROM_EMAIL` de variáveis de ambiente
- Envia para `eliahu@gsservicos.com.br`

### 2. Frontend - `src/components/site/ContactForm.tsx`

**Mudanças:**
- Removido campo `assunto` do estado do formulário
- Atualizado `handleSubmit` para enviar apenas campos esperados
- Adicionados logs `[v0]` para debug
- Payload agora inclui explicitamente: `nome`, `email`, `telefone`, `empresa`, `mensagem`, `origem`

**Fluxo:**
1. Frontend valida campos obrigatórios
2. Envia payload válido para server function
3. Server function valida com Zod
4. Envia email via Resend
5. Retorna resposta com mensagem de sucesso/erro

### 3. Variáveis de Ambiente

Já configuradas em `.env`:
```
RESEND_API_KEY=re_L3azz4d9_PA5A3k7qH9niKktSk1AyUFy3
FROM_EMAIL=noreply@gsservicos.com.br
```

## Fluxo de Erro Tratado

1. **Campo vazio** → Frontend mostra toast de erro
2. **Validação Zod falha** → Server function lança erro com mensagem
3. **Email falha** → Catch block trata erro e retorna mensagem
4. **Sucesso** → Toast de sucesso e reset do formulário

## Debug

Adicione estes logs no browser console (F12) para debug:
- `[v0] ContactForm submit started`
- `[v0] ContactForm submitting payload`
- `[v0] submitContact validator received`
- `[v0] submitContact validation passed`
- `[v0] Sending contact email`

## Teste

1. Preencha o formulário com dados válidos
2. Clique em "Enviar Mensagem"
3. Verifique no console os logs `[v0]`
4. Verifique se o email foi recebido em `eliahu@gsservicos.com.br`

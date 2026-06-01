/**
 * Test file for proposal form submission
 * Run with: npx ts-node src/lib/api/forms.test.ts
 */

import { submitProposal } from "./forms.functions";

const testData = {
  servicos: ["Portaria 24h", "Auxiliar de Limpeza"],
  cep: "01310-100",
  cidade: "São Paulo",
  estado: "SP",
  endereco: "Av. Paulista, 1000",
  nome: "João Silva",
  empresa: "Condomínio Test",
  email: "joao@test.com",
  telefone: "(11) 98765-4321",
  necessidade: "Precisamos de portaria 24h e limpeza diurna",
  desafio: "empresa-sem-suporte",
};

async function runTests() {
  console.log("🧪 Iniciando testes do formulário de proposta\n");

  // Test 1: Valid data
  console.log("Test 1: Enviando dados válidos...");
  try {
    const result = await submitProposal.handler({ data: testData });
    console.log("✅ Sucesso:", result);
  } catch (error) {
    console.error("❌ Erro:", error instanceof Error ? error.message : error);
  }

  // Test 2: Missing email
  console.log("\nTest 2: Enviando sem email (deve falhar)...");
  try {
    const invalidData = { ...testData, email: "" };
    const result = await submitProposal.handler({ data: invalidData });
    console.log("❌ Deveria ter falhado:", result);
  } catch (error) {
    console.log("✅ Falhou como esperado:", error instanceof Error ? error.message : error);
  }

  // Test 3: Invalid email format
  console.log("\nTest 3: Enviando com email inválido (deve falhar)...");
  try {
    const invalidData = { ...testData, email: "not-an-email" };
    const result = await submitProposal.handler({ data: invalidData });
    console.log("❌ Deveria ter falhado:", result);
  } catch (error) {
    console.log("✅ Falhou como esperado:", error instanceof Error ? error.message : error);
  }

  // Test 4: Missing services
  console.log("\nTest 4: Enviando sem serviços (deve falhar)...");
  try {
    const invalidData = { ...testData, servicos: [] };
    const result = await submitProposal.handler({ data: invalidData });
    console.log("❌ Deveria ter falhado:", result);
  } catch (error) {
    console.log("✅ Falhou como esperado:", error instanceof Error ? error.message : error);
  }

  // Test 5: Missing required name
  console.log("\nTest 5: Enviando sem nome (deve falhar)...");
  try {
    const invalidData = { ...testData, nome: "" };
    const result = await submitProposal.handler({ data: invalidData });
    console.log("❌ Deveria ter falhado:", result);
  } catch (error) {
    console.log("✅ Falhou como esperado:", error instanceof Error ? error.message : error);
  }

  console.log("\n✅ Testes concluídos");
}

// Run tests
runTests().catch(console.error);

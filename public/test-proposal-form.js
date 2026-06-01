/**
 * Browser-based test script for proposal form
 * Paste this in the browser console while on /solicitar-proposta page
 */

(async () => {
  console.log("%c🧪 Testando Formulário de Orçamento", "color: blue; font-size: 16px; font-weight: bold");
  
  // Simulate form data
  const testPayload = {
    servicos: ["Portaria 24h", "Auxiliar de Limpeza"],
    cep: "01310-100",
    cidade: "São Paulo",
    estado: "SP",
    endereco: "Av. Paulista, 1000",
    nome: "Teste Silva",
    empresa: "Condomínio Teste",
    email: "teste@example.com",
    telefone: "(11) 98765-4321",
    necessidade: "Precisamos de portaria 24h e limpeza diurna. Condomínio com 2 torres.",
    desafio: "empresa-sem-suporte",
  };

  console.log("%cPayload de teste:", "color: green; font-weight: bold");
  console.log(testPayload);

  try {
    console.log("%cEnviando para servidor...", "color: orange; font-weight: bold");
    
    // Fetch the server function
    const response = await fetch(window.location.origin + "/_serverFn/submitProposal", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(testPayload),
    });

    const result = await response.json();
    
    if (response.ok) {
      console.log("%c✅ Sucesso! Resposta do servidor:", "color: green; font-weight: bold");
      console.log(result);
    } else {
      console.error("%c❌ Erro HTTP " + response.status, "color: red; font-weight: bold");
      console.log(result);
    }
  } catch (error) {
    console.error("%c❌ Erro na requisição:", "color: red; font-weight: bold");
    console.error(error);
  }
})();

console.log("%c📝 Instruções:", "color: purple; font-weight: bold");
console.log("Este script testa o envio direto da API");
console.log("Abra o console (F12) na página /solicitar-proposta");
console.log("Cole este código e execute para testar");

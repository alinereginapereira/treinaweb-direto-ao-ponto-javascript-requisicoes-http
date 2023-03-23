// recursos
// Isto define o recurso que você deseja buscar. Isto pode ser:

// configurações
// Um objeto contendo quaisquer configurações
// customizadas que você deseja aplicar à solicitação

// fetch(resource, init);

// BaseUrl = http://localhost:3002
// Endpoint = /api/alunos
// Query ou Parans = qualquer coisa após p "?" "/alunos?id=123&nome=ariel"


fetch("http://localhost:3002/api/alunos?", { // recursos
    method: "GET", // O método da requisição
    headers: { 'Content-Type': 'application/json' }, // cabeçalho da requisição
    body: JSON.stringify(novosDadosAluno), // corpo da requisição
})
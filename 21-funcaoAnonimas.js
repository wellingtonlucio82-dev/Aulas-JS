// Funções Anonimas
// São funções sem nome, geralmente atribuídas a variáveis ou usadas como argumentos para outras funções.

//Exemplo 1: Atribuição de uma função anônima a uma variável
const saudacao = function (nome) {
  return `Olá, ${nome}!`;
};

console.log(saudacao("Wellington")); // Saída: Olá, Wellington!

//Exemplo 2: Passando uma função anônima como argumento para outra função
setTimeout(function () {
  console.log("Esta mensagem será exibida após 2 segundos.");
}, 2000);

//Escopo em jávaScript
//O escopo é o contexto onde as variáveis e funções são acessíveis. Existem dois tipos principais de escopo: global e local.
// Escopo Global: Variáveis e funções declaradas no escopo global estão acessíveis em qualquer parte do código. Elas são criadas fora de qualquer função ou bloco.

// Escopo Global
let escopoGlobal = "Eu sou uma variável global";

function exemploEscopoGlobal() {
  let escopolocal = "Eu sou uma variavel local";
  console.log(escopoGlobal); // Acessível dentro da função
}

mostrarEscopoGlobal(); // Chama a função para mostrar o escopo global
console.log(escopolocal); // Erro: variavel não acessovel fora da função
console.log("escopoGlobal"); // Acessivel fora da função

// Estrutura de repetição for of é utilizada para iterar sobre elementos de um array
// ou objetos iteráveis, como strings. Ela é uma forma mais simples e legível de percorrer o
// s elementos, sem a necessidade de usar índices.

// Exemplo de uso do for ... of com um array
const listaDeEmails = [
  "erllingtonlucio@gmail.com",
  "usuario2@example.com",
  "usuario3@example.com",
];
for (let email of listaDeEmails) {
  console.log(`Enviando email para: ${email}`);
}

// Exemplo de uso do for..of com uma string
const nome = "wellington lucio";
for (let char of nome) {
  console.log(char);
}

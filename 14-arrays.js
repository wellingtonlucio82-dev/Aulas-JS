// arrays são objetos que armazenas lista de valores em uma unica variavel

// Declarando um array
let frutas = ["maçã", "banana", "laranja"];

// Acessando elementos do array
console.log(frutas[2]);

//Adicionando um elemento ao final do array
frutas.push("Uva");
console.log(frutas);

//removendo o último elemento do arrays
let ultimaFruta = frutas.pop();
console.log(ultimaFruta);
console.log(frutas);

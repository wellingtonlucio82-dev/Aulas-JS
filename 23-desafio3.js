//Exercicio 1

function verificarPar(numero) {
  return numero % 2 === 0;
}
console.log(verificarPar(4));
console.log(verificarPar(7));

//Exercício 2

function calcularMedia(numeros) {
  if (numeros.length === 0) {
    return 0;
  }
  let soma = 0;
  for (let i = 0; i < numeros.length; i++) {
    soma = soma + numeros[i];
  }
  let media = soma / numeros.length;
  return media;
}
let média1 = [10, 20, 30];
let média2 = [5, 7, 9, 11];
console.log(calcularMedia(média1));
console.log(calcularMedia(média2));

//Exercício 3

function maiusculo(texto) {
  return texto.toUpperCase();
}
console.log(maiusculo("Exercício Senac"));

//Exercício 4

function verificarPrimo(numero) {
  if (numero <= 1) {
    return false;
  }

  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  return true;
}
console.log(verificarPrimo(7)); // true
console.log(verificarPrimo(10)); // false

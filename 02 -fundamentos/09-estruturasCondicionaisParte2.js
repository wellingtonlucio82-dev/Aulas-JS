//Estruturas condicionais - Parte 2
//Switch case: é uma estrutura de controle de fluxo que permite executar diferentes blocos de código com base no valor de uma expressão.
// Ele é útil quando você tem várias condições para verificar e deseja evitar o uso excessivo de if-else.

let fruta = "Maçã";

switch (fruta) {
  case "Maçã":
    console.log("O valor da maça são R$2,00");
    break;
  case "Banana":
    console.log("O valor da banana são R$1,50");
    break;
  case "Laranja":
    console.log("O valor da laranja são R$1,00");
    break;
  default:
    console.log("Fruta não encontrada");
}

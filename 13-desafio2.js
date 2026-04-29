//Desafio2 - Crie um programa que receba um número e imprima o dia da semana correspondente ao número de 1 a 7.
let diaSemana = Math.floor(Math.random() * 7);
let nomeDia;

switch (diaSemana) {
  case 0:
    nomeDia = "Hoje é Domingo";
    break;
  case 1:
    nomeDia = " Hoje é Segunda-feira";
    break;
  case 2:
    nomeDia = " Hoje é Terça-feira";
    break;
  case 3:
    nomeDia = " Hoje é dia quarta-feira";
    break;
  case 4:
    nomeDia = " Hoje é dia Quinta-feira";
    break;
  case 5:
    nomeDia = " Hoje é Sexta-feira";
    break;
  case 6:
    nomeDia = " Hoje é Sábado";
    break;
  default:
    nomeDia = " Numero invalido, não existe mais dia da semana";
}
console.log(nomeDia);

let num = 10;
if (num >= 10 && num <= 20) {
  console.log("o numero está entre 10 e 20");
} else if (num === 5) {
  console.log("Seu numero é igual a 5");
} else {
  console.log("seu numero é nada");
}

//desafio 03
let nome = "wellington";
let sobreNome = "Lucio";

if (nome === sobreNome) {
  console.log("Os nomes são iguais");
} else {
  console.log("Os nomes são diferentes");
}

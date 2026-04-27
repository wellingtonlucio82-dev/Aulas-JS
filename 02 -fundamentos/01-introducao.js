function soma(a, b) {
  //A função para somar dois números
  return a + b; //  e retorna a soma dos dois números
}

const numero1 = 5; //Declaração de uma variavel para armazenar o primeiro numero
const numero2 = 10; //Declaração de uma variavel para armazenar o segundo numero

const resultado = soma(numero1, numero2); //essa linha chama a função soma, passando numero1 e numero2 como argumentos, e armazena o resultado na variável resultado.
console.log(`A soma de ${numero1} e ${numero2} são ${resultado}.`); // imprime no console a mensagem com o resultado da soma, utilizando template para formatar a string.

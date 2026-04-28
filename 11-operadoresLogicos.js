//operadores Lógicos

//&& -> AND -> (E lógico): retorna true se ambos os operandos forem verdadeiros
//|| -> OR -> (OU lógico): retorna true se pelo menos um dos operandos for verdadeiro
//! -> NOT -> (NÃO lógico): inverte o valor lógico do operando

//Exemplo do operador E (&&)
let x = 5;
let y = 10;

if (x > 0 && y > 0) {
  console.log("Ambos os x e y são maiores que zero.");
} else {
  console.log("Pelo menos um dos valores é falso.");
}
//Exemplo do operador OU (||)
let a = -3;
let b = 7;

if (a > 0 || b > 0) {
  console.log("Pelo menos um dos valores é maior que zero.");
} else {
  console.log("Nenhum dos valores é maior que zero.");
}
//Exemplo do operador NÃO Lógico (!)
let souDesenvolvedor = true;

if (!souDesenvolvedor) {
  console.log(" Eu não sou um desenvolvedor.");
} else {
  console.log("Eu sou um desenvolvedor.");
}

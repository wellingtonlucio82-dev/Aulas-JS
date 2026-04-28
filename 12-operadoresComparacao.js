// Operadores Lògicos de comparação
//Em JavaScript, os operadores de comparação são usados para comparar
//  valores e retornar um valor booleano (true ou false) com base na comparação.
//  Aqui estão os principais operadores de comparação:

//1. Igual a (==): Retorna true se os operandos forem iguais, após realizar coerção de tipo se necessário.
//2. Estritamente igual a (===): Retorna true se os operandos forem iguais e do mesmo tipo, sem realizar coerção de tipo.
//3. Diferente de (!=): Retorna true se os operandos não forem iguais, após realizar coerção de tipo se necessário.
//4. Estritamente diferente de (!==): Retorna true se os operandos não forem iguais ou não forem do mesmo tipo, sem realizar coerção de tipo.
//5. Maior que (>): Retorna true se o operando da esquerda for maior que o operando da direita.
//6. Menor que (<): Verifica se o valor à esquerda é menor que o operando da direita.
//7. Maior ou igual a (>=): verifica se o valor à esquerda é maior ou igual ao operando da direita.
//8. Menor ou igual a (<=): Verifica se valor à esquerda é menor ou igual ao operando da direita.

//igualdade (==)
console.log("Igual (==)");
console.log(5 == "5"); // true, porque realiza coerção de tipo
console.log(5 == 5); //tree
console.log(5 == 10); // false

// Estritamento Igual (==)
console.log(" Estritamente igual (===)");
console.log(5 === "5");
console.log(5 === 5);
console.log(5 === 10);

// Desigualdade (!=)
console.log("Desigualdade (!=)");
console.log(5 != "5");
console.log(5 != 5);
console.log(5 != 10);

// Estritamento Desigual (!==)
console.log(" Estritamente Desigual (!==)");
console.log(5 !== "5");
console.log(5 !== 5);
console.log(5 !== 10);

// Maior que (>)
console.log("Maior que (>)");
console.log(10 > 5);
console.log(5 > 10);
console.log(5 > 5);

// Menor que (<)
console.log("Menor que (<)");
console.log(10 < 5);
console.log(5 < 10);
console.log(5 < 5);

// Maior ou igual que (>=)
console.log("Maior ou igual que (>=)");
console.log(10 >= 5);
console.log(5 >= 10);
console.log(5 >= 5);

// Maior ou igual que (>=)
console.log("Menor ou igual que (<=)");
console.log(10 <= 5);
console.log(5 <= 10);
console.log(5 <= 5);

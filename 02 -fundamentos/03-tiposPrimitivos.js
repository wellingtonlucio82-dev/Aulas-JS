// Tipos primitivos

// String
// Number
// Boolean
// Null
// Undefined
// Symbol

// string: representa uma seguência de caracteres
let nome1 = "Wellington";
let nome2 = "Nubia";
let nome3 = "Fernanda";
let nome4 = "Lavinia";

// number:representa números , tanto inteiros quanto decimais
let idade = 30;
let altura = 1.75;

// Boolean: representa um valor lógico, que poder ser
// verdadeiro (true) ou falso (false)
let isStudent = true;
let isMarried = false;

let eEstudante = true;
let eCasado = false;

// Undefined: representa uma variável que foi declarada,
// mas ainda não foi atribuída um valor
let endereco;
let telefone;
console.log(endereco); // undefined

// Null: representa a ausência intencional de um valor
let salario = null;

// Symbol: representa um valor único e imutável, geralmente usado como identificador
let id = Symbol("id");
let id2 = Symbol("id");

console.log(nome);
console.log(nome2);
console.log(nome3);
console.log(nome4);
console.log(idade);
console.log(altura);
console.log(isStudent);
console.log(isMarried);
console.log(eEstudante);
console.log(eCasado);
console.log(salario);
console.log(id);
console.log(id2);
console.log(id === id2); // false, pois cada símbolo é único

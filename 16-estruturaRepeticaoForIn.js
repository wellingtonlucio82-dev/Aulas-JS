// Estrurtura de repetição - for in

// for in - lê os indices ou chaves do objeto

const pessoa = {
  nome: "Wellington",
  idade: 28,
  profissao: "tecnico",
};

for (const atributo in pessoa) {
  console.log("O atributo " + atributo + " = " + pessoa[atributo]);
}

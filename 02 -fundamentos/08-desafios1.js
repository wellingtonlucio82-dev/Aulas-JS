//desafio 01
let pessoa = "Wellington";
let idade = 28;
console.log(pessoa);
console.log(idade);

//desafio 02
//tipagem dinamica
let saudação = "Boa tarde";
saudação = 15;
console.log(saudação);

//desafio 03
//objetos e Manipução de Objetos:
let pessoaObjeto = {
  nome: "Wellington",
  idade: 28,
};
console.log(pessoaObjeto);
console.log(pessoaObjeto.nome);
console.log(pessoaObjeto.idade);
console.log(pessoaObjeto.profissao);

//desafio 04
//obejetos e manipulação de objetos (Parte 2):
pessoaObjeto.hobies = ["Futebol", "Música", "jogos online"];
console.log(pessoaObjeto);
console.log(pessoaObjeto.hobies);

//desafio 05
let media = 6;
if (media >= 6 && media <= 10) {
  console.log("o aluno esta aprovado.");
} else if (media >= 0 && media < 6) {
  console.log("o aluno esta reprovado.");
}

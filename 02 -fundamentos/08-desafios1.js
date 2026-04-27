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
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.profissao);

//desafio 04
//obejetos e manipulação de objetos (Parte 2):
pessoa.hobies = ["Programação", "Música", "Esportes"];
console.log(pessoa);
console.log(pessoa.hobies);

//desafio 05
let media = 6;
if (média >= 6 && média <= 10) {
  console.log("o aluno esta aprovado.");
} else if (média >= 0 && média < 6) {
  console.log("o aluno esta reprovado.");
}

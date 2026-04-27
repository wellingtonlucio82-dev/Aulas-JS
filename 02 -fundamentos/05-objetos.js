// Objetos são coleções onde cada propriedades, onde cada propriedade é uma assciação entre um nome ( chav e um valor
// eles são usados para armazenar e organizar dados relacionados
//criando um objeto
let pessoa = {
  nome: "Wellington",
  idade: 30,
  Profissão: "Desenvolvedor",
  taTrabalhando: true,
  saudacao: function () {
    console.log("Olá, meu nome é " + this.nome);
  },
};

//Acessando propriedade
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.Profissão);
console.log(pessoa.taTrabalhando);
console.log(pessoa);

pessoa.saudacao(); // Chama o método "saudacao" do objeto "pessoa"

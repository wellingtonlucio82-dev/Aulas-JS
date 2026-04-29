//Desafio 01 Array

const frutas = ["jaca ", "manga", "uva", "maçã", "pera"];
console.log("frutas.length");

//Desafio 02 for

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

//Desafio 03 for...in

let usuarios = {
  nome: "Wellington",
  email: "wellington@example.com",
};
for (let chave in usuarios) {
  console.log(chave + ": " + usuarios[chave]);
}

// Desafio 04 for... of
for (let fruta of frutas) {
  console.log(fruta);
}

//Desafio 05
function encontarFruta(fruta) {
  for (let i = 0; i < frutas.length; i++) {
    if (frutas[i] === fruta) {
      return "Fruta encontrada";
    }
  }
  return "Fruta não encontrada";
}
console.log(encontarFruta("banana"));
console.log(encontrarFruta("coco"));

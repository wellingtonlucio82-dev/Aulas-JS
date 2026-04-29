// Estruturas de Repetição 1
//for

// Inicialização; Condição de parada; Incremento/Decremento
for (let i = 0; i < 100; i++) {
  console.log("Executando o for: " + i);
}

const listaDeEmails = [
  "marciocoutinho@gmail.com,",
  "Wellingtonlucio@gmail.com",
  "senac@gmail.com",
];

for (let i = 0; i < listaDeEmails.length; i++) {
  console("Enviando email para: " + listaDeEmails[i]);
}

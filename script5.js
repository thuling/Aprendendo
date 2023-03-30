// function livro() {
//   const nome = "verity";
//   const ano = 2018;
//   const autor = "Colleen Hoover";
//   console.log(nome.toUpperCase());
//   console.log(2022 - ano)
//   console.log(nome + ' por ' + autor)
// }

// livro();

function livro(nome, ano, autor) {
  const nomeMaior = nome.toUpperCase();
  const totalAnos = 2022 - ano;
  const frase = nome + " por " + autor;
  const objeto = {
    nome: nomeMaior,
    totalAnos,
    frase,
  };
  return objeto;
}

const livro1 = livro("Verity", 2018, "Colleen Hoover");
console.log(livro1.frase)

const botao = document.querySelector("button");
console.log(Boolean(botao));

function somar() {
  const div = document.querySelector("div");
  const total = +div.innerText + 1;
  if (total < 10) {
    div.innerText = total;
  } else {
    console.log("Não é possivel adicionar mais");
  }
}

if (botao) {
  botao.addEventListener("click", somar);
}

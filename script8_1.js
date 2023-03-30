const lista = ["JavaScript", "HTML", "CSS"];
const body = document.querySelector("body");

function adicionarBody(item) {
  body.innerHTML += "<li>" + item + "</li>"
}

lista.forEach(adicionarBody);

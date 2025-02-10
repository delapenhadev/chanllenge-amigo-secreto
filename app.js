//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

let lista = document.querySelector("input");
let result = document.querySelector("#resultado");

function adicionarAmigo(){
  let nome = lista.value;
  if (nome){
    amigos.push(nome);
    result.innerHTML = amigos.join("<br>");
    lista.value = "";
  }else{
    alert("Por favor insirar um valor");
  }
  
}









//Removendo elementos repetidos

const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const meuSet = new Set(nomes);
const nomesAtualizados = [...meuSet]; // transformando o set em uma lista.

console.log(nomesAtualizados);

// node Set.js

const numeros = [1, 2, 3, 3, 4, 5, 5, 6];

const numerosAtualizados = new Set(numeros)

console.log(numerosAtualizados);
const notas = [10, 9.5, 8, 7, 6];

const notasAtualizadas = notas.map((nota) => {
    return nota + 1 >= 10? 10 : nota +1;
});

console.log(notasAtualizadas);

// node map.js

const numeros = [1, 2, 3, 4, 5];
const numerosMultiplicados = numeros.map((numeros) => {
    return numeros * 2;
});

console.log(numerosMultiplicados);

//Metodo Map não altera o array original, ele cria um novo array.
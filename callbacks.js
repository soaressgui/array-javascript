const nomes = ["Guilherme", "Neusa", "Marta"];

// nomes.forEach(function(nome){
//     console.log(nome);
// })



// // utilizando arrow function

// const listadeNomes = ["Julia", "Camila", "Jose"];

// listadeNomes.forEach((lista) => {
//     console.log(lista);
// })

function imprimeNome(nome) {
    console.log(nome)
}

nomes.forEach(imprimeNome);
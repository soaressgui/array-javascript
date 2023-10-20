// Desafio 7: Lista com 2 dimensões
// Foram fornecidas duas listas para nós. A primeira contém os nomes de 
// quatro estudantes e a segunda possui suas respectivas médias:

// 'João', 'Juliana', 'Caio', 'Ana'
// 10, 8, 7.5, 9
// Nosso objetivo é criar uma lista que contenha essas duas listas.
//  Já adiantando: é possível uma lista conter outras listas. 
//  A seguir, vamos aprender como lidar com esse tipo de dado mais complexo.

//Lista Ext. || Lista interna

//     |->0  ||    0        1        2       3
const alunos = ["João", "Juliana", "Ana", "Caio"];
//     |->1  ||  0  1   2   3
const medias = [10, 8, 7.5, 9];
//           


const listaDeAlunosEMedias = [alunos, medias];

console.log(`A aluna da posição 1 da lista de alunos é ${listaDeAlunosEMedias[0][1]}`);
//Resultado = A aluna da posição 1 da lista de alunos é Juliana


//Primeiro, informamos a posição que queremos acessar da lista mais externa e depois
//a posição que queremos acessar da lista mais interna

console.log(`A nota da posição 1 da lista de medias é ${listaDeAlunosEMedias[1][1]}`);
//Resultado = A nota da posição 1 da lista de medias é 8

//Exercicio:

const nomes = ["Ana", "Juliana", "Leonardo"];
const idades = [30, 35, 28];
const faculdade = [false, true, true];

const funcionarios = [nomes, idades, faculdade];

console.log(`O nome da primeira aluna é ${funcionarios[0][0]} a idade dela é
 ${funcionarios[1][0]} e a situação da faculdade dela é: ${funcionarios[2][0]}`)

//  O nome da primeira aluna é Ana 
// idade dela é 30
// 30 e a situação da faculdade dela é: false

// node lista-duas-dimensoes.js
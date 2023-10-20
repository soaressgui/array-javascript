//Desafio: Haverá uma palestra sobre padrões de projetos para estudantes das salas
// de JavaScript e Python. Nossa missão é juntar ambas as salas em uma única lista
// que exiba o nome de todas as pessoas.

const salaJS = ["Evaldo", "Camis", "Mari"];
const salaPython = ["Ju", "Leo", "Raquel"];


//          |-> variavel que vai guardar o NOVO array Unificado, pois ele não altera o original.
const salasUnificadas = salaJS.concat(salaPython);
//                                |-> Método utilizado para concatenar arrays. 

console.log(salasUnificadas)
//Resultado = [ 'Evaldo', 'Camis', 'Mari', 'Ju', 'Leo', 'Raquel' ]



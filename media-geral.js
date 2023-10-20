const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasDaSala) {
  const somaDasNotas = notasDaSala.reduce((acumulador, nota) => {
     return acumulador + nota;
    },0);

  const media = somaDasNotas / notasDaSala.length;

  return media;
}

console.log(`A média da sala de JavaScript é ${calculaMedia(salaJS)}`);
console.log(`A média da sala de Java é ${calculaMedia(salaJava)}`);
console.log(`A média da sala de Python é ${calculaMedia(salaPython)}`);

/////////////////////////////////////////////////////////////////////////////////////

const numeros = [43, 50, 65, 12];

function operacaoNumerica(acc, atual) {
    return atual + acc
   }
   
   const soma = numeros.reduce(operacaoNumerica, 0);


   //O reduce() roda o loop no array “por baixo dos panos”, executando para cada elemento
   // a instrução passada na função operacaoNumerica.

// node media-geral.js
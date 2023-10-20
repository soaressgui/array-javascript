const notas = [7, 7, 8, 9];

//                   |-> essas reticências se chamam "spread operator", devemos usa-las par que o array original não seja alterado.  
const novasNotas = [...notas, 5];
novasNotas.push(10); //      <^ podemos usar o push ou simplesmente colocar o numero após "notas" conforme mostrado acima. 

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);

// node copiando-array.js
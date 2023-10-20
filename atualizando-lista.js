const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

// splice() - ALTERA O ARRAY ORIGINAL e permite até 3 parametros
// 2 deles excluindo  os dados e 1 para adicionar.
// exemplo abaixo

nomes.splice(1, 2, "Rodrigo") 

//console.log(nomes);

//Resultado = Resultado = [ 'João', 'Rodrigo', 'Lara', 'Marjorie', 'Leo' ]


// Tambem posso fazer utilizando o metodo tradicional:

// nomes.push("Rodrigo") - Dessa forma, o "Rodrigo" seria adicionado...
//ao final da lista

//----------------------------------------------------------------------------------


animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

animaisDoAquario.splice(1,0,'🐠')
animaisDoAquario.splice(3,2,'🐟')

console.log(animaisDoAquario)

// Resultado = [ '🐋', '🐠', '🐙', '🐟' ]
const nomes = ['maria', 'joao', 'eduardo', 'gavriel', 'julia'];

//nomes.splice(indice, delete, elem1, elem2, elem3);
//pop
const removidos = nomes.splice(-1, 1);
console.log(nomes, removidos);
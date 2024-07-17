/*
object.values
object.entries
object.assign(des, any)
object.getOwnPropertyDescriptor(o, 'prop')
...(spread)

já vimos

object.keys (retorna as chaves)
object.freeze (congela o objeto)
object.defineproperties (define várias propriedades)
object.defineProperty (define uma propriedade)
*/

















// const produto = { nome: 'caneca', preco: 1.8};
// const outraCoisa = {
//     ...produto,    
//         material:'porcelana'};


// produto.nome = 'luiz otavio';
// outraCoisa.preco = 2.5;
// console.log(produto);
// console.log(outraCoisa);
















// const produto = { nome: 'caneca', preco: 1.8};
// const caneca = Object.assign({}, produto, {material: 'porcelana'});


// caneca.nome = 'avengers';
// caneca.preco = 2.5;
// console.log(produto);
// console.log(caneca);























//  const produto = { nome: 'caneca', preco: 1.8};
//  Object.defineProperty(produto, 'nome', {
// writable:false,
// configurable: false
//  });
// // console.log(Object.getOwnPropertyDescriptor(produto,'nome'));
// produto.preco = 'outra coisa';
// delete produto.preco;
// console.log(produto);